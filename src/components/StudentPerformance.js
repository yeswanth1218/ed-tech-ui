import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Sidebar from './Sidebar';
import Header from './Header';

const StudentPerformance = () => {
  const [selectedStudent, setSelectedStudent] = useState('Alice Johnson');
  
  const studentData = {
    name: 'Alice Johnson',
    grade: 'A',
    averageScore: 87.5,
    attendanceRate: 95.2,
    totalExams: 24,
    completedAssignments: 18,
    pendingAssignments: 3
  };

  const subjectPerformance = [
    { subject: 'Mathematics', score: 92, grade: 'A', trend: '+5%' },
    { subject: 'Science', score: 88, grade: 'B+', trend: '+2%' },
    { subject: 'History', score: 85, grade: 'B', trend: '-1%' },
    { subject: 'English Literature', score: 90, grade: 'A-', trend: '+3%' },
    { subject: 'Physics', score: 84, grade: 'B', trend: '+1%' },
    { subject: 'Chemistry', score: 89, grade: 'B+', trend: '+4%' }
  ];

  const performanceTrend = [
    { month: 'Jan', score: 82 },
    { month: 'Feb', score: 85 },
    { month: 'Mar', score: 83 },
    { month: 'Apr', score: 88 },
    { month: 'May', score: 87 },
    { month: 'Jun', score: 90 }
  ];

  const gradeDistribution = [
    { name: 'A', value: 35, color: '#10b981' },
    { name: 'B', value: 40, color: '#3b82f6' },
    { name: 'C', value: 20, color: '#f59e0b' },
    { name: 'D', value: 5, color: '#ef4444' }
  ];

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-100';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100';
    if (grade.startsWith('C')) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-green-600';
    if (trend.startsWith('-')) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="Student Performance" />
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <Sidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Student Performance</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Detailed academic performance analysis for individual students.</p>
              </div>
              <div className="flex items-center gap-3">
                <select 
                  value={selectedStudent}
                  onChange={(e) => setSelectedStudent(e.target.value)}
                  className="px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Alice Johnson">Alice Johnson</option>
                  <option value="Bob Williams">Bob Williams</option>
                  <option value="Charlie Davis">Charlie Davis</option>
                  <option value="Diana Evans">Diana Evans</option>
                </select>
              </div>
            </div>

            {/* Student Overview Cards */}
            <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Overall Grade</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{studentData.grade}</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Current semester</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Average Score</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{studentData.averageScore}%</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Across all subjects</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Attendance Rate</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{studentData.attendanceRate}%</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">This semester</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Total Exams</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{studentData.totalExams}</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Completed this year</p>
              </div>
            </div>

            {/* Performance Charts */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] bg-white p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Performance Trend</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceTrend}>
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
                <p className="text-[#101418] text-base font-medium leading-normal">Grade Distribution</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={gradeDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {gradeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-2">
                  {gradeDistribution.map((item) => (
                    <div key={item.name} className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                      <span className="text-sm text-[#5c728a]">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subject Performance Table */}
            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Subject Performance</h2>
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#d4dbe2] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-[#101418] w-[250px] text-sm font-medium leading-normal">Subject</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[100px] text-sm font-medium leading-normal">Score</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[100px] text-sm font-medium leading-normal">Grade</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[100px] text-sm font-medium leading-normal">Trend</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[150px] text-sm font-medium leading-normal">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectPerformance.map((subject, index) => (
                      <tr key={index} className="border-t border-t-[#d4dbe2]">
                        <td className="h-[72px] px-4 py-2 w-[250px] text-[#101418] text-sm font-normal leading-normal">
                          {subject.subject}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[100px] text-[#101418] text-sm font-bold leading-normal">
                          {subject.score}%
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[100px] text-sm font-normal leading-normal">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getGradeColor(subject.grade)}`}>
                            {subject.grade}
                          </span>
                        </td>
                        <td className={`h-[72px] px-4 py-2 w-[100px] text-sm font-bold leading-normal ${getTrendColor(subject.trend)}`}>
                          {subject.trend}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[150px] text-[#5c728a] text-sm font-bold leading-normal tracking-[0.015em]">
                          <button className="hover:text-[#101418] transition-colors cursor-pointer mr-3">
                            View Details
                          </button>
                          <button className="hover:text-[#101418] transition-colors cursor-pointer">
                            Report
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Assignment Status */}
            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Assignment Status</h2>
            <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-3">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Completed</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{studentData.completedAssignments}</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Assignments submitted</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Pending</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{studentData.pendingAssignments}</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Due this week</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Completion Rate</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">
                  {Math.round((studentData.completedAssignments / (studentData.completedAssignments + studentData.pendingAssignments)) * 100)}%
                </p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">This semester</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 p-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Generate Report
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Send to Parent
              </button>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                Schedule Meeting
              </button>
              <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPerformance;