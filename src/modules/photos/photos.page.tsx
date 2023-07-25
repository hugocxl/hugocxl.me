// Components
import { Grid, Page, Image } from '@/shared/components'

// Types
import { Metadata } from 'next'

// Constants
import { PHOTOS } from '@/shared/constants'

// Libs
import { instagramClient } from '@/shared/lib'

export const revalidate = 3600
export const metadata: Metadata = {
  title: PHOTOS.title,
  description: PHOTOS.description
}

export async function Photos() {
  const photos = await instagramClient.getMedia()

  return (
    <Page {...PHOTOS}>
      <Grid
        columns={3}
        mdDown={{
          gridTemplateColumns: '1fr 1fr'
        }}
        smDown={{
          gridTemplateColumns: '1fr'
        }}
      >
        {photos.map(photo => (
          <Image key={photo.id} src={photo.media_url} alt={photo.media_url} />
        ))}
      </Grid>
    </Page>
  )
}
