import { fetcher } from '@/shared/lib/fetcher'

const BASE_URL = 'https://graph.instagram.com/v17.0'

export interface Media {
  id: string
  media_type: string
  media_url: string
  username: string
  timestamp: string
}

export const instagramClient = {
  async getId(): Promise<string> {
    const response = await fetcher.get<{ id: string }>(
      `${BASE_URL}/me?fields=id,username&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    )

    return response.id
  },

  async getMediaIds(): Promise<string[]> {
    const id = await this.getId()

    const response = await fetcher.get<{
      media: { data: { id: string }[] }
      id: string
    }>(
      `${BASE_URL}/${id}?fields=media&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    )

    return response.media.data.map(media => media.id)
  },

  async getMedia(): Promise<Media[]> {
    const ids = await this.getMediaIds()

    const medias = await Promise.all(
      ids.map(id =>
        fetcher.get<Media>(
          `${BASE_URL}/${id}?fields=media_type,media_url,username,timestamp&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
        )
      )
    )

    return medias
  }
}
