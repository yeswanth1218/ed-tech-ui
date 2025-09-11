import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherExams = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Exam Results tab states
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedExamCode, setSelectedExamCode] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedSubjectCode, setSelectedSubjectCode] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [selectedStudentCode, setSelectedStudentCode] = useState('');
  const [evaluationResults, setEvaluationResults] = useState(null);
  const [resultsLoading, setResultsLoading] = useState(false);
  
  // Dynamic data states for exam results
  const [availableExams, setAvailableExams] = useState([]);
  const [availableClasses, setAvailableClasses] = useState([]);
  const [availableSubjects, setAvailableSubjects] = useState([]);
  const [availableStudentIds, setAvailableStudentIds] = useState([]);
  const [dropdownLoading, setDropdownLoading] = useState({
    exams: false,
    classes: false,
    subjects: false,
    students: false
  });

  // Fetch exams from API
  const fetchExams = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/exams`);
      if (!response.ok) {
        throw new Error('Failed to fetch exams');
      }
      const data = await response.json();
      setExams(data.data || []);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching exams:', err);
    } finally {
      setLoading(false);
    }
  };
  
  // API functions for exam results
  const fetchExamsForResults = async () => {
    setDropdownLoading(prev => ({ ...prev, exams: true }));
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/exams`);
      if (response.ok) {
        const result = await response.json();
        setAvailableExams(result.data || []);
      } else {
        console.error('Failed to fetch exams');
      }
    } catch (error) {
      console.error('Error fetching exams:', error);
    } finally {
      setDropdownLoading(prev => ({ ...prev, exams: false }));
    }
  };

  const fetchClasses = async () => {
    setDropdownLoading(prev => ({ ...prev, classes: true }));
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/classes`);
      if (response.ok) {
        const result = await response.json();
        setAvailableClasses(result.data || []);
      } else {
        console.error('Failed to fetch classes');
      }
    } catch (error) {
      console.error('Error fetching classes:', error);
    } finally {
      setDropdownLoading(prev => ({ ...prev, classes: false }));
    }
  };

  const fetchSubjects = async () => {
    setDropdownLoading(prev => ({ ...prev, subjects: true }));
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/subjects`);
      if (response.ok) {
        const result = await response.json();
        setAvailableSubjects(result.data || []);
      } else {
        console.error('Failed to fetch subjects');
      }
    } catch (error) {
      console.error('Error fetching subjects:', error);
    } finally {
      setDropdownLoading(prev => ({ ...prev, subjects: false }));
    }
  };

  const fetchStudentsByClass = async (classValue) => {
    if (!classValue) {
      setAvailableStudentIds([]);
      return;
    }
    setDropdownLoading(prev => ({ ...prev, students: true }));
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/students_by_class?class=${encodeURIComponent(classValue)}`);
      if (response.ok) {
        const result = await response.json();
        setAvailableStudentIds(result.data || []);
      } else {
        console.error('Failed to fetch students');
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setDropdownLoading(prev => ({ ...prev, students: false }));
    }
  };
  
  const fetchEvaluationResults = async () => {
    if (!selectedExam || !selectedClass || !selectedSubject || !selectedStudentId) {
      alert('Please select all fields before submitting.');
      return;
    }
    
    const goldenCode = `${selectedClass}-${selectedSubjectCode}-${selectedExamCode}`;
    setResultsLoading(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/evaluation_results?golden_code=${encodeURIComponent(goldenCode)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.ok) {
        const result = await response.json();
        setEvaluationResults(result);
      } else {
        throw new Error('Failed to fetch evaluation results');
      }
    } catch (error) {
      console.error('Error fetching evaluation results:', error);
      alert('Failed to fetch evaluation results. Please try again.');
    } finally {
      setResultsLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'questionPaper') {
      fetchExams();
    }
    if (activeTab === 'examResults') {
      fetchExamsForResults();
      fetchClasses();
      fetchSubjects();
    }
  }, [activeTab]);
  
  useEffect(() => {
    if (activeTab === 'examResults') {
      fetchStudentsByClass(selectedClass);
      // Reset student selection when class changes
      setSelectedStudentId('');
      setSelectedStudentCode('');
    }
  }, [selectedClass, activeTab]);

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

  // Removed recentExams array as it's no longer needed after replacing Recent Exams tab with Exam Results

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
      <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all cursor-pointer">
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
                      onClick={(e) => { e.stopPropagation(); navigate('/set-question-paper'); }}>
                Set Question Paper
              </button>
            )}
            {exam.status === 'evaluation_pending' && (
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                      onClick={(e) => { e.stopPropagation(); navigate('/evaluation'); }}>
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
    <div className="min-h-screen">
      <TeacherSidebar />
      <div className="ml-80 flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 overflow-auto" style={{backgroundColor: '#f0f2f5'}}>
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
              <div className="flex p-2 overflow-x-auto">
                <button
                  className={`px-4 py-2 mx-1 font-medium transition-all duration-300 whitespace-nowrap rounded-full ${
                    activeTab === 'pending'
                      ? 'text-white bg-blue-600 shadow-lg shadow-purple-500/30 transform -translate-y-0.5'
                      : 'text-[#5c728a] hover:text-[#101418] hover:bg-gray-100 hover:shadow-md hover:shadow-purple-300/20'
                  }`}
                  onClick={() => setActiveTab('pending')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>pending_actions</span>
                    Pending Actions ({pendingExams.length})
                  </div>
                </button>
                <button
                  className={`px-4 py-2 mx-1 font-medium transition-all duration-300 whitespace-nowrap rounded-full ${
                    activeTab === 'examResults'
                      ? 'text-white bg-blue-600 shadow-lg shadow-purple-500/30 transform -translate-y-0.5'
                      : 'text-[#5c728a] hover:text-[#101418] hover:bg-gray-100 hover:shadow-md hover:shadow-purple-300/20'
                  }`}
                  onClick={() => setActiveTab('examResults')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>assessment</span>
                    Exam Results
                  </div>
                </button>
                <button
                  className={`px-4 py-2 mx-1 font-medium transition-all duration-300 whitespace-nowrap rounded-full ${
                    activeTab === 'analytics'
                      ? 'text-white bg-blue-600 shadow-lg shadow-purple-500/30 transform -translate-y-0.5'
                      : 'text-[#5c728a] hover:text-[#101418] hover:bg-gray-100 hover:shadow-md hover:shadow-purple-300/20'
                  }`}
                  onClick={() => setActiveTab('analytics')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>analytics</span>
                    AI Performance
                  </div>
                </button>
                <button
                  className={`px-4 py-2 mx-1 font-medium transition-all duration-300 whitespace-nowrap rounded-full ${
                    activeTab === 'uploadSheets'
                      ? 'text-white bg-blue-600 shadow-lg shadow-purple-500/30 transform -translate-y-0.5'
                      : 'text-[#5c728a] hover:text-[#101418] hover:bg-gray-100 hover:shadow-md hover:shadow-purple-300/20'
                  }`}
                  onClick={() => setActiveTab('uploadSheets')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>upload_file</span>
                    Upload Answer Sheets
                  </div>
                </button>
                <button
                  className={`px-4 py-2 mx-1 font-medium transition-all duration-300 whitespace-nowrap rounded-full ${
                    activeTab === 'questionPaper'
                      ? 'text-white bg-blue-600 shadow-lg shadow-purple-500/30 transform -translate-y-0.5'
                      : 'text-[#5c728a] hover:text-[#101418] hover:bg-gray-100 hover:shadow-md hover:shadow-purple-300/20'
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

                {activeTab === 'examResults' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-base font-semibold text-[#101418]">Exam Results</h2>
                    </div>
                    
                    {/* Exam Selection Details */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <span className="material-icons text-blue-600" style={{fontSize: '24px'}}>quiz</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#101418]">Exam Selection Details</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Select Exam */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-[#5c728a] mb-2">Select Exam</label>
                          <select 
                            value={selectedExam} 
                            onChange={(e) => {
                              const selectedOption = availableExams.find(exam => exam.name === e.target.value);
                              setSelectedExam(e.target.value);
                              setSelectedExamCode(selectedOption ? selectedOption.examination_code : '');
                            }}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                            disabled={dropdownLoading.exams}
                          >
                            <option value="">{dropdownLoading.exams ? 'Loading exams...' : 'Choose an exam...'}</option>
                            {availableExams.map(exam => (
                              <option key={exam.id} value={exam.name}>
                                {exam.name}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-9 transform translate-y-1/2 pointer-events-none">
                            <span className="material-icons text-gray-400" style={{fontSize: '20px'}}>expand_more</span>
                          </div>
                        </div>

                        {/* Select Class */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-[#5c728a] mb-2">Class</label>
                          <select 
                            value={selectedClass} 
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                            disabled={dropdownLoading.classes}
                          >
                            <option value="">{dropdownLoading.classes ? 'Loading classes...' : 'Choose class...'}</option>
                            {availableClasses.map(cls => (
                              <option key={cls.class || cls} value={cls.class || cls}>
                                {cls.class || cls}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-9 transform translate-y-1/2 pointer-events-none">
                            <span className="material-icons text-gray-400" style={{fontSize: '20px'}}>expand_more</span>
                          </div>
                        </div>

                        {/* Select Subject */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-[#5c728a] mb-2">Subject</label>
                          <select 
                            value={selectedSubject} 
                            onChange={(e) => {
                              const selectedOption = availableSubjects.find(subject => subject.name === e.target.value);
                              setSelectedSubject(e.target.value);
                              setSelectedSubjectCode(selectedOption ? selectedOption.subject_code : '');
                            }}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                            disabled={dropdownLoading.subjects}
                          >
                            <option value="">{dropdownLoading.subjects ? 'Loading subjects...' : 'Choose subject...'}</option>
                            {availableSubjects.map(subject => (
                              <option key={subject.id} value={subject.name}>
                                {subject.name}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-9 transform translate-y-1/2 pointer-events-none">
                            <span className="material-icons text-gray-400" style={{fontSize: '20px'}}>expand_more</span>
                          </div>
                        </div>

                        {/* Select Student ID */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-[#5c728a] mb-2">Student ID</label>
                          <select 
                            value={selectedStudentId} 
                            onChange={(e) => {
                              const selectedOption = availableStudentIds.find(student => student.name === e.target.value);
                              setSelectedStudentId(e.target.value);
                              setSelectedStudentCode(selectedOption ? selectedOption.student_id : '');
                            }}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                            disabled={dropdownLoading.students || !selectedClass}
                          >
                            <option value="">
                              {!selectedClass ? 'Select class first...' : 
                               dropdownLoading.students ? 'Loading students...' : 
                               'Choose student ID...'}
                            </option>
                            {availableStudentIds.map(student => (
                              <option key={student.id} value={student.name}>
                                {student.name}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-9 transform translate-y-1/2 pointer-events-none">
                            <span className="material-icons text-gray-400" style={{fontSize: '20px'}}>expand_more</span>
                          </div>
                        </div>
                      </div>
                      
                      {selectedExam && selectedClass && selectedSubject && selectedStudentId && (
                        <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                          <div className="flex items-center gap-2">
                            <span className="material-icons text-green-600" style={{fontSize: '20px'}}>check_circle</span>
                            <span className="text-green-800 font-medium">All selections completed successfully!</span>
                          </div>
                          <div className="mt-2 text-sm text-green-700">
                            <strong>golden_code:</strong> {selectedClass}-{selectedSubjectCode}-{selectedExamCode}
                          </div>
                        </div>
                      )}
                      
                      {/* Submit Button */}
                      <div className="mt-6 flex justify-center">
                        <button 
                          onClick={fetchEvaluationResults}
                          disabled={!selectedExam || !selectedClass || !selectedSubject || !selectedStudentId || resultsLoading}
                          className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          {resultsLoading ? (
                            <>
                              <span className="material-icons animate-spin" style={{fontSize: '20px'}}>refresh</span>
                              Loading Results...
                            </>
                          ) : (
                            <>
                              <span className="material-icons" style={{fontSize: '20px'}}>search</span>
                              Get Evaluation Results
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {/* Results Dashboard */}
                    {evaluationResults && (
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <span className="material-icons text-green-600" style={{fontSize: '24px'}}>assessment</span>
                          </div>
                          <h3 className="text-lg font-semibold text-[#101418]">Evaluation Results</h3>
                        </div>
                        
                        {evaluationResults.evaluationResults && evaluationResults.evaluationResults.length > 0 ? (
                          <div className="space-y-4">
                            {/* Summary Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="material-icons text-blue-600" style={{fontSize: '20px'}}>quiz</span>
                                  <span className="text-blue-800 font-medium">Total Questions</span>
                                </div>
                                <p className="text-xl font-bold text-blue-900">{evaluationResults.evaluationResults.length}</p>
                              </div>
                              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="material-icons text-green-600" style={{fontSize: '20px'}}>grade</span>
                                  <span className="text-green-800 font-medium">Total Score</span>
                                </div>
                                <p className="text-xl font-bold text-green-900">
                                  {evaluationResults.evaluationResults.reduce((sum, result) => sum + result.marks_obtained, 0)} / 
                                  {evaluationResults.evaluationResults.reduce((sum, result) => sum + result.max_possible_marks, 0)}
                                </p>
                              </div>
                              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="material-icons text-purple-600" style={{fontSize: '20px'}}>percent</span>
                                  <span className="text-purple-800 font-medium">Percentage</span>
                                </div>
                                <p className="text-xl font-bold text-purple-900">
                                  {Math.round((evaluationResults.evaluationResults.reduce((sum, result) => sum + result.marks_obtained, 0) / 
                                  evaluationResults.evaluationResults.reduce((sum, result) => sum + result.max_possible_marks, 0)) * 100)}%
                                </p>
                              </div>
                            </div>
                            
                            {/* Individual Question Results */}
                            <div className="space-y-4">
                              {evaluationResults.evaluationResults.map((result, index) => (
                                <div key={result.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                  <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-3 mb-2">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                          Question {result.question_number}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                          result.marks_obtained === result.max_possible_marks 
                                            ? 'bg-green-100 text-green-800' 
                                            : result.marks_obtained > 0 
                                            ? 'bg-yellow-100 text-yellow-800' 
                                            : 'bg-red-100 text-red-800'
                                        }`}>
                                          {result.marks_obtained}/{result.max_possible_marks} marks
                                        </span>
                                      </div>
                                      <h4 className="text-base font-semibold text-[#101418] mb-3">{result.question}</h4>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                      <h5 className="text-sm font-medium text-[#5c728a] mb-2">Student Answer:</h5>
                                      <div className="bg-gray-50 rounded-lg p-4">
                                        <p className="text-[#101418]">{result.answer}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <h5 className="text-sm font-medium text-[#5c728a] mb-2">Evaluation Reason:</h5>
                                      <div className="bg-blue-50 rounded-lg p-4">
                                        <p className="text-[#101418]">{result.reason}</p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {(result.strengths !== '["No strengths identified for this response"]' || 
                                    result.areas_for_improvement !== '["No areas for improvement suggested"]') && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                                      {result.strengths !== '["No strengths identified for this response"]' && (
                                        <div>
                                          <h5 className="text-sm font-medium text-green-700 mb-2">Strengths:</h5>
                                          <div className="bg-green-50 rounded-lg p-4">
                                            <p className="text-green-800">{result.strengths}</p>
                                          </div>
                                        </div>
                                      )}
                                      {result.areas_for_improvement !== '["No areas for improvement suggested"]' && (
                                        <div>
                                          <h5 className="text-sm font-medium text-orange-700 mb-2">Areas for Improvement:</h5>
                                          <div className="bg-orange-50 rounded-lg p-4">
                                            <p className="text-orange-800">{result.areas_for_improvement}</p>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <span className="material-icons text-gray-400 mb-4" style={{fontSize: '48px'}}>search_off</span>
                            <p className="text-gray-600">No evaluation results found for the selected criteria.</p>
                          </div>
                        )}
                      </div>
                    )}
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
                      <h2 className="text-lg font-semibold text-[#101418]">Available Examinations</h2>
                      <button 
                        onClick={fetchExams}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <span className="material-icons" style={{fontSize: '16px'}}>refresh</span>
                        Refresh
                      </button>
                    </div>
                    
                    {loading && (
                      <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <span className="ml-2 text-[#5c728a]">Loading exams...</span>
                      </div>
                    )}
                    
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <span className="material-icons text-red-600" style={{fontSize: '20px'}}>error</span>
                          <p className="text-red-700 font-medium">Error loading exams</p>
                        </div>
                        <p className="text-red-600 text-sm mt-1">{error}</p>
                      </div>
                    )}
                    
                    {!loading && !error && exams.length === 0 && (
                      <div className="text-center py-8">
                        <span className="material-icons text-gray-400" style={{fontSize: '48px'}}>assignment</span>
                        <p className="text-[#5c728a] mt-2">No exams available</p>
                      </div>
                    )}
                    
                    {!loading && !error && exams.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {exams.map((exam) => (
                          <div key={exam.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-200">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                  <span className="material-icons text-blue-600" style={{fontSize: '20px'}}>assignment</span>
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-[#101418] line-clamp-1">{exam.name}</h3>
                                  <p className="text-[#5c728a] text-sm">{exam.examination_code}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-2 text-sm mb-4">
                              <div className="flex justify-between">
                                <span className="text-[#5c728a]">Exam ID:</span>
                                <span className="font-medium text-[#101418]">{exam.id}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#5c728a]">Code:</span>
                                <span className="font-medium text-[#101418]">{exam.examination_code}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#5c728a]">Created:</span>
                                <span className="font-medium text-[#101418]">{new Date(exam.createdAt).toLocaleDateString()}</span>
                              </div>
                            </div>
                            
                            <button 
                              onClick={() => navigate('/set-question-paper', { state: { examData: exam } })}
                              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                              <span className="material-icons" style={{fontSize: '16px'}}>edit</span>
                              Set Question Paper
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
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