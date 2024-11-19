import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const jwksPath = path.join(process.cwd(), 'public', 'jwks.json')
  const jwks = fs.readFileSync(jwksPath, 'utf8')
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(jwks);
}
