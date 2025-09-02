import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Validate request method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  // Validate request origin
  const origin = req.headers.origin;
  console.log(req.headers);
  // if (origin !== process.env.BACKEND_ORIGIN) {
  //   return res.status(403).json({ error: "Forbidden" });
  // }
  try {
    // Revalidate home page
    await res.revalidate('/');

    // Revalidate our services page
    await res.revalidate('/our-services');

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating', error: (err as Error).message });
  }
}
