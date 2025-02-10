import { TProject } from "@/types";
import Image from "next/image";
import Link from 'next/link';

const ProjectCard = ({ project }: { project: TProject }) => {
  const { _id,name, images, projectType , role} = project;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 ease-in-out p-2 border">
    <div className="relative w-full h-56 border rounded-t-lg">
      <Image
        src={images[0]}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
    <div className="px-6 py-4">
      <h2 className="text-2xl font-semibold text-gray-800 hover:text-[#00ccff] transition-colors duration-300 ease-in-out mb-2">{name}</h2>
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full">{role}</span>
        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full">{projectType} Project</span>
      </div>
  
  <Link href={`/projects/${_id}`}>
  <button className="rounded-md text-white px-8 py-3 border border-[#00ccff] bg-gradient-to-r from-[#0A767B] to-[#00A7D6] hover:from-[#05dae6] hover:to-[#0a7391] transition-all duration-300 shadow-xl mt-4">
      View Details
    </button>
    </Link>
    </div>
  </div>
  );
};

export default ProjectCard;
