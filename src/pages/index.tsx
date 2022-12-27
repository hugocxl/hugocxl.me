import { HomeServer } from '@/backend/modules/home/Home.server'
import { Home } from '@/frontend/modules/home'

export const getStaticProps = HomeServer.getStaticProps
export default Home
