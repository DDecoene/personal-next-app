import { experience } from '@data'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function index(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(experience)
}