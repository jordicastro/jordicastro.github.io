import { useParams } from 'react-router-dom'
import data from '../data.json'
import Card from '../components/ProjectCard'
import { CardType } from '../components/ProjectCards'

const ProjectPage = () => {
  const { id } = useParams<{id: string}>()

  // map id to project data
  const project: CardType | null | undefined = id ? data.projects.find(project => (project.id) === parseInt(id)) : null


  return (
    <div className="mt-20" > 
      {project && (project.github ?
        <Card card={project} buttonText="GIT HUB" link={project.github} inProjectPage={true} /> :
        <Card card={project} buttonText="GIT HUB" link={`/projects/${project.id}`} inProjectPage={true} />
      )}
    </div>
  )
}

export default ProjectPage