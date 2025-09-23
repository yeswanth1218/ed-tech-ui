import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';
import api from '../api/axiosInstance';

const SetQuestionPaper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [existingQuestions, setExistingQuestions] = useState([]);
  const [newQuestions, setNewQuestions] = useState([]);
  const [editedQuestions, setEditedQuestions] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState({
    question_number: '',
    question: '',
    answer: '',
    marks: '',
    question_type: 'SUBJECTIVE',
    ruberics: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic exam details state
  const [examDetails, setExamDetails] = useState({
    exam_name: '',
    examination_code: '',
    subject_code: '',
    subject_name: '',
    class_id: '',
    class_name: '',
    exam_date: ''
  });
  
  // API data states
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(null);
  const [canAddQuestions, setCanAddQuestions] = useState(false);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState(new Set());

  // Fetch subjects from API
  const fetchSubjects = async () => {
    try {
      const response = await api.get(`/admin/subjects`);
      console.log(response,"subj")
      //if (!response.ok) throw new Error('Failed to fetch subjects');
      
      setSubjects(response.data.data || []);
    } catch (err) {
      setError('Failed to load subjects');
      console.error('Error fetching subjects:', err.response?.data || err.message);
    }
  };

  // Fetch classes from API
  const fetchClasses = async () => {
    try {
      const response = await api.get(`/admin/classes`);
      //if (!response.ok) throw new Error('Failed to fetch classes');
      //const data = await response.json();
      setClasses(response.data.data || []);
      console.log(classes,"classes12")
    } catch (err) {
      setError('Failed to load classes');
      console.error('Error fetching classes:', err);
    }
  };

  // Generate golden code from class and subject
  const generateGoldenCode = (className, subjectCode, examCode) => {
    return `${className}-${subjectCode}-${examCode}`;
  };

  // Fetch existing questions from API
  const fetchExistingQuestions = async (goldenCode) => {
    setLoadingQuestions(true);
    try {
      const response = await api.get(`${process.env.REACT_APP_API_URL}/admin/scheduled_question_papers?golden_code=${goldenCode}`);
      //if (!response.ok) throw new Error('Failed to fetch questions');
      //const data = await response.json();

      if (response.data.data && response.data.data.length > 0) {
        // Transform API data to match our question format
        const transformedQuestions = response.data.data.map(q => ({
          id: q.id, // Store the original ID for updates
          question_number: q.question_number,
          question: q.question,
          answer: q.answer,
          marks: parseFloat(q.marks),
          question_type: q.question_type,
          ruberics: q.ruberics
        }));
        setExistingQuestions(transformedQuestions);
        console.log(transformedQuestions,"exist");
      } else {
        setExistingQuestions([]);
      }
      
      setCanAddQuestions(true);
    } catch (err) {
      console.error('Error fetching existing questions:', err);
      setQuestions([]);
      setCanAddQuestions(true); // Still allow adding questions even if fetch fails
    } finally {
      setLoadingQuestions(false);
    }
  };

  // Check if both subject and class are selected to enable question fetching
  useEffect(() => {
    if (examDetails.subject_code && examDetails.class_name && examDetails.examination_code) {
      const goldenCode = generateGoldenCode(examDetails.class_name, examDetails.subject_code, examDetails.examination_code);
      fetchExistingQuestions(goldenCode);
    } else {
      setCanAddQuestions(false);
      setExistingQuestions([]);
    }
  }, [examDetails.subject_code, examDetails.class_name, examDetails.examination_code]);

  // Load questions from localStorage and initialize exam data
  useEffect(() => {
    const savedQuestions = localStorage.getItem('questionPaperQuestions');
    if (savedQuestions) {
      setNewQuestions(JSON.parse(savedQuestions));
    }
    
    // Get exam data from navigation state
    const examData = location.state?.examData;
    if (examData) {
      setExamDetails(prev => ({
        ...prev,
        exam_name: examData.name,
        examination_code: examData.examination_code
      }));
    }
    
    // Fetch dropdown data
    fetchSubjects();
    fetchClasses();
  }, [location.state]);

  // Save new questions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('questionPaperQuestions', JSON.stringify(newQuestions));
  }, [newQuestions]);

  // Combine all questions for total count and operations
  useEffect(() => {
    setQuestions([...existingQuestions, ...newQuestions, ...editedQuestions]);
  }, [existingQuestions, newQuestions, editedQuestions]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddQuestion = () => {
    if (editingQuestion) {
      handleUpdateQuestion();
      return;
    }

    if (!currentQuestion.question_number || !currentQuestion.question || !currentQuestion.answer || !currentQuestion.marks) {
      alert('Please fill in all required fields');
      return;
    }

    // Check if question number already exists in all question arrays
    const allQuestions = [...existingQuestions, ...newQuestions, ...editedQuestions];
    const existingQuestion = allQuestions.find(q => q.question_number === parseInt(currentQuestion.question_number));
    if (existingQuestion) {
      alert('Question number already exists. Please use a different number.');
      return;
    }

    const newQuestion = {
      ...currentQuestion,
      question_number: parseInt(currentQuestion.question_number),
      marks: parseInt(currentQuestion.marks)
    };

    setNewQuestions(prev => [...prev, newQuestion].sort((a, b) => a.question_number - b.question_number));
    
    // Reset form
    setCurrentQuestion({
      question_number: '',
      question: '',
      answer: '',
      marks: '',
      question_type: 'SUBJECTIVE',
      ruberics: ''
    });
    setShowAddForm(false);
  };

  const handleDeleteQuestion = (questionNumber, questionType = 'new') => {
    if (questionType === 'existing') {
      // For existing questions, you might want to call an API to delete
      // For now, just remove from local state
      setExistingQuestions(prev => prev.filter(q => q.question_number !== questionNumber));
    } else if (questionType === 'edited') {
      setEditedQuestions(prev => prev.filter(q => q.question_number !== questionNumber));
    } else {
      setNewQuestions(prev => prev.filter(q => q.question_number !== questionNumber));
    }
  };

  const handleEditQuestion = (question) => {
    setEditingQuestion(question);
    setCurrentQuestion({
      question_number: question.question_number.toString(),
      question: question.question,
      answer: question.answer,
      marks: question.marks.toString(),
      question_type: question.question_type,
      ruberics: question.ruberics || ''
    });
    setShowAddForm(true);
  };

  const handleUpdateQuestion = () => {
    if (!currentQuestion.question_number || !currentQuestion.question || !currentQuestion.answer || !currentQuestion.marks) {
      alert('Please fill in all required fields');
      return;
    }

    const updatedQuestion = {
      id: editingQuestion.id, // Preserve the original ID
      question_number: parseInt(currentQuestion.question_number),
      question: currentQuestion.question,
      answer: currentQuestion.answer,
      marks: parseInt(currentQuestion.marks),
      question_type: currentQuestion.question_type,
      ruberics: currentQuestion.ruberics
    };

    // Remove from existing questions and add to edited questions
    setExistingQuestions(prev => prev.filter(q => q.question_number !== updatedQuestion.question_number));
    setEditedQuestions(prev => {
      const filtered = prev.filter(q => q.question_number !== updatedQuestion.question_number);
      return [...filtered, updatedQuestion].sort((a, b) => a.question_number - b.question_number);
    });

    // Reset form
    setCurrentQuestion({
      question_number: '',
      question: '',
      answer: '',
      marks: '',
      question_type: 'SUBJECTIVE',
      ruberics: ''
    });
    setEditingQuestion(null);
    setShowAddForm(false);
  };

  const toggleQuestionExpansion = (questionNumber) => {
    setExpandedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionNumber)) {
        newSet.delete(questionNumber);
      } else {
        newSet.add(questionNumber);
      }
      return newSet;
    });
  };

  const handleSubmitQuestionPaper = async () => {
    if (newQuestions.length === 0 && editedQuestions.length === 0) {
      alert('Please add or edit at least one question before submitting.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://34.93.230.130:9000/api';
      
      // Submit new questions if any
      if (newQuestions.length > 0) {
        let newQuestionsPayload;
        let apiEndpoint;
        
        // Check if there are existing questions to determine API endpoint and payload structure
        if (existingQuestions.length > 0) {
          // If existing questions present, use /admin/add_questions with golden_code
          const goldenCode = generateGoldenCode(examDetails.class_name, examDetails.subject_code, examDetails.examination_code);
          newQuestionsPayload = {
            golden_code: goldenCode,
            question_details: newQuestions.map(q => ({
              question: q.question,
              question_number: q.question_number,
              answer: q.answer,
              marks: q.marks,
              question_type: q.question_type,
              ruberics: q.ruberics
            }))
          };
          apiEndpoint = `${apiUrl}/admin/add_questions`;
        } else {
          // If no existing questions, use /admin/schedule_exam with full exam details
          newQuestionsPayload = {
            examination_code: examDetails.examination_code,
            subject_code: examDetails.subject_code,
            class: examDetails.class_name,
            exam_date: examDetails.exam_date,
            evaluator_id: 1,
            question_details: newQuestions
          };
          apiEndpoint = `${apiUrl}/admin/schedule_exam`;
        }

        console.log('Submitting new questions to:', apiEndpoint);
        console.log('Payload:', JSON.stringify(newQuestionsPayload, null, 2));
        
        const newQuestionsResponse = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newQuestionsPayload),
        });

        if (!newQuestionsResponse.ok) {
          throw new Error(`Failed to submit new questions: ${newQuestionsResponse.status}`);
        }
      }

      // Submit edited questions if any (send each question individually)
      if (editedQuestions.length > 0) {
        for (const editedQuestion of editedQuestions) {
          const editedQuestionPayload = {
            id: editedQuestion.id,
            question_number: editedQuestion.question_number,
            question: editedQuestion.question,
            answer: editedQuestion.answer,
            marks: editedQuestion.marks,
            question_type: editedQuestion.question_type,
            ruberics: editedQuestion.ruberics
          };

          console.log('Submitting edited question:', JSON.stringify(editedQuestionPayload, null, 2));
          
          const editedQuestionResponse = await fetch(`${apiUrl}/admin/update_question_paper`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedQuestionPayload),
          });

          if (!editedQuestionResponse.ok) {
            throw new Error(`Failed to submit edited question ${editedQuestion.question_number}: ${editedQuestionResponse.status}`);
          }
        }
      }

      // Clear localStorage and questions
      localStorage.removeItem('questionPaperQuestions');
      setNewQuestions([]);
      setEditedQuestions([]);
      
      alert('Question paper submitted successfully!');
      navigate('/teacher-exams');
    } catch (error) {
      console.error('Submit error:', error);
      alert(`Failed to submit question paper: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getQuestionTypeColor = (type) => {
    switch (type) {
      case 'SUBJECTIVE': return 'bg-blue-100 text-blue-800';
      case 'OBJECTIVE': return 'bg-green-100 text-green-800';
      case 'short_answer': return 'bg-purple-100 text-purple-800';
      case 'essay': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <TeacherSidebar />
      <div className="ml-80 flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {/* Enhanced Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <button 
                  onClick={() => navigate('/teacher-exams')}
                  className="p-3 hover:bg-white/80 rounded-xl transition-all duration-200 shadow-sm border border-gray-200/50"
                >
                  <span className="material-icons text-gray-600" style={{fontSize: '20px'}}>arrow_back</span>
                </button>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl shadow-lg">
                    <span className="material-icons text-white" style={{fontSize: '28px'}}>assignment</span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-[#101418] mb-1">Set Question Paper</h1>
                    <p className="text-[#5c728a] text-lg">Create and manage exam questions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
              {/* Exam Details Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <span className="material-icons text-blue-600" style={{fontSize: '24px'}}>info</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#101418]">Exam Details</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                    <p className="text-[#5c728a] text-sm font-medium mb-2">Exam Name</p>
                    <input
                      type="text"
                      value={examDetails.exam_name}
                      onChange={(e) => setExamDetails(prev => ({ ...prev, exam_name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter exam name"
                    />
                    {examDetails.examination_code && (
                      <p className="text-xs text-gray-500 mt-1">Code: {examDetails.examination_code}</p>
                    )}
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                    <p className="text-[#5c728a] text-sm font-medium mb-2">Subject</p>
                    <select
                      value={examDetails.subject_code}
                      onChange={(e) => {
                        const selectedSubject = subjects.find(s => s.subject_code === e.target.value);
                        setExamDetails(prev => ({
                          ...prev,
                          subject_code: e.target.value,
                          subject_name: selectedSubject?.name || ''
                        }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select Subject</option>
                      {subjects.map(subject => (
                        <option key={subject.id} value={subject.subject_code}>
                          {subject.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <p className="text-[#5c728a] text-sm font-medium mb-2">Class</p>
                    <select
                      value={examDetails.class_id}
                      onChange={(e) => {
                        const selectedClass = classes.find(c => c.id === parseInt(e.target.value));
                        setExamDetails(prev => ({
                          ...prev,
                          class_id: e.target.value,
                          class_name: selectedClass?.class || ''
                        }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select Class</option>
                      {classes.map(classItem => (
                        <option key={classItem.id} value={classItem.id}>
                          {classItem.class}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                    <p className="text-[#5c728a] text-sm font-medium mb-2">Exam Date</p>
                    <input
                      type="date"
                      value={examDetails.exam_date}
                      onChange={(e) => setExamDetails(prev => ({ ...prev, exam_date: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                {error && (
                  <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800 text-sm font-medium">Error:</p>
                    <p className="text-red-700 text-xs">{error}</p>
                  </div>
                )}
              </div>

              {/* Already Set Questions Section */}
              {canAddQuestions && existingQuestions.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <span className="material-icons text-blue-600" style={{fontSize: '24px'}}>assignment_turned_in</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#101418]">Already Set Questions ({existingQuestions.length})</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {existingQuestions.map((question, index) => {
                      const isExpanded = expandedQuestions.has(question.question_number);
                      return (
                        <div key={question.question_number} className={`border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:shadow-md transition-all duration-200 ${
                          isExpanded ? 'p-6' : 'p-4'
                        }`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-bold">{question.question_number}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getQuestionTypeColor(question.question_type)}`}>
                                  {question.question_type}
                                </span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                                  {question.marks} marks
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => toggleQuestionExpansion(question.question_number)}
                                className="p-2 hover:bg-blue-100 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                                title={isExpanded ? 'Collapse' : 'Expand'}
                              >
                                <span className="material-icons" style={{fontSize: '18px'}}>
                                  {isExpanded ? 'expand_less' : 'expand_more'}
                                </span>
                              </button>
                              <button 
                                 onClick={() => handleEditQuestion(question)}
                                 className="p-2 hover:bg-yellow-100 rounded-lg text-yellow-600 hover:text-yellow-700 transition-colors"
                                 title="Edit Question"
                               >
                                 <span className="material-icons" style={{fontSize: '18px'}}>edit</span>
                               </button>
                               <button 
                                 onClick={() => handleDeleteQuestion(question.question_number, 'existing')}
                                 className="p-2 hover:bg-red-100 rounded-lg text-red-500 hover:text-red-700 transition-colors"
                                 title="Delete Question"
                               >
                                 <span className="material-icons" style={{fontSize: '18px'}}>delete</span>
                               </button>
                            </div>
                          </div>
                          
                          {isExpanded && (
                            <div className="mt-4 space-y-4 border-t border-gray-200 pt-4">
                              <div>
                                <p className="font-medium text-[#101418] mb-1">Question:</p>
                                <p className="text-[#5c728a] bg-gray-50 p-3 rounded-lg">{question.question}</p>
                              </div>
                              <div>
                                <p className="font-medium text-[#101418] mb-1">Answer:</p>
                                <p className="text-[#5c728a] bg-green-50 p-3 rounded-lg">{question.answer}</p>
                              </div>
                              {question.ruberics && (
                                <div>
                                  <p className="font-medium text-[#101418] mb-1">Rubrics:</p>
                                  <p className="text-[#5c728a] bg-blue-50 p-3 rounded-lg">{question.ruberics}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Edited Questions Section */}
               {canAddQuestions && editedQuestions.length > 0 && (
                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl mb-6">
                   <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 bg-yellow-100 rounded-lg">
                       <span className="material-icons text-yellow-600" style={{fontSize: '24px'}}>edit_note</span>
                     </div>
                     <h2 className="text-xl font-bold text-[#101418]">Edits Made ({editedQuestions.length})</h2>
                   </div>
                   
                   <div className="space-y-3">
                     {editedQuestions.map((question, index) => {
                       const isExpanded = expandedQuestions.has(question.question_number);
                       return (
                         <div key={question.question_number} className={`border border-yellow-200 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 hover:shadow-md transition-all duration-200 ${
                           isExpanded ? 'p-6' : 'p-4'
                         }`}>
                           <div className="flex items-center justify-between">
                             <div className="flex items-center gap-3">
                               <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                                 <span className="text-white text-sm font-bold">{question.question_number}</span>
                               </div>
                               <div className="flex items-center gap-2">
                                 <span className={`px-3 py-1 rounded-full text-xs font-medium ${getQuestionTypeColor(question.question_type)}`}>
                                   {question.question_type}
                                 </span>
                                 <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                                   {question.marks} marks
                                 </span>
                                 <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full text-xs font-medium">
                                   EDITED
                                 </span>
                               </div>
                             </div>
                             <div className="flex items-center gap-2">
                               <button 
                                 onClick={() => toggleQuestionExpansion(question.question_number)}
                                 className="p-2 hover:bg-blue-100 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                                 title={isExpanded ? 'Collapse' : 'Expand'}
                               >
                                 <span className="material-icons" style={{fontSize: '18px'}}>
                                   {isExpanded ? 'expand_less' : 'expand_more'}
                                 </span>
                               </button>
                               <button 
                                 onClick={() => handleEditQuestion(question)}
                                 className="p-2 hover:bg-yellow-100 rounded-lg text-yellow-600 hover:text-yellow-700 transition-colors"
                                 title="Edit Again"
                               >
                                 <span className="material-icons" style={{fontSize: '18px'}}>edit</span>
                               </button>
                               <button 
                                 onClick={() => handleDeleteQuestion(question.question_number, 'edited')}
                                 className="p-2 hover:bg-red-100 rounded-lg text-red-500 hover:text-red-700 transition-colors"
                                 title="Delete Question"
                               >
                                 <span className="material-icons" style={{fontSize: '18px'}}>delete</span>
                               </button>
                             </div>
                           </div>
                           
                           {isExpanded && (
                             <div className="mt-4 space-y-4 border-t border-gray-200 pt-4">
                               <div>
                                 <p className="font-medium text-[#101418] mb-1">Question:</p>
                                 <p className="text-[#5c728a] bg-gray-50 p-3 rounded-lg">{question.question}</p>
                               </div>
                               <div>
                                 <p className="font-medium text-[#101418] mb-1">Answer:</p>
                                 <p className="text-[#5c728a] bg-green-50 p-3 rounded-lg">{question.answer}</p>
                               </div>
                               {question.ruberics && (
                                 <div>
                                   <p className="font-medium text-[#101418] mb-1">Rubrics:</p>
                                   <p className="text-[#5c728a] bg-blue-50 p-3 rounded-lg">{question.ruberics}</p>
                                 </div>
                               )}
                             </div>
                           )}
                         </div>
                       );
                     })}
                   </div>
                 </div>
               )}

               {/* Set New Questions Section */}
               <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <span className="material-icons text-green-600" style={{fontSize: '24px'}}>quiz</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#101418]">Set New Questions ({newQuestions.length})</h2>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setShowAddForm(true)}
                      disabled={!canAddQuestions || loadingQuestions}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                        canAddQuestions && !loadingQuestions
                          ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <span className="material-icons" style={{fontSize: '20px'}}>{editingQuestion ? 'save' : 'add'}</span>
                      {loadingQuestions ? 'Loading...' : (editingQuestion ? 'Update Question' : 'Add Question')}
                    </button>
                    
                    {newQuestions.length > 0 && (
                      <button 
                        onClick={() => {
                          localStorage.removeItem('questionPaperQuestions');
                          setNewQuestions([]);
                        }}
                        className="flex items-center gap-2 px-4 py-3 border-2 border-red-300 text-red-600 rounded-xl font-medium hover:bg-red-50 transition-all duration-200"
                      >
                        <span className="material-icons" style={{fontSize: '18px'}}>delete_sweep</span>
                        Clear All
                      </button>
                    )}
                  </div>
                </div>

                {/* Loading State */}
                {loadingQuestions && (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                    <span className="ml-2 text-[#5c728a]">Loading existing questions...</span>
                  </div>
                )}
                
                {/* New Questions List */}
                {!loadingQuestions && newQuestions.length > 0 ? (
                  <div className="space-y-3 mb-6">
                    {newQuestions.map((question, index) => {
                      const isExpanded = expandedQuestions.has(question.question_number);
                      return (
                        <div key={question.question_number} className={`border border-gray-200 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:shadow-md transition-all duration-200 ${
                          isExpanded ? 'p-6' : 'p-4'
                        }`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-bold">{question.question_number}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getQuestionTypeColor(question.question_type)}`}>
                                  {question.question_type}
                                </span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                                  {question.marks} marks
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => toggleQuestionExpansion(question.question_number)}
                                className="p-2 hover:bg-blue-100 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                                title={isExpanded ? 'Collapse' : 'Expand'}
                              >
                                <span className="material-icons" style={{fontSize: '18px'}}>
                                  {isExpanded ? 'expand_less' : 'expand_more'}
                                </span>
                              </button>
                              <button 
                                 onClick={() => handleDeleteQuestion(question.question_number, 'new')}
                                 className="p-2 hover:bg-red-100 rounded-lg text-red-500 hover:text-red-700 transition-colors"
                                 title="Delete Question"
                               >
                                 <span className="material-icons" style={{fontSize: '18px'}}>delete</span>
                               </button>
                            </div>
                          </div>
                          
                          {isExpanded && (
                            <div className="mt-4 space-y-4 border-t border-gray-200 pt-4">
                              <div>
                                <p className="font-medium text-[#101418] mb-1">Question:</p>
                                <p className="text-[#5c728a] bg-gray-50 p-3 rounded-lg">{question.question}</p>
                              </div>
                              <div>
                                <p className="font-medium text-[#101418] mb-1">Answer:</p>
                                <p className="text-[#5c728a] bg-green-50 p-3 rounded-lg">{question.answer}</p>
                              </div>
                              {question.ruberics && (
                                <div>
                                  <p className="font-medium text-[#101418] mb-1">Rubrics:</p>
                                  <p className="text-[#5c728a] bg-blue-50 p-3 rounded-lg">{question.ruberics}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4">
                      <span className="material-icons text-gray-400" style={{fontSize: '32px'}}>quiz</span>
                    </div>
                    {!canAddQuestions ? (
                      <>
                        <p className="text-[#5c728a] text-lg">Select Subject and Class to continue</p>
                        <p className="text-[#5c728a] text-sm">Please fill in the exam details above to start adding questions</p>
                      </>
                    ) : (
                      <>
                        <p className="text-[#5c728a] text-lg">No new questions added yet</p>
                        <p className="text-[#5c728a] text-sm">Click the "Add Question" button to get started</p>
                      </>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                {(newQuestions.length > 0 || editedQuestions.length > 0) && (
                  <div className="flex justify-end pt-6 border-t border-gray-200">
                    <button 
                      onClick={handleSubmitQuestionPaper}
                      disabled={isSubmitting}
                      className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform ${
                        isSubmitting
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:scale-105 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <span className="material-icons" style={{fontSize: '20px'}}>send</span>
                          Submit Question Paper ({questions.length} questions)
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Question Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#101418]">Add New Question</h3>
              <button 
                onClick={() => setShowAddForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className="material-icons text-gray-500" style={{fontSize: '20px'}}>close</span>
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#101418] mb-2">Question Number *</label>
                  <input
                    type="number"
                    name="question_number"
                    value={currentQuestion.question_number}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter question number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#101418] mb-2">Marks *</label>
                  <input
                    type="number"
                    name="marks"
                    value={currentQuestion.marks}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter marks"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#101418] mb-2">Question Type *</label>
                <select
                  name="question_type"
                  value={currentQuestion.question_type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="SUBJECTIVE">SUBJECTIVE</option>
                  <option value="OBJECTIVE">OBJECTIVE</option>
                  <option value="short_answer">Short Answer</option>
                  <option value="essay">Essay</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#101418] mb-2">Question *</label>
                <textarea
                  name="question"
                  value={currentQuestion.question}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter the question"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#101418] mb-2">Answer *</label>
                <textarea
                  name="answer"
                  value={currentQuestion.answer}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter the answer"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#101418] mb-2">Rubrics</label>
                <textarea
                  name="ruberics"
                  value={currentQuestion.ruberics}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter evaluation rubrics (optional)"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-8">
              <button 
                onClick={() => setShowAddForm(false)}
                className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddQuestion}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Add Question
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetQuestionPaper;