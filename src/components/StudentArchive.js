import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar';

const StudentArchive = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const archiveItems = [
    {
      id: 1,
      title: 'Mathematics Final Exam 2023',
      type: 'exam',
      subject: 'Mathematics',
      date: '2023-12-15',
      score: 92,
      grade: 'A+',
      semester: 'Fall 2023',
      fileSize: '2.4 MB',
      downloads: 3
    },
    {
      id: 2,
      title: 'Physics Lab Report - Pendulum Motion',
      type: 'assignment',
      subject: 'Physics',
      date: '2023-11-20',
      score: 87,
      grade: 'A',
      semester: 'Fall 2023',
      fileSize: '1.8 MB',
      downloads: 1
    },
    {
      id: 3,
      title: 'English Literature Essay - Shakespeare Analysis',
      type: 'assignment',
      subject: 'English',
      date: '2023-10-30',
      score: 90,
      grade: 'A+',
      semester: 'Fall 2023',
      fileSize: '856 KB',
      downloads: 2
    },
    {
      id: 4,
      title: 'Chemistry Mid-term Exam',
      type: 'exam',
      subject: 'Chemistry',
      date: '2023-10-15',
      score: 85,
      grade: 'A',
      semester: 'Fall 2023',
      fileSize: '3.1 MB',
      downloads: 4
    },
    {
      id: 5,
      title: 'History Research Project - World War II',
      type: 'project',
      subject: 'History',
      date: '2023-09-25',
      score: 88,
      grade: 'A',
      semester: 'Fall 2023',
      fileSize: '5.2 MB',
      downloads: 1
    },
    {
      id: 6,
      title: 'Biology Practical Exam',
      type: 'exam',
      subject: 'Biology',
      date: '2023-09-10',
      score: 91,
      grade: 'A+',
      semester: 'Fall 2023',
      fileSize: '2.7 MB',
      downloads: 2
    },
    {
      id: 7,
      title: 'Computer Science Programming Assignment',
      type: 'assignment',
      subject: 'Computer Science',
      date: '2023-08-20',
      score: 95,
      grade: 'A+',
      semester: 'Summer 2023',
      fileSize: '1.2 MB',
      downloads: 5
    },
    {
      id: 8,
      title: 'Art Portfolio Submission',
      type: 'project',
      subject: 'Art',
      date: '2023-05-15',
      score: 89,
      grade: 'A',
      semester: 'Spring 2023',
      fileSize: '12.5 MB',
      downloads: 0
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'exam': return 'quiz';
      case 'assignment': return 'assignment';
      case 'project': return 'folder_special';
      default: return 'description';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'exam': return 'bg-red-100 text-red-800';
      case 'assignment': return 'bg-blue-100 text-blue-800';
      case 'project': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+': return 'bg-green-100 text-green-800';
      case 'A': return 'bg-blue-100 text-blue-800';
      case 'B+': return 'bg-yellow-100 text-yellow-800';
      case 'B': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredItems = archiveItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.type === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalFiles = archiveItems.length;
  const totalSize = archiveItems.reduce((sum, item) => {
    const size = parseFloat(item.fileSize);
    return sum + (item.fileSize.includes('MB') ? size : size / 1024);
  }, 0);
  const averageScore = archiveItems.reduce((sum, item) => sum + item.score, 0) / archiveItems.length;

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <StudentSidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Academic Archive</p>
                <p className="text-[#5c728a] text-base font-normal leading-normal">Access all your academic documents, assignments, and exam records</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2">
                  <span className="material-icons" style={{fontSize: '20px'}}>cloud_upload</span>
                  Upload Document
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <span className="material-icons" style={{fontSize: '20px'}}>download</span>
                  Bulk Download
                </button>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Total Files</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{totalFiles}</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Documents archived</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Storage Used</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{totalSize.toFixed(1)} MB</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Of 500 MB available</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Average Score</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{averageScore.toFixed(1)}%</p>
                <p className="text-green-600 text-sm font-normal leading-normal">Excellent performance</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Recent Activity</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">3</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Files this week</p>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-wrap gap-3 p-4">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5c728a]" style={{fontSize: '20px'}}>search</span>
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-[#d4dbe2] rounded-lg px-4 py-2 text-sm"
              >
                <option value="all">All Types</option>
                <option value="exam">Exams</option>
                <option value="assignment">Assignments</option>
                <option value="project">Projects</option>
              </select>
              <button className="bg-white text-[#101418] px-4 py-2 rounded-lg border border-[#d4dbe2] hover:bg-gray-50 transition-colors flex items-center gap-2">
                <span className="material-icons" style={{fontSize: '20px'}}>filter_list</span>
                More Filters
              </button>
            </div>

            {/* Archive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-[#d4dbe2] p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="material-icons text-blue-600" style={{fontSize: '20px'}}>{getTypeIcon(item.type)}</span>
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                          {item.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <span className="material-icons" style={{fontSize: '20px'}}>more_vert</span>
                    </button>
                  </div>
                  
                  <h3 className="text-[#101418] font-medium text-sm leading-tight mb-2 line-clamp-2">{item.title}</h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#5c728a] text-xs">{item.subject}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(item.grade)}`}>
                      {item.grade}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-xs text-[#5c728a]">
                    <span>{item.date}</span>
                    <span>{item.score}%</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-xs text-[#5c728a]">
                    <span>{item.fileSize}</span>
                    <span>{item.downloads} downloads</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg text-xs font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-1">
                      <span className="material-icons" style={{fontSize: '16px'}}>visibility</span>
                      View
                    </button>
                    <button className="flex-1 bg-green-500 text-white py-2 px-3 rounded-lg text-xs font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-1">
                      <span className="material-icons" style={{fontSize: '16px'}}>download</span>
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center p-4">
              <button className="bg-white text-[#101418] px-6 py-3 rounded-lg border border-[#d4dbe2] hover:bg-gray-50 transition-colors font-medium">
                Load More Documents
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 p-4">
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                Create Study Guide
              </button>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Generate Report Card
              </button>
              <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                Share with Parents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentArchive;