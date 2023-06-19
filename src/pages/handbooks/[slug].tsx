import { handbookServer } from '@/backend/modules/handbooks'
import { Handbook } from '@/frontend/modules/handbooks'

const { getStaticProps, getStaticPaths } = handbookServer

export default Handbook
export { getStaticProps, getStaticPaths }
