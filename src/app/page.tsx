"use client";
import TypeAnimationStyle from "@/components/shared/TypeAnimation";
import profileImg from "../assets/profile.png";
import Image from "next/image";

const HomePage = () => {

  const skills = [
    { name: "HTML", icon: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png', level: "Expert", percentage: 95 },
    { name: "CSS", icon: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png', level: "Advanced", percentage: 95 },
    { name: "JavaScript", icon: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png', level: "Advanced", percentage: 80 },
    { name: "React", icon: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png', level: "Intermediate", percentage: 95 },
    { name: "Next.js", icon: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png', level: "Intermediate", percentage: 90 },
    { name: "Express", icon: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png', level: "Intermediate", percentage: 100 },
    { name: "Node.js", icon: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png', level: "Intermediate", percentage: 95 },
    { name: "MongoDB", icon: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png', level: "Beginner", percentage: 65 },
    { name: "Mongoose", icon: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png', level: "Beginner", percentage: 95 },
    { name: "TypeScript", icon: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png', level: "Intermediate", percentage: 95 },
  ]
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const levelColors : any = {
    Expert: "bg-green-100 text-green-800",
    Advanced: "bg-blue-100 text-blue-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Beginner: "bg-red-100 text-red-800",
  }
  
  const projects = [
    { id: 1, title: "Vegist - eCommerce Platform", description: "A modern eCommerce platform with product management & authentication.", link: "#", image: "https://badhon-roy-portfolio.surge.sh/assets/vegist_project_5-1W5Wf2Jt.png" },
    { id: 2, title: "Quick Bazaar - Marketplace", description: "A robust online marketplace with smooth user experience.", link: "#", image: "https://badhon-roy-portfolio.surge.sh/assets/vegist_project_5-1W5Wf2Jt.png" },
    { id: 3, title: "Mega Market - Online Bookstore", description: "An online bookstore featuring a vast collection of books & seamless UI.", link: "#", image: "https://badhon-roy-portfolio.surge.sh/assets/vegist_project_5-1W5Wf2Jt.png" },
  ];

  return (
    <div className="my-16 transition-all duration-300">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-6 md:px-12">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">Welcome to my world</p>
          <h1 className="text-[50px] md:text-[60px] font-extrabold leading-tight text-gray-900 dark:text-white">
            Hi, I’m <span className="text-[#029bc0]">Badhon Roy</span>
          </h1>
          <p className="text-[40px] md:text-[50px] font-semibold text-[#029bc0] my-2">
            <TypeAnimationStyle />
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center md:justify-start gap-6">
            <button className="rounded-md text-white px-8 py-3 border border-[#00ccff] bg-gradient-to-r from-[#0A767B] to-[#00A7D6] hover:from-[#05dae6] hover:to-[#0a7391] transition-all duration-300 shadow-xl">
              Hire Me
            </button>
            <button className="rounded-md text-white px-8 py-3 border border-[#00ccff] bg-gradient-to-r from-[#0A767B] to-[#00A7D6] hover:from-[#05dae6] hover:to-[#0a7391] transition-all duration-300 shadow-xl">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full p-2 border-4 border-[#029bc0] bg-white dark:bg-gray-900 shadow-2xl flex items-center justify-center relative overflow-hidden">
            <Image src={profileImg} alt="Profile Image" width={300} height={300} className="rounded-full z-10" />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-12 my-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 text-[#029bc0]">My Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center justify-between bg-gradient-to-r from-[#029bc0] to-[#00A7D6] text-white p-4 rounded-lg shadow-xl transform transition-all hover:scale-105">
            <Image src={skill.icon} alt={skill.name} width={24} height={24} className="mr-3" />
            <span className="text-md font-semibold">{skill.name}</span>
            <span className={`text-xs px-3 py-1 rounded-full ${levelColors[skill.level]}`}>
              {skill.level}
            </span>
          </div>
          <div className="w-full mt-4 bg-gray-600 dark:bg-gray-700 rounded-full h-3">
            <div className={`${levelColors[skill.level]} h-3 rounded-full`} style={{ width: `${skill.percentage}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Featured Projects Section */}
      <div className="mt-16 px-6 md:px-12">
        <h2 className="text-[35px] font-extrabold text-[#029bc0] text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 p-6 shadow-2xl rounded-lg transform transition-all hover:scale-105 hover:shadow-lg">
              <Image src={project.image} alt={project.title} width={400} height={250} className="rounded-md" />
              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{project.description}</p>
              <button className="rounded-md text-white px-8 py-3 border border-[#00ccff] bg-gradient-to-r from-[#0A767B] to-[#00A7D6] hover:from-[#05dae6] hover:to-[#0a7391] transition-all duration-300 shadow-xl mt-2">
              View Project
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
