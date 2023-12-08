import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(req.body.imageUrl, { responseType: 'arraybuffer' });
    const imageData = Buffer.from(response.data, 'binary').toString('base64');
    const base64Image = `data:image/png;base64,${imageData}`;
    res.json({ imageUrl: base64Image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
}
