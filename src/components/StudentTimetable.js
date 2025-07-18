import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar';
import Header from './Header';

const StudentTimetable = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');
  const [selectedDay, setSelectedDay] = useState('monday');

  const weeklyTimetable = {
    monday: [
      { id: 1, subject: 'Mathematics', teacher: 'Dr. Smith', time: '09:00 - 10:00', duration: '60 min', room: 'Room 101', type: 'lecture' },
      { id: 2, subject: 'Physics', teacher: 'Prof. Johnson', time: '10:15 - 11:15', duration: '60 min', room: 'Lab 201', type: 'practical' },
      { id: 3, subject: 'Break', teacher: '', time: '11:15 - 11:30', duration: '15 min', room: '', type: 'break' },
      { id: 4, subject: 'Chemistry', teacher: 'Dr. Brown', time: '11:30 - 12:30', duration: '60 min', room: 'Lab 301', type: 'practical' },
      { id: 5, subject: 'English Literature', teacher: 'Ms. Davis', time: '12:30 - 13:30', duration: '60 min', room: 'Room 205', type: 'lecture' },
      { id: 6, subject: 'Lunch Break', teacher: '', time: '13:30 - 14:30', duration: '60 min', room: '', type: 'break' },
      { id: 7, subject: 'Computer Science', teacher: 'Mr. Wilson', time: '14:30 - 15:30', duration: '60 min', room: 'Computer Lab', type: 'practical' },
      { id: 8, subject: 'History', teacher: 'Dr. Taylor', time: '15:45 - 16:45', duration: '60 min', room: 'Room 103', type: 'lecture' }
    ],
    tuesday: [
      { id: 1, subject: 'Physics', teacher: 'Prof. Johnson', time: '09:00 - 10:00', duration: '60 min', room: 'Room 102', type: 'lecture' },
      { id: 2, subject: 'Mathematics', teacher: 'Dr. Smith', time: '10:15 - 11:15', duration: '60 min', room: 'Room 101', type: 'lecture' },
      { id: 3, subject: 'Break', teacher: '', time: '11:15 - 11:30', duration: '15 min', room: '', type: 'break' },
      { id: 4, subject: 'Biology', teacher: 'Dr. Anderson', time: '11:30 - 12:30', duration: '60 min', room: 'Bio Lab', type: 'practical' },
      { id: 5, subject: 'Geography', teacher: 'Ms. Clark', time: '12:30 - 13:30', duration: '60 min', room: 'Room 204', type: 'lecture' },
      { id: 6, subject: 'Lunch Break', teacher: '', time: '13:30 - 14:30', duration: '60 min', room: '', type: 'break' },
      { id: 7, subject: 'Art & Design', teacher: 'Mr. Lee', time: '14:30 - 15:30', duration: '60 min', room: 'Art Studio', type: 'practical' },
      { id: 8, subject: 'Physical Education', teacher: 'Coach Miller', time: '15:45 - 16:45', duration: '60 min', room: 'Gymnasium', type: 'practical' }
    ],
    wednesday: [
      { id: 1, subject: 'Chemistry', teacher: 'Dr. Brown', time: '09:00 - 10:00', duration: '60 min', room: 'Room 301', type: 'lecture' },
      { id: 2, subject: 'English Literature', teacher: 'Ms. Davis', time: '10:15 - 11:15', duration: '60 min', room: 'Room 205', type: 'lecture' },
      { id: 3, subject: 'Break', teacher: '', time: '11:15 - 11:30', duration: '15 min', room: '', type: 'break' },
      { id: 4, subject: 'Mathematics', teacher: 'Dr. Smith', time: '11:30 - 12:30', duration: '60 min', room: 'Room 101', type: 'tutorial' },
      { id: 5, subject: 'Computer Science', teacher: 'Mr. Wilson', time: '12:30 - 13:30', duration: '60 min', room: 'Computer Lab', type: 'lecture' },
      { id: 6, subject: 'Lunch Break', teacher: '', time: '13:30 - 14:30', duration: '60 min', room: '', type: 'break' },
      { id: 7, subject: 'Physics Lab', teacher: 'Prof. Johnson', time: '14:30 - 16:00', duration: '90 min', room: 'Lab 201', type: 'practical' },
      { id: 8, subject: 'Study Hall', teacher: 'Various', time: '16:00 - 16:45', duration: '45 min', room: 'Library', type: 'study' }
    ],
    thursday: [
      { id: 1, subject: 'Biology', teacher: 'Dr. Anderson', time: '09:00 - 10:00', duration: '60 min', room: 'Room 302', type: 'lecture' },
      { id: 2, subject: 'History', teacher: 'Dr. Taylor', time: '10:15 - 11:15', duration: '60 min', room: 'Room 103', type: 'lecture' },
      { id: 3, subject: 'Break', teacher: '', time: '11:15 - 11:30', duration: '15 min', room: '', type: 'break' },
      { id: 4, subject: 'Geography', teacher: 'Ms. Clark', time: '11:30 - 12:30', duration: '60 min', room: 'Room 204', type: 'lecture' },
      { id: 5, subject: 'Mathematics', teacher: 'Dr. Smith', time: '12:30 - 13:30', duration: '60 min', room: 'Room 101', type: 'lecture' },
      { id: 6, subject: 'Lunch Break', teacher: '', time: '13:30 - 14:30', duration: '60 min', room: '', type: 'break' },
      { id: 7, subject: 'Chemistry Lab', teacher: 'Dr. Brown', time: '14:30 - 16:00', duration: '90 min', room: 'Lab 301', type: 'practical' },
      { id: 8, subject: 'Music', teacher: 'Ms. Garcia', time: '16:00 - 16:45', duration: '45 min', room: 'Music Room', type: 'practical' }
    ],
    friday: [
      { id: 1, subject: 'English Literature', teacher: 'Ms. Davis', time: '09:00 - 10:00', duration: '60 min', room: 'Room 205', type: 'lecture' },
      { id: 2, subject: 'Computer Science', teacher: 'Mr. Wilson', time: '10:15 - 11:15', duration: '60 min', room: 'Computer Lab', type: 'practical' },
      { id: 3, subject: 'Break', teacher: '', time: '11:15 - 11:30', duration: '15 min', room: '', type: 'break' },
      { id: 4, subject: 'Physics', teacher: 'Prof. Johnson', time: '11:30 - 12:30', duration: '60 min', room: 'Room 102', type: 'lecture' },
      { id: 5, subject: 'Art & Design', teacher: 'Mr. Lee', time: '12:30 - 13:30', duration: '60 min', room: 'Art Studio', type: 'practical' },
      { id: 6, subject: 'Lunch Break', teacher: '', time: '13:30 - 14:30', duration: '60 min', room: '', type: 'break' },
      { id: 7, subject: 'Biology Lab', teacher: 'Dr. Anderson', time: '14:30 - 16:00', duration: '90 min', room: 'Bio Lab', type: 'practical' },
      { id: 8, subject: 'Assembly', teacher: 'Principal', time: '16:00 - 16:30', duration: '30 min', room: 'Main Hall', type: 'assembly' }
    ]
  };

  const days = [
    { key: 'monday', label: 'Monday', short: 'Mon' },
    { key: 'tuesday', label: 'Tuesday', short: 'Tue' },
    { key: 'wednesday', label: 'Wednesday', short: 'Wed' },
    { key: 'thursday', label: 'Thursday', short: 'Thu' },
    { key: 'friday', label: 'Friday', short: 'Fri' }
  ];

  const getClassTypeColor = (type) => {
    switch (type) {
      case 'lecture': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'practical': return 'bg-green-100 text-green-800 border-green-200';
      case 'tutorial': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'study': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'assembly': return 'bg-red-100 text-red-800 border-red-200';
      case 'break': return 'bg-gray-100 text-gray-600 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getClassTypeIcon = (type) => {
    switch (type) {
      case 'lecture': return 'school';
      case 'practical': return 'science';
      case 'tutorial': return 'groups';
      case 'study': return 'menu_book';
      case 'assembly': return 'campaign';
      case 'break': return 'coffee';
      default: return 'class';
    }
  };

  const currentDayClasses = weeklyTimetable[selectedDay] || [];
  const totalClasses = currentDayClasses.filter(cls => cls.type !== 'break').length;
  const totalDuration = currentDayClasses.reduce((sum, cls) => {
    if (cls.type !== 'break') {
      const duration = parseInt(cls.duration);
      return sum + duration;
    }
    return sum;
  }, 0);

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
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Class Timetable</p>
                <p className="text-[#5c728a] text-base font-normal leading-normal">View your weekly class schedule, timings, and room assignments</p>
              </div>
              <div className="flex items-center gap-3">
                <select 
                  value={selectedWeek}
                  onChange={(e) => setSelectedWeek(e.target.value)}
                  className="bg-white border border-[#d4dbe2] rounded-lg px-4 py-2 text-sm"
                >
                  <option value="current">Current Week</option>
                  <option value="next">Next Week</option>
                  <option value="previous">Previous Week</option>
                </select>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <span className="material-icons" style={{fontSize: '20px'}}>download</span>
                  Export Schedule
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Today's Classes</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{totalClasses}</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Scheduled sessions</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Total Duration</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{Math.floor(totalDuration / 60)}h {totalDuration % 60}m</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Class time today</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Next Class</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">10:15</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Physics Lab</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Free Periods</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">2</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Available today</p>
              </div>
            </div>

            {/* Day Selection Tabs */}
            <div className="flex gap-2 p-4 overflow-x-auto">
              {days.map((day) => (
                <button
                  key={day.key}
                  onClick={() => setSelectedDay(day.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedDay === day.key
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-[#101418] border border-[#d4dbe2] hover:bg-gray-50'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>

            {/* Timetable Grid */}
            <div className="p-4">
              <div className="bg-white rounded-xl border border-[#d4dbe2] overflow-hidden">
                <div className="p-6">
                  <h3 className="text-[#101418] text-lg font-semibold mb-4">
                    {days.find(d => d.key === selectedDay)?.label} Schedule
                  </h3>
                  <div className="space-y-3">
                    {currentDayClasses.map((classItem) => (
                      <div
                        key={classItem.id}
                        className={`p-4 rounded-lg border transition-all hover:shadow-md ${
                          classItem.type === 'break'
                            ? 'bg-gray-50 border-gray-200'
                            : 'bg-white border-[#d4dbe2] hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="material-icons text-[#5c728a]" style={{fontSize: '20px'}}>
                                {getClassTypeIcon(classItem.type)}
                              </span>
                              <div>
                                <h4 className="text-[#101418] font-semibold">{classItem.subject}</h4>
                                {classItem.teacher && (
                                  <p className="text-[#5c728a] text-sm">{classItem.teacher}</p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-[#101418] font-medium">{classItem.time}</p>
                              <p className="text-[#5c728a] text-sm">{classItem.duration}</p>
                            </div>
                            {classItem.room && (
                              <div className="text-right">
                                <p className="text-[#101418] text-sm">{classItem.room}</p>
                              </div>
                            )}
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getClassTypeColor(classItem.type)}`}>
                              {classItem.type.charAt(0).toUpperCase() + classItem.type.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Overview */}
            <div className="p-4">
              <div className="bg-white rounded-xl border border-[#d4dbe2] overflow-hidden">
                <div className="p-6">
                  <h3 className="text-[#101418] text-lg font-semibold mb-4">Weekly Overview</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#d4dbe2]">
                          <th className="text-left p-3 text-[#101418] font-medium">Time</th>
                          {days.map((day) => (
                            <th key={day.key} className="text-center p-3 text-[#101418] font-medium">
                              {day.short}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {['09:00', '10:15', '11:30', '12:30', '14:30', '15:45'].map((time) => (
                          <tr key={time} className="border-b border-[#f0f2f5]">
                            <td className="p-3 text-[#5c728a] font-medium">{time}</td>
                            {days.map((day) => {
                              const classAtTime = weeklyTimetable[day.key]?.find(cls => 
                                cls.time.startsWith(time) && cls.type !== 'break'
                              );
                              return (
                                <td key={day.key} className="p-3 text-center">
                                  {classAtTime ? (
                                    <div className={`px-2 py-1 rounded text-xs font-medium ${getClassTypeColor(classAtTime.type)}`}>
                                      {classAtTime.subject}
                                    </div>
                                  ) : (
                                    <span className="text-[#5c728a] text-xs">-</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Class Types Legend */}
            <div className="p-4">
              <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                <h3 className="text-[#101418] text-lg font-semibold mb-4">Class Types</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { type: 'lecture', label: 'Lecture' },
                    { type: 'practical', label: 'Practical' },
                    { type: 'tutorial', label: 'Tutorial' },
                    { type: 'study', label: 'Study Hall' },
                    { type: 'assembly', label: 'Assembly' },
                    { type: 'break', label: 'Break' }
                  ].map((item) => (
                    <div key={item.type} className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getClassTypeColor(item.type)}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTimetable;