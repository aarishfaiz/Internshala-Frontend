import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../FireBase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = ({ onLogin, onSignUp, onCancel, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("User signed in successfully:", user);
        alert("Successfully Logged in");
        navigate("/");
        setLoggedIn(true);
      })
      .catch((error) => {
        // An error occurred during login
        console.error("Error signing in:", error);
        alert("enter wrong password");
      });
  };

  const handleSignUp = () => {
    // Handle sign up logic
    onSignUp();
  };

  const handleCancel = () => {
    // Handle cancel logic
    onCancel();
  };
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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-4 ">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
          <Link to={"/register"}>
            <button
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Sign Up
            </button>
          </Link>
          <button
            onClick={loginFunction}
            className="flex items-center bg-red-600 text-white py-2 px-4 rounded-md mr-4"
          >
            Sign Up with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
