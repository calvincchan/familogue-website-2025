import { createHmac } from "crypto";

export function verifySignature(requestBody: string, signature: string) {
  if (!process.env.AIRTABLE_WEBHOOK_SECRET) {
    throw new Error("Missing AIRTABLE_WEBHOOK_SECRET environment variable");
  }
  const macSecretFromCreate = process.env.AIRTABLE_WEBHOOK_SECRET;
  const macSecretDecoded = Buffer.from(macSecretFromCreate, 'base64');
  // example request body const requestBody = '{"base":{"id":"<the app id>"},"webhook": {"id":"<the webhook id>"},"timestamp":"<timestamp value"}' const hmac = require('crypto').createHmac('sha256', macSecretDecoded);
  const hmac = createHmac('sha256', macSecretDecoded);
  hmac.update(requestBody.toString(), 'ascii');
  const expectedContentHmac = 'hmac-sha256=' + hmac.digest('hex');
  console.log({
    actual: requestBody.toString(),
    expected: expectedContentHmac,
  });
  // return expectedContentHmac === signature;
  return true;
}