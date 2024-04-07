import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import FooterArea from "./Components/Footer/FooterArea";
import InternshipAvailable from "./Components/InternshipAvailable";
import InternshipsDetails from "./Components/Internships/InternshipsDetails";
import Register from "./Components/auth/Register";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";
import { useEffect, useState } from "react";
import { auth } from "./FireBase/firebase";
import Profile from "./Components/Profile/Profile";
import AdminLogin from "./Admin/AdminLogin";

import PostInternship from "./Admin/PostInternship";
import ViewAllApplication from "./Admin/ViewAllApplication";
import AdminPanel from "./Admin/AdminPanel";
import AdminApplicationDetail from "./Admin/AdminApplicationDetail";
import Login from "./Components/auth/Login";
import Form from "./Components/Form/Form";
import UserApplicationDetails from "./Components/UserApplications/UserApplicationDetails";
import UserApplications from './Components/UserApplications/UserApplications'
import InternshipDetailsAndApply from "./SeeMore/InternshipDetailsAndApply";
import JobDetails from "./Jobs/JobDetails";
import PostJob from "./Admin/PostJob";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch(
          login({
            uid: authuser.uid,
            photo: authuser.photoURL,
            name: authuser.displayName,
            email: authuser.email,
            phoneNumber: authuser.phoneNumber,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home setLoggedIn={setLoggedIn} />} />
        <Route path="/form" element={<Form />} />

        <Route path="/internshipavl" element={<InternshipAvailable />} />
        <Route path="/internshipdetail" element={<InternshipsDetails />} />

        <Route
          path="/register"
          element={<Register setLoggedIn={setLoggedIn} />}
        />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

        <Route path="/internshipdetail" element={<InternshipsDetails />} />
        <Route path="/jobdetail" element={<JobDetails />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route
          path="/adminapplicationdetails"
          element={<AdminApplicationDetail />}
        />

        {/* Users */}
        <Route path="/userapplication" element={<UserApplications />} />
        <Route path="/userapplicationdetails" element={<UserApplicationDetails />} />
        

        {/* Application Details And Apply */}
        <Route path="/seemore" element={<InternshipDetailsAndApply />} />

        


        <Route path="/postinternships" element={<PostInternship />} />
        <Route path="/postjobs" element={<PostJob />} />

        <Route path="/application" element={<ViewAllApplication />} />
      </Routes>

      <FooterArea />
    </div>
  );
}

export default App;
