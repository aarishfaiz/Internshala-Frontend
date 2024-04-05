// import React, { useEffect, useState } from "react";
// import { FaArrowRight, FaFilter } from "react-icons/fa";
// import { AiOutlineSearch } from "react-icons/ai";
// import internships from "../data/internship";
// import {
//   RiArrowRightUpLine,
//   RiMapPin2Line,
//   RiMoneyDollarCircleLine,
//   RiTimeLine,
// } from "react-icons/ri";
// import { FaAmazon } from "react-icons/fa";
// const InternshipAvailable = () => {
//   const [searchCategory, setSearchCategory] = useState("");
//   const [searchLocation, setSearchLocation] = useState("");
//   const [filteredInternships, setFilteredInternships] = useState([]);
//   const [isDivVisible, setIsDivVisible] = useState(false);

//   const handleCategoryChange = (e) => {
//     const categoryValue = e.target.value;
//     setSearchCategory(categoryValue);
//     filterInternships(categoryValue, searchLocation);
//   };

//   const handleLocationChange = (e) => {
//     const locationValue = e.target.value;
//     setSearchLocation(locationValue);
//     filterInternships(searchCategory, locationValue);
//   };

//   const filterInternships = (category, location) => {
//     const filteredData = internships.filter((internship) => {
//       return (
//         internship.category.toLowerCase().includes(category.toLowerCase()) &&
//         internship.location.toLowerCase().includes(location.toLowerCase())
//       );
//     });
//     setFilteredInternships(filteredData);
//   };

//   useEffect(() => {
//     filterInternships(searchCategory, searchLocation);
//   }, [searchCategory, searchLocation]);

//   const showDiv = () => {
//     setIsDivVisible(true);
//   };

//   const hideDiv = () => {
//     setIsDivVisible(false);
//   };

//   return (
//     <div className="flex flex-row">
//       {/* Filter Internship */}
//       <div className="w-1/6">
//         <div className="flex flex-col">
//           <button className="flex gap-1 mt-4 justify-center ">
//             <FaFilter className="text-blue-600" />
//             Filter
//           </button>

//           <div className="flex flex-col ml-4">
//             <label htmlFor="profile">Profile</label>
//             <input
//               type="text"
//               id="profile"
//               placeholder="Profile Manager"
//               className="border"
//             />
//             <label htmlFor="location">Location</label>
//             <input
//               type="text"
//               id="location"
//               placeholder="Raipur"
//               className="border"
//             />
//             <div className="flex mt-1">
//               <input
//                 className="mr-2 ml-3"
//                 type="checkbox"
//                 name="wfh"
//                 id="wfh"
//               />
//               <label htmlFor="wfh">Work From Home</label>
//             </div>
//             <div className="flex">
//               <input
//                 className="mr-2 ml-3"
//                 type="checkbox"
//                 name="part-time"
//                 id="part-time"
//               />
//               <label htmlFor="part-time">Part-time</label>
//             </div>
//             <p>Select the Stipend</p>
//             <input type="range" />
//             <p className="mt-2 ml-3 mr-3">
//               0k &nbsp; 2k &nbsp; 4k &nbsp; 8k &nbsp; 10k
//             </p>
//             <p className="text-blue-600 flex items-center gap-2">
//               View More filter <FaArrowRight />
//             </p>
//             <span className="flex justify-end text-blue-600">Clear All</span>

//             <div className="flex items-center">
//               <input type="text" placeholder="Search" className="border" />
//               <AiOutlineSearch size={25} className="bg-blue-600" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/*  Internship */}
//       <div className="w-2/3 mt-20 ml-10">
//         <div className="flex justify-center flew-col border shadow-lg">
//           <div className=" text-lg">
//             <p>Total Number of Internships {filteredInternships.length}</p>
//             {filteredInternships.map((data, index) => (
//               <div key={index} l>
//                 <p>{data.title}</p>
// <div className=" border w-full p-3">
//   <div className="flex justify-between items-center">
//     <p
//       className="mb-4 mt-3 flex items-center text-blue-600"
//       id="boxer"
//     >
//       <RiArrowRightUpLine className="mr-1 text-blue-600" />
//       Activily Hiring
//     </p>
//     <div>
//       <FaAmazon size={40} />
//     </div>
//   </div>

//   <div>
//     <p className="text-lg font-bold">{data.title}</p>
//     <p className="text-gray-400">{data.company}</p>
//     <p className="flex items-center">
//       <RiMapPin2Line />
//       Location
//     </p>
//     <div className="flex flex-row gap-40 mt-2">
//       <div>
//         <p>Starting Data</p>
//         <p>Today</p>
//       </div>
//       <div>
//         <p className="flex items-center">
//           <RiTimeLine />
//           Duration
//         </p>
//         <p>{data.duration}</p>
//       </div>
//       <div>
//         <p className="flex items-center">
//           <RiMoneyDollarCircleLine />
//           Stipend
//         </p>
//         <p>{data.stipend}</p>
//       </div>
//     </div>
//   </div>

//   <div className="flex justify-between mt-3 ">
//     <p className="text-gray-400">10/03/2024</p>
//     {/* <Link to="/internshipMoreDetails">
//       <p className="text-blue-600">View More Details</p>
//     </Link> */}
//     <p className="text-blue-600 underline">View More Details</p>
//   </div>
// </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InternshipAvailable;

import React, { useEffect, useState } from "react";
import { FaArrowRight, FaFilter, FaRegLaughWink } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import internships from "../data/internship";
import {
  RiArrowRightUpLine,
  RiMapPin2Line,
  RiMoneyDollarCircleLine,
  RiTimeLine,
} from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { Link } from "react-router-dom";

const InternshipAvailable = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleCategoryChange = (e) => {
    const categoryValue = e.target.value;
    setSearchCategory(categoryValue);
  };

  const handleLocationChange = (e) => {
    const locationValue = e.target.value;
    setSearchLocation(locationValue);
  };

  const filterInternships = () => {
    const filteredData = internships.filter((internship) => {
      return (
        internship.category
          .toLowerCase()
          .includes(searchCategory.toLowerCase()) &&
        internship.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    });
    setFilteredInternships(filteredData);
  };

  useEffect(() => {
    filterInternships();
  }, [searchCategory, searchLocation]);

  const showDiv = () => {
    setIsDivVisible(true);
    filterInternships(); // Call filterInternships when the filter button is clicked
  };

  const hideDiv = () => {
    setIsDivVisible(false);
  };

  return (
    <div className="flex flex-row">
      {/* Filter Internship */}
      <div className="w-1/6">
        <div className="flex flex-col">
          <p className="flex gap-1 mt-4 justify-center" onClick={showDiv}>
            <FaFilter className="text-blue-600" />
            Filter
          </p>

          <div className="flex flex-col ml-4">
            <label htmlFor="profile">Profile</label>
            <input
              type="text"
              id="profile"
              placeholder="Profile Manager"
              className="border"
              onChange={handleCategoryChange}
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Raipur"
              className="border"
              onChange={handleLocationChange}
            />
            <div className="flex mt-1">
              <input
                className="mr-2 ml-3"
                type="checkbox"
                name="wfh"
                id="wfh"
              />
              <label htmlFor="wfh">Work From Home</label>
            </div>
            <div className="flex">
              <input
                className="mr-2 ml-3"
                type="checkbox"
                name="part-time"
                id="part-time"
              />
              <label htmlFor="part-time">Part-time</label>
            </div>
            <p>Select the Stipend</p>
            <input type="range" />
            <p className="mt-2 ml-3 mr-3">
              0k &nbsp; 2k &nbsp; 4k &nbsp; 8k &nbsp; 10k
            </p>
            <p className="text-blue-600 flex items-center gap-2">
              View More filter <FaArrowRight />
            </p>
            <span className="flex justify-end text-blue-600">Clear All</span>

            <div className="flex items-center">
              <input type="text" placeholder="Search" className="border" />
              <AiOutlineSearch size={25} className="bg-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/*  Internship */}
      <div className="w-2/3 mt-20 ml-10">
        <div className="flex justify-center flew-col border shadow-lg">
          <div className=" text-lg">
            <p>Total Number of Internships {filteredInternships.length}</p>
            {filteredInternships.map((data, index) => (
              <div key={index}>
                <p>{data.title}</p>
                {/* Render other internship details */}
                <div className=" border w-full p-3">
                  <div className="flex justify-between items-center">
                    <p
                      className="mb-4 mt-3 flex items-center text-blue-600"
                      id="boxer"
                    >
                      <RiArrowRightUpLine className="mr-1 text-blue-600" />
                      Activily Hiring
                    </p>
                    <div>
                      <FaAmazon size={40} />
                    </div>
                  </div>

                  <div>
                    <p className="text-lg font-bold">{data.title}</p>
                    <p className="text-gray-400">{data.company}</p>
                    <p className="flex items-center">
                      <RiMapPin2Line />
                      {data.location}
                    </p>
                    <div className="flex flex-row gap-40 mt-2">
                      <div>
                        <p>Starting Data</p>
                        <p>Today</p>
                      </div>
                      <div>
                        <p className="flex items-center">
                          <RiTimeLine />
                          Duration
                        </p>
                        <p>{data.duration}</p>
                      </div>
                      <div>
                        <p className="flex items-center">
                          <RiMoneyDollarCircleLine />
                          Stipend
                        </p>
                        <p>{data.stipend}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-3 ">
                    <p className="text-gray-400">10/03/2024</p>
                    {/* <Link to="/internshipMoreDetails">
                      <p className="text-blue-600 underline">View More Details</p>
                    </Link> */}

                    <Link to={"/internshipdetail"}>
                      <p className="text-blue-600 underline">
                        View More Details
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipAvailable;


// {isDivVisiable && (
//   <>
    
//   </>
// )}