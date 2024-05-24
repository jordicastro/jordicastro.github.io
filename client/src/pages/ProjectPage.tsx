import { useParams } from 'react-router-dom'
const ProjectPage = () => {
  const { id } = useParams<{id: string}>()
  return (
    <div>ProjectPage {id}</div>
  )
}

export default ProjectPage