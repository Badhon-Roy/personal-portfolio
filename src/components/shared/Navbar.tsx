"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdCloseCircleOutline, IoMdMoon, IoMdSunny } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { useTheme } from "../../../ThemeContext";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

type TUserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string;
  }
}

const Navbar = ({ session }: { session: TUserProps | null }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const navbarLinks = [
    { path: "/", element: "Home" },
    { path: "/projects", element: "Projects" },
    { path: "/blog", element: "Blog" },
    { path: "/contact", element: "Contact" },
    { path: "/dashboard", element: "Dashboard" },
  ];


  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-0 z-40 hidden bg-white shadow-md lg:block dark:bg-gray-800 dark:text-white">
        <div className="navbar max-w-[1400px] mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link href={"/"} className="flex items-center">
            <Image
              className="object-cover"
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/615476e378a1a8001de58b7f/0x0.png"
              alt="Logo"
              width={90}
              height={60}
            />
          </Link>

          {/* Navigation Items */}
          <div className="flex gap-8 font-bold">
            {navbarLinks?.map(({ path, element }) => (
              <Link
                key={path}
                href={path}
                className={`${pathname === path
                    ? "text-[#00ccff] font-bold text-xl"
                    : "text-gray-700 hover:text-6eal-700 text-xl"
                  }`}
              >
                {element}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {
                session?.user ?
                  <button onClick={() => signOut()} className="border border-[#00ccff] px-4 py-2 rounded-lg font-medium hover:bg-gradient-to-r from-[#0A767B] to-[#00A7D6] hover:text-black transition duration-200">
                    Logout
                  </button> :
                  <Link
                    href="/login"
                    className="border border-[#00ccff] bg-gradient-to-r from-[#0A767B] to-[#00A7D6] hover:from-[#05dae6] hover:to-[#0a7391] transition-all duration-300 px-4 py-2 rounded-lg font-medium"
                  >
                    Login
                  </Link>
              }
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 rounded-full dark:bg-gray-700"
            >
              {isDarkMode ? (
                <IoMdSunny size={24} className="text-yellow-500" />
              ) : (
                <IoMdMoon size={24} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="relative z-40 lg:hidden">
        {/* Drawer Toggle Button */}
        <button
          onClick={toggleDrawer}
          className="fixed z-50 p-3 bg-[#019fc7] text-white rounded-full top-4 right-4 shadow-md"
        >
          <MdOutlineMenu size={24} />
        </button>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out dark:bg-gray-800 dark:text-white ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button */}
          <button
            onClick={toggleDrawer}
            className="absolute top-4 left-4 p-3 bg-[#019fc7] text-white rounded-full shadow-md"
          >
            <IoMdCloseCircleOutline size={24} />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col px-6 mt-20 space-y-6 font-bold">
            {navbarLinks?.map((item, index) => (
              <button
                key={index}
                onClick={handleNavClick}
                className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <Link href={item.path}>{item.element}</Link>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;