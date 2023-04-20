// Components
import { RadarServer } from '@/backend/modules/radar'
import { Radar } from '@/frontend/modules/radar'

export const getStaticProps = RadarServer.getStaticProps
export default Radar
