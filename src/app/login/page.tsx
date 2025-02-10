"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type FormValues = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        console.log(data);
    };

    return (
        <div className="my-10 w-[90%] mx-auto">
            <h1 className="text-center text-4xl mb-5 font-bold text-[#029bc0]">
                Login Here
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div>
                    <Image
                        src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-illustration-download-in-svg-png-gif-file-formats--app-developing-development-secure-mobile-webapp-and-pack-design-illustrations-3783954.png?f=webp"
                        width={500}
                        height={200}
                        alt="login page"
                        className="w-full h-auto"
                    />
                </div>

                {/* Form Section */}
                <div className="w-[90%] mx-auto bg-white p-8 shadow-lg rounded-lg border border-[#029bc0] text-black">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Input */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#029bc0] focus:border-[#029bc0]"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                {...register("password", { required: "Password is required" })}
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#029bc0] focus:border-[#029bc0]"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Login Button */}
                        <div>
                            <button
                                type="submit"
                                className="rounded-md text-white px-8 py-3 border border-[#00ccff] bg-gradient-to-r from-[#0A767B] to-[#00A7D6] hover:from-[#05dae6] hover:to-[#0a7391] transition-all duration-300 shadow-xl w-full">
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Register Link */}
                    <p className="text-center mt-4 text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-[#029bc0] hover:underline">
                            Create an account
                        </Link>
                    </p>

                    {/* Social Login */}
                    <p className="text-center mt-6 text-sm text-gray-500">Or Sign In Using</p>

                    <div className="flex justify-center gap-4 mt-4">
                        <button
                            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
                        >
                            <Image
                                src="https://a.mktgcdn.com/p/-PwOQsJ3DFhmP-ysVNuotfaRuvS5CJnvkxe-xSGj8ZQ/4267x4267.png"
                                width={30}
                                height={30}
                                alt="Google login"
                            />
                        </button>

                        <button
                            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
                        >
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                width={25}
                                height={25}
                                alt="GitHub login"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
