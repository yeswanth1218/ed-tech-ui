import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherExams = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedExam, setSelectedExam] = useState(null);
  const [showQuestionPaper, setShowQuestionPaper] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(false);

  const pendingExams = [
    {
      id: 1,
      title: 'Mid-term Mathematics Exam',
      class: '12-A',
      subject: 'Mathematics',
      date: '2024-02-15',
      duration: '3 hours',
      totalMarks: 100,
      status: 'question_paper_pending',
      studentsCount: 45,
      createdBy: 'Organization',
      deadline: '2024-02-10'
    },
    {
      id: 2,
      title: 'Algebra Unit Test',
      class: '11-B',
      subject: 'Mathematics',
      date: '2024-02-12',
      duration: '2 hours',
      totalMarks: 75,
      status: 'evaluation_pending',
      studentsCount: 38,
      createdBy: 'Organization',
      deadline: '2024-02-08'
    },
    {
      id: 3,
      title: 'Statistics Assessment',
      class: '11-A',
      subject: 'Mathematics',
      date: '2024-02-18',
      duration: '2.5 hours',
      totalMarks: 80,
      status: 'rubric_pending',
      studentsCount: 42,
      createdBy: 'Organization',
      deadline: '2024-02-12'
    }
  ];

  const recentExams = [
    {
      id: 4,
      title: 'Calculus Final Exam',
      class: '12-C',
      subject: 'Mathematics',
      date: '2024-01-25',
      duration: '3 hours',
      totalMarks: 100,
      status: 'completed',
      studentsCount: 40,
      evaluatedCount: 40,
      avgScore: 78.5,
      aiAccuracy: 94.2
    },
    {
      id: 5,
      title: 'Trigonometry Test',
      class: '11-C',
      subject: 'Mathematics',
      date: '2024-01-20',
      duration: '1.5 hours',
      totalMarks: 50,
      status: 'completed',
      studentsCount: 35,
      evaluatedCount: 35,
      avgScore: 42.3,
      aiAccuracy: 96.8
    }
  ];

  const evaluationMetrics = [
    { label: 'AI Evaluation Accuracy', value: '95.2%', trend: '+2.1%', color: 'green' },
    { label: 'Avg. Evaluation Time', value: '12 min', trend: '-3 min', color: 'blue' },
    { label: 'Manual Reviews Required', value: '8%', trend: '-2%', color: 'orange' },
    { label: 'Student Satisfaction', value: '4.7/5', trend: '+0.2', color: 'purple' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'question_paper_pending': return 'text-red-600 bg-red-50';
      case 'evaluation_pending': return 'text-orange-600 bg-orange-50';
      case 'rubric_pending': return 'text-yellow-600 bg-yellow-50';
      case 'completed': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'question_paper_pending': return 'Question Paper Required';
      case 'evaluation_pending': return 'Evaluation Pending';
      case 'rubric_pending': return 'Rubric Setup Required';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  const getPriorityLevel = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysLeft <= 1) return { level: 'high', color: 'red', text: 'Urgent' };
    if (daysLeft <= 3) return { level: 'medium', color: 'orange', text: 'High Priority' };
    return { level: 'low', color: 'green', text: 'Normal' };
  };

  const ExamCard = ({ exam, type }) => {
    const priority = type === 'pending' ? getPriorityLevel(exam.deadline) : null;
    
    return (
      <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all cursor-pointer"
           onClick={() => setSelectedExam(exam)}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#101418] mb-1">{exam.title}</h3>
            <div className="flex items-center gap-4 text-sm text-[#5c728a]">
              <span className="flex items-center gap-1">
                <span className="material-icons" style={{fontSize: '16px'}}>school</span>
                {exam.class}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-icons" style={{fontSize: '16px'}}>schedule</span>
                {exam.duration}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-icons" style={{fontSize: '16px'}}>groups</span>
                {exam.studentsCount} students
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
              {getStatusText(exam.status)}
            </span>
            {priority && (
              <div className={`mt-2 px-2 py-1 rounded text-xs font-medium text-${priority.color}-600 bg-${priority.color}-50`}>
                {priority.text}
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-[#5c728a]">Date</p>
            <p className="font-medium text-[#101418]">{new Date(exam.date).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-[#5c728a]">Total Marks</p>
            <p className="font-medium text-[#101418]">{exam.totalMarks}</p>
          </div>
          {type === 'recent' && (
            <>
              <div>
                <p className="text-[#5c728a]">Avg Score</p>
                <p className="font-medium text-[#101418]">{exam.avgScore}%</p>
              </div>
              <div>
                <p className="text-[#5c728a]">AI Accuracy</p>
                <p className="font-medium text-[#101418]">{exam.aiAccuracy}%</p>
              </div>
            </>
          )}
          {type === 'pending' && (
            <>
              <div>
                <p className="text-[#5c728a]">Deadline</p>
                <p className="font-medium text-[#101418]">{new Date(exam.deadline).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-[#5c728a]">Created By</p>
                <p className="font-medium text-[#101418]">{exam.createdBy}</p>
              </div>
            </>
          )}
        </div>
        
        {type === 'pending' && (
          <div className="mt-4 flex gap-2">
            {exam.status === 'question_paper_pending' && (
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      onClick={(e) => { e.stopPropagation(); setShowQuestionPaper(true); }}>
                Set Question Paper
              </button>
            )}
            {exam.status === 'evaluation_pending' && (
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                      onClick={(e) => { e.stopPropagation(); setShowEvaluation(true); }}>
                Start Evaluation
              </button>
            )}
            {exam.status === 'rubric_pending' && (
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                Configure Rubric
              </button>
            )}
          </div>
        )}
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
              <h1 className="text-2xl font-bold text-[#101418] mb-2">Exams & Evaluations</h1>
              <p className="text-[#5c728a]">Manage exam creation, evaluation, and AI performance monitoring</p>
            </div>

            {/* Evaluation Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {evaluationMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#5c728a] text-sm font-medium">{metric.label}</p>
                    <span className={`text-xs font-medium ${
                      metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.trend}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-[#101418]">{metric.value}</p>
                </div>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl border border-[#d4dbe2] mb-6">
              <div className="flex border-b border-[#d4dbe2]">
                <button
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'pending'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-[#5c728a] hover:text-[#101418]'
                  }`}
                  onClick={() => setActiveTab('pending')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>pending_actions</span>
                    Pending Actions ({pendingExams.length})
                  </div>
                </button>
                <button
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'recent'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-[#5c728a] hover:text-[#101418]'
                  }`}
                  onClick={() => setActiveTab('recent')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>history</span>
                    Recent Exams
                  </div>
                </button>
                <button
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'analytics'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-[#5c728a] hover:text-[#101418]'
                  }`}
                  onClick={() => setActiveTab('analytics')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>analytics</span>
                    AI Performance
                  </div>
                </button>
                <button
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'uploadSheets'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-[#5c728a] hover:text-[#101418]'
                  }`}
                  onClick={() => setActiveTab('uploadSheets')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>upload_file</span>
                    Upload Answer Sheets
                  </div>
                </button>
                <button
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'questionPaper'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-[#5c728a] hover:text-[#101418]'
                  }`}
                  onClick={() => setActiveTab('questionPaper')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>assignment</span>
                    Set Question Paper
                  </div>
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'pending' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-[#101418]">Exams Requiring Action</h2>
                      <div className="flex gap-2">
                        <select className="px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm">
                          <option>All Classes</option>
                          <option>12-A</option>
                          <option>11-B</option>
                          <option>11-A</option>
                        </select>
                        <select className="px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm">
                          <option>All Status</option>
                          <option>Question Paper Pending</option>
                          <option>Evaluation Pending</option>
                          <option>Rubric Pending</option>
                        </select>
                      </div>
                    </div>

                    
                    {pendingExams.map(exam => (
                      <ExamCard key={exam.id} exam={exam} type="pending" />
                    ))}
                  </div>
                )}

                {activeTab === 'recent' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-[#101418]">Recently Completed Exams</h2>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Export Results
                      </button>
                    </div>
                    {recentExams.map(exam => (
                      <ExamCard key={exam.id} exam={exam} type="recent" />
                    ))}
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-[#101418]">AI Evaluation Performance</h2>
                    
                    {/* AI Performance Charts Placeholder */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6 border border-[#d4dbe2]">
                        <h3 className="font-semibold text-[#101418] mb-4">Accuracy Trends</h3>
                        <div className="h-48 flex items-center justify-center text-[#5c728a]">
                          [Chart: AI Accuracy over time]
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border border-[#d4dbe2]">
                        <h3 className="font-semibold text-[#101418] mb-4">Evaluation Speed</h3>
                        <div className="h-48 flex items-center justify-center text-[#5c728a]">
                          [Chart: Time per evaluation]
                        </div>
                      </div>
                    </div>
                    
                    {/* Sanity Testing Results */}
                    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                      <h3 className="font-semibold text-[#101418] mb-4">Latest Sanity Test Results</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-[#101418]">Mathematics - Calculus Test</span>
                          <span className="text-green-600 font-medium">98.5% Accuracy</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-[#101418]">Algebra - Problem Solving</span>
                          <span className="text-green-600 font-medium">96.2% Accuracy</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                          <span className="text-[#101418]">Statistics - Data Analysis</span>
                          <span className="text-yellow-600 font-medium">89.1% Accuracy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'uploadSheets' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-[#101418]">Upload Answer Sheets for Evaluation</h2>
                    </div>
                    
                    {/* Upload Answer Sheets Block */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <span className="material-icons text-blue-600" style={{fontSize: '24px'}}>upload_file</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#101418]">Upload Answer Sheets for Evaluation</h3>
                          </div>
                          <p className="text-[#5c728a] mb-3">
                            Upload student answer sheets to start AI-powered evaluation process
                          </p>
                          <div className="flex items-center gap-4 text-sm text-[#5c728a]">
                            <span className="flex items-center gap-1">
                              <span className="material-icons" style={{fontSize: '16px'}}>smart_toy</span>
                              AI Evaluation Ready
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="material-icons" style={{fontSize: '16px'}}>speed</span>
                              Fast Processing
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="material-icons" style={{fontSize: '16px'}}>verified</span>
                              High Accuracy
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="px-3 py-1 rounded-full text-xs font-medium text-green-600 bg-green-50">
                            Ready to Upload
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <button 
                          onClick={() => navigate('/answer-sheet-upload')}
                          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                          <span className="material-icons" style={{fontSize: '18px'}}>upload</span>
                          Upload Sheets
                        </button>
                        <button className="px-4 py-3 border border-blue-200 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                          View Guidelines
                        </button>
                      </div>
                    </div>
                    
                    {/* Additional Upload Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <span className="material-icons text-green-600" style={{fontSize: '20px'}}>history</span>
                          </div>
                          <h3 className="font-semibold text-[#101418]">Recent Uploads</h3>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-[#101418] text-sm">Math Test - Class 12A</span>
                            <span className="text-green-600 text-xs font-medium">Completed</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-[#101418] text-sm">Physics Quiz - Class 11B</span>
                            <span className="text-blue-600 text-xs font-medium">Processing</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <span className="material-icons text-purple-600" style={{fontSize: '20px'}}>help_outline</span>
                          </div>
                          <h3 className="font-semibold text-[#101418]">Upload Guidelines</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-[#5c728a]">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Supported formats: PDF, JPG, PNG
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Maximum file size: 10MB per sheet
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Clear, high-resolution images required
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'questionPaper' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-[#101418]">Upcoming Examinations</h2>
                    </div>
                    
                    {/* Exam Details Card */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <span className="material-icons text-blue-600" style={{fontSize: '24px'}}>assignment</span>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-[#101418]">Unit Test 1</h3>
                              <p className="text-[#5c728a]">Environmental Science (EVS)</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-[#5c728a]">Exam ID</p>
                              <p className="font-medium text-[#101418]">1</p>
                            </div>
                            <div>
                              <p className="text-[#5c728a]">Class</p>
                              <p className="font-medium text-[#101418]">3-B</p>
                            </div>
                            <div>
                              <p className="text-[#5c728a]">Date</p>
                              <p className="font-medium text-[#101418]">Aug 18, 2025</p>
                            </div>
                            <div>
                              <p className="text-[#5c728a]">Class ID</p>
                              <p className="font-medium text-[#101418]">23</p>
                            </div>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => navigate('/set-question-paper')}
                          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                          <span className="material-icons" style={{fontSize: '18px'}}>edit</span>
                          Set Question Paper
                        </button>
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

export default TeacherExams;