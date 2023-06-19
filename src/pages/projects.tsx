// Components
import { projectsServer } from '@/backend/modules/projects'
import { Projects } from '@/frontend/modules/projects'

export const getStaticProps = projectsServer.getStaticProps
export default Projects
