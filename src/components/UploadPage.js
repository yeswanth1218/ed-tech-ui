import React, { useState } from 'react';
import ExamCreation from './ExamCreation';
import QuestionPaperUpload from './QuestionPaperUpload';
import AnswerKeyManagement from './AnswerKeyManagement';
import RubricConfiguration from './RubricConfiguration';
import StudentAnswerUpload from './StudentAnswerUpload';
import Sidebar from './Sidebar';
import Header from './Header';

const UploadPage = () => {
  const [currentPhase, setCurrentPhase] = useState('landing');
  const [examData, setExamData] = useState({
    examId: '',
    classId: '',
    examName: '',
    subject: '',
    duration: '',
    totalMarks: '',
    questions: [],
    answerKey: [],
    rubrics: []
  });
  const [showModal, setShowModal] = useState(false);
  const [examNameInput, setExamNameInput] = useState('');

  const phases = [
    { id: 'landing', title: 'AI Evaluation Overview', icon: 'home' },
    { id: 'create-exam', title: 'Create Exam', icon: 'add_circle' },
    { id: 'upload-questions', title: 'Upload Question Paper', icon: 'quiz' },
    { id: 'answer-key', title: 'Answer Key Management', icon: 'key' },
    { id: 'rubrics', title: 'Rubric Configuration', icon: 'rule' },
    { id: 'student-upload', title: 'Student Answer Upload', icon: 'upload' }
  ];

  const renderPhaseContent = () => {
    switch (currentPhase) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-8">
              <h1 className="text-3xl font-bold mb-4">AI-Powered Evaluation System</h1>
              <p className="text-blue-100 text-lg mb-6">
                Transform your examination process with intelligent AI evaluation. Create exams, upload question papers, 
                define answer keys, set evaluation rubrics, and let AI handle the grading with precision and consistency.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-100">
                  <span className="material-icons">check_circle</span>
                  <span>Automated Question Extraction</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <span className="material-icons">check_circle</span>
                  <span>Intelligent Answer Matching</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <span className="material-icons">check_circle</span>
                  <span>Customizable Rubrics</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <span className="material-icons">check_circle</span>
                  <span>Detailed Analytics</span>
                </div>
              </div>
            </div>

            {/* Process Flow */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Evaluation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {phases.slice(1).map((phase, index) => (
                  <div key={phase.id} className="text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      phase.completed ? 'bg-green-100 text-green-600' : 
                      phase.id === currentPhase ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <span className="material-icons text-2xl">{phase.icon}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{phase.title}</h3>
                    <p className="text-gray-600 text-sm">Step {index + 1}</p>
                    {index < phases.slice(1).length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform translate-x-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Start */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Start Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">For New Exams</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                      <span className="text-gray-700">Create a new exam with basic details and settings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                      <span className="text-gray-700">Upload question paper images for AI extraction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                      <span className="text-gray-700">Define answer keys and marking schemes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                      <span className="text-gray-700">Configure evaluation rubrics and rules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                      <span className="text-gray-700">Upload student answers for automated evaluation</span>
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-icons text-green-500 mt-0.5">psychology</span>
                      <div>
                        <span className="font-medium text-gray-800">AI Question Extraction</span>
                        <p className="text-gray-600 text-sm">Automatically extract questions from uploaded images</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons text-blue-500 mt-0.5">auto_awesome</span>
                      <div>
                        <span className="font-medium text-gray-800">Smart Answer Matching</span>
                        <p className="text-gray-600 text-sm">AI matches student answers to correct solutions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons text-purple-500 mt-0.5">rule</span>
                      <div>
                        <span className="font-medium text-gray-800">Custom Rubrics</span>
                        <p className="text-gray-600 text-sm">Define specific evaluation criteria and rules</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons text-orange-500 mt-0.5">analytics</span>
                      <div>
                        <span className="font-medium text-gray-800">Detailed Reports</span>
                        <p className="text-gray-600 text-sm">Comprehensive evaluation results and analytics</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Start Button */}
            <div className="text-center">
               <button
                 onClick={() => setCurrentPhase('exam-creation')}
                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-3 mx-auto"
               >
                 <span className="material-icons">rocket_launch</span>
                 Start New Evaluation
               </button>
             </div>
          </div>
        );
      
      case 'exam-creation':
         return (
           <ExamCreation 
             examData={examData} 
             setExamData={setExamData} 
             setCurrentPhase={setCurrentPhase} 
           />
         );
       
       case 'question-upload':
         return (
           <QuestionPaperUpload 
             examData={examData} 
             setExamData={setExamData} 
             setCurrentPhase={setCurrentPhase} 
           />
         );
       
       case 'answer-key':
         return (
           <AnswerKeyManagement 
             examData={examData} 
             setExamData={setExamData} 
             setCurrentPhase={setCurrentPhase} 
           />
         );
       
       case 'rubric':
         return (
           <RubricConfiguration 
             examData={examData} 
             setExamData={setExamData} 
             setCurrentPhase={setCurrentPhase} 
           />
         );
       
       case 'student-upload':
         return (
           <StudentAnswerUpload 
             examData={examData} 
             setExamData={setExamData} 
             setCurrentPhase={setCurrentPhase} 
           />
         );
      
      default:
        return renderLandingPage();
    }
  };

  const handleExamCreationClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setExamNameInput('');
  };

  const handleSaveExamName = async () => {
    if (!examNameInput.trim()) return;
    try {
      const response = await fetch('http://34.93.230.130:9000/api/admin/add_exam_name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: examNameInput }),
      });
      if (response.ok) {
        // Optionally handle success (e.g., show a message, move to next phase)
        setShowModal(false);
        setExamNameInput('');
      } else {
        // Optionally handle error
        alert('Failed to add exam name');
      }
    } catch (error) {
      alert('Error connecting to server');
    }
  };

  const renderLandingPage = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <span className="material-icons text-3xl">psychology</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold">AI-Powered Evaluation System</h1>
            <p className="text-blue-100 text-lg">Revolutionizing exam assessment with artificial intelligence</p>
          </div>
        </div>
        <p className="text-blue-50 text-lg leading-relaxed">
          Transform your examination process with our cutting-edge AI evaluation system. 
          Create exams, upload question papers, manage answer keys, and set custom rubrics 
          for intelligent, consistent, and fair assessment.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
          onClick={handleExamCreationClick}
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span className="material-icons text-green-600 text-2xl">add_circle</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Exam Creation</h3>
          <p className="text-gray-600">Create comprehensive exams with detailed metadata, class assignments, and structured organization.</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="material-icons text-blue-600 text-2xl">camera_alt</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Question Extraction</h3>
          <p className="text-gray-600">Upload question papers via photos and let AI automatically extract and structure questions.</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span className="material-icons text-purple-600 text-2xl">key</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Answer Key Management</h3>
          <p className="text-gray-600">Add correct answers through photos or text, with AI automatically matching them to questions.</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <span className="material-icons text-orange-600 text-2xl">rule</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Rubrics</h3>
          <p className="text-gray-600">Define evaluation rules and instructions for AI to ensure consistent and fair grading.</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <span className="material-icons text-red-600 text-2xl">speed</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Intelligent Evaluation</h3>
          <p className="text-gray-600">AI evaluates student answers based on your rubrics, providing detailed feedback and scores.</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <span className="material-icons text-indigo-600 text-2xl">analytics</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Detailed Analytics</h3>
          <p className="text-gray-600">Get comprehensive reports and insights on student performance and question difficulty.</p>
        </div>
      </div>

      {/* Process Flow */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Evaluation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {phases.slice(1).map((phase, index) => (
            <div key={phase.id} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="material-icons text-blue-600 text-2xl">{phase.icon}</span>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">{phase.title}</h4>
              <div className="text-xs text-gray-500">Step {index + 1}</div>
              {index < phases.length - 2 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform translate-x-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Begin your AI evaluation journey by creating a new exam. Our intuitive workflow 
          will guide you through each step of the process.
        </p>
        <button
          onClick={() => setCurrentPhase('create-exam')}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
        >
          <span className="material-icons">rocket_launch</span>
          Start Creating Exam
        </button>
      </div>

      {/* Rules and Guidelines */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Evaluation Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Best Practices</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="material-icons text-green-500 text-sm mt-0.5">check_circle</span>
                <span>Use high-quality, well-lit images for question papers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-green-500 text-sm mt-0.5">check_circle</span>
                <span>Provide clear and comprehensive answer keys</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-green-500 text-sm mt-0.5">check_circle</span>
                <span>Define specific rubrics for consistent evaluation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-green-500 text-sm mt-0.5">check_circle</span>
                <span>Review AI suggestions before finalizing grades</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Supported Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="material-icons text-blue-500 text-sm mt-0.5">support</span>
                <span>Multiple choice and descriptive questions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-blue-500 text-sm mt-0.5">support</span>
                <span>Handwriting recognition and analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-blue-500 text-sm mt-0.5">support</span>
                <span>Custom marking schemes and weightages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-blue-500 text-sm mt-0.5">support</span>
                <span>Batch processing of multiple answer sheets</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Enter Exam Name</h2>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
              value={examNameInput}
              onChange={e => setExamNameInput(e.target.value)}
              placeholder="Exam Name"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg"
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={handleSaveExamName}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="AI Evaluation" />
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <Sidebar />
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            {/* Phase Navigation */}
            {currentPhase !== 'landing' && (
              <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setCurrentPhase('landing')}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <span className="material-icons">arrow_back</span>
                      <span>Back to Overview</span>
                    </button>
                    <div className="h-6 w-px bg-gray-300"></div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {phases.find(p => p.id === currentPhase)?.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {phases.slice(1).map((phase, index) => (
                      <div
                        key={phase.id}
                        className={`w-3 h-3 rounded-full ${
                          phase.id === currentPhase
                            ? 'bg-blue-600'
                            : phases.slice(1).findIndex(p => p.id === currentPhase) > index
                            ? 'bg-green-500'
                            : 'bg-gray-300'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1">
              {renderPhaseContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;