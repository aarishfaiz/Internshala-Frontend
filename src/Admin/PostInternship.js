import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostInternship = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [stipend, setStipend] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    if (title === "" || companyName === "" || location === "") {
      alert("FIll the Blanks");
    } else {
      const bodyjson = {
        title: title,
        location: location,
        company: companyName,
        duration: duration,
      };
      axios
        .post("http://localhost:5000/api/internship", bodyjson)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
    }
    alert("Internship Posted Successfully");
    navigate("/adminpanel");
  };
  return (
    <div className="">
      <section class="text-gray-600 body-font relative ">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Post a Internship
            </h2>

            <div class="relative mb-4">
              <label for="title" class="leading-7 text-sm text-gray-600">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="company" class="leading-7 text-sm text-gray-600">
                Company Name
              </label>
              <input
                type="company"
                id="company"
                name="company"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="location" class="leading-7 text-sm text-gray-600">
                Location
              </label>
              <input
                type="location"
                id="location"
                name="location"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Posting Internship
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostInternship;
