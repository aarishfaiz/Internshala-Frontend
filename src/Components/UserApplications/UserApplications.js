import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/UserSlice";
import { Link } from "react-router-dom";
const UserApplications = () => {
    
    const [applications, setApplications] = useState([]);
    const user = useSelector(selectUser);
    const userApplications = applications.filter(app=> app.user?.name === user?.name)

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
           "https://internshala-clone-backend.onrender.com/api/application"
          // "http://localhost:5000/api/application"
        );
        setApplications(response.data);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchApplications();
  }, []);
  console.log(applications)
  return (
    <div>
    <h1 className="text-3xl font-semibold mt-6 flex justify-center">
      Total Application
    </h1>
    <div className="flex justify-center" id="table">
      <div className="flex flex-col mt-7">
        <div className="overflow-x-auto sm:mx-6 lg:mx-8">
          <table className="inline-block min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium">
              <tr className="bg-gray-200">
                <th scope="col" className="px-5 py-4">
                  Company
                </th>
                <th scope="col" className="px-5 py-4">
                  Category
                </th>
                <th scope="col" className="px-5 py-4">
                  Applied On
                </th>
                <th scope="col" className="px-5 py-4">
                  Applied by
                </th>
                <th scope="col" className="px-5 py-4">
                  View Details
                </th>
                <th scope="col" className="px-5 py-4">
                  Application Status
                </th>
              </tr>
            </thead>
            <tbody>
              {userApplications.map((data, index) => (
                <tr key={index} className="border-b">
                  <td className="whitespace-no-wrap px-6 py-4">
                    {data.company}
                  </td>
                  <td className="whitespace-no-wrap px-6 py-4">
                    {data.category}
                  </td>
                  <td className="whitespace-no-wrap px-6 py-4">
                    {new Date(data?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="whitespace-no-wrap px-6 py-4">
                    {data.user && typeof data.user === "object"
                      ? data.user.email
                      : data.user}
                   
                  </td>
                  <td className="whitespace-no-wrap px-6 py-4 cursor-pointer">
                    <Link to={`/userapplicationdetails?q=${data._id}`}>
                      See More
                    </Link>
                  </td>
                  <td className="whitespace-no-wrap px-6 py-4">
                    {data.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
  
};

export default UserApplications;
