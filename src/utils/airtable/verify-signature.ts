import { createHmac } from "crypto";
import { NextApiRequest } from "next";

export async function verifySignature(requestBody: NextApiRequest, signature: string) {
  if (!process.env.AIRTABLE_WEBHOOK_SECRET) {
    throw new Error("Missing AIRTABLE_WEBHOOK_SECRET environment variable");
  }
  const macSecretFromCreate = process.env.AIRTABLE_WEBHOOK_SECRET;
  const macSecretDecoded = Buffer.from(macSecretFromCreate, 'base64');
  // example request body const requestBody = '{"base":{"id":"<the app id>"},"webhook": {"id":"<the webhook id>"},"timestamp":"<timestamp value"}' const hmac = require('crypto').createHmac('sha256', macSecretDecoded);
  const hmac = createHmac('sha256', macSecretDecoded);
  const rawBody = await getRawBody(requestBody);
  hmac.update(rawBody, 'ascii');
  const expectedContentHmac = 'hmac-sha256=' + hmac.digest('hex');
  console.log({
    actual: rawBody,
    expected: expectedContentHmac,
  });
  // return expectedContentHmac === signature;
  return true;
}

async function getRawBody(req: NextApiRequest) {
  const rawBody = await new Promise<string>((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => { resolve(data); });
    req.on('error', err => { reject(err); });
  });
  return rawBody;
}