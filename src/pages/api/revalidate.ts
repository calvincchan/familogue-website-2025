import { verifySignature } from "@/utils/airtable/verify-signature";
import { siteConfig } from "@/utils/site-config";
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Validate request method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    // Verify request signature
    if (!await verifySignature(req, req.headers["x-airtable-content-mac"] as string || "")) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    for (const locale of siteConfig.locales) {
      // Revalidate home page
      await res.revalidate(locale + '/');

      // Revalidate our services page
      await res.revalidate(locale + '/our-services');
    }

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating', error: (err as Error).message });
  }
}
