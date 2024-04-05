import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobData from "../../ShowInternshipAndJob/JobData/JobData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { RiArrowRightUpLine } from "react-icons/ri";
import {
  RiMapPin2Line,
  RiMoneyDollarCircleLine,
  RiTimeLine,
} from "react-icons/ri";
import axios from "axios";
 

const Job = () => {
 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [internshipIndex, setInternshipIndex] = useState(0);
  // const [jobData, setJobData] = useState([]);
  const slideLeft2 = () => {
    if (internshipIndex > 0) {
      setInternshipIndex(internshipIndex - 1);
    }
  };

  const slideRight2 = () => {
    if (internshipIndex < jobData.length - 3) {
      setInternshipIndex(internshipIndex + 1);
    }
  };



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/api/job`);

  //       setJobData(response.data);
  //     } catch (error) {
  //       console.log("Error Fetching the Data", error);
  //     }
  //   };

  //   fetchData();
  // });

  const filterInternships = jobData.filter((item) => {
    return !selectedCategory || selectedCategory === item.title;
  });
  return (
    <div>
      <div>
        <div>
          <div className="mt-16">
            <h1 className="text-center font-bold text-2xl">
              Jobs on Inter Area
            </h1>
            <div className="category flex flex-wrap mt-14 gap-10 ">
              <p className="ml-3 mr-2">Popular Catergories: </p>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "Backend Developer"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Backend Developer")}
              >
                Backend Developer
              </span>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "Android Developer"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Android Developer")}
              >
                Android Developer
              </span>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "Java Developer"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Java Developer")}
              >
                Java Developer
              </span>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "Full Stack Developer"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Full Stack Developer")}
              >
                Full Stack Developer
              </span>

              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "Data Science"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Data Science")}
              >
                Data Science
              </span>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "Media" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => setSelectedCategory("Media")}
              >
                Media
              </span>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "design" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => setSelectedCategory("design")}
              >
                design
              </span>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "Part Time"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Part Time")}
              >
                Part Time
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-4">
            <button onClick={slideLeft2}>
              <FaArrowLeft />
            </button>
            <div className="overflow-x-auto max-w-screen-lg mx-auto">
              <div className="flex flex-wrap justify-between">
                {filterInternships
                  .slice(internshipIndex, internshipIndex + 3)
                  .map((data) => (
                    <div
                      className="int-1 w-72 p-4 mr-4 mb-4 border border-gray-300 rounded-lg"
                      key={data.id}
                    >
                      <p className="mb-4 mt-3 flex items-center" id="boxer">
                        <RiArrowRightUpLine className="mr-2" />
                        Activily Hiring
                      </p>
                      <p className="text-lg font-semibold">{data.title}</p>
                      <p className="text-sm text-gray-600">{data.company}</p>
                      <hr className="my-4" />
                      <div className="mt-2 text-sm text-gray-600 flex items-center">
                        <RiMapPin2Line className="mr-2" />
                        {data.location}
                      </div>
                      <div className="mt-2 text-sm text-gray-600 flex items-center">
                        <RiMoneyDollarCircleLine className="mr-2" />
                        {data.stipend}
                      </div>
                      <div className="mt-2 text-sm text-gray-600 flex items-center">
                        <RiTimeLine className="mr-2" />
                        {data.duration}
                      </div>
                      <Link
                        to={"/jobdetail"}
                        className="text-blue-500 mt-4 block"
                      >
                        View More Details
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            <button onClick={slideRight2}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
