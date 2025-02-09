"use client"
import { useState } from "react";
import { MdOutlineEmail, MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date(),
    };
    console.log(newMessage);
  };

  return (
    <div className="my-16 ">
      <h2 className="md:text-4xl text-2xl font-bold relative text-center pb-2 text-color">
        Contact Me
        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-b-2 border-white md:w-48 w-28"></span>
      </h2>
      <div className="md:flex gap-8 lg:p-16 md:p-12 p-5 bg-[#052f57] border border-[#019fc7] rounded-2xl my-10">
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-xl text-white">
              Your Name:
            </label>
            <br />
            <input
              className="bg-[#123a60] border text-white w-full my-4 border-gray-400 px-4 py-2 rounded-md"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="name *"
              required
            />

            <label htmlFor="email" className="text-xl text-white">
              Your Email:
            </label>
            <br />
            <input
              className="bg-[#123a60] border text-white w-full my-4 border-gray-400 px-4 py-2 rounded-md"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email *"
              required
            />

            <label htmlFor="message" className="text-xl text-white">
              Your Message:
            </label>
            <br />
            <textarea
              rows={4}
              className="bg-[#123a60] border text-white w-full mt-4 border-gray-400 px-4 py-2 rounded-md"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="message *"
              required
            />
            <input
              type="submit"
              className="BTN my-4 cursor-pointer"
              value="Send Message"
            />
          </form>

        </div>

        <div className="flex-1 md:border-l-2 md:pl-8">
          <h2 className="md:text-4xl text-2xl font-bold text-white mb-4">
            Contact Info
          </h2>
          <div className="flex items-center md:gap-5 gap-3">
                        <div className="border-2 inline-block md:p-4 p-2 rounded-full hover:border-[#019fc7] hover:text-[#019fc7]">
                            <MdOutlineEmail className="text-3xl font-bold text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl text-white">Email</h3>
                            <p className="cursor-pointer">roybadhon286@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center md:gap-5 gap-3 my-6">
                        <div className="border-2 inline-block md:p-4 p-2 rounded-full hover:border-[#019fc7] hover:text-[#019fc7]">
                            <MdPhone className="text-3xl font-bold text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl text-white">Phone</h3>
                            <p className="cursor-pointer">01825009171</p>
                        </div>
                    </div>
                    <div className="flex items-center md:gap-5 gap-3">
                        <div className="border-2 inline-block md:p-4 p-2 rounded-full hover:border-[#019fc7] hover:text-[#019fc7]">
                            <MdOutlineLocationOn className="text-3xl font-bold text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl text-white">Address</h3>
                            <p className="cursor-pointer">Dinajpur , Bangladesh</p>
                        </div>
                    </div>
                    <h3 className="md:text-3xl text-xl font-bold text-white my-4">Visit my social profile and get connected</h3>
                    <a className="btn md:w-auto w-full mb-3 btn-outline hover:bg-[#019fc7] text-white text-xl font-bold" href="https://www.linkedin.com/in/badhon-roy-515303297/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-3xl" />Linkedin</a>
                    <a className="btn md:w-auto w-full btn-outline hover:bg-[#019fc7] md:mx-4 text-white text-xl font-bold" href="https://twitter.com/BadhonRoy40241" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter className="text-3xl" />Twitter</a>




        </div>
      </div>
    </div>
  );
};

export default ContactPage;
