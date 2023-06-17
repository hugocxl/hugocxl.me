// Components
import { ProjectsServer } from '@/backend/modules/projects'
import { Projects } from '@/frontend/modules/projects'

export const getStaticProps = ProjectsServer.getStaticProps
export default Projects
