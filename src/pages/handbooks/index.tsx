import { Handbooks } from '@/frontend/modules/handbooks'
import { handbooksServer } from '@/backend/modules/handbooks'

const { getStaticProps } = handbooksServer

export default Handbooks
export { getStaticProps }
