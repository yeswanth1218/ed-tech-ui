import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherAssessments = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  
  const assessments = [
    {
      id: 1,
      title: 'Quadratic Equations Test',
      type: 'test',
      subject: 'Mathematics',
      class: '12-A',
      totalMarks: 100,
      duration: 90,
      status: 'published',
      dueDate: '2024-01-25',
      createdDate: '2024-01-15',
      submissions: 42,
      totalStudents: 45,
      avgScore: 78.5,
      difficulty: 'medium',
      topics: ['Quadratic Equations', 'Factorization', 'Graphing'],
      instructions: 'Solve all questions. Show your work clearly.',
      questions: [
        {
          id: 1,
          type: 'mcq',
          question: 'What is the discriminant of x² + 5x + 6 = 0?',
          options: ['1', '25', '36', '49'],
          correctAnswer: 0,
          marks: 2
        },
        {
          id: 2,
          type: 'short_answer',
          question: 'Solve: 2x² - 8x + 6 = 0',
          marks: 5
        }
      ]
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      type: 'assignment',
      subject: 'Physics',
      class: '11-B',
      totalMarks: 50,
      duration: null,
      status: 'draft',
      dueDate: '2024-01-30',
      createdDate: '2024-01-16',
      submissions: 0,
      totalStudents: 38,
      avgScore: null,
      difficulty: 'hard',
      topics: ['Optics', 'Refraction', 'Lens Formula'],
      instructions: 'Submit a detailed lab report with observations and calculations.',
      questions: []
    },
    {
      id: 3,
      title: 'Chemical Bonding Quiz',
      type: 'quiz',
      subject: 'Chemistry',
      class: '12-A',
      totalMarks: 25,
      duration: 30,
      status: 'published',
      dueDate: '2024-01-20',
      createdDate: '2024-01-10',
      submissions: 45,
      totalStudents: 45,
      avgScore: 82.3,
      difficulty: 'easy',
      topics: ['Ionic Bonding', 'Covalent Bonding', 'Metallic Bonding'],
      instructions: 'Quick quiz on chemical bonding concepts.',
      questions: []
    },
    {
      id: 4,
      title: 'English Essay - Climate Change',
      type: 'assignment',
      subject: 'English',
      class: '11-A',
      totalMarks: 75,
      duration: null,
      status: 'published',
      dueDate: '2024-01-28',
      createdDate: '2024-01-12',
      submissions: 28,
      totalStudents: 40,
      avgScore: 68.7,
      difficulty: 'medium',
      topics: ['Essay Writing', 'Environmental Issues', 'Argumentative Writing'],
      instructions: 'Write a 1500-word essay on climate change impacts.',
      questions: []
    }
  ];

  const recentSubmissions = [
    {
      id: 1,
      student: 'Emma Thompson',
      assessment: 'Quadratic Equations Test',
      submittedAt: '2024-01-16 14:30',
      score: 95,
      status: 'graded',
      timeSpent: 85
    },
    {
      id: 2,
      student: 'David Kim',
      assessment: 'Chemical Bonding Quiz',
      submittedAt: '2024-01-16 10:15',
      score: 88,
      status: 'graded',
      timeSpent: 28
    },
    {
      id: 3,
      student: 'Sarah Chen',
      assessment: 'English Essay - Climate Change',
      submittedAt: '2024-01-16 16:45',
      score: null,
      status: 'pending',
      timeSpent: null
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'draft': return 'text-gray-600 bg-gray-50 border-gray-200';
      case 'published': return 'text-green-600 bg-green-50 border-green-200';
      case 'closed': return 'text-red-600 bg-red-50 border-red-200';
      case 'graded': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'pending': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'test': return 'quiz';
      case 'assignment': return 'assignment';
      case 'quiz': return 'help_outline';
      default: return 'description';
    }
  };

  const AssessmentCard = ({ assessment }) => (
    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all cursor-pointer"
         onClick={() => setSelectedAssessment(assessment)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="material-icons text-blue-600">{getTypeIcon(assessment.type)}</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-[#101418] mb-1">{assessment.title}</h3>
            <div className="flex items-center gap-4 text-sm text-[#5c728a] mb-2">
              <span>{assessment.subject} • {assessment.class}</span>
              <span>{assessment.totalMarks} marks</span>
              {assessment.duration && <span>{assessment.duration} min</span>}
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(assessment.difficulty)}`}>
                {assessment.difficulty.toUpperCase()}
              </span>
              <span className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(assessment.status)}`}>
                {assessment.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
        <div>
          <p className="text-[#5c728a]">Submissions</p>
          <p className="font-semibold text-[#101418]">{assessment.submissions}/{assessment.totalStudents}</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Due Date</p>
          <p className="font-semibold text-[#101418]">{new Date(assessment.dueDate).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Avg Score</p>
          <p className="font-semibold text-[#101418]">{assessment.avgScore ? `${assessment.avgScore}%` : 'N/A'}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-1">
          {assessment.topics.slice(0, 2).map((topic, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              {topic}
            </span>
          ))}
          {assessment.topics.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              +{assessment.topics.length - 2} more
            </span>
          )}
        </div>
        
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
            View
          </button>
          {assessment.status === 'draft' && (
            <button className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
              Publish
            </button>
          )}
          {assessment.status === 'published' && (
            <button className="px-3 py-1 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
              Grade
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const SubmissionCard = ({ submission }) => (
    <div className="bg-white rounded-xl p-4 border border-[#d4dbe2] hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-semibold text-[#101418]">{submission.student}</h4>
          <p className="text-sm text-[#5c728a]">{submission.assessment}</p>
        </div>
        <span className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(submission.status)}`}>
          {submission.status.toUpperCase()}
        </span>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-sm mb-3">
        <div>
          <p className="text-[#5c728a]">Submitted</p>
          <p className="font-semibold text-[#101418]">{new Date(submission.submittedAt).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Score</p>
          <p className="font-semibold text-[#101418]">{submission.score ? `${submission.score}%` : 'Pending'}</p>
        </div>
        <div>
          <p className="text-[#5c728a]">Time Spent</p>
          <p className="font-semibold text-[#101418]">{submission.timeSpent ? `${submission.timeSpent} min` : 'N/A'}</p>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
          Review
        </button>
        {submission.status === 'pending' && (
          <button className="flex-1 px-3 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
            Grade Now
          </button>
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
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-[#101418] mb-2">Create Assessments</h1>
                <p className="text-[#5c728a]">Design and manage assignments, tests, and quizzes</p>
              </div>
              <button 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                onClick={() => setShowCreateModal(true)}
              >
                <span className="material-icons">add</span>
                Create Assessment
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-blue-600">assignment</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">{assessments.length}</h3>
                    <p className="text-sm text-[#5c728a]">Total Assessments</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-green-600">publish</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">{assessments.filter(a => a.status === 'published').length}</h3>
                    <p className="text-sm text-[#5c728a]">Published</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-orange-600">pending</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">{recentSubmissions.filter(s => s.status === 'pending').length}</h3>
                    <p className="text-sm text-[#5c728a]">Pending Grading</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-purple-600">trending_up</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">78.5%</h3>
                    <p className="text-sm text-[#5c728a]">Avg Score</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl border border-[#d4dbe2] mb-6">
              <div className="flex border-b border-[#d4dbe2] overflow-x-auto">
                {[
                  { id: 'overview', label: 'All Assessments', icon: 'dashboard' },
                  { id: 'drafts', label: 'Drafts', icon: 'edit' },
                  { id: 'published', label: 'Published', icon: 'publish' },
                  { id: 'grading', label: 'Pending Grading', icon: 'grade' },
                  { id: 'analytics', label: 'Analytics', icon: 'analytics' }
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
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-[#101418]">All Assessments</h3>
                      <div className="flex gap-2">
                        <select className="px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm">
                          <option>All Subjects</option>
                          <option>Mathematics</option>
                          <option>Physics</option>
                          <option>Chemistry</option>
                          <option>English</option>
                        </select>
                        <select className="px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm">
                          <option>All Classes</option>
                          <option>12-A</option>
                          <option>12-B</option>
                          <option>11-A</option>
                          <option>11-B</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {assessments.map(assessment => (
                        <AssessmentCard key={assessment.id} assessment={assessment} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'drafts' && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#101418] mb-4">Draft Assessments</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {assessments.filter(a => a.status === 'draft').map(assessment => (
                        <AssessmentCard key={assessment.id} assessment={assessment} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'published' && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#101418] mb-4">Published Assessments</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {assessments.filter(a => a.status === 'published').map(assessment => (
                        <AssessmentCard key={assessment.id} assessment={assessment} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'grading' && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#101418] mb-4">Pending Grading</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                      {recentSubmissions.filter(s => s.status === 'pending').map(submission => (
                        <SubmissionCard key={submission.id} submission={submission} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    <h3 className="font-semibold text-[#101418]">Assessment Analytics</h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-[#101418] mb-4">Performance by Subject</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Mathematics</span>
                            <span className="font-semibold text-[#101418]">78.5%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Chemistry</span>
                            <span className="font-semibold text-[#101418]">82.3%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">English</span>
                            <span className="font-semibold text-[#101418]">68.7%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-[#101418] mb-4">Assessment Types</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Tests</span>
                            <span className="font-semibold text-[#101418]">{assessments.filter(a => a.type === 'test').length}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Assignments</span>
                            <span className="font-semibold text-[#101418]">{assessments.filter(a => a.type === 'assignment').length}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#101418]">Quizzes</span>
                            <span className="font-semibold text-[#101418]">{assessments.filter(a => a.type === 'quiz').length}</span>
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

export default TeacherAssessments;