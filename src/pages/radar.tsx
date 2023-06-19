// Components
import { radarServer } from '@/backend/modules/radar'
import { Radar } from '@/frontend/modules/radar'

export const getStaticProps = radarServer.getStaticProps
export default Radar
