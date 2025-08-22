import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const SetQuestionPaper = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({
    question_number: '',
    question: '',
    answer: '',
    marks: '',
    question_type: 'SUBJECTIVE',
    ruberics: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Static exam details
  const examDetails = {
    exam_name: "unit test1",
    exam_id: 5,
    class_id: 23,
    class: "3-B",
    exam_date: "2025-08-18",
    subject: "Social_Studies",
    evaluator_id: 1
  };

  // Load questions from localStorage on component mount
  useEffect(() => {
    const savedQuestions = localStorage.getItem('questionPaperQuestions');
    if (savedQuestions) {
      setQuestions(JSON.parse(savedQuestions));
    }
    // Clear any old cached data to ensure fresh start
    console.log('Current exam details:', examDetails);
  }, []);

  // Save questions to localStorage whenever questions change
  useEffect(() => {
    localStorage.setItem('questionPaperQuestions', JSON.stringify(questions));
  }, [questions]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddQuestion = () => {
    if (!currentQuestion.question_number || !currentQuestion.question || !currentQuestion.answer || !currentQuestion.marks) {
      alert('Please fill in all required fields');
      return;
    }

    // Check if question number already exists
    const existingQuestion = questions.find(q => q.question_number === parseInt(currentQuestion.question_number));
    if (existingQuestion) {
      alert('Question number already exists. Please use a different number.');
      return;
    }

    const newQuestion = {
      ...currentQuestion,
      question_number: parseInt(currentQuestion.question_number),
      marks: parseInt(currentQuestion.marks)
    };

    setQuestions(prev => [...prev, newQuestion].sort((a, b) => a.question_number - b.question_number));
    
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

  const handleDeleteQuestion = (questionNumber) => {
    setQuestions(prev => prev.filter(q => q.question_number !== questionNumber));
  };

  const handleSubmitQuestionPaper = async () => {
    if (questions.length === 0) {
      alert('Please add at least one question before submitting.');
      return;
    }

    setIsSubmitting(true);
    
    const payload = {
      ...examDetails,
      question_details: questions
    };

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://34.93.230.130:9000/api';
      
      console.log('Submitting payload:', JSON.stringify(payload, null, 2));
      console.log('API URL:', `${apiUrl}/admin/schedule_exam`);
      
      const response = await fetch(`${apiUrl}/admin/schedule_exam`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Question paper submitted successfully:', result);
        
        // Clear localStorage and questions
        localStorage.removeItem('questionPaperQuestions');
        setQuestions([]);
        
        alert('Question paper submitted successfully!');
        navigate('/teacher-exams');
      } else {
        // Get error details from response
        let errorMessage = `API request failed with status: ${response.status}`;
        try {
          const errorData = await response.json();
          console.error('API Error Response:', errorData);
          errorMessage += ` - ${errorData.message || errorData.error || JSON.stringify(errorData)}`;
        } catch (e) {
          console.error('Could not parse error response');
        }
        throw new Error(errorMessage);
      }
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
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col">
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
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                    <p className="text-[#5c728a] text-sm font-medium">Exam Name</p>
                    <p className="font-bold text-[#101418] text-lg">{examDetails.exam_name}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                    <p className="text-[#5c728a] text-sm font-medium">Subject</p>
                    <p className="font-bold text-[#101418] text-lg">{examDetails.subject}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <p className="text-[#5c728a] text-sm font-medium">Class</p>
                    <p className="font-bold text-[#101418] text-lg">{examDetails.class}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                    <p className="text-[#5c728a] text-sm font-medium">Exam Date</p>
                    <p className="font-bold text-[#101418] text-lg">{new Date(examDetails.exam_date).toLocaleDateString()}</p>
                  </div>
                </div>
                
                {/* Debug Info */}
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 text-sm font-medium">Debug Info:</p>
                  <p className="text-yellow-700 text-xs">Exam ID: {examDetails.exam_id} | Class ID: {examDetails.class_id} | Evaluator ID: {examDetails.evaluator_id}</p>
                </div>
              </div>

              {/* Questions Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <span className="material-icons text-green-600" style={{fontSize: '24px'}}>quiz</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#101418]">Questions ({questions.length})</h2>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setShowAddForm(true)}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span className="material-icons" style={{fontSize: '20px'}}>add</span>
                      Add Question
                    </button>
                    
                    {questions.length > 0 && (
                      <button 
                        onClick={() => {
                          localStorage.removeItem('questionPaperQuestions');
                          setQuestions([]);
                        }}
                        className="flex items-center gap-2 px-4 py-3 border-2 border-red-300 text-red-600 rounded-xl font-medium hover:bg-red-50 transition-all duration-200"
                      >
                        <span className="material-icons" style={{fontSize: '18px'}}>delete_sweep</span>
                        Clear All
                      </button>
                    )}
                  </div>
                </div>

                {/* Questions List */}
                {questions.length > 0 ? (
                  <div className="space-y-4 mb-6">
                    {questions.map((question, index) => (
                      <div key={question.question_number} className="border border-gray-200 rounded-xl p-6 bg-gradient-to-r from-white to-gray-50 hover:shadow-md transition-all duration-200">
                        <div className="flex items-start justify-between mb-4">
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
                          <button 
                            onClick={() => handleDeleteQuestion(question.question_number)}
                            className="p-2 hover:bg-red-100 rounded-lg text-red-500 hover:text-red-700 transition-colors"
                          >
                            <span className="material-icons" style={{fontSize: '18px'}}>delete</span>
                          </button>
                        </div>
                        
                        <div className="space-y-3">
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
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4">
                      <span className="material-icons text-gray-400" style={{fontSize: '32px'}}>quiz</span>
                    </div>
                    <p className="text-[#5c728a] text-lg">No questions added yet</p>
                    <p className="text-[#5c728a] text-sm">Click the "Add Question" button to get started</p>
                  </div>
                )}

                {/* Submit Button */}
                {questions.length > 0 && (
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