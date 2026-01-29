import React, { useState, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import AssignmentsPage from './pages/lms/AssignmentsPage';
import OnlineClassesPage from './pages/lms/OnlineClassesPage';
import ExamsPage from './pages/lms/ExamsPage';
import AttendancePage from './pages/lms/AttendancePage';
import AIAssistant from './components/AIAssistant';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

const App = () => {
  const [user, setUser] = useState(null);

  const login = (role) => {
    setUser({
      id: '1',
      name: 'John Doe',
      email: role === 'student' ? 'student@edu.com' : role === 'teacher' ? 'teacher@edu.com' : 'admin@edu.com',
      role: role,
      avatar: `https://i.pravatar.cc/150?u=${role}`
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
            <Route path="/courses" element={<><Navbar /><Courses /><Footer /></>} />
            <Route path="/teachers" element={<><Navbar /><Teachers /><Footer /></>} />
            <Route path="/admissions" element={<><Navbar /><Admissions /><Footer /></>} />
            <Route path="/gallery" element={<><Navbar /><Gallery /><Footer /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
            <Route path="/login" element={<Login />} />

            {/* Dashboard / LMS Routes */}
            <Route path="/dashboard/*" element={
              user ? (
                <DashboardLayout>
                  <Routes>
                    <Route index element={
                      user.role === 'student' ? <StudentDashboard /> :
                      user.role === 'teacher' ? <TeacherDashboard /> :
                      <AdminDashboard />
                    } />
                    <Route path="assignments" element={<AssignmentsPage />} />
                    <Route path="online-classes" element={<OnlineClassesPage />} />
                    <Route path="exams" element={<ExamsPage />} />
                    <Route path="attendance" element={<AttendancePage />} />
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                  </Routes>
                </DashboardLayout>
              ) : <Navigate to="/login" />
            } />
          </Routes>
          <AIAssistant />
        </div>
      </HashRouter>
    </AuthContext.Provider>
  );
};

export default App;