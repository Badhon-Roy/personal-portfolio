/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { TBlog } from "@/types";
import Swal from "sweetalert2";

const Blogs = () => {
    const [blogs, setBlogs] = useState<TBlog[]>([]);
    const [editBlog, setEditBlog] = useState<TBlog | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("http://localhost:5000/blogs", {
                    cache : 'no-cache'
                });
                const data = await res.json();
                setBlogs(data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        };
        fetchBlogs();
    }, []);

    const { register, handleSubmit, reset, setValue } = useForm<TBlog>();

    // Create Blog
    const onSubmit = async (data: TBlog) => {
        try {
            const response = await fetch("http://localhost:5000/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire("Success!", "Blog added successfully!", "success");
                reset();
                const modal = document.getElementById("add_modal") as HTMLDialogElement;
                if (modal) {
                    modal.close();
                }
            } else {
                Swal.fire("Error!", "Failed to add blog!", "error");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Open Edit Modal and Set Default Values
    const openEditModal = (blog: TBlog) => {
        setEditBlog(blog);
        const modal = document.getElementById("edit_modal") as HTMLDialogElement;
        if(modal){
            modal.showModal();
        }

        // Set form values
        setValue("title", blog.title);
        setValue("content", blog.content);
        setValue("image", blog.image);
        setValue("category", blog.category);
        setValue("author", blog.author);
        setValue("date", blog.date);
    };

    // Update Blog
    const handleUpdate = async (data: TBlog) => {
        if (!editBlog) return;

        try {
            const response = await fetch(`http://localhost:5000/blogs/${editBlog._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire("Success!", "Blog updated successfully!", "success");
                const modal = document.getElementById("edit_modal") as HTMLDialogElement;
                if(modal){
                    modal.close();
                }
            } else {
                Swal.fire("Error!", "Failed to update blog!", "error");
            }
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };

    // Delete Blog
    const handleToDelete = async (id : string | undefined ) => {
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
                const response = await fetch(`http://localhost:5000/blogs/${id}`, {
                    method: "DELETE",
                });

                if (response.ok) {
                    Swal.fire("Deleted!", "Your blog has been deleted.", "success");
                } else {
                    Swal.fire("Error!", "Something went wrong.", "error");
                }
            }
        } catch (error) {
            console.error("Error deleting blog:", error);
            Swal.fire("Error!", "Failed to delete blog.", "error");
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Blog Management</h2>
            <button
                className="bg-primary text-white p-2 rounded flex items-center gap-2"
                onClick={() => {
                    const modal = document.getElementById("add_modal") as HTMLDialogElement;
                    if (modal) {
                        modal.showModal();
                    }
                }}
            >
                <FaPlus /> Add Blog
            </button>

            {/* Add Blog Modal */}
            <dialog id="add_modal" className="modal modal-bottom sm:modal-middle text-white">
                <div className="modal-box">
                    <h3 className="text-xl font-semibold mb-4">Add New Blog</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <BlogFormFields register={register} />
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                            Create Blog
                        </button>
                    </form>
                </div>
            </dialog>

            {/* Edit Blog Modal */}
            <dialog id="edit_modal" className="modal modal-bottom sm:modal-middle text-white">
                <div className="modal-box">
                    <h3 className="text-xl font-semibold mb-4">Edit Blog</h3>
                    <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
                        <BlogFormFields register={register} />
                        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
                            Update Blog
                        </button>
                    </form>
                </div>
            </dialog>

            {/* Blog Table */}
            <table className="w-full mt-4 border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2">Title</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog : TBlog) => (
                        <tr key={blog._id} className="border-t">
                            <td className="p-2">{blog.title}</td>
                            <td className="p-2 flex gap-2">
                                <button onClick={() => openEditModal(blog)} className="bg-blue-500 text-white p-2 rounded">
                                    <FaEdit />
                                </button>
                                <button onClick={() => handleToDelete(blog._id)} className="bg-red-500 text-white p-2 rounded">
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

// Reusable Blog Form Fields Component
const BlogFormFields = ({ register }: { register: any }) => (
    <>
        <div>
            <label className="block font-medium mb-2">Blog Title</label>
            <input {...register("title", { required: true })} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
            <label className="block font-medium mb-2">Content</label>
            <textarea {...register("content", { required: true })} className="w-full p-2 border border-gray-300 rounded" rows={4} />
        </div>
        <div>
            <label className="block font-medium mb-2">Image URL</label>
            <input {...register("image", { required: true })} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
            <label className="block font-medium mb-2">Category</label>
            <input {...register("category", { required: true })} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
            <label className="block font-medium mb-2">Author</label>
            <input {...register("author", { required: true })} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
            <label className="block font-medium mb-2">Date</label>
            <input type="date" {...register("date", { required: true })} className="w-full p-2 border border-gray-300 rounded" />
        </div>
    </>
);

export default Blogs;
