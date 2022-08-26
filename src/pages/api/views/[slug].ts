// Dependencies
import { prisma } from 'src/lib'

// Types
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString()

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.analytics.upsert({
        where: { slug },
        create: {
          slug
        },
        update: {
          count: {
            increment: 1
          }
        }
      })

      return res.status(200).json({
        total: newOrUpdatedViews.count
      })
    }

    if (req.method === 'GET') {
      const views = await prisma.analytics.findUnique({
        where: {
          slug
        }
      })

      return res.status(200).json({ total: views.count })
    }
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
