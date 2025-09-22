import React from 'react';

import { ThemeProvider } from './contexts/ThemeContext';
import LandingPage from './components/LandingPage';
import AIChatbot from './components/AIChatbot';


function App() {
  return (
    <ThemeProvider>

      <div className="App">
        <LandingPage />
        {/* <Route path="/login" element={<Login />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
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
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-exams" element={<TeacherExams />} />
          <Route path="/teacher-analytics" element={<TeacherAnalytics />} />
          <Route path="/teacher-timetable" element={<TeacherTimetable />} />
          <Route path="/teacher-attendance" element={<TeacherAttendance />} />
          <Route path="/teacher-class" element={<TeacherClass />} />
          <Route path="/teacher-requests" element={<TeacherRequests />} />
          <Route path="/teacher-assessments" element={<TeacherAssessments />} />
          <Route path="/teacher-archive" element={<TeacherArchive />} />
          <Route path="/teacher-leaderboard" element={<TeacherLeaderboard />} />
          <Route path="/answer-sheet-upload" element={<AnswerSheetUpload />} />
          <Route path="/set-question-paper" element={<SetQuestionPaper />} />
          <Route path="/organization-exam-creation" element={<OrganizationExamCreation />} />
          <Route path="/profile" element={<UserProfile />} /> */}

        <AIChatbot />
      </div>

    </ThemeProvider>
  );
}

export default App;