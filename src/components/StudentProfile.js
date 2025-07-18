import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import StudentSidebar from './StudentSidebar';
import Header from './Header';
import PermissionModal from './PermissionModal';

const StudentProfile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalActionType, setModalActionType] = useState('');

  const handleAddClick = (actionType) => {
    setModalActionType(actionType);
    setModalOpen(true);
  };

  const [examResults] = useState([
    { id: 1, examName: 'Mathematics Quiz 1', score: 92, date: '2024-01-15', status: 'Completed', subject: 'Math' },
    { id: 2, examName: 'Science Test', score: 88, date: '2024-01-14', status: 'Completed', subject: 'Science' },
    { id: 3, examName: 'History Essay', score: 85, date: '2024-01-13', status: 'Completed', subject: 'History' },
    { id: 4, examName: 'English Literature', score: 90, date: '2024-01-12', status: 'Completed', subject: 'English' },
    { id: 5, examName: 'Physics Lab Report', score: 87, date: '2024-01-11', status: 'Completed', subject: 'Physics' }
  ]);

  const performanceData = [
    { month: 'Jan', score: 85 },
    { month: 'Feb', score: 88 },
    { month: 'Mar', score: 82 },
    { month: 'Apr', score: 90 },
    { month: 'May', score: 87 },
    { month: 'Jun', score: 92 }
  ];

  const subjectData = [
    { subject: 'Math', score: 92 },
    { subject: 'Science', score: 88 },
    { subject: 'History', score: 85 },
    { subject: 'English', score: 90 },
    { subject: 'Physics', score: 87 }
  ];

  const studentInfo = {
    name: 'Alice Johnson',
    studentId: 'STU-2024-001',
    class: '12th Grade',
    section: 'A',
    averageScore: 88.4,
    totalExams: 24,
    studentsEvaluated: 1, // For individual student view
    rank: 3,
    totalStudents: 45
  };



  const getScoreBadgeColor = (score) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 80) return 'bg-blue-100 text-blue-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="Student Portal" />
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <StudentSidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Student Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">{studentInfo.name}</p>
                <div className="flex items-center gap-4 text-[#5c728a] text-sm">
                  <span>ID: {studentInfo.studentId}</span>
                  <span>•</span>
                  <span>Class: {studentInfo.class}</span>
                  <span>•</span>
                  <span>Section: {studentInfo.section}</span>
                  <span>•</span>
                  <span>Rank: {studentInfo.rank}/{studentInfo.totalStudents}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Download Report
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Share Progress
                </button>
              </div>
            </div>

            {/* Performance Statistics */}
            <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-3">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Average Score</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{studentInfo.averageScore}%</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">+2.3% from last month</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Total Exams</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{studentInfo.totalExams}</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Completed this year</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Class Rank</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">#{studentInfo.rank}</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Out of {studentInfo.totalStudents} students</p>
              </div>
            </div>

            {/* Performance Trends */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] bg-white p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Performance Trends</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[70, 100]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] bg-white p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Subject Performance</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={subjectData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="subject" />
                      <YAxis domain={[70, 100]} />
                      <Tooltip />
                      <Bar dataKey="score" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent Exam Results */}
            <div className="flex justify-between items-center px-4 pb-3 pt-5">
              <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Recent Exam Results</h2>
              <button 
                onClick={() => handleAddClick('exam result')}
                className="bg-black hover:bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <span className="material-icons" style={{fontSize: '20px'}}>add</span>
              </button>
            </div>
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#d4dbe2] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-[#101418] w-[250px] text-sm font-medium leading-normal">Exam</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[120px] text-sm font-medium leading-normal">Subject</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[100px] text-sm font-medium leading-normal">Score</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[120px] text-sm font-medium leading-normal">Date</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[100px] text-sm font-medium leading-normal">Status</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[100px] text-sm font-medium leading-normal">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examResults.map((result) => (
                      <tr key={result.id} className="border-t border-t-[#d4dbe2]">
                        <td className="h-[72px] px-4 py-2 w-[250px] text-[#101418] text-sm font-normal leading-normal">
                          {result.examName}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[120px] text-[#5c728a] text-sm font-normal leading-normal">
                          {result.subject}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[100px] text-sm font-normal leading-normal">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getScoreBadgeColor(result.score)}`}>
                            {result.score}%
                          </span>
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[120px] text-[#5c728a] text-sm font-normal leading-normal">
                          {result.date}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[100px] text-sm font-normal leading-normal">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {result.status}
                          </span>
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[100px] text-[#5c728a] text-sm font-bold leading-normal tracking-[0.015em]">
                          <button className="hover:text-[#101418] transition-colors cursor-pointer">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Study Recommendations */}
            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Study Recommendations</h2>
            <div className="px-4 py-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
                  <h3 className="text-blue-800 text-lg font-medium mb-3">Strengths</h3>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• Excellent performance in Mathematics (92%)</li>
                    <li>• Strong analytical skills in Physics</li>
                    <li>• Consistent improvement over time</li>
                    <li>• Good problem-solving abilities</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-6">
                  <h3 className="text-yellow-800 text-lg font-medium mb-3">Areas for Improvement</h3>
                  <ul className="text-yellow-700 text-sm space-y-2">
                    <li>• Focus more on History concepts (85%)</li>
                    <li>• Practice essay writing for English</li>
                    <li>• Review Science fundamentals</li>
                    <li>• Time management during exams</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Goals and Targets */}
            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Goals & Targets</h2>
            <div className="px-4 py-3">
              <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="material-icons text-green-600" style={{fontSize: '32px'}}>trending_up</span>
                    </div>
                    <h3 className="font-medium text-[#101418] mb-2">Target Average</h3>
                    <p className="text-2xl font-bold text-green-600">90%</p>
                    <p className="text-sm text-[#5c728a]">Current: 88.4%</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="material-icons text-blue-600" style={{fontSize: '32px'}}>emoji_events</span>
                    </div>
                    <h3 className="font-medium text-[#101418] mb-2">Target Rank</h3>
                    <p className="text-2xl font-bold text-blue-600">#1</p>
                    <p className="text-sm text-[#5c728a]">Current: #3</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="material-icons text-purple-600" style={{fontSize: '32px'}}>school</span>
                    </div>
                    <h3 className="font-medium text-[#101418] mb-2">Next Milestone</h3>
                    <p className="text-lg font-bold text-purple-600">Honor Roll</p>
                    <p className="text-sm text-[#5c728a]">2% to go</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 p-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Schedule Study Session
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Request Tutoring
              </button>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                View Study Materials
              </button>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Contact Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <PermissionModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actionType={modalActionType}
      />
    </div>
  );
};

export default StudentProfile;