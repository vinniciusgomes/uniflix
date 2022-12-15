import type { NextApiRequest, NextApiResponse } from "next";

import bannersData from "data/banners.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(bannersData);
}
