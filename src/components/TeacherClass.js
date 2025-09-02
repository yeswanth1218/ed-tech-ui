import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherClass = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  const classInfo = {
    className: '12-A',
    totalStudents: 45,
    subject: 'Mathematics',
    academicYear: '2023-24',
    classTeacher: 'Dr. Sarah Wilson'
  };

  const students = [
    {
      id: 1,
      name: 'Ananya Gupta',
      rollNo: 'MA001',
      attendance: 94,
      avgGrade: 'A+',
      lastScore: 96,
      parentContact: '+1-555-0101',
      email: 'emma.thompson@school.edu',
      performance: 'excellent',
      behaviorScore: 9.2,
      subjects: {
        mathematics: 96,
        physics: 92,
        chemistry: 89,
        english: 94
      }
    },
    {
      id: 2,
      name: 'Rohan Mehta',
      rollNo: 'MA002',
      attendance: 89,
      avgGrade: 'A',
      lastScore: 92,
      parentContact: '+1-555-0102',
      email: 'david.kim@school.edu',
      performance: 'good',
      behaviorScore: 8.8,
      subjects: {
        mathematics: 92,
        physics: 88,
        chemistry: 91,
        english: 87
      }
    },
    {
      id: 3,
      name: 'Priya Patel',
      rollNo: 'MA003',
      attendance: 76,
      avgGrade: 'C+',
      lastScore: 68,
      parentContact: '+1-555-0103',
      email: 'sarah.chen@school.edu',
      performance: 'needs_improvement',
      behaviorScore: 7.5,
      subjects: {
        mathematics: 68,
        physics: 72,
        chemistry: 65,
        english: 74
      }
    },
    {
      id: 4,
      name: 'Vikram Singh',
      rollNo: 'MA004',
      attendance: 72,
      avgGrade: 'D+',
      lastScore: 58,
      parentContact: '+1-555-0104',
      email: 'michael.rodriguez@school.edu',
      performance: 'at_risk',
      behaviorScore: 6.8,
      subjects: {
        mathematics: 58,
        physics: 62,
        chemistry: 55,
        english: 61
      }
    },
    {
      id: 5,
      name: 'Arjun Sharma',
      rollNo: 'MA005',
      attendance: 68,
      avgGrade: 'D',
      lastScore: 45,
      parentContact: '+1-555-0105',
      email: 'alex.johnson@school.edu',
      performance: 'at_risk',
      behaviorScore: 6.2,
      subjects: {
        mathematics: 45,
        physics: 48,
        chemistry: 42,
        english: 52
      }
    }
  ];

  const classStats = {
    avgAttendance: Math.round(students.reduce((sum, s) => sum + s.attendance, 0) / students.length),
    topPerformers: students.filter(s => s.performance === 'excellent').length,
    needsAttention: students.filter(s => s.performance === 'at_risk').length,
    avgBehaviorScore: (students.reduce((sum, s) => sum + s.behaviorScore, 0) / students.length).toFixed(1)
  };

  const recentActivities = [
    {
      type: 'assignment',
      title: 'Mathematics Assignment 5 submitted',
      student: 'Ananya Gupta',
      time: '2 hours ago',
      status: 'completed'
    },
    {
      type: 'absence',
      title: 'Absent from morning session',
      student: 'Arjun Sharma',
      time: '1 day ago',
      status: 'pending'
    },
    {
      type: 'parent_meeting',
      title: 'Parent meeting scheduled',
      student: 'Vikram Singh',
      time: '2 days ago',
      status: 'scheduled'
    },
    {
      type: 'achievement',
      title: 'Scored 98% in Physics test',
      student: 'Rohan Mehta',
      time: '3 days ago',
      status: 'completed'
    }
  ];

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'excellent': return 'text-green-600 bg-green-50 border-green-200';
      case 'good': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'needs_improvement': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'at_risk': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-orange-600';
    return 'text-red-600';
  };

  const StudentCard = ({ student }) => (
    <div className="bg-white rounded-xl p-4 border border-[#d4dbe2] hover:shadow-md transition-all cursor-pointer"
         onClick={() => setSelectedStudent(student)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="material-icons text-blue-600">person</span>
          </div>
          <div>
            <h3 className="font-semibold text-[#101418]">{student.name}</h3>
            <p className="text-sm text-[#5c728a]">Roll No: {student.rollNo}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getPerformanceColor(student.performance)}`}>
          {student.performance.replace('_', ' ').toUpperCase()}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-[#5c728a]">Attendance</p>
          <p className="font-semibold text-[#101418]">{student.attendance}%</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Avg Grade</p>
          <p className={`font-semibold ${getGradeColor(student.avgGrade)}`}>{student.avgGrade}</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Last Score</p>
          <p className="font-semibold text-[#101418]">{student.lastScore}%</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Behavior</p>
          <p className="font-semibold text-[#101418]">{student.behaviorScore}/10</p>
        </div>
      </div>
      
      <div className="mt-3 flex gap-2">
        <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
          View Profile
        </button>
        <button className="flex-1 px-3 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
          Contact Parent
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto" style={{backgroundColor: '#f0f2f5'}}>
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#101418] mb-2">Class {classInfo.className} - My Responsible Class</h1>
              <p className="text-[#5c728a]">Comprehensive management of your assigned class</p>
            </div>

            {/* Class Overview */}
            <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] mb-6 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-blue-200 hover:scale-110 transition-all duration-200 cursor-pointer">
                    <span className="material-icons text-blue-600 text-2xl hover:text-blue-800 transition-colors duration-200">school</span>
                  </div>
                  <h3 className="font-semibold text-[#101418] mb-1">Class {classInfo.className}</h3>
                  <p className="text-sm text-[#5c728a]">{classInfo.totalStudents} Students</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-green-200 hover:scale-110 transition-all duration-200 cursor-pointer">
                    <span className="material-icons text-green-600 text-2xl hover:text-green-800 transition-colors duration-200">how_to_reg</span>
                  </div>
                  <h3 className="font-semibold text-[#101418] mb-1">{classStats.avgAttendance}%</h3>
                  <p className="text-sm text-[#5c728a]">Avg Attendance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-purple-200 hover:scale-110 transition-all duration-200 cursor-pointer">
                    <span className="material-icons text-purple-600 text-2xl hover:text-purple-800 transition-colors duration-200">star</span>
                  </div>
                  <h3 className="font-semibold text-[#101418] mb-1">{classStats.topPerformers}</h3>
                  <p className="text-sm text-[#5c728a]">Top Performers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-orange-200 hover:scale-110 transition-all duration-200 cursor-pointer">
                    <span className="material-icons text-orange-600 text-2xl hover:text-orange-800 transition-colors duration-200">warning</span>
                  </div>
                  <h3 className="font-semibold text-[#101418] mb-1">{classStats.needsAttention}</h3>
                  <p className="text-sm text-[#5c728a]">Need Attention</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl border border-[#d4dbe2] mb-6">
              <div className="flex p-2 overflow-x-auto">
                {[
                  { id: 'overview', label: 'Class Overview', icon: 'dashboard' },
                  { id: 'students', label: 'Student Profiles', icon: 'groups' },
                  { id: 'performance', label: 'Performance Analysis', icon: 'analytics' },
                  { id: 'activities', label: 'Recent Activities', icon: 'history' },
                  { id: 'communications', label: 'Parent Communications', icon: 'message' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-4 py-2 mx-1 font-medium transition-all duration-300 whitespace-nowrap rounded-full ${
                      activeTab === tab.id
                        ? 'text-white bg-blue-600 shadow-lg shadow-purple-500/30 transform -translate-y-0.5'
                        : 'text-[#5c728a] hover:text-[#101418] hover:bg-gray-100 hover:shadow-md hover:shadow-purple-300/20'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-icons" style={{fontSize: '20px'}}>{tab.icon}</span>
                      {tab.label}
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Quick Stats */}
                      <div>
                        <h3 className="font-semibold text-[#101418] mb-4">Class Statistics</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-[#101418]">Average Attendance</span>
                            <span className="font-semibold text-green-600">{classStats.avgAttendance}%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-[#101418]">Top Performers</span>
                            <span className="font-semibold text-blue-600">{classStats.topPerformers} students</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-[#101418]">Need Attention</span>
                            <span className="font-semibold text-orange-600">{classStats.needsAttention} students</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-[#101418]">Avg Behavior Score</span>
                            <span className="font-semibold text-purple-600">{classStats.avgBehaviorScore}/10</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Recent Activities */}
                      <div>
                        <h3 className="font-semibold text-[#101418] mb-4">Recent Activities</h3>
                        <div className="space-y-3">
                          {recentActivities.slice(0, 4).map((activity, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="material-icons text-blue-600" style={{fontSize: '16px'}}>
                                  {activity.type === 'assignment' ? 'assignment' :
                                   activity.type === 'absence' ? 'event_busy' :
                                   activity.type === 'parent_meeting' ? 'meeting_room' : 'star'}
                                </span>
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-[#101418] text-sm">{activity.title}</p>
                                <p className="text-xs text-[#5c728a]">{activity.student} • {activity.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'students' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-[#101418]">Student Profiles</h3>
                      <div className="flex gap-2">
                        <select className="px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm">
                          <option>All Students</option>
                          <option>Top Performers</option>
                          <option>Need Attention</option>
                          <option>At Risk</option>
                        </select>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Add Student
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {students.map(student => (
                        <StudentCard key={student.id} student={student} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'performance' && (
                  <div className="space-y-6">
                    <h3 className="font-semibold text-[#101418]">Class Performance Analysis</h3>
                    
                    {/* Performance Distribution */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-[#101418] mb-4">Grade Distribution</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">A Grade (90-100%)</span>
                            <span className="font-semibold text-green-600">12 students</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">B Grade (80-89%)</span>
                            <span className="font-semibold text-blue-600">18 students</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">C Grade (70-79%)</span>
                            <span className="font-semibold text-orange-600">10 students</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">D Grade (60-69%)</span>
                            <span className="font-semibold text-red-600">5 students</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-[#101418] mb-4">Subject Performance</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Mathematics</span>
                            <span className="font-semibold text-[#101418]">78.2%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Physics</span>
                            <span className="font-semibold text-[#101418]">76.8%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Chemistry</span>
                            <span className="font-semibold text-[#101418]">74.4%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">English</span>
                            <span className="font-semibold text-[#101418]">79.6%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'activities' && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#101418]">Recent Class Activities</h3>
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="material-icons text-blue-600">
                              {activity.type === 'assignment' ? 'assignment' :
                               activity.type === 'absence' ? 'event_busy' :
                               activity.type === 'parent_meeting' ? 'meeting_room' : 'star'}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-[#101418]">{activity.title}</h4>
                            <p className="text-sm text-[#5c728a]">{activity.student} • {activity.time}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            activity.status === 'completed' ? 'bg-green-100 text-green-600' :
                            activity.status === 'pending' ? 'bg-orange-100 text-orange-600' :
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {activity.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'communications' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-[#101418]">Parent Communications</h3>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                        Send Class Announcement
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-[#101418] mb-4">Recent Messages</h4>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded-lg">
                            <p className="font-medium text-[#101418] text-sm">Parent Meeting Request</p>
                            <p className="text-xs text-[#5c728a]">Mrs. Rodriguez • 2 hours ago</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="font-medium text-[#101418] text-sm">Homework Clarification</p>
                            <p className="text-xs text-[#5c728a]">Mr. Kim • 1 day ago</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="font-medium text-[#101418] text-sm">Absence Notification</p>
                            <p className="text-xs text-[#5c728a]">Mrs. Johnson • 2 days ago</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-[#101418] mb-4">Scheduled Meetings</h4>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded-lg">
                            <p className="font-medium text-[#101418] text-sm">Parent-Teacher Conference</p>
                            <p className="text-xs text-[#5c728a]">Tomorrow, 3:00 PM • Mrs. Chen</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="font-medium text-[#101418] text-sm">Academic Review Meeting</p>
                            <p className="text-xs text-[#5c728a]">Friday, 2:00 PM • Mr. Rodriguez</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherClass;