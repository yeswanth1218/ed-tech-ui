import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherTimetable = () => {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [viewMode, setViewMode] = useState('week');

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const timetableData = {
    Monday: [
      { time: '09:00 - 10:30', subject: 'Mathematics', class: '12', room: 'Room 201', type: 'lecture', students: 45 },
      { time: '11:00 - 12:30', subject: 'Algebra', class: '11', room: 'Room 203', type: 'tutorial', students: 38 },
      { time: '14:00 - 15:30', subject: 'Calculus', class: '10', room: 'Room 201', type: 'lecture', students: 40 },
      { time: '16:00 - 17:00', subject: 'Office Hours', class: 'All', room: 'Room 205', type: 'consultation', students: 0 }
    ],
    Tuesday: [
      { time: '08:30 - 10:00', subject: 'Statistics', class: '11-A', room: 'Room 204', type: 'lecture', students: 42 },
      { time: '10:30 - 12:00', subject: 'Mathematics', class: '10th', room: 'Room 201', type: 'practice', students: 45 },
      { time: '13:30 - 15:00', subject: 'Geometry', class: '11-C', room: 'Room 202', type: 'lecture', students: 35 },
      { time: '15:30 - 16:30', subject: 'Faculty Meeting', class: 'Staff', room: 'Conference Room', type: 'meeting', students: 0 }
    ],
    Wednesday: [
      { time: '09:00 - 10:30', subject: 'Algebra', class: '11', room: 'Room 203', type: 'lecture', students: 38 },
      { time: '11:00 - 12:30', subject: 'Calculus', class: '10', room: 'Room 201', type: 'tutorial', students: 40 },
      { time: '14:00 - 15:30', subject: 'Mathematics', class: '12', room: 'Room 201', type: 'exam', students: 45 },
      { time: '16:00 - 17:00', subject: 'Student Counseling', class: 'Individual', room: 'Room 205', type: 'consultation', students: 0 }
    ],
    Thursday: [
      { time: '08:30 - 10:00', subject: 'Trigonometry', class: '11-D', room: 'Room 206', type: 'lecture', students: 39 },
      { time: '10:30 - 12:00', subject: 'Statistics', class: '11-A', room: 'Room 204', type: 'practice', students: 42 },
      { time: '13:30 - 15:00', subject: 'Mathematics', class: '10th', room: 'Room 201', type: 'lecture', students: 45 },
      { time: '15:30 - 17:00', subject: 'Remedial Class', class: 'Mixed', room: 'Room 207', type: 'remedial', students: 15 }
    ],
    Friday: [
      { time: '09:00 - 10:30', subject: 'Geometry', class: '11', room: 'Room 202', type: 'practice', students: 35 },
      { time: '11:00 - 12:30', subject: 'Algebra', class: '11', room: 'Room 203', type: 'exam', students: 38 },
      { time: '14:00 - 15:30', subject: 'Calculus', class: '10', room: 'Room 201', type: 'lecture', students: 40 },
      { time: '16:00 - 17:00', subject: 'Department Meeting', class: 'Math Dept', room: 'Room 210', type: 'meeting', students: 0 }
    ],
    Saturday: [
      { time: '09:00 - 11:00', subject: 'Extra Classes', class: '12', room: 'Room 201', type: 'extra', students: 25 },
      { time: '11:30 - 12:30', subject: 'Parent Meeting', class: 'Various', room: 'Room 205', type: 'meeting', students: 0 }
    ]
  };

  const getClassTypeColor = (type) => {
    switch (type) {
      case 'lecture': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'tutorial': return 'bg-green-100 text-green-800 border-green-200';
      case 'practice': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'exam': return 'bg-red-100 text-red-800 border-red-200';
      case 'consultation': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'meeting': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'remedial': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'extra': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getClassTypeIcon = (type) => {
    switch (type) {
      case 'lecture': return 'school';
      case 'tutorial': return 'groups';
      case 'practice': return 'edit';
      case 'exam': return 'quiz';
      case 'consultation': return 'support_agent';
      case 'meeting': return 'meeting_room';
      case 'remedial': return 'help';
      case 'extra': return 'add_circle';
      default: return 'event';
    }
  };

  const weeklyStats = {
    totalClasses: Object.values(timetableData).flat().filter(item => item.type !== 'meeting' && item.type !== 'consultation').length,
    totalStudents: Object.values(timetableData).flat().reduce((sum, item) => sum + item.students, 0),
    totalHours: Object.values(timetableData).flat().length * 1.5, // Assuming 1.5 hours average
    classTypes: {
      lecture: Object.values(timetableData).flat().filter(item => item.type === 'lecture').length,
      tutorial: Object.values(timetableData).flat().filter(item => item.type === 'tutorial').length,
      practice: Object.values(timetableData).flat().filter(item => item.type === 'practice').length,
      exam: Object.values(timetableData).flat().filter(item => item.type === 'exam').length
    }
  };

  const ClassCard = ({ classItem, isCompact = false }) => (
    <div className={`${getClassTypeColor(classItem.type)} rounded-lg p-3 border-2 hover:shadow-md transition-all cursor-pointer ${
      isCompact ? 'min-h-[80px]' : 'min-h-[120px]'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="material-icons" style={{fontSize: '18px'}}>
            {getClassTypeIcon(classItem.type)}
          </span>
          <span className="font-semibold text-sm">{classItem.subject}</span>
        </div>
        <span className="text-xs font-medium px-2 py-1 bg-white rounded">
          {classItem.type}
        </span>
      </div>
      
      <div className="space-y-1">
        <p className="text-sm font-medium">{classItem.time}</p>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1">
            <span className="material-icons" style={{fontSize: '14px'}}>school</span>
            {classItem.class}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-icons" style={{fontSize: '14px'}}>room</span>
            {classItem.room}
          </span>
        </div>
        {classItem.students > 0 && (
          <div className="flex items-center gap-1 text-xs">
            <span className="material-icons" style={{fontSize: '14px'}}>groups</span>
            {classItem.students} students
          </div>
        )}
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
              <h1 className="text-2xl font-bold text-[#101418] mb-2">My Teaching Schedule</h1>
              <p className="text-[#5c728a]">Manage your classes, shifts, and academic commitments</p>
            </div>

            {/* Weekly Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#5c728a] text-sm font-medium">Total Classes</p>
                    <p className="text-2xl font-bold text-[#101418]">{weeklyStats.totalClasses}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <span className="material-icons text-blue-600">school</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#5c728a] text-sm font-medium">Total Students</p>
                    <p className="text-2xl font-bold text-[#101418]">{weeklyStats.totalStudents}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="material-icons text-green-600">groups</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#5c728a] text-sm font-medium">Teaching Hours</p>
                    <p className="text-2xl font-bold text-[#101418]">{weeklyStats.totalHours}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                    <span className="material-icons text-purple-600">schedule</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#5c728a] text-sm font-medium">Class Types</p>
                    <div className="flex gap-1 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{weeklyStats.classTypes.lecture}L</span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">{weeklyStats.classTypes.tutorial}T</span>
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">{weeklyStats.classTypes.practice}P</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                    <span className="material-icons text-orange-600">category</span>
                  </div>
                </div>
              </div>
            </div>

            {/* View Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    viewMode === 'week' ? 'bg-blue-600 text-white' : 'bg-white text-[#101418] border border-[#d4dbe2]'
                  }`}
                  onClick={() => setViewMode('week')}
                >
                  Week View
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    viewMode === 'day' ? 'bg-blue-600 text-white' : 'bg-white text-[#101418] border border-[#d4dbe2]'
                  }`}
                  onClick={() => setViewMode('day')}
                >
                  Day View
                </button>
              </div>
              
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                  <span className="material-icons mr-2" style={{fontSize: '18px'}}>add</span>
                  Add Class
                </button>
                <button className="px-4 py-2 bg-gray-100 text-[#101418] rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  <span className="material-icons mr-2" style={{fontSize: '18px'}}>file_download</span>
                  Export
                </button>
              </div>
            </div>

            {/* Timetable Grid */}
            {viewMode === 'week' && (
              <div className="bg-white rounded-xl border border-[#d4dbe2] overflow-hidden">
                <div className="grid grid-cols-7 border-b border-[#d4dbe2]">
                  <div className="p-4 bg-gray-50 font-semibold text-[#101418] border-r border-[#d4dbe2]">
                    Time
                  </div>
                  {weekDays.map((day) => (
                    <div key={day} className="p-4 bg-gray-50 font-semibold text-[#101418] text-center border-r border-[#d4dbe2] last:border-r-0">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 min-h-[600px]">
                  <div className="border-r border-[#d4dbe2] bg-gray-50">
                    {['08:30', '10:00', '11:30', '13:00', '14:30', '16:00'].map((time) => (
                      <div key={time} className="h-24 p-2 border-b border-[#d4dbe2] flex items-center justify-center text-sm text-[#5c728a]">
                        {time}
                      </div>
                    ))}
                  </div>
                  
                  {weekDays.map((day) => (
                    <div key={day} className="border-r border-[#d4dbe2] last:border-r-0">
                      <div className="p-2 space-y-2">
                        {timetableData[day]?.map((classItem, index) => (
                          <ClassCard key={index} classItem={classItem} isCompact={true} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Day View */}
            {viewMode === 'day' && (
              <div className="space-y-6">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {weekDays.map((day, index) => (
                    <button
                      key={day}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                        selectedDay === index ? 'bg-blue-600 text-white' : 'bg-white text-[#101418] border border-[#d4dbe2]'
                      }`}
                      onClick={() => setSelectedDay(index)}
                    >
                      {day}
                    </button>
                  ))}
                </div>
                
                {selectedDay !== null && (
                  <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                    <h2 className="text-lg font-semibold text-[#101418] mb-4">
                      {weekDays[selectedDay]} Schedule
                    </h2>
                    <div className="grid gap-4">
                      {timetableData[weekDays[selectedDay]]?.map((classItem, index) => (
                        <ClassCard key={index} classItem={classItem} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Legend */}
            <div className="mt-6 bg-white rounded-xl p-4 border border-[#d4dbe2]">
              <h3 className="font-semibold text-[#101418] mb-3">Class Types</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {[
                  { type: 'lecture', label: 'Lecture' },
                  { type: 'tutorial', label: 'Tutorial' },
                  { type: 'practice', label: 'Practice' },
                  { type: 'exam', label: 'Exam' },
                  { type: 'consultation', label: 'Consultation' },
                  { type: 'meeting', label: 'Meeting' },
                  { type: 'remedial', label: 'Remedial' },
                  { type: 'extra', label: 'Extra Class' }
                ].map((item) => (
                  <div key={item.type} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded ${getClassTypeColor(item.type)}`}></div>
                    <span className="text-sm text-[#101418]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherTimetable;