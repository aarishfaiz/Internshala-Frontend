import React, { useEffect, useState } from "react";
import internshipData from "../ShowInternshipAndJob/JobData/JobData";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";
import axios from "axios";

const JobDetails = () => {

  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);


  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(internshipData);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    // Fetch internships from API
    const fetchInternships = async () => {
      try {
        const response = await axios.get(
          "https://intern-backend-fop1.onrender.com/api/job"
          // "http://localhost:5000/api/job"
        );
        setInternships(response.data); // Assuming response.data is an array of internships
        setFilteredInternships(response.data); // Set filtered internships initially
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };

    fetchInternships();
  }, []);

  const applyInternship = async () => {
    try {
      const applicationData = {
        company: selectedInternship.company,
        category: selectedInternship.title,
        coverLetter: coverLetter,
        user: user,
        Application: {},
        status: "pending",
      };
      await axios.post(
        "https://intern-backend-fop1.onrender.com/api/application",
        applicationData
      );

      alert("You have successfully applied for the Job");
      closePopup();
      console.log("No User", applicationData);
    } catch (error) {
      console.error("Error applying for internship:", error);
      alert(
        "An error occurred while applying for the internship. Please try again."
      );
    }
  };

  const openPopup = (internship) => {
    setSelectedInternship(internship);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCoverLetter("");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = internships.filter((item) => {
      return (
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.company.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.location.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredInternships(filtered);
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Job List</h1>
      <input
        type="text"
        placeholder="Search by title, company, or location"
        value={searchTerm}
        onChange={handleSearch}
        className="px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <div className="grid grid-cols-1 gap-4">
        {filteredInternships.map((internship) => (
          <div
            key={internship.id}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-2">{internship.title}</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Company:</span>{" "}
              {internship.company}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Location:</span>{" "}
              {internship.location}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Duration:</span>{" "}
              {internship.duration}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Stipend:</span>{" "}
              {internship.stipend}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Type:</span> {internship.type}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">About Company:</span>{" "}
              {internship.aboutCompany}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Who Can Apply:</span>{" "}
              {internship.whoCanApply}
            </p>
            <button
              onClick={() => openPopup(internship)}
              className="bg-blue-600 font-semibold text-white p-2 rounded-lg"
            >
              Apply
            </button>
          </div>
        ))}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Apply for {selectedInternship?.title} at{" "}
                {selectedInternship?.company}
              </h2>
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                placeholder="Enter your cover letter..."
                className="w-full h-32 px-4 py-2 border rounded-md mb-4"
              ></textarea>
              <div className="flex justify-end">
                <button
                  onClick={closePopup}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={applyInternship}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
