
import ProjectDetailsCard from "@/components/ui/ProjectDetailsCard";
import { TProject } from "@/types";


export const generateStaticParams = async()=>{
    const res = await fetch('http://localhost:5000/projects')
    const projects = await res.json();
    return projects.slice(0,3).map((project : TProject )=> ({
        id : project._id
    }))
}

export async function generateMetadata({ params } : { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/projects/${id}`)
    const project = await res.json();
    return {
      title: project.name,
      description: project.description
    }
  }

const ProjectDetailsPage = async (
    { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/projects/${id}`)
    const project = await res.json();
    return (
        <div className='my-10'>
            <ProjectDetailsCard project={project} />
        </div>
    );
};

export default ProjectDetailsPage;