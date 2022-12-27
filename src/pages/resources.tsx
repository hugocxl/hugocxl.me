import { ResourcesServer } from '@/backend/modules/resources/Resources.server'
import { Resources } from '@/frontend/modules/resources'

export const getStaticProps = ResourcesServer.getStaticProps
export default Resources
