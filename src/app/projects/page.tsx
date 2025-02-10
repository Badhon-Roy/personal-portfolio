
import ProjectCard from '@/components/ui/ProjectCard';
import { TProject } from '@/types';


const ProjectsPage = async() => {
    const res = await fetch('http://localhost:5000/projects')
    const projects = await res.json()
    return (
        <div className="px-4 py-12">
            <h2 className="text-3xl font-bold text-center text-[#029bc0] mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project : TProject) => <ProjectCard key={project?._id} project={project}/>)}
            </div>
        </div>
    );
};
export default ProjectsPage;