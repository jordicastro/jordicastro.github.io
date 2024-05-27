import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { CardType } from '../components/Cards'

const ProjectPage = () => {

  const tempProject = {
    title: "",
    logo: "",
    desc: "",
    id: 0
  }

  const { id } = useParams<{id: string}>()
  const [project, setProject] = useState<CardType>(tempProject);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        setProject(data);
        setLoading(false);
      } catch (error) {
        console.log('error fetching project', error);
      }
    }
    fetchProject();
  }, [])

  return (
    <div className="mt-20" > 
      {project.github ?
        <Card card={project} buttonText="GIT HUB" link={project.github} inProjectPage={true} loading={loading} /> :
        <Card card={project} buttonText="GIT HUB" link={`/projects/${project.id}`} inProjectPage={true} loading={loading} />
      }
    </div>
  )
}

export default ProjectPage