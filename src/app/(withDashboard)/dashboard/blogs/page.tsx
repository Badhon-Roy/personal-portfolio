"use client"
import Link from "next/link";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";

export type UserData = {
    username: string;
    email: string;
    password: string;
  };

const Blogs = () => {

    const blogs = [
        {
            id: "1",
            title: "new blog",
        },
        {
            id: "2",
            title: "new blog 2",
        },
    ]
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<UserData>();

    const onSubmit = async (data: UserData) => {
        console.log(data);
    
        try {
        } catch (err: any) {
          console.error(err.message);
          throw new Error(err.message);
        }
      };


    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Blog Management</h2>
            <button className="bg-primary text-white p-2 rounded flex items-center gap-2" onClick={() => document.getElementById('my_modal_5').showModal()}>
                <FaPlus /> Add Blog
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-white">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block  font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                {...register("username")}
                                placeholder="User Name"
                                className="w-full p-3 border border-gray-300 rounded "
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full border border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-500 hover:text-black"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
            <table className="w-full mt-4 border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2">Title</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog.id} className="border-t">
                            <td className="p-2">{blog.title}</td>
                            <td className="p-2 flex gap-2">
                                <Link href={`/dashboard/blogs/edit/${blog.id}`}>
                                    <button className="bg-blue-500 text-white p-2 rounded">
                                        <FaEdit />
                                    </button>
                                </Link>
                                <button
                                    className="bg-red-500 text-white p-2 rounded"
                                >
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

export default Blogs;
