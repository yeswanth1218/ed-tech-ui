import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar';
import Header from './Header';

const StudentNews = () => {
  const [announcements] = useState([
    {
      id: 1,
      title: 'Mid-term Examination Schedule Released',
      content: 'The mid-term examination schedule for all departments has been released. Please check your respective department portals for detailed timings.',
      date: '2024-01-20',
      type: 'exam',
      priority: 'high',
      author: 'Academic Office'
    },
    {
      id: 2,
      title: 'Science Fair 2024 Registration Open',
      content: 'Registration for the annual Science Fair 2024 is now open. Students can submit their project proposals until February 15th.',
      date: '2024-01-18',
      type: 'event',
      priority: 'medium',
      author: 'Science Department'
    },
    {
      id: 3,
      title: 'Library Hours Extended',
      content: 'The library will now remain open until 8 PM on weekdays to accommodate students during exam preparation.',
      date: '2024-01-17',
      type: 'facility',
      priority: 'low',
      author: 'Library Administration'
    },
    {
      id: 4,
      title: 'New Online Learning Platform',
      content: 'We are excited to introduce our new AI-powered learning platform. All students will receive login credentials via email.',
      date: '2024-01-15',
      type: 'technology',
      priority: 'medium',
      author: 'IT Department'
    },
    {
      id: 5,
      title: 'Winter Break Holiday Notice',
      content: 'The institution will remain closed from December 25th to January 2nd for winter break. Classes will resume on January 3rd.',
      date: '2024-01-10',
      type: 'holiday',
      priority: 'high',
      author: 'Administration'
    }
  ]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'exam': return 'quiz';
      case 'event': return 'event';
      case 'facility': return 'business';
      case 'technology': return 'computer';
      case 'holiday': return 'celebration';
      default: return 'info';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'exam': return 'text-blue-600';
      case 'event': return 'text-purple-600';
      case 'facility': return 'text-green-600';
      case 'technology': return 'text-orange-600';
      case 'holiday': return 'text-pink-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <StudentSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Student Portal" />
        <div className="flex-1 overflow-auto p-6">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">News & Announcements</p>
                <p className="text-[#5c728a] text-base font-normal leading-normal">Stay updated with the latest news and important announcements</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <span className="material-icons" style={{fontSize: '20px'}}>notifications</span>
                  Mark All Read
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 p-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">All</button>
              <button className="bg-white text-[#101418] px-4 py-2 rounded-lg text-sm font-medium border border-[#d4dbe2] hover:bg-gray-50">Exams</button>
              <button className="bg-white text-[#101418] px-4 py-2 rounded-lg text-sm font-medium border border-[#d4dbe2] hover:bg-gray-50">Events</button>
              <button className="bg-white text-[#101418] px-4 py-2 rounded-lg text-sm font-medium border border-[#d4dbe2] hover:bg-gray-50">Facilities</button>
              <button className="bg-white text-[#101418] px-4 py-2 rounded-lg text-sm font-medium border border-[#d4dbe2] hover:bg-gray-50">Technology</button>
            </div>

            {/* Announcements List */}
            <div className="flex flex-col gap-4 p-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="bg-white rounded-xl border border-[#d4dbe2] p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getTypeColor(announcement.type)}`} style={{backgroundColor: `${getTypeColor(announcement.type).replace('text-', 'bg-').replace('-600', '-100')}`}}>
                        <span className="material-icons" style={{fontSize: '24px'}}>{getTypeIcon(announcement.type)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-[#101418] text-lg font-bold leading-tight">{announcement.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(announcement.priority)}`}>
                            {announcement.priority.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-[#5c728a] text-sm leading-normal mb-3">{announcement.content}</p>
                        <div className="flex items-center gap-4 text-xs text-[#5c728a]">
                          <span className="flex items-center gap-1">
                            <span className="material-icons" style={{fontSize: '16px'}}>calendar_today</span>
                            {announcement.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-icons" style={{fontSize: '16px'}}>person</span>
                            {announcement.author}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Read More
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 text-sm">
                        <span className="material-icons" style={{fontSize: '18px'}}>bookmark_border</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center p-4">
              <button className="bg-white text-[#101418] px-6 py-3 rounded-lg border border-[#d4dbe2] hover:bg-gray-50 transition-colors font-medium">
                Load More Announcements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNews;