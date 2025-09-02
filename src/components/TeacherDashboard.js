import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherDashboard = () => {
  const [currentTime] = useState(new Date());
  const [isScheduleExpanded, setIsScheduleExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const todayClasses = [
    { time: '09:00 AM', subject: 'Mathematics', class: '12', room: 'Room 201', status: 'upcoming' },
    { time: '11:00 AM', subject: 'Algebra', class: '11', room: 'Room 203', status: 'upcoming' },
    { time: '02:00 PM', subject: 'Calculus', class: '10', room: 'Room 201', status: 'completed' },
    { time: '03:30 PM', subject: 'Statistics', class: '11', room: 'Room 205', status: 'upcoming' }
  ];

  const recentActivities = [
    { type: 'exam', title: 'Mid-term Mathematics Exam', class: '12-A', time: '2 hours ago', status: 'evaluated' },
    { type: 'assignment', title: 'Algebra Problem Set 5', class: '11-B', time: '4 hours ago', status: 'submitted' },
    { type: 'request', title: 'Grade Review Request', student: 'John Smith', time: '6 hours ago', status: 'pending' },
    { type: 'attendance', title: 'Morning Session Attendance', class: '12-A', time: '1 day ago', status: 'completed' }
  ];

  const quickStats = [
    { label: 'Total Students', value: '156', icon: 'groups', color: 'purple' },
    { label: 'Pending Evaluations', value: '8', icon: 'pending_actions', color: 'orange' },
    { label: 'Today\'s Classes', value: '4', icon: 'class', color: 'blue' },
    { label: 'Avg. Attendance', value: '92%', icon: 'pie_chart', color: 'green' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-indigo-100 text-indigo-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'evaluated': return 'bg-indigo-100 text-indigo-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatColor = (color) => {
    switch (color) {
      case 'purple': return 'bg-purple-100';
      case 'orange': return 'bg-orange-100';
      case 'blue': return 'bg-blue-100';
      case 'green': return 'bg-green-100';
      default: return 'bg-gray-100';
    }
  };

  const getStatIconColor = (color) => {
    switch (color) {
      case 'purple': return 'text-purple-600';
      case 'orange': return 'text-orange-600';
      case 'blue': return 'text-blue-600';
      case 'green': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getStatTextColor = (color) => {
    switch (color) {
      case 'purple': return 'text-purple-800';
      case 'orange': return 'text-orange-800';
      case 'blue': return 'text-blue-800';
      case 'green': return 'text-green-800';
      default: return 'text-gray-800';
    }
  };

  return (
    <div className="flex min-h-screen">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8" style={{backgroundColor: '#f0f2f5'}}>
          {/* Welcome Section */}
          <section>
            <h1 className="text-3xl font-bold text-gray-800">Welcome back, Dr. Sarah Wilson</h1>
            <p className="text-gray-500 mt-1">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid grid-cols-4 gap-6 mt-8">
            {quickStats.map((stat, index) => {
              // Apply tilted perspective effect to all tiles with different shadow colors
               const getTileStyle = (index) => {
                 const shadowColors = {
                   0: 'hover:shadow-purple-500/30', // Total Students
                   1: 'hover:shadow-orange-500/30', // Pending Evaluations
                   2: 'hover:shadow-blue-500/30',   // Today's Classes
                   3: 'hover:shadow-green-500/30'   // Avg. Attendance
                 };
                 
                 return `bg-white rounded-2xl p-6 flex items-center justify-between ${getStatColor(stat.color)} hover:shadow-2xl ${shadowColors[index]} hover:-translate-y-2 hover:rotate-1 transition-all duration-300 cursor-pointer transform perspective-1000 hover:scale-105 shadow-lg`;
               };
              
              return (
                <div key={index} className={getTileStyle(index)}>
                  <div>
                     <p className={`text-sm ${getStatTextColor(stat.color)}`}>{stat.label}</p>
                     <p className={`text-3xl font-bold ${getStatTextColor(stat.color).replace('800', '900')}`}>{stat.value}</p>
                   </div>
                   <div className="bg-white p-3 rounded-full">
                     <span className={`material-icons ${getStatIconColor(stat.color)}`}>{stat.icon}</span>
                   </div>
                </div>
              );
            })}
          </section>

          <section className="grid grid-cols-2 gap-8 mt-8">
            {/* Today's Schedule */}
            <div 
              className="bg-white rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => setIsScheduleExpanded(true)}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Today's Schedule</h2>
                <span className="material-icons text-gray-400">expand_more</span>
              </div>
              <div className="space-y-4">
                {todayClasses.map((classItem, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div>
                      <p className="font-semibold">
                        {classItem.subject} 
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ml-2 ${getStatusColor(classItem.status)}`}>
                          {classItem.status}
                        </span>
                      </p>
                      <p className="text-sm text-gray-500">{classItem.class} • {classItem.room}</p>
                    </div>
                    <p className="text-sm text-gray-500">{classItem.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Activities</h2>
                <span className="material-icons text-gray-400">more_horiz</span>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const getActivityIcon = (type) => {
                    switch(type) {
                      case 'exam': return 'article';
                      case 'assignment': return 'assignment';
                      case 'request': return 'rate_review';
                      case 'attendance': return 'event_available';
                      default: return 'article';
                    }
                  };
                  
                  const getActivityBgColor = (type) => {
                    switch(type) {
                      case 'exam': return 'bg-blue-100';
                      case 'assignment': return 'bg-indigo-100';
                      case 'request': return 'bg-yellow-100';
                      case 'attendance': return 'bg-green-100';
                      default: return 'bg-blue-100';
                    }
                  };
                  
                  const getActivityIconColor = (type) => {
                    switch(type) {
                      case 'exam': return 'text-blue-600';
                      case 'assignment': return 'text-indigo-600';
                      case 'request': return 'text-yellow-600';
                      case 'attendance': return 'text-green-600';
                      default: return 'text-blue-600';
                    }
                  };
                  
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`${getActivityBgColor(activity.type)} p-2 rounded-full`}>
                        <span className={`material-icons ${getActivityIconColor(activity.type)}`}>
                          {getActivityIcon(activity.type)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{activity.title}</p>
                        <p className="text-sm text-gray-500">
                          {activity.class || activity.student} • {activity.time}
                        </p>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ml-auto ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 hover:rotate-1 transition-all duration-150 cursor-pointer transform hover:scale-105 shadow-lg">
                <div className="bg-blue-100 p-4 rounded-full">
                  <span className="material-icons text-blue-600 text-3xl">fact_check</span>
                </div>
                <p className="mt-4 font-semibold">Mark Attendance</p>
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-2 hover:rotate-1 transition-all duration-150 cursor-pointer transform hover:scale-105 shadow-lg">
                <div className="bg-green-100 p-4 rounded-full">
                  <span className="material-icons text-green-600 text-3xl">note_add</span>
                </div>
                <p className="mt-4 font-semibold">Create Assessment</p>
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 hover:rotate-1 transition-all duration-150 cursor-pointer transform hover:scale-105 shadow-lg">
                <div className="bg-purple-100 p-4 rounded-full">
                  <span className="material-icons text-purple-600 text-3xl">quiz</span>
                </div>
                <p className="mt-4 font-semibold">Review Exams</p>
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-2 hover:rotate-1 transition-all duration-150 cursor-pointer transform hover:scale-105 shadow-lg">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <span className="material-icons text-yellow-600 text-3xl">analytics</span>
                </div>
                <p className="mt-4 font-semibold">View Analytics</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      {/* Expanded Schedule Modal */}
       {isScheduleExpanded && (
         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
           <div 
             className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto transform transition-all duration-500 ease-out scale-100 opacity-100"
             style={{
               animation: 'modalSlideIn 0.5s ease-out forwards'
             }}
           >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Today's Complete Schedule</h2>
              <button 
                onClick={() => setIsScheduleExpanded(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <span className="material-icons text-gray-500">close</span>
              </button>
            </div>
            
            <div className="space-y-6">
              {todayClasses.map((classItem, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{classItem.subject}</h3>
                      <p className="text-sm text-gray-600">{classItem.class} • {classItem.room}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">{classItem.time}</p>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(classItem.status)}`}>
                        {classItem.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/70 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Duration</p>
                      <p className="font-medium">1 hour 30 minutes</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Students</p>
                      <p className="font-medium">32 enrolled</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Topic</p>
                      <p className="font-medium">Chapter {index + 5}: Advanced Concepts</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Materials</p>
                      <p className="font-medium">Textbook, Slides, Lab Kit</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Start Class
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">Quick Actions</h3>
              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                  Mark All Attendance
                </button>
                <button className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors">
                  Send Announcements
                </button>
                <button className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-200 transition-colors">
                  Export Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;