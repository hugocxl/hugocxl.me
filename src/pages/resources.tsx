import { resourcesServer } from '@/backend/modules/resources'
import { Resources } from '@/frontend/modules/resources'

export const getStaticProps = resourcesServer.getStaticProps
export default Resources
