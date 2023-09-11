import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./components/Home/LeftSection/SideNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Signup from "./pages/Auth/Signup";
import { useLocation } from "react-router-dom";
import Login from "./pages/Auth/Login";
import CourseDetail from "./pages/CourseDetail";
import UnitList from "./components/CourseDetail/UnitList";
import UnitDetail from "./components/CourseDetail/UnitDetails";
import Grades from "./pages/Grades";
import Termgrade from "./components/GradesComponents/GradeDetterm";
import Bunk from "./pages/Bunk";
import Sch from "./pages/Sch";
import Quizz from "./pages/Quizz";
import QuizzHome from "./components/Quizz/QuizzHome";
import Announcemnets from "./pages/Announcemnets";
import Events from "./pages/Events";

function App() {
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (
      location.pathname === "/signup" ||
      location.pathname === "/login" ||
      location.pathname.startsWith("/c/") ||
      location.pathname.startsWith("/quizz")
    ) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [location.pathname]);

  return (
    <>
    <div className="flex flex-row sm:p-5 bg-slate-100">
      <div className="hidden lg:block">
        {!isSidebarOpen ? null : <SideBar />}
      </div>
      <div className="h-screen overflow-y-scroll scrollbar-hidden sm:px-5 mx-auto">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/bunk" element={<Attendance />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/grades/:term" element={<Grades />} />
          <Route path="/c/:course_code" element={<CourseDetail />} />
          <Route path="/c/:course_code/units" element={<CourseDetail />} />
          <Route
            path="/c/:course_code/units/:unit_name/:material/:m_name"
            element={<UnitDetail />}
          />

          {/* schedule */}
          <Route path="/schedule" element={<Sch />} />


      {/* Quizz */}
      <Route path="/quizz" element={<QuizzHome/>} />
      <Route path="/quizz/:quizz_name" element={<Quizz/>} />

      <Route path="/announcements" element={<Announcemnets/>} />

      <Route path="/events" element={<Events/>} />

      </Routes>
</div>
</div>

    </>
  );
}

export default App;
