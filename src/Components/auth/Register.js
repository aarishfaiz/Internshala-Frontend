import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../FireBase/firebase";


const Register = ({setLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      alert("User just Sign up");
      navigate("/");
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const loginFunction = () => {
    const user = signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        alert("Successfully sigu up");
        navigate("/");
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
      <form>
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
        <div className="flex items-center justify-between mb-4">
          <Link to={"/login"}>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button
              type="button"
              onClick={handleSignup}
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

export default Register;
