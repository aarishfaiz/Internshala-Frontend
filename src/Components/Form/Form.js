import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Resetting error messages
    setEmailError("");
    setPasswordError("");

    // Email validation
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    // Password validation
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(
        "Form submitted successfullly... Here is the Data",
        email,
        " ",
        password
      );
      alert("Form Successfully Submitted");
      setEmail("");
      setPassword("");
      setSubmitted(true);
      navigate("/");
    }
  };
  return (
    <div
      className={`max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg ${
        submitted ? "hidden" : "block"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {emailError && (
            <span className="text-red-500 text-sm">{emailError}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {passwordError && (
            <span className="text-red-500 text-sm">{passwordError}</span>
          )}
        </div>
        <button
          type="submit"
          className="flex mx-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
