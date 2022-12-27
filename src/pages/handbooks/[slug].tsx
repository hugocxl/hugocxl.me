import { HandbookServer } from '@/backend/modules/handbooks'
import { Handbook } from '@/frontend/modules/handbooks'

const { getStaticProps, getStaticPaths } = HandbookServer

export default Handbook
export { getStaticProps, getStaticPaths }
