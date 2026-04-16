import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;

  // Input validation
  if (!path || typeof path !== 'string') {
    return res.status(400).json({ error: 'No path provided' });
  }

  // Path validation: sadece alphanumeric, dash, slash, UUID patterns
  if (!/^[a-zA-Z0-9\-\/]+$/.test(path)) {
    return res.status(400).json({ error: 'Invalid path format' });
  }

  // Maximum length check (prevent abuse)
  if (path.length > 500) {
    return res.status(400).json({ error: 'Path too long' });
  }

  const redirectUrl = `obs://${path}`;
  
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  res.redirect(302, redirectUrl);
}
