import crypto from "node:crypto";
import fs from "node:fs/promises";

function base64Url(value) {
  const bytes = typeof value === "string" ? Buffer.from(value) : value;
  return bytes.toString("base64url");
}

function requireEnvironment(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Required GitHub Actions secret is missing: ${name}`);
  return value;
}

async function createAccessToken(credentials) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(JSON.stringify({
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/drive",
    aud: credentials.token_uri,
    iat: now,
    exp: now + 3600
  }));
  const unsignedToken = `${header}.${claims}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsignedToken), credentials.private_key);
  const assertion = `${unsignedToken}.${base64Url(signature)}`;

  const response = await fetch(credentials.token_uri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });

  if (!response.ok) throw new Error(`Google authentication failed (${response.status}).`);
  const result = await response.json();
  if (!result.access_token) throw new Error("Google authentication returned no access token.");
  return result.access_token;
}

const credentials = JSON.parse(requireEnvironment("GOOGLE_CREDENTIALS"));
const driveFileId = requireEnvironment("GOOGLE_DRIVE_FILE_ID");
const manifest = JSON.parse(await fs.readFile("manifest.json", "utf8"));
const archivePath = `dist/SideMarks-v${manifest.version}.zip`;
const archive = await fs.readFile(archivePath);
const accessToken = await createAccessToken(credentials);
const endpoint = new URL(`https://www.googleapis.com/upload/drive/v3/files/${encodeURIComponent(driveFileId)}`);
endpoint.searchParams.set("uploadType", "media");
endpoint.searchParams.set("fields", "id,name,modifiedTime,size,md5Checksum");

const response = await fetch(endpoint, {
  method: "PATCH",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/zip"
  },
  body: archive
});

if (!response.ok) {
  const message = await response.text();
  throw new Error(`Google Drive update failed (${response.status}): ${message.slice(0, 500)}`);
}

const updatedFile = await response.json();
if (updatedFile.id !== driveFileId) throw new Error("Google Drive returned an unexpected file ID.");
console.log(`Google Drive file updated: ${updatedFile.name} (${updatedFile.size} bytes)`);
