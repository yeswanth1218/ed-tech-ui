import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import StudentSidebar from './StudentSidebar';

const StudentResults = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  
  const departmentResults = [
    {
      department: 'Mathematics',
      myScore: 92,
      classAverage: 78,
      departmentAverage: 82,
      rank: 2,
      totalStudents: 45,
      grade: 'A+',
      improvement: '+5%'
    },
    {
      department: 'Science',
      myScore: 88,
      classAverage: 75,
      departmentAverage: 79,
      rank: 5,
      totalStudents: 45,
      grade: 'A',
      improvement: '+3%'
    },
    {
      department: 'English',
      myScore: 90,
      classAverage: 73,
      departmentAverage: 77,
      rank: 3,
      totalStudents: 45,
      grade: 'A+',
      improvement: '+7%'
    },
    {
      department: 'History',
      myScore: 85,
      classAverage: 71,
      departmentAverage: 74,
      rank: 8,
      totalStudents: 45,
      grade: 'A',
      improvement: '+2%'
    },
    {
      department: 'Physics',
      myScore: 87,
      classAverage: 69,
      departmentAverage: 72,
      rank: 4,
      totalStudents: 45,
      grade: 'A',
      improvement: '+4%'
    }
  ];

  const comparisonData = departmentResults.map(dept => ({
    subject: dept.department,
    'My Score': dept.myScore,
    'Class Average': dept.classAverage,
    'Department Average': dept.departmentAverage
  }));

  const gradeDistribution = [
    { grade: 'A+', count: 2, color: '#10b981' },
    { grade: 'A', count: 3, color: '#3b82f6' },
    { grade: 'B+', count: 0, color: '#f59e0b' },
    { grade: 'B', count: 0, color: '#ef4444' }
  ];

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+': return 'bg-green-100 text-green-800';
      case 'A': return 'bg-blue-100 text-blue-800';
      case 'B+': return 'bg-yellow-100 text-yellow-800';
      case 'B': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRankColor = (rank) => {
    if (rank <= 3) return 'text-green-600';
    if (rank <= 10) return 'text-blue-600';
    return 'text-gray-600';
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <StudentSidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Department Results</p>
                <p className="text-[#5c728a] text-base font-normal leading-normal">View your performance across all departments and subjects</p>
              </div>
              <div className="flex items-center gap-3">
                <select 
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="bg-white border border-[#d4dbe2] rounded-lg px-4 py-2 text-sm"
                >
                  <option value="all">All Departments</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                  <option value="history">History</option>
                  <option value="physics">Physics</option>
                </select>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <span className="material-icons" style={{fontSize: '20px'}}>download</span>
                  Export Results
                </button>
              </div>
            </div>

            {/* Overall Performance Summary */}
            <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Overall Average</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">88.4%</p>
                <p className="text-green-600 text-sm font-normal leading-normal">+4.2% from last term</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Class Rank</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">#3</p>
                <p className="text-blue-600 text-sm font-normal leading-normal">Top 7% of class</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Best Subject</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">Math</p>
                <p className="text-green-600 text-sm font-normal leading-normal">92% - Rank #2</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Grade Points</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">9.2</p>
                <p className="text-green-600 text-sm font-normal leading-normal">Excellent Performance</p>
              </div>
            </div>

            {/* Performance Comparison Chart */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] bg-white p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Performance Comparison</p>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="subject" />
                      <YAxis domain={[60, 100]} />
                      <Tooltip />
                      <Bar dataKey="My Score" fill="#3b82f6" name="My Score" />
                      <Bar dataKey="Class Average" fill="#10b981" name="Class Average" />
                      <Bar dataKey="Department Average" fill="#f59e0b" name="Department Average" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] bg-white p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Grade Distribution</p>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={gradeDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="count"
                        label={({grade, count}) => `${grade}: ${count}`}
                      >
                        {gradeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Detailed Results Table */}
            <div className="flex justify-between items-center px-4 pb-3 pt-5">
              <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Detailed Results by Department</h2>
            </div>
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#d4dbe2] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Department</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">My Score</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Class Avg</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Dept Avg</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Rank</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Grade</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentResults.map((result, index) => (
                      <tr key={index} className="border-t border-t-[#d4dbe2]">
                        <td className="h-[72px] px-4 py-2 text-[#101418] text-sm font-medium leading-normal">
                          {result.department}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-[#101418] text-sm font-bold leading-normal">
                          {result.myScore}%
                        </td>
                        <td className="h-[72px] px-4 py-2 text-[#5c728a] text-sm font-normal leading-normal">
                          {result.classAverage}%
                        </td>
                        <td className="h-[72px] px-4 py-2 text-[#5c728a] text-sm font-normal leading-normal">
                          {result.departmentAverage}%
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm font-bold leading-normal">
                          <span className={getRankColor(result.rank)}>#{result.rank}</span>
                          <span className="text-[#5c728a] text-xs">/{result.totalStudents}</span>
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getGradeColor(result.grade)}`}>
                            {result.grade}
                          </span>
                        </td>
                        <td className="h-[72px] px-4 py-2 text-green-600 text-sm font-medium leading-normal">
                          {result.improvement}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 p-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                View Detailed Analysis
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Compare with Peers
              </button>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                Set Improvement Goals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentResults;