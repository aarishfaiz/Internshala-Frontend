import React from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import FaBriefcase, { FaLocationArrow } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";

const AdminPanel = () => {
  return (
    <div>
      <div className="didded w-full overflow-hidden rounded-lg border bg-gray-50 shadow-sm lg:black ">
        <div className="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
          <div className="grid w-2/3 grid-cols-2 gap-8">
            <Link to={"/application"}>
              <IoMail />
               See All Applications
            </Link>
            <Link to={"/postjobs"}>
              <BsBriefcaseFill />
              Post Jobs
            </Link>
            <Link to={"/postinternships"}>
              <FaLocationArrow />
              Post Internships
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
