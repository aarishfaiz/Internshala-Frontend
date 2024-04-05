import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Home.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import {
  RiMapPin2Line,
  RiMoneyDollarCircleLine,
  RiTimeLine,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import internshipData from "../../ShowInternshipAndJob/InternshipData/InternshipData";
import axios from "axios";
import Job from "./Job";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../FireBase/firebase";
const Home = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0); // State for image slider
  const [internshipIndex, setInternshipIndex] = useState(0); // State for internship slider
  const [selectedCategory, setSelectedCategory] = useState("");

  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:5000/api/application"
          "https://intern-backend-fop1.onrender.com/api/application"
        );
        setApplications(response.data);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchApplications();
  }, []);
  // const [internshipData, setInternshipData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/api/internship`
  //       );

  //       setInternshipData(response.data);
  //     } catch (error) {
  //       console.log("Error Fetching the Data", error);
  //     }
  //   };

  //   fetchData();
  // });
  const slideLeft = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const slideRight = () => {
    if (imageIndex < 4) {
      setImageIndex(imageIndex + 1);
    }
  };

  const slideLeft2 = () => {
    if (internshipIndex > 0) {
      setInternshipIndex(internshipIndex - 1);
    }
  };

  const slideRight2 = () => {
    if (internshipIndex < internshipData.length - 3) {
      setInternshipIndex(internshipIndex + 1);
    }
  };

  const filterInternships = internshipData.filter((item) => {
    return !selectedCategory || selectedCategory === item.title;
  });

  const loginFunction = () => {
    const user = signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        alert("Successfully sign up");
        navigate("/");
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        Make your Dream Career a Reality
      </h1>
      <p className="text-center text-2xl font-bold">Trending on InternArea</p>
      {/* Intern Slider */}
      <div className="flex justify-center items-center space-x-4">
        <button onClick={slideLeft}>
          <FaArrowLeft />
        </button>
        <div className="flex">
          {[...Array(2)].map((_, index) => {
            return (
              <img
                key={imageIndex + index}
                src={require(`../../Assets/image${imageIndex + index + 1}.jpg`)}
                alt=""
                className="h-64 w-64 m-2 rounded-2xl"
              />
            );
          })}
        </div>
        <button onClick={slideRight}>
          <FaArrowRight />
        </button>
      </div>

      <div>
        <div>
          <div className="mt-16">
            <h1 className="text-center font-bold text-2xl">
              Latest Internship on Inter Area
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

          <h1 className="text-center text-3xl font-bold">
            Make your Dream Career a Reality
          </h1>
          <p className="text-center text-2xl font-bold">
            Trending on InternArea
          </p>

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

                      <Link to={"/internshipdetail"} key={data._id}>
                        <p className="text-blue-600 underline">
                          See More Internships
                        </p>
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

      {/* Jobs on InternArea */}

      {/* <div>
        <div>
          <div className="mt-16">
            <h1 className="text-center font-bold text-2xl">
              Jobs on Inter Area
            </h1>
            <div className="category flex flex-wrap mt-14 gap-10 ">
              <p className="ml-3 mr-2">Popular Catergories: </p>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "Big Brands"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Big Brands")}
              >
                Big Brands
              </span>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "Work from Home"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Work from Home")}
              >
                Work from Home
              </span>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "part time"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("part time")}
              >
                part time
              </span>
              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "MBA" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => setSelectedCategory("MBA")}
              >
                MBA
              </span>

              <span
                className={`px-4 cursor-pointer category mr-4 border border-r-2 border-cyan-300 rounded-2xl p-1 ${
                  selectedCategory === "Engineering"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Engineering")}
              >
                Engineering
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
                  selectedCategory === "Data Science"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Data Science")}
              >
                Data Science
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
                        to={`../Internships/InternshipsDetails.js`}
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
      </div> */}

      <Job />

      {/* View Section */}
      <div className="mt-8 flex flex-wrap justify-center items-center text-center">
        <div className="text-block mt-5">
          <span className="font-bold text-6xl text-blue-600"> 300K+</span>
          <p className="text-gray-700">Companies Hiring </p>
        </div>
        <div className="text-block mt-5">
          <span className="font-bold text-6xl text-blue-600"> 10K+</span>
          <p className="text-gray-700">New Openings everyday</p>
        </div>
        <div className="text-block mt-5">
          <span className="font-bold text-6xl text-blue-600"> 21Mn+</span>
          <p className="text-gray-700">active students</p>
        </div>
        <div className="text-block mt-5">
          <span className="font-bold text-6xl text-blue-600"> 600K+</span>
          <p className="text-gray-700">learners</p>
        </div>
      </div>

      <div className="bg-blue-700 flex justify-between h-20">
        <div className="flex items-center text-white font-bold text-2xl ml-4">
          <p>Empover Your Carier With Intern Area Today</p>
        </div>
        <div className="flex gap-4 items-center">
          <Link to={"/login"}>
            <button className="bg-white h-10 p-2 rounded-lg font-bold ">
              Login
            </button>
          </Link>

          <Link to={"/register"}>
            <button className="bg-white h-10 p-1 rounded-lg font-bold mr-4">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
