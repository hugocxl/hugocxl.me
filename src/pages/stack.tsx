// Components
import { stackServer } from '@/backend/modules/stack'
import { Stack } from '@/frontend/modules/stack'

export const getStaticProps = stackServer.getStaticProps
export default Stack
