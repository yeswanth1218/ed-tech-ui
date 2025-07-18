import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Departments from './components/Departments';
import DepartmentDetail from './components/DepartmentDetail';
import AdminPanel from './components/AdminPanel';
import StudentPerformance from './components/StudentPerformance';
import StudentProfile from './components/StudentProfile';
import StudentNews from './components/StudentNews';
import StudentResults from './components/StudentResults';
import StudentAnalytics from './components/StudentAnalytics';
import StudentArchive from './components/StudentArchive';
import StudentTimetable from './components/StudentTimetable';
import StudentFees from './components/StudentFees';
import StudentSettings from './components/StudentSettings';
import UploadPage from './components/UploadPage';
import UserProfile from './components/UserProfile';
import Evaluation from './components/Evaluation';
import Financials from './components/Financials';
import AIChatbot from './components/AIChatbot';


function App() {
  return (
    <ThemeProvider>
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:departmentId" element={<DepartmentDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/student-performance" element={<StudentPerformance />} />
          <Route path="/student/:id" element={<StudentProfile />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/student-news" element={<StudentNews />} />
          <Route path="/student-results" element={<StudentResults />} />
          <Route path="/student-analytics" element={<StudentAnalytics />} />
          <Route path="/student-timetable" element={<StudentTimetable />} />
          <Route path="/student-archive" element={<StudentArchive />} />
          <Route path="/student-fees" element={<StudentFees />} />
          <Route path="/student-settings" element={<StudentSettings />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <AIChatbot />
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;