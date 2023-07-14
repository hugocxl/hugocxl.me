import { Page } from '@/shared/components'

export default function NotFound() {
  return (
    <Page title='Not found' description={'oops'}>
      <p>
        {`It seems you've found something that used to exist, or you spelled something
          wrong. Can you double check that URL?`}
      </p>
    </Page>
  )
}
