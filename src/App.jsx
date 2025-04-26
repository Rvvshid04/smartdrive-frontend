import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import AdminDash from "./pages/AdminDash";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Instructors from "./pages/Instructors";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointments from "./pages/Appointments";
import Lesson from './pages/Lesson';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import InstructorDash from './pages/InstructorDash';
import StudentDash from './pages/StudentDash';
import Library from './pages/Library';
import CourseManagementDash from './pages/CourseManagementDash';
import CourseDetails from './pages/CourseDetails';
import QuizPage from './pages/QuizPage';
import StudentSupport from './pages/StudentSupport';
import Announcements from './pages/Announcements';
import ScrollToTopButton from './components/ScrollToTopButton';
import CourseSelection from './pages/CourseSelection';
import Notifications from './components/Notifications';
import Profile from './pages/Profile';
import Journey from './pages/Journey';
import BookSession from './pages/BookSession';
import AdminUsers from './pages/AdminUsers';

function App() {

  return (
    <>
      <div className="w-full">
            <Routes>
              <Route path='/' element={<LandingPage/>} />
              <Route path='/Home' element={<Home/>} />
              <Route path='/instructors' element={<Instructors/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/my-profile' element={<MyProfile/>} />
              <Route path='/my-appointments' element={<MyAppointments/>} />
              <Route path='/appointment' element={<Appointments/>} />
              <Route path='/admin' element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDash />
                </ProtectedRoute>
              }/>
              <Route path='/instructor' element={<InstructorDash/>} />
              <Route path='/student' element={<StudentDash/>} />
              <Route path='/lesson' element={<Lesson />} />
              <Route path='/register' element={<Register />} />
              <Route path="/student/library" element={<Library />} />
              <Route path="/admin/course-management" element={<CourseManagementDash />} />
              <Route path="/student/course/:courseId" element={<CourseDetails />} />
              <Route path="/student/course/:courseId/quiz/:quizId" element={<QuizPage />} />
              <Route path="/student/support" element={<StudentSupport />} />
              <Route path="/student/announcements" element={<Announcements />} />
              <Route path="/course-selection" element={<CourseSelection />} />
              <Route path="/student/notifications" element={<Notifications/>}/>
              <Route path="/student/profile" element={<Profile />} />
              <Route path="/student/journey" element={<Journey />} />
              <Route path="/student/book-session" element={<BookSession />} />
              <Route path="/admin/users" element={<AdminUsers/>} />
              <Route path="/unauthorized" element={<div>Not allowed</div>} />
            </Routes> 
            <ScrollToTopButton />
      </div>
    </>
  )
}

export default App;
