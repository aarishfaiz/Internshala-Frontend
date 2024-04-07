import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const AdminLogin = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Fill The blanks");
    } else {
      const bodyjosn = {
        username: username,
        password: password,
      };
      axios
        .post(
          "https://internshala-clone-backend.onrender.com/api/admin/adminlogin",
          bodyjosn
        )
        .then((res) => {
          console.log("Data Is Send");
          alert("Success");
          navigate("/adminpanel");
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-2">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Admin Login Page
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 
            transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="password" class="leading-7 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button
                className="bg-blue-500 mx-auto
                hover:bg-blue-400 text-white font-semibold text-lg mt-2 shadow-lg shadow-black rounded-sm p-2"
                onClick={AdminLogin}
              >
                Login Admin
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
