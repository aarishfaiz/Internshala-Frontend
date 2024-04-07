import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InternshipDetailsAndApply = () => {
    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("q");
  
    const [application, setApplication] = useState(null); // Initialize as null
  
    useEffect(() => {
      const fetchApplicationDetails = async () => {
        try {
          const response = await axios.get(
            // `http://localhost:5000/api/application/${id}`
             `https://internshala-clone-backend.onrender.com/api/application/${id}`
          );
          setApplication(response.data); // Update to array received from API
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchApplicationDetails();
    }, [id]);
  

  return (
    <div>
      <h1 className="text-3xl font-semibold mt-6 flex justify-center">
        Application Details
      </h1>
      {application ? (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 className="text-xl font-semibold mb-2">{application.title}</h2>
            <p className="text-gray-600 mb-2">Company: {application.company}</p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {application.category}
            </p>
            <p>
              <span className="font-semibold">Applied On:</span>{" "}
              {new Date(application.createdAt).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Applied by:</span>{" "}
              {application.name}
            </p>
            <p>
              <span className="font-semibold">Application Status:</span>{" "}
              {application.status}
            </p>
            <div className="mt-4">
              <p className="font-semibold">Cover Letter:</p>
              <p className="text-gray-600">{application.coverLetter}</p>
            </div>
           
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InternshipDetailsAndApply;
