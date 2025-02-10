import Link from "next/link";
import {FaHome, FaBlog, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg min-h-screen p-6 w-64 rounded-xl flex flex-col">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <SidebarItem href="/dashboard" icon={<FaHome />} label="Home" />
        <SidebarItem href="/dashboard/blogs" icon={<FaBlog />} label="Blogs" />
        <SidebarItem href="/dashboard/projects" icon={<FaProjectDiagram />} label="Projects" />
        <SidebarItem href="/dashboard/messages" icon={<FaEnvelope />} label="Messages" />
      </ul>
    </div>
  );
};

const SidebarItem = ({ href, icon, label } : { href :string, icon : any, label : string }) => {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 text-gray-700 hover:bg-primary hover:text-white"
      >
        <span className="text-lg">{icon}</span>
        <span className="font-medium">{label}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
