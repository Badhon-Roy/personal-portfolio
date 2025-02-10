"use client"
import Image from 'next/image';
import { TProject } from '@/types';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProjectDetailsCard = ({ project }: { project: TProject }) => {
    const { name, images, description, technologiesUsed, teamMembers, projectType, role, liveSite, clientSiteGitHub, serverSiteGitHub } = project;

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 shadow-lg rounded-xl">
            {/* Project Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Swiper Image Carousel */}
                <div className="relative w-full h-[400px]">
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="w-full h-full rounded-lg overflow-hidden"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className="relative w-full h-full">
                                <Image 
                                    src={img} 
                                    alt={`${name} image ${index + 1}`} 
                                    fill 
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">{name}</h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">{description}</p>

                    {/* Tech Stack */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">Technologies Used:</h3>
                        <ul className="flex flex-wrap gap-2 mt-2">
                            {technologiesUsed.frontend.map((tech, index) => (
                                <span key={index} className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-white px-3 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                            {technologiesUsed.backend.map((tech, index) => (
                                <span key={index} className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-white px-3 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                            <span className="bg-yellow-100 dark:bg-yellow-700 text-yellow-700 dark:text-white px-3 py-1 rounded-full text-sm">
                                {technologiesUsed.database}
                            </span>
                            <span className="bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-white px-3 py-1 rounded-full text-sm">
                                {technologiesUsed.authentication}
                            </span>
                        </ul>
                    </div>

                    {/* Project Details */}
                    <div className="mt-6 flex flex-wrap gap-4">
                        {
                            teamMembers > 1 && <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-700 dark:text-white text-sm">{projectType}: {teamMembers} Members</span>
                        }
                        <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-700 dark:text-white text-sm">Type: {projectType}</span>
                        <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-700 dark:text-white text-sm">Role: {role}</span>
                    </div>

                    {/* Links */}
                    <div className="mt-6 flex gap-4">
                        {liveSite && (
                            <a href={liveSite} target="_blank" className="flex items-center gap-2 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
                                <FaExternalLinkAlt /> Live Site
                            </a>
                        )}
                        {clientSiteGitHub && (
                            <a href={clientSiteGitHub} target="_blank" className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg transition">
                                <FaGithub /> Client Code
                            </a>
                        )}
                        {serverSiteGitHub && (
                            <a href={serverSiteGitHub} target="_blank" className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg transition">
                                <FaGithub /> Server Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsCard;
