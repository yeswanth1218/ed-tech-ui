import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DepartmentDetail = () => {
  const { departmentId } = useParams();
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [activeTab, setActiveTab] = useState('subjects');

  // Mock data - in real app, this would come from API
  const departmentData = {
    cse: {
      name: 'Computer Science Engineering',
      shortName: 'CSE',
      icon: '💻',
      description: 'Computer Science Engineering focuses on the design and development of computer systems and their applications.',
      hod: 'Dr. Rajesh Kumar',
      totalStudents: 456,
      totalFaculty: 18,
      establishedYear: 2005
    },
    mech: {
      name: 'Mechanical Engineering',
      shortName: 'MECH',
      icon: '⚙️',
      description: 'Mechanical Engineering deals with the design, construction, and use of machines.',
      hod: 'Dr. Priya Sharma',
      totalStudents: 245,
      totalFaculty: 12,
      establishedYear: 1998
    },
    ece: {
      name: 'Electronics & Communication Engineering',
      shortName: 'ECE',
      icon: '📡',
      description: 'ECE focuses on electronic devices, circuits, communication equipment, and related systems.',
      hod: 'Dr. Amit Patel',
      totalStudents: 312,
      totalFaculty: 15,
      establishedYear: 2001
    },
    aiml: {
      name: 'AI & Machine Learning Engineering',
      shortName: 'AIML',
      icon: '🤖',
      description: 'AIML focuses on artificial intelligence, machine learning algorithms, and intelligent systems development.',
      hod: 'Dr. Neha Singh',
      totalStudents: 156,
      totalFaculty: 9,
      establishedYear: 2020
    }
  };

  const semesterData = {
    1: {
      subjects: [
        { code: 'CS101', name: 'Programming Fundamentals', credits: 4, type: 'Core' },
        { code: 'MA101', name: 'Engineering Mathematics I', credits: 4, type: 'Core' },
        { code: 'PH101', name: 'Engineering Physics', credits: 3, type: 'Core' },
        { code: 'CH101', name: 'Engineering Chemistry', credits: 3, type: 'Core' },
        { code: 'EG101', name: 'Engineering Graphics', credits: 2, type: 'Core' }
      ],
      teachers: [
        { name: 'Dr. Sarah Johnson', subject: 'Programming Fundamentals', experience: '8 years' },
        { name: 'Prof. Michael Chen', subject: 'Engineering Mathematics I', experience: '12 years' },
        { name: 'Dr. Lisa Wang', subject: 'Engineering Physics', experience: '6 years' }
      ]
    },
    2: {
      subjects: [
        { code: 'CS201', name: 'Data Structures', credits: 4, type: 'Core' },
        { code: 'MA201', name: 'Engineering Mathematics II', credits: 4, type: 'Core' },
        { code: 'CS202', name: 'Digital Logic Design', credits: 3, type: 'Core' },
        { code: 'CS203', name: 'Computer Organization', credits: 3, type: 'Core' },
        { code: 'HS201', name: 'Technical Communication', credits: 2, type: 'Core' }
      ],
      teachers: [
        { name: 'Dr. James Wilson', subject: 'Data Structures', experience: '10 years' },
        { name: 'Prof. Emily Davis', subject: 'Digital Logic Design', experience: '7 years' },
        { name: 'Dr. Robert Brown', subject: 'Computer Organization', experience: '9 years' }
      ]
    }
  };

  const electives = [
    { code: 'CS401', name: 'Artificial Intelligence', credits: 3, semester: 7 },
    { code: 'CS402', name: 'Machine Learning', credits: 3, semester: 7 },
    { code: 'CS403', name: 'Cybersecurity', credits: 3, semester: 8 },
    { code: 'CS404', name: 'Cloud Computing', credits: 3, semester: 8 }
  ];

  const department = departmentData[departmentId] || departmentData.cse;
  const currentSemesterData = semesterData[selectedSemester] || semesterData[1];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="flex flex-1 justify-start">
          <Sidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Breadcrumb */}
            <div className="p-4">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link to="/departments" className="hover:text-blue-600">Departments</Link>
                <span>›</span>
                <span className="text-gray-900 font-medium">{department.name}</span>
              </nav>
            </div>

            {/* Department Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{department.icon}</div>
                  <div>
                    <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">{department.name}</p>
                    <p className="text-[#637588] text-sm font-normal leading-normal">{department.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Stats */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 min-w-[180px]">
                <div className="flex items-center gap-3">
                  <div className="text-xl">👨‍🏫</div>
                  <div>
                    <p className="text-[#101418] text-sm font-medium">Head of Department</p>
                    <p className="text-[#101418] text-lg font-bold">{department.hod}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 min-w-[150px]">
                <div className="flex items-center gap-3">
                  <div className="text-xl">👥</div>
                  <div>
                    <p className="text-[#101418] text-sm font-medium">Students</p>
                    <p className="text-[#101418] text-lg font-bold">{department.totalStudents}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 min-w-[150px]">
                <div className="flex items-center gap-3">
                  <div className="text-xl">🏫</div>
                  <div>
                    <p className="text-[#101418] text-sm font-medium">Faculty</p>
                    <p className="text-[#101418] text-lg font-bold">{department.totalFaculty}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 min-w-[150px]">
                <div className="flex items-center gap-3">
                  <div className="text-xl">📅</div>
                  <div>
                    <p className="text-[#101418] text-sm font-medium">Established</p>
                    <p className="text-[#101418] text-lg font-bold">{department.establishedYear}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="p-4">
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('subjects')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'subjects'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Subjects & Curriculum
                </button>
                <button
                  onClick={() => setActiveTab('faculty')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'faculty'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Faculty & Teachers
                </button>
                <button
                  onClick={() => setActiveTab('electives')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'electives'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Electives
                </button>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'subjects' && (
              <div className="p-4">
                {/* Semester Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Select Semester</h3>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <button
                        key={sem}
                        onClick={() => setSelectedSemester(sem)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedSemester === sem
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        Semester {sem}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subjects List */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900">Semester {selectedSemester} Subjects</h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {currentSemesterData.subjects.map((subject, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-mono text-gray-600 bg-white px-2 py-1 rounded">{subject.code}</span>
                              <span className="font-medium text-gray-900">{subject.name}</span>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                subject.type === 'Core' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                              }`}>
                                {subject.type}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">{subject.credits} Credits</span>
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              📄 Syllabus
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faculty' && (
              <div className="p-4">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900">Faculty Members - Semester {selectedSemester}</h3>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentSemesterData.teachers.map((teacher, index) => (
                        <div key={index} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-bold text-sm">{teacher.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{teacher.name}</h4>
                              <p className="text-xs text-gray-600">{teacher.experience}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 font-medium">{teacher.subject}</p>
                          <div className="mt-3 flex gap-2">
                            <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors">
                              Contact
                            </button>
                            <button className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors">
                              Schedule
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'electives' && (
              <div className="p-4">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900">Available Electives</h3>
                    <p className="text-sm text-gray-600 mt-1">Optional subjects students can choose from</p>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {electives.map((elective, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-mono text-gray-600 bg-white px-2 py-1 rounded">{elective.code}</span>
                              <span className="font-medium text-gray-900">{elective.name}</span>
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                                Semester {elective.semester}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">{elective.credits} Credits</span>
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              📄 Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;