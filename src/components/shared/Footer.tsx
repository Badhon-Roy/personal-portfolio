import { MdOutlineEmail, MdOutlineLocationOn, MdPhone } from "react-icons/md";
import Link from "next/link"; // Using Next.js Link for navigation
import Image from 'next/image'; // For optimized image loading
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="">
        <hr />
      <p className="divider"></p>
      <footer className="items-start justify-between p-6  md:p-10 md:flex gap-10 footer max-w-[1400px] mx-auto ">
        <div className="flex-1">
          {/* Using next/image for optimized loading of images */}
          <Image className="w-[150px]" src="https://badhon-roy-portfolio.surge.sh/assets/logo-s7FbWgl9.png" alt="Logo" width={150} height={150} />
          <h2 className="md:text-xl text-[18px]">
            Front-end developer crafting responsive, user-focused websites. Connect with me on social media to collaborate and explore new ideas!
          </h2>
          <div className="flex items-center gap-4">
            <div className="inline-block p-1 border rounded-lg">
              <a href="https://www.linkedin.com/in/badhon-roy-515303297/" target="_blank" rel="noopener noreferrer">
                <span className="text-4xl"><FaLinkedin /></span>
              </a>
            </div>
            <div className="inline-block p-1 border rounded-lg">
              <a href="https://twitter.com/BadhonRoy40241" target="_blank" rel="noopener noreferrer">
                <span className="text-4xl"><FaSquareXTwitter /></span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-around flex-1 gap-10">
          <nav>
            <header className="footer-title">Quick Links</header>
            <div className="flex flex-col items-center gap-2">
              <Link href="/" className="p-2 underline cursor-pointer">
                Home
              </Link>
              <Link href="/projects" className="p-2 underline cursor-pointer">
                Projects
              </Link>
              <Link href="/blog" className="underline cursor-pointer">
                Blog
              </Link>
            </div>
          </nav>
          <nav>
            <header className="mb-4 text-center footer-title">Contact Me</header>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MdOutlineEmail className="text-xl font-bold text-white" />
                <span>roybadhon@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-xl font-bold text-white" />
                <span>01825009171</span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineLocationOn className="text-xl font-bold text-white" />
                <span>Dinajpur, Bangladesh</span>
              </div>
            </div>
          </nav>
        </div>
      </footer>
      <div>
        <p className="divider"></p>
        <p className="pb-10 text-center text-white">Copyright &copy; 2024 - All rights reserved by Badhon Roy</p>
      </div>
    </div>
  );
};

export default Footer;
