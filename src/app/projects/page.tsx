import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: "Vegist - eCommerce Platform",
        description: "A modern eCommerce platform with product management & authentication.",
        image: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
        link: "/projects/1",
    },
    {
        id: 2,
        title: "Quick Bazaar - Marketplace",
        description: "A robust online marketplace with smooth user experience.",
        image: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
        link: "/projects/2",
    },
    {
        id: 3,
        title: "Mega Market - Online Bookstore",
        description: "An online bookstore featuring a vast collection of books & seamless UI.",
        image: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
        link: "/projects/3",
    },
];

const ProjectsPage = () => {
    return (
        <div className="px-4 py-12">
            <h2 className="text-3xl font-bold text-center text-[#029bc0] mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
                        <Image
                            src={project?.image}
                            alt={project?.title}
                            width={400}
                            height={250}
                            className="rounded-md"
                        />
                        <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                        <Link href={project.link} className="inline-block mt-4 text-[#029bc0] font-medium hover:underline">View Project
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProjectsPage;