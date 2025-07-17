import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Sidebar from './Sidebar';
import Header from './Header';
import PermissionModal from './PermissionModal';

const Evaluation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalActionType, setModalActionType] = useState('');

  const handleAddClick = (actionType) => {
    setModalActionType(actionType);
    setModalOpen(true);
  };

  const [examResults] = useState([
    { id: 1, studentName: 'Alice Johnson', examName: 'Math Quiz 1', score: 85, date: '2024-01-15', status: 'Completed' },
    { id: 2, studentName: 'Bob Williams', examName: 'Science Test', score: 92, date: '2024-01-14', status: 'Completed' },
    { id: 3, studentName: 'Charlie Davis', examName: 'History Essay', score: 78, date: '2024-01-13', status: 'Completed' },
    { id: 4, studentName: 'Diana Evans', examName: 'English Literature', score: 88, date: '2024-01-12', status: 'Completed' },
    { id: 5, studentName: 'Edward Miller', examName: 'Physics Lab', score: 95, date: '2024-01-11', status: 'Completed' }
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
    { subject: 'Math', score: 85 },
    { subject: 'Science', score: 92 },
    { subject: 'History', score: 78 },
    { subject: 'English', score: 88 },
    { subject: 'Physics', score: 95 }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="Student Performance Evaluation" />
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <Sidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Student Performance Overview</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Track and analyze student performance across all exams and subjects.</p>
              </div>
            </div>

            {/* Performance Statistics */}
            <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-3">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Average Score</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">87.6%</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">+2.3% from last month</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Total Exams</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">156</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">+12 this week</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Students Evaluated</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">342</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Active this month</p>
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
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
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
                      <YAxis />
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
                      <th className="px-4 py-3 text-left text-[#101418] w-[200px] text-sm font-medium leading-normal">Student</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[200px] text-sm font-medium leading-normal">Exam</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[100px] text-sm font-medium leading-normal">Score</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[120px] text-sm font-medium leading-normal">Date</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[100px] text-sm font-medium leading-normal">Status</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[100px] text-sm font-medium leading-normal">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examResults.map((result) => (
                      <tr key={result.id} className="border-t border-t-[#d4dbe2]">
                        <td className="h-[72px] px-4 py-2 w-[200px] text-[#101418] text-sm font-normal leading-normal">
                          {result.studentName}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[200px] text-[#5c728a] text-sm font-normal leading-normal">
                          {result.examName}
                        </td>
                        <td className={`h-[72px] px-4 py-2 w-[100px] text-sm font-bold leading-normal ${getScoreColor(result.score)}`}>
                          {result.score}%
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

            {/* Filter and Export Options */}
            <div className="flex flex-wrap gap-3 p-4">
              <div className="flex items-center gap-3">
                <select className="px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Filter by Subject</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="history">History</option>
                  <option value="english">English</option>
                  <option value="physics">Physics</option>
                </select>
                <select className="px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Filter by Date Range</option>
                  <option value="week">Last Week</option>
                  <option value="month">Last Month</option>
                  <option value="quarter">Last Quarter</option>
                  <option value="year">Last Year</option>
                </select>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Apply Filters
                </button>
              </div>
              <div className="flex items-center gap-3 ml-auto">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Export to CSV
                </button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                  Generate Report
                </button>
              </div>
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

export default Evaluation;