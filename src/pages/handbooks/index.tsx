import { Handbooks } from '@/frontend/modules/handbooks'
import { HandbooksServer } from '@/backend/modules/handbooks'

const { getStaticProps } = HandbooksServer

export default Handbooks
export { getStaticProps }
