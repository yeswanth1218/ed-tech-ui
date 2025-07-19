import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherAttendance = () => {
  const [selectedClass, setSelectedClass] = useState('12-A');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendanceMode, setAttendanceMode] = useState('mark'); // 'mark' or 'view'
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  
  const classes = ['12-A', '11-B', '11-A', '12-C', '11-C'];
  const subjects = ['Mathematics', 'Algebra', 'Calculus', 'Statistics', 'Geometry'];
  
  const [students, setStudents] = useState([
    { id: 1, name: 'Emma Thompson', rollNo: 'MA001', status: 'present', lateBy: 0, note: '' },
    { id: 2, name: 'David Kim', rollNo: 'MA002', status: 'present', lateBy: 0, note: '' },
    { id: 3, name: 'Sarah Chen', rollNo: 'MA003', status: 'absent', lateBy: 0, note: 'Sick leave' },
    { id: 4, name: 'Michael Rodriguez', rollNo: 'MA004', status: 'late', lateBy: 15, note: 'Traffic' },
    { id: 5, name: 'Alex Johnson', rollNo: 'MA005', status: 'present', lateBy: 0, note: '' },
    { id: 6, name: 'Lisa Wang', rollNo: 'MA006', status: 'present', lateBy: 0, note: '' },
    { id: 7, name: 'James Wilson', rollNo: 'MA007', status: 'absent', lateBy: 0, note: 'Family emergency' },
    { id: 8, name: 'Maria Garcia', rollNo: 'MA008', status: 'late', lateBy: 10, note: 'Bus delay' },
    { id: 9, name: 'Ryan Brown', rollNo: 'MA009', status: 'present', lateBy: 0, note: '' },
    { id: 10, name: 'Sophie Davis', rollNo: 'MA010', status: 'present', lateBy: 0, note: '' }
  ]);

  const attendanceHistory = [
    { date: '2024-02-01', class: '12-A', subject: 'Mathematics', present: 42, absent: 3, late: 2, total: 47 },
    { date: '2024-01-31', class: '12-A', subject: 'Mathematics', present: 44, absent: 2, late: 1, total: 47 },
    { date: '2024-01-30', class: '11-B', subject: 'Algebra', present: 35, absent: 2, late: 1, total: 38 },
    { date: '2024-01-29', class: '12-A', subject: 'Mathematics', present: 43, absent: 3, late: 1, total: 47 },
    { date: '2024-01-26', class: '11-A', subject: 'Statistics', present: 39, absent: 2, late: 1, total: 42 }
  ];

  const attendanceStats = {
    todayPresent: students.filter(s => s.status === 'present').length,
    todayAbsent: students.filter(s => s.status === 'absent').length,
    todayLate: students.filter(s => s.status === 'late').length,
    totalStudents: students.length,
    attendanceRate: Math.round((students.filter(s => s.status === 'present' || s.status === 'late').length / students.length) * 100)
  };

  const updateAttendance = (studentId, status, lateBy = 0, note = '') => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, status, lateBy, note }
        : student
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present': return 'text-green-600 bg-green-50 border-green-200';
      case 'absent': return 'text-red-600 bg-red-50 border-red-200';
      case 'late': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present': return 'check_circle';
      case 'absent': return 'cancel';
      case 'late': return 'schedule';
      default: return 'help';
    }
  };

  const AttendanceCard = ({ student }) => (
    <div className="bg-white rounded-xl p-4 border border-[#d4dbe2] hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="material-icons text-blue-600" style={{fontSize: '20px'}}>person</span>
          </div>
          <div>
            <h3 className="font-semibold text-[#101418]">{student.name}</h3>
            <p className="text-sm text-[#5c728a]">Roll No: {student.rollNo}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full border text-sm font-medium flex items-center gap-1 ${getStatusColor(student.status)}`}>
          <span className="material-icons" style={{fontSize: '16px'}}>{getStatusIcon(student.status)}</span>
          {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
          {student.status === 'late' && ` (+${student.lateBy}m)`}
        </div>
      </div>
      
      {attendanceMode === 'mark' && (
        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                student.status === 'present' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-[#101418] hover:bg-green-50'
              }`}
              onClick={() => updateAttendance(student.id, 'present')}
            >
              Present
            </button>
            <button
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                student.status === 'late' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-100 text-[#101418] hover:bg-orange-50'
              }`}
              onClick={() => updateAttendance(student.id, 'late', 10)}
            >
              Late
            </button>
            <button
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                student.status === 'absent' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-[#101418] hover:bg-red-50'
              }`}
              onClick={() => updateAttendance(student.id, 'absent')}
            >
              Absent
            </button>
          </div>
          
          {(student.status === 'late' || student.status === 'absent') && (
            <input
              type="text"
              placeholder="Add note (optional)"
              value={student.note}
              onChange={(e) => updateAttendance(student.id, student.status, student.lateBy, e.target.value)}
              className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm"
            />
          )}
        </div>
      )}
      
      {student.note && (
        <div className="mt-3 p-2 bg-gray-50 rounded-lg">
          <p className="text-sm text-[#5c728a]">
            <span className="material-icons mr-1" style={{fontSize: '14px'}}>note</span>
            {student.note}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex h-screen">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#101418] mb-2">Attendance Management</h1>
              <p className="text-[#5c728a]">Track and manage student attendance for all your classes</p>
            </div>

            {/* Controls */}
            <div className="bg-white rounded-xl p-4 border border-[#d4dbe2] mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#101418] mb-2">Class</label>
                  <select 
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm"
                  >
                    {classes.map(cls => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#101418] mb-2">Subject</label>
                  <select 
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm"
                  >
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#101418] mb-2">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#101418] mb-2">Mode</label>
                  <select 
                    value={attendanceMode}
                    onChange={(e) => setAttendanceMode(e.target.value)}
                    className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm"
                  >
                    <option value="mark">Mark Attendance</option>
                    <option value="view">View Only</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Load Class
                  </button>
                </div>
              </div>
            </div>

            {/* Attendance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#5c728a] text-sm font-medium">Present</p>
                    <p className="text-2xl font-bold text-green-600">{attendanceStats.todayPresent}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="material-icons text-green-600">check_circle</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#5c728a] text-sm font-medium">Absent</p>
                    <p className="text-2xl font-bold text-red-600">{attendanceStats.todayAbsent}</p>
                  </div>
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <span className="material-icons text-red-600">cancel</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#5c728a] text-sm font-medium">Late</p>
                    <p className="text-2xl font-bold text-orange-600">{attendanceStats.todayLate}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                    <span className="material-icons text-orange-600">schedule</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#5c728a] text-sm font-medium">Total Students</p>
                    <p className="text-2xl font-bold text-[#101418]">{attendanceStats.totalStudents}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <span className="material-icons text-blue-600">groups</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#5c728a] text-sm font-medium">Attendance Rate</p>
                    <p className="text-2xl font-bold text-purple-600">{attendanceStats.attendanceRate}%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                    <span className="material-icons text-purple-600">analytics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            {attendanceMode === 'mark' && (
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2] mb-6">
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => setStudents(students.map(s => ({ ...s, status: 'present', lateBy: 0, note: '' })))}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Mark All Present
                  </button>
                  <button 
                    onClick={() => setStudents(students.map(s => ({ ...s, status: 'absent', lateBy: 0, note: '' })))}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    Mark All Absent
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Save Attendance
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-[#101418] rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Export Report
                  </button>
                </div>
              </div>
            )}

            {/* Student List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {students.map(student => (
                <AttendanceCard key={student.id} student={student} />
              ))}
            </div>

            {/* Attendance History */}
            <div className="bg-white rounded-xl border border-[#d4dbe2]">
              <div className="p-6 border-b border-[#d4dbe2]">
                <h2 className="text-lg font-semibold text-[#101418]">Recent Attendance History</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#5c728a] uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#5c728a] uppercase tracking-wider">Class</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#5c728a] uppercase tracking-wider">Subject</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#5c728a] uppercase tracking-wider">Present</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#5c728a] uppercase tracking-wider">Absent</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#5c728a] uppercase tracking-wider">Late</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#5c728a] uppercase tracking-wider">Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#5c728a] uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attendanceHistory.map((record, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#101418]">
                          {new Date(record.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#101418]">{record.class}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#101418]">{record.subject}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">{record.present}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">{record.absent}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-medium">{record.late}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#101418] font-medium">
                          {Math.round(((record.present + record.late) / record.total) * 100)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-800 font-medium">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAttendance;