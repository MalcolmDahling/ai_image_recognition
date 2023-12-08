import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50MB',
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public', 'data.json');

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  data.push({ output: req.body.trainValue, input: req.body.pixelArr });

  fs.writeFileSync(filePath, JSON.stringify(data));

  res.send(data.length);
}
