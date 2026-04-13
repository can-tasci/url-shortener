import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;

  if (!path || typeof path !== 'string') {
    return res.status(400).json({ error: 'No path provided' });
  }

  const redirectUrl = `obs://${path}`;
  res.redirect(302, redirectUrl);
}
