"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
      };
    
      const handleNavClick = () => {
        setIsOpen(false);
      };

  const navbarLinks = [
    {
      path: '/',
      element: "Home"
    },
    {
      path: '/about',
      element: "About"
    },
    {
      path: '/allProducts',
      element: "Shop"
    }
  ]



  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-0 z-40 hidden bg-white shadow-md lg:block">
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
            {navbarLinks?.map((item, index) => (
              <div
              className="text-red-600"
                key={index}
              >
                {item?.element}
              </div>
            ))}
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
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
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
            {navbarLinks?.map(
              (item, index) => (
                <button
                  key={index}
                  onClick={handleNavClick}
                >
                  {item?.element}
                </button>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
