import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostInternship = () => {
  const navigate = useNavigate();

  // State variables for form fields
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [stipend, setStipend] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [whoCanApply, setWhoCanApply] = useState("");

  // Function to handle form submission
  const sendData = async (e) => {
    e.preventDefault();
    try {
      // Prepare data object to send to the server
      const data = {
        title,
        company: companyName,
        location,
        category,
        stipend,
        aboutCompany,
        whoCanApply,
      };
      // Post data to the server
      const response = await axios.post(
        "https://intern-backend-fop1.onrender.com/api/internship/post",
        // "http://localhost:5000/api/internship/post",
        data
      );
      console.log(response.data); // Log response from the server
      alert("Internship Posted Successfully");
      navigate("/adminpanel");
    } catch (error) {
      console.error("Error posting internship:", error);
      alert("Failed to post internship. Please try again.");
    }
  };

  return (
    <div className="">
      <section className="text-gray-600 body-font relative ">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Post a Internship
            </h2>

            <form onSubmit={sendData}>
              <div className="relative mb-4">
                <label htmlFor="title" className="leading-7 text-sm text-gray-600">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="company" className="leading-7 text-sm text-gray-600">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="location" className="leading-7 text-sm text-gray-600">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="category" className="leading-7 text-sm text-gray-600">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="stipend" className="leading-7 text-sm text-gray-600">
                  Stipend
                </label>
                <input
                  type="text"
                  id="stipend"
                  name="stipend"
                  value={stipend}
                  onChange={(e) => setStipend(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="aboutcompany" className="leading-7 text-sm text-gray-600">
                  About the Company 
                </label>
                <textarea
                  id="aboutcompany"
                  name="aboutcompany"
                  value={aboutCompany}
                  onChange={(e) => setAboutCompany(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="relative mb-4">
                <label htmlFor="whocanapply" className="leading-7 text-sm text-gray-600">
                  Who Can Apply
                </label>
                <textarea
                  id="whocanapply"
                  name="whocanapply"
                  value={whoCanApply}
                  onChange={(e) => setWhoCanApply(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Posting Internship
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostInternship;
