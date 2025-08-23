import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherArchive = () => {
  const [activeTab, setActiveTab] = useState('assessments');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('2023-24');
  const [selectedSubject, setSelectedSubject] = useState('all');
  
  const archivedAssessments = [
    {
      id: 1,
      title: 'Calculus Final Exam',
      type: 'exam',
      subject: 'Mathematics',
      class: '12-A',
      academicYear: '2023-24',
      semester: 'Fall',
      date: '2023-12-15',
      totalMarks: 100,
      avgScore: 82.5,
      submissions: 45,
      status: 'completed',
      fileSize: '2.4 MB',
      downloadCount: 12
    },
    {
      id: 2,
      title: 'Organic Chemistry Lab Reports',
      type: 'assignment',
      subject: 'Chemistry',
      class: '11-B',
      academicYear: '2023-24',
      semester: 'Fall',
      date: '2023-11-20',
      totalMarks: 50,
      avgScore: 78.3,
      submissions: 38,
      status: 'completed',
      fileSize: '15.7 MB',
      downloadCount: 8
    },
    {
      id: 3,
      title: 'Physics Mechanics Quiz Series',
      type: 'quiz',
      subject: 'Physics',
      class: '12-A',
      academicYear: '2022-23',
      semester: 'Spring',
      date: '2023-03-10',
      totalMarks: 25,
      avgScore: 88.7,
      submissions: 42,
      status: 'completed',
      fileSize: '1.8 MB',
      downloadCount: 15
    },
    {
      id: 4,
      title: 'English Literature Essay Collection',
      type: 'assignment',
      subject: 'English',
      class: '11-A',
      academicYear: '2023-24',
      semester: 'Fall',
      date: '2023-10-25',
      totalMarks: 75,
      avgScore: 72.1,
      submissions: 40,
      status: 'completed',
      fileSize: '8.3 MB',
      downloadCount: 6
    }
  ];

  const studentRecords = [
    {
      id: 1,
      studentName: 'Emma Thompson',
      rollNo: 'MA001',
      class: '12-A',
      academicYear: '2023-24',
      overallGrade: 'A+',
      gpa: 9.2,
      attendance: 96,
      subjects: {
        mathematics: { grade: 'A+', score: 95 },
        physics: { grade: 'A', score: 92 },
        chemistry: { grade: 'A', score: 89 },
        english: { grade: 'A+', score: 94 }
      },
      achievements: ['Mathematics Olympiad Winner', 'Perfect Attendance'],
      behaviorScore: 9.5,
      parentMeetings: 2,
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      studentName: 'David Kim',
      rollNo: 'MA002',
      class: '12-A',
      academicYear: '2023-24',
      overallGrade: 'A',
      gpa: 8.8,
      attendance: 89,
      subjects: {
        mathematics: { grade: 'A', score: 92 },
        physics: { grade: 'A', score: 88 },
        chemistry: { grade: 'A', score: 91 },
        english: { grade: 'B+', score: 87 }
      },
      achievements: ['Science Fair Participant', 'Debate Team Member'],
      behaviorScore: 8.8,
      parentMeetings: 1,
      lastUpdated: '2024-01-14'
    }
  ];

  const classReports = [
    {
      id: 1,
      title: 'Class 12-A Performance Report',
      type: 'performance',
      class: '12-A',
      academicYear: '2023-24',
      semester: 'Fall',
      generatedDate: '2023-12-20',
      totalStudents: 45,
      avgGPA: 8.2,
      avgAttendance: 91,
      topPerformers: 12,
      needsAttention: 3,
      fileSize: '3.2 MB',
      downloadCount: 25
    },
    {
      id: 2,
      title: 'Mathematics Department Analysis',
      type: 'subject_analysis',
      class: 'All Classes',
      academicYear: '2023-24',
      semester: 'Fall',
      generatedDate: '2023-12-18',
      totalStudents: 180,
      avgGPA: 7.8,
      avgAttendance: 88,
      topPerformers: 45,
      needsAttention: 12,
      fileSize: '5.7 MB',
      downloadCount: 18
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'exam': return 'text-red-600 bg-red-50';
      case 'assignment': return 'text-blue-600 bg-blue-50';
      case 'quiz': return 'text-green-600 bg-green-50';
      case 'performance': return 'text-purple-600 bg-purple-50';
      case 'subject_analysis': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-orange-600';
    return 'text-red-600';
  };

  const filteredAssessments = archivedAssessments.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assessment.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || assessment.academicYear === selectedYear;
    const matchesSubject = selectedSubject === 'all' || assessment.subject.toLowerCase() === selectedSubject.toLowerCase();
    return matchesSearch && matchesYear && matchesSubject;
  });

  const AssessmentCard = ({ assessment }) => (
    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-[#101418]">{assessment.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(assessment.type)}`}>
              {assessment.type.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#5c728a] mb-3">
            <span>{assessment.subject} • {assessment.class}</span>
            <span>{assessment.academicYear} • {assessment.semester}</span>
            <span>{new Date(assessment.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
        <div>
          <p className="text-[#5c728a]">Submissions</p>
          <p className="font-semibold text-[#101418]">{assessment.submissions}</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Avg Score</p>
          <p className="font-semibold text-[#101418]">{assessment.avgScore}%</p>
        </div>
        <div>
          <p className="text-[#5c728a]">File Size</p>
          <p className="font-semibold text-[#101418]">{assessment.fileSize}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-[#5c728a]">Downloaded {assessment.downloadCount} times</span>
        
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
            View Details
          </button>
          <button className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
            Download
          </button>
          <button className="px-3 py-1 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
            Reuse
          </button>
        </div>
      </div>
    </div>
  );

  const StudentRecordCard = ({ record }) => (
    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="material-icons text-blue-600">person</span>
          </div>
          <div>
            <h3 className="font-semibold text-[#101418]">{record.studentName}</h3>
            <p className="text-sm text-[#5c728a]">{record.rollNo} • {record.class}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`font-semibold ${getGradeColor(record.overallGrade)}`}>{record.overallGrade}</p>
          <p className="text-sm text-[#5c728a]">GPA: {record.gpa}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-[#5c728a]">Attendance</p>
          <p className="font-semibold text-[#101418]">{record.attendance}%</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Behavior Score</p>
          <p className="font-semibold text-[#101418]">{record.behaviorScore}/10</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-[#5c728a] mb-2">Subject Performance</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {Object.entries(record.subjects).map(([subject, data]) => (
            <div key={subject} className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="capitalize">{subject}</span>
              <span className={`font-semibold ${getGradeColor(data.grade)}`}>{data.grade}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-[#5c728a]">Updated: {new Date(record.lastUpdated).toLocaleDateString()}</span>
        
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
            View Full Record
          </button>
          <button className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
            Export
          </button>
        </div>
      </div>
    </div>
  );

  const ReportCard = ({ report }) => (
    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-[#101418]">{report.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(report.type)}`}>
              {report.type.replace('_', ' ').toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#5c728a] mb-3">
            <span>{report.class}</span>
            <span>{report.academicYear} • {report.semester}</span>
            <span>Generated: {new Date(report.generatedDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-4 text-sm">
        <div>
          <p className="text-[#5c728a]">Students</p>
          <p className="font-semibold text-[#101418]">{report.totalStudents}</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Avg GPA</p>
          <p className="font-semibold text-[#101418]">{report.avgGPA}</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Attendance</p>
          <p className="font-semibold text-[#101418]">{report.avgAttendance}%</p>
        </div>
        <div>
          <p className="text-[#5c728a]">File Size</p>
          <p className="font-semibold text-[#101418]">{report.fileSize}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-[#5c728a]">Downloaded {report.downloadCount} times</span>
        
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
            View Report
          </button>
          <button className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
            Download
          </button>
        </div>
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
              <h1 className="text-2xl font-bold text-[#101418] mb-2">Academic Archive</h1>
              <p className="text-[#5c728a]">Access historical academic data, assessments, and reports</p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#101418] mb-2">Search</label>
                  <div className="relative">
                    <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5c728a]">search</span>
                    <input
                      type="text"
                      placeholder="Search assessments, students, or reports..."
                      className="w-full pl-10 pr-4 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#101418] mb-2">Academic Year</label>
                  <select 
                    className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="all">All Years</option>
                    <option value="2023-24">2023-24</option>
                    <option value="2022-23">2022-23</option>
                    <option value="2021-22">2021-22</option>
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
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-blue-600">assignment</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">{archivedAssessments.length}</h3>
                    <p className="text-sm text-[#5c728a]">Archived Assessments</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-green-600">people</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">{studentRecords.length}</h3>
                    <p className="text-sm text-[#5c728a]">Student Records</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-purple-600">description</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">{classReports.length}</h3>
                    <p className="text-sm text-[#5c728a]">Class Reports</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-orange-600">cloud_download</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">84</h3>
                    <p className="text-sm text-[#5c728a]">Total Downloads</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl border border-[#d4dbe2]">
              <div className="flex border-b border-[#d4dbe2] overflow-x-auto">
                {[
                  { id: 'assessments', label: 'Archived Assessments', icon: 'assignment' },
                  { id: 'students', label: 'Student Records', icon: 'people' },
                  { id: 'reports', label: 'Class Reports', icon: 'description' },
                  { id: 'analytics', label: 'Archive Analytics', icon: 'analytics' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
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
                {activeTab === 'assessments' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-[#101418]">Archived Assessments ({filteredAssessments.length})</h3>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Export All
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {filteredAssessments.map(assessment => (
                        <AssessmentCard key={assessment.id} assessment={assessment} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'students' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-[#101418]">Student Records</h3>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                        Generate Report
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {studentRecords.map(record => (
                        <StudentRecordCard key={record.id} record={record} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reports' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-[#101418]">Class Reports</h3>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                        Create New Report
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {classReports.map(report => (
                        <ReportCard key={report.id} report={report} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    <h3 className="font-semibold text-[#101418]">Archive Analytics</h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-[#101418] mb-4">Most Downloaded Content</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Physics Mechanics Quiz</span>
                            <span className="font-semibold text-[#101418]">15 downloads</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Calculus Final Exam</span>
                            <span className="font-semibold text-[#101418]">12 downloads</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Chemistry Lab Reports</span>
                            <span className="font-semibold text-[#101418]">8 downloads</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-[#101418] mb-4">Storage Usage</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Assessments</span>
                            <span className="font-semibold text-[#101418]">28.2 MB</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Student Records</span>
                            <span className="font-semibold text-[#101418]">15.7 MB</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Reports</span>
                            <span className="font-semibold text-[#101418]">8.9 MB</span>
                          </div>
                          <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                            <span className="font-semibold text-[#101418]">Total</span>
                            <span className="font-semibold text-[#101418]">52.8 MB</span>
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

export default TeacherArchive;