import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherLeaderboard = () => {
  const [activeTab, setActiveTab] = useState('academic');
  const [selectedClass, setSelectedClass] = useState('12-A');
  const [selectedPeriod, setSelectedPeriod] = useState('current_month');
  const [selectedSubject, setSelectedSubject] = useState('all');
  
  const academicLeaderboard = [
    {
      rank: 1,
      studentId: 1,
      name: 'Emma Thompson',
      rollNo: 'MA001',
      class: '12-A',
      overallScore: 96.5,
      gpa: 9.2,
      subjects: {
        mathematics: 95,
        physics: 92,
        chemistry: 89,
        english: 94
      },
      trend: 'up',
      previousRank: 2,
      achievements: ['Mathematics Olympiad Winner', 'Perfect Attendance'],
      totalPoints: 2850
    },
    {
      rank: 2,
      studentId: 2,
      name: 'David Kim',
      rollNo: 'MA002',
      class: '12-A',
      overallScore: 92.8,
      gpa: 8.8,
      subjects: {
        mathematics: 92,
        physics: 88,
        chemistry: 91,
        english: 87
      },
      trend: 'same',
      previousRank: 2,
      achievements: ['Science Fair Participant', 'Debate Team Member'],
      totalPoints: 2784
    },
    {
      rank: 3,
      studentId: 3,
      name: 'Sarah Chen',
      rollNo: 'MA003',
      class: '12-A',
      overallScore: 89.2,
      gpa: 8.5,
      subjects: {
        mathematics: 88,
        physics: 85,
        chemistry: 92,
        english: 91
      },
      trend: 'up',
      previousRank: 4,
      achievements: ['Chemistry Excellence Award'],
      totalPoints: 2676
    },
    {
      rank: 4,
      studentId: 4,
      name: 'Michael Rodriguez',
      rollNo: 'MA004',
      class: '12-A',
      overallScore: 87.5,
      gpa: 8.2,
      subjects: {
        mathematics: 85,
        physics: 89,
        chemistry: 86,
        english: 90
      },
      trend: 'down',
      previousRank: 3,
      achievements: ['Sports Captain', 'Leadership Award'],
      totalPoints: 2625
    },
    {
      rank: 5,
      studentId: 5,
      name: 'Lisa Park',
      rollNo: 'MA005',
      class: '12-A',
      overallScore: 85.7,
      gpa: 8.0,
      subjects: {
        mathematics: 83,
        physics: 87,
        chemistry: 84,
        english: 89
      },
      trend: 'up',
      previousRank: 6,
      achievements: ['Art Competition Winner'],
      totalPoints: 2571
    }
  ];

  const attendanceLeaderboard = [
    {
      rank: 1,
      studentId: 1,
      name: 'Emma Thompson',
      rollNo: 'MA001',
      class: '12-A',
      attendanceRate: 98.5,
      totalClasses: 200,
      attendedClasses: 197,
      consecutiveDays: 45,
      lateArrivals: 0,
      trend: 'up'
    },
    {
      rank: 2,
      studentId: 6,
      name: 'Alex Johnson',
      rollNo: 'MA006',
      class: '12-A',
      attendanceRate: 96.8,
      totalClasses: 200,
      attendedClasses: 194,
      consecutiveDays: 32,
      lateArrivals: 2,
      trend: 'same'
    },
    {
      rank: 3,
      studentId: 2,
      name: 'David Kim',
      rollNo: 'MA002',
      class: '12-A',
      attendanceRate: 95.2,
      totalClasses: 200,
      attendedClasses: 190,
      consecutiveDays: 28,
      lateArrivals: 1,
      trend: 'up'
    }
  ];

  const behaviorLeaderboard = [
    {
      rank: 1,
      studentId: 1,
      name: 'Emma Thompson',
      rollNo: 'MA001',
      class: '12-A',
      behaviorScore: 9.8,
      participationScore: 9.5,
      respectScore: 10.0,
      responsibilityScore: 9.7,
      incidents: 0,
      commendations: 8,
      trend: 'up'
    },
    {
      rank: 2,
      studentId: 4,
      name: 'Michael Rodriguez',
      rollNo: 'MA004',
      class: '12-A',
      behaviorScore: 9.5,
      participationScore: 9.8,
      respectScore: 9.2,
      responsibilityScore: 9.5,
      incidents: 0,
      commendations: 6,
      trend: 'same'
    },
    {
      rank: 3,
      studentId: 3,
      name: 'Sarah Chen',
      rollNo: 'MA003',
      class: '12-A',
      behaviorScore: 9.2,
      participationScore: 9.0,
      respectScore: 9.5,
      responsibilityScore: 9.1,
      incidents: 0,
      commendations: 4,
      trend: 'up'
    }
  ];

  const extracurricularLeaderboard = [
    {
      rank: 1,
      studentId: 4,
      name: 'Michael Rodriguez',
      rollNo: 'MA004',
      class: '12-A',
      totalActivities: 5,
      leadershipRoles: 2,
      competitionsWon: 3,
      volunteerHours: 45,
      activities: ['Basketball Team Captain', 'Student Council', 'Debate Club', 'Math Olympiad', 'Community Service'],
      trend: 'up'
    },
    {
      rank: 2,
      studentId: 2,
      name: 'David Kim',
      rollNo: 'MA002',
      class: '12-A',
      totalActivities: 4,
      leadershipRoles: 1,
      competitionsWon: 2,
      volunteerHours: 32,
      activities: ['Science Club', 'Debate Team', 'Chess Club', 'Environmental Club'],
      trend: 'same'
    },
    {
      rank: 3,
      studentId: 5,
      name: 'Lisa Park',
      rollNo: 'MA005',
      class: '12-A',
      totalActivities: 4,
      leadershipRoles: 1,
      competitionsWon: 1,
      volunteerHours: 28,
      activities: ['Art Club President', 'Drama Society', 'Music Band', 'Photography Club'],
      trend: 'up'
    }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return { icon: 'trending_up', color: 'text-green-600' };
      case 'down': return { icon: 'trending_down', color: 'text-red-600' };
      case 'same': return { icon: 'trending_flat', color: 'text-gray-600' };
      default: return { icon: 'trending_flat', color: 'text-gray-600' };
    }
  };

  const getRankBadge = (rank) => {
    if (rank === 1) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (rank === 2) return 'bg-gray-100 text-gray-800 border-gray-200';
    if (rank === 3) return 'bg-orange-100 text-orange-800 border-orange-200';
    return 'bg-blue-100 text-blue-800 border-blue-200';
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  const AcademicLeaderboardCard = ({ student }) => {
    const trendData = getTrendIcon(student.trend);
    
    return (
      <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold ${getRankBadge(student.rank)}`}>
              {getRankIcon(student.rank)}
            </div>
            <div>
              <h3 className="font-semibold text-[#101418]">{student.name}</h3>
              <p className="text-sm text-[#5c728a]">{student.rollNo} • {student.class}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`material-icons ${trendData.color}`}>{trendData.icon}</span>
            <div className="text-right">
              <p className="font-semibold text-[#101418]">{student.overallScore}%</p>
              <p className="text-sm text-[#5c728a]">GPA: {student.gpa}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3 mb-4">
          {Object.entries(student.subjects).map(([subject, score]) => (
            <div key={subject} className="text-center p-2 bg-gray-50 rounded-lg">
              <p className="text-xs text-[#5c728a] capitalize">{subject.slice(0, 4)}</p>
              <p className="font-semibold text-[#101418]">{score}%</p>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm">
            <p className="text-[#5c728a]">Total Points: <span className="font-semibold text-[#101418]">{student.totalPoints}</span></p>
            <p className="text-[#5c728a]">Previous Rank: #{student.previousRank}</p>
          </div>
          
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
              View Details
            </button>
            <button className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
              Send Praise
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AttendanceLeaderboardCard = ({ student }) => {
    const trendData = getTrendIcon(student.trend);
    
    return (
      <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold ${getRankBadge(student.rank)}`}>
              {getRankIcon(student.rank)}
            </div>
            <div>
              <h3 className="font-semibold text-[#101418]">{student.name}</h3>
              <p className="text-sm text-[#5c728a]">{student.rollNo} • {student.class}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`material-icons ${trendData.color}`}>{trendData.icon}</span>
            <div className="text-right">
              <p className="font-semibold text-green-600">{student.attendanceRate}%</p>
              <p className="text-sm text-[#5c728a]">{student.attendedClasses}/{student.totalClasses}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-[#5c728a]">Consecutive</p>
            <p className="font-semibold text-[#101418]">{student.consecutiveDays} days</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-[#5c728a]">Late Arrivals</p>
            <p className="font-semibold text-[#101418]">{student.lateArrivals}</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-[#5c728a]">Attendance</p>
            <p className="font-semibold text-green-600">{student.attendanceRate}%</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
            View History
          </button>
          <button className="flex-1 px-3 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
            Send Recognition
          </button>
        </div>
      </div>
    );
  };

  const BehaviorLeaderboardCard = ({ student }) => {
    const trendData = getTrendIcon(student.trend);
    
    return (
      <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold ${getRankBadge(student.rank)}`}>
              {getRankIcon(student.rank)}
            </div>
            <div>
              <h3 className="font-semibold text-[#101418]">{student.name}</h3>
              <p className="text-sm text-[#5c728a]">{student.rollNo} • {student.class}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`material-icons ${trendData.color}`}>{trendData.icon}</span>
            <div className="text-right">
              <p className="font-semibold text-purple-600">{student.behaviorScore}/10</p>
              <p className="text-sm text-[#5c728a]">Behavior Score</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-[#5c728a]">Participation</p>
            <p className="font-semibold text-[#101418]">{student.participationScore}/10</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-[#5c728a]">Respect</p>
            <p className="font-semibold text-[#101418]">{student.respectScore}/10</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-[#5c728a]">Responsibility</p>
            <p className="font-semibold text-[#101418]">{student.responsibilityScore}/10</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm">
            <p className="text-[#5c728a]">Commendations: <span className="font-semibold text-green-600">{student.commendations}</span></p>
            <p className="text-[#5c728a]">Incidents: <span className="font-semibold text-red-600">{student.incidents}</span></p>
          </div>
          
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
              View Profile
            </button>
            <button className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
              Add Note
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ExtracurricularLeaderboardCard = ({ student }) => {
    const trendData = getTrendIcon(student.trend);
    
    return (
      <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold ${getRankBadge(student.rank)}`}>
              {getRankIcon(student.rank)}
            </div>
            <div>
              <h3 className="font-semibold text-[#101418]">{student.name}</h3>
              <p className="text-sm text-[#5c728a]">{student.rollNo} • {student.class}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`material-icons ${trendData.color}`}>{trendData.icon}</span>
            <div className="text-right">
              <p className="font-semibold text-orange-600">{student.totalActivities}</p>
              <p className="text-sm text-[#5c728a]">Activities</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-[#5c728a]">Leadership</p>
            <p className="font-semibold text-[#101418]">{student.leadershipRoles}</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-[#5c728a]">Competitions</p>
            <p className="font-semibold text-[#101418]">{student.competitionsWon}</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-[#5c728a]">Volunteer Hrs</p>
            <p className="font-semibold text-[#101418]">{student.volunteerHours}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-[#5c728a] mb-2">Activities:</p>
          <div className="flex flex-wrap gap-1">
            {student.activities.slice(0, 3).map((activity, index) => (
              <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                {activity}
              </span>
            ))}
            {student.activities.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                +{student.activities.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
            View Activities
          </button>
          <button className="flex-1 px-3 py-2 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
            Recommend
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#101418] mb-2">Leaderboard & Rankings</h1>
              <p className="text-[#5c728a]">Track and celebrate student achievements across different categories</p>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#101418] mb-2">Class</label>
                  <select 
                    className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                  >
                    <option value="12-A">Class 12-A</option>
                    <option value="12-B">Class 12-B</option>
                    <option value="11-A">Class 11-A</option>
                    <option value="11-B">Class 11-B</option>
                    <option value="all">All Classes</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#101418] mb-2">Time Period</label>
                  <select 
                    className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                  >
                    <option value="current_month">Current Month</option>
                    <option value="current_semester">Current Semester</option>
                    <option value="academic_year">Academic Year</option>
                    <option value="all_time">All Time</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#101418] mb-2">Subject</label>
                  <select 
                    className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                  >
                    <option value="all">All Subjects</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="english">English</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Export Rankings
                  </button>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl border border-[#d4dbe2]">
              <div className="flex border-b border-[#d4dbe2] overflow-x-auto">
                {[
                  { id: 'academic', label: 'Academic Performance', icon: 'school', color: 'blue' },
                  { id: 'attendance', label: 'Attendance', icon: 'how_to_reg', color: 'green' },
                  { id: 'behavior', label: 'Behavior & Conduct', icon: 'psychology', color: 'purple' },
                  { id: 'extracurricular', label: 'Extracurricular', icon: 'sports', color: 'orange' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? `text-${tab.color}-600 border-b-2 border-${tab.color}-600 bg-${tab.color}-50`
                        : 'text-[#5c728a] hover:text-[#101418]'
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
                {activeTab === 'academic' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold text-[#101418]">Academic Performance Rankings</h3>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                          Send Certificates
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Generate Report
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {academicLeaderboard.map(student => (
                        <AcademicLeaderboardCard key={student.studentId} student={student} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'attendance' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold text-[#101418]">Attendance Rankings</h3>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                          Perfect Attendance Awards
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Attendance Report
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                      {attendanceLeaderboard.map(student => (
                        <AttendanceLeaderboardCard key={student.studentId} student={student} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'behavior' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold text-[#101418]">Behavior & Conduct Rankings</h3>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                          Behavior Awards
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Conduct Report
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                      {behaviorLeaderboard.map(student => (
                        <BehaviorLeaderboardCard key={student.studentId} student={student} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'extracurricular' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold text-[#101418]">Extracurricular Activity Rankings</h3>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                          Activity Awards
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Activity Report
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                      {extracurricularLeaderboard.map(student => (
                        <ExtracurricularLeaderboardCard key={student.studentId} student={student} />
                      ))}
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

export default TeacherLeaderboard;