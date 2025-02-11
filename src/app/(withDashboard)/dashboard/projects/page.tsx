/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { TProject } from "@/types";
import Swal from "sweetalert2";

const Projects = () => {
    const [projects, setProjects] = useState<TProject[]>([]);
    const [editProject, setEditProject] = useState<TProject | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("http://localhost:5000/projects", {
                    cache: 'no-cache'
                });
                const data = await res.json();
                setProjects(data);
            } catch (err) {
                console.error("Error fetching projects:", err);
            }
        };
        fetchProjects();
    }, []);

    const { register, handleSubmit, reset, setValue } = useForm<TProject>();

    // Create Project
    const onSubmit = async (data: TProject) => {
        try {
            const response = await fetch("http://localhost:5000/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire("Success!", "Project added successfully!", "success");
                reset();
                const modal = document.getElementById("add_modal") as HTMLDialogElement;
                if(modal){
                    modal.close()
                }
            } else {
                Swal.fire("Error!", "Failed to add project!", "error");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Open Edit Modal and Set Default Values
    const openEditModal = (project: TProject) => {
        setEditProject(project);
        const modal= document.getElementById("edit_modal") as HTMLDialogElement;
        if(modal){
            modal.showModal()
        }

        // Set form values
        setValue("name", project.name);
        setValue("images", project.images);
        setValue("description", project.description);
        setValue("technologiesUsed", project.technologiesUsed);
        setValue("teamMembers", project.teamMembers);
        setValue("projectType", project.projectType);
        setValue("role", project.role);
        setValue("liveSite", project.liveSite);
        setValue("clientSiteGitHub", project.clientSiteGitHub);
        setValue("serverSiteGitHub", project.serverSiteGitHub);
    };

    // Update Project
    const handleUpdate = async (data: TProject) => {
        if (!editProject) return;

        try {
            const response = await fetch(`http://localhost:5000/projects/${editProject._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire("Success!", "Project updated successfully!", "success");
                const modal = document.getElementById("edit_modal") as HTMLDialogElement;
                if(modal){
                    modal.close();
                }
            } else {
                Swal.fire("Error!", "Failed to update project!", "error");
            }
        } catch (error) {
            console.error("Error updating project:", error);
        }
    };

    // Delete Project
    const handleToDelete = async (id: string | undefined) => {
        try {
            const confirmDelete = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!",
            });

            if (confirmDelete.isConfirmed) {
                const response = await fetch(`http://localhost:5000/projects/${id}`, {
                    method: "DELETE",
                });

                if (response.ok) {
                    Swal.fire("Deleted!", "Your project has been deleted.", "success");
                } else {
                    Swal.fire("Error!", "Something went wrong.", "error");
                }
            }
        } catch (error) {
            console.error("Error deleting project:", error);
            Swal.fire("Error!", "Failed to delete project.", "error");
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Project Management</h2>
            <button
                className="bg-primary text-white p-2 rounded flex items-center gap-2"
                onClick={() =>{
                    const modal = document.getElementById("add_modal") as HTMLDialogElement
                    if(modal){
                        modal.showModal()
                    }
                
                }}
            >
                <FaPlus /> Add Project
            </button>

            {/* Add Project Modal */}
            <dialog id="add_modal" className="modal modal-bottom sm:modal-middle text-white">
                <div className="modal-box">
                    <h3 className="text-xl font-semibold mb-4">Add New Project</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <ProjectFormFields register={register} />
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                            Create Project
                        </button>
                    </form>
                </div>
            </dialog>

            <dialog id="edit_modal" className="modal modal-bottom sm:modal-middle text-white">
                <div className="modal-box">
                    <h3 className="text-xl font-semibold mb-4">Edit Blog</h3>
                    <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
                        <ProjectFormFields register={register} />
                        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
                            Update Blog
                        </button>
                    </form>
                </div>
            </dialog>

            {/* Project Table */}
            <table className="w-full mt-4 border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2">Project Name</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project._id} className="border-t">
                            <td className="p-2">{project.name}</td>
                            <td className="p-2 flex gap-2">
                                <button onClick={() => openEditModal(project)} className="bg-blue-500 text-white p-2 rounded">
                                    <FaEdit />
                                </button>
                                <button onClick={() => handleToDelete(project?._id)} className="bg-red-500 text-white p-2 rounded">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const ProjectFormFields = ({ register }: { register: any }) => (
    <>
         <label className="block font-medium mb-2">Project Name</label>
         <input {...register("name", { required: true })} placeholder="Project Name" className="w-full p-2 border border-gray-300 rounded" />
         <label className="block font-medium mb-2">Image URL</label>
        <input {...register("images.0", { required: true })} placeholder="Image URL" className="w-full p-2 border border-gray-300 rounded" />
        <input {...register("images.1", { required: true })} placeholder="Image URL" className="w-full p-2 border border-gray-300 rounded" />
        <input {...register("images.2", { required: true })} placeholder="Image URL" className="w-full p-2 border border-gray-300 rounded" />
        <input {...register("images.3", { required: true })} placeholder="Image URL" className="w-full p-2 border border-gray-300 rounded" />
        <input {...register("images.4", { required: true })} placeholder="Image URL" className="w-full p-2 border border-gray-300 rounded" />
        <textarea {...register("description", { required: true })} placeholder="Description" className="w-full p-2 border border-gray-300 rounded" rows={3} />
        <input {...register("technologiesUsed.frontend.0", { required: true })} placeholder="Frontend Technology" className="w-full p-2 border border-gray-300 rounded" />
        <input {...register("technologiesUsed.backend.0", { required: true })} placeholder="Backend Technology" className="w-full p-2 border border-gray-300 rounded" />
        <input {...register("technologiesUsed.database", { required: true })} placeholder="Database" className="w-full p-2 border border-gray-300 rounded" />
        <input {...register("technologiesUsed.authentication", { required: true })} placeholder="Authentication" className="w-full p-2 border border-gray-300 rounded" />
        <input type="number" {...register("teamMembers", { required: true })} placeholder="Team Members" className="w-full p-2 border border-gray-300 rounded" />
        <select {...register("projectType", { required: true })} className="w-full p-2 border border-gray-300 rounded">
            <option value="Personal">Personal</option>
            <option value="Team">Team</option>
        </select>
        <input {...register("role", { required: true })} placeholder="Your Role" className="w-full p-2 border border-gray-300 rounded" />
        <input {...register("liveSite", { required: true })} placeholder="Live Site URL" className="w-full p-2 border border-gray-300 rounded" />
        <input {...register("clientSiteGitHub", { required: true })} placeholder="Client GitHub URL" className="w-full p-2 border border-gray-300 rounded" />
        <input {...register("serverSiteGitHub", { required: true })} placeholder="Server GitHub URL" className="w-full p-2 border border-gray-300 rounded" />
    </>
);

export default Projects;