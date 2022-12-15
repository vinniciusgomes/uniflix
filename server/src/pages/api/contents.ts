import type { NextApiRequest, NextApiResponse } from "next";

import contentsData from "data/contents.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(contentsData);
}
