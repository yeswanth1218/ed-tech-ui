import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const AnswerSheetUpload = () => {
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [evaluationResults, setEvaluationResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const availableExams = [
    { id: 'UN_250807', title: 'unit test1 - UN_250807' },
    { id: 'AN_250807', title: 'annual exam - AN_250807' }
  ];

  const availableClasses = ['10', '11', '12'];
  
  const availableSubjects = [
    'Social Studies',
    'Physics', 
    'Biology',
    'History',
    'Civics',
    'Economics'
  ];
  
  const availableStudentIds = [
    'std_123',
    'std_111', 
    'std_222',
    'std_555'
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    const newFiles = fileArray.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
      status: 'ready'
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleUpload = async () => {
    if (!selectedExam || !selectedClass || !selectedSubject || !selectedStudentId || uploadedFiles.length === 0) {
      alert('Please select exam, class, subject, student ID and upload at least one file.');
      return;
    }
    
    // Update file status to uploading
    setUploadedFiles(prev => prev.map(file => ({ ...file, status: 'uploading' })));
    
    try {
      // Create FormData for API request
      const formData = new FormData();
      
      // Add static values
      formData.append('student_id', '12345'); // Static value for now
      formData.append('exam_id', '3'); // Use selected exam ID
      formData.append('class_id', '67890'); // Static value for now
      
      // Add uploaded files
      uploadedFiles.forEach((fileObj, index) => {
        formData.append('files', fileObj.file);
      });
      
      // Get AI API URL from environment
       const aiApiUrl = process.env.REACT_APP_AI_API_URL || 'http://34.93.230.130:8000/';
       
       // Send request to AI API with upload_details route
       const response = await fetch(`${aiApiUrl}/upload_details`, {
         method: 'POST',
         mode: 'cors',
         headers: {
           'Accept': 'application/json',
         },
         body: formData,
       });
      
      if (response.ok) {
         const result = await response.json();
         console.log('API Response:', result);
         
         // Update file status to completed
         setUploadedFiles(prev => prev.map(file => ({ ...file, status: 'completed' })));
         
         // Store evaluation results and show them
         if (result.evaluation_results) {
           setEvaluationResults(result);
           setShowResults(true);
         }
         
         alert('Answer sheets uploaded and sent to AI for evaluation successfully!');
       } else {
        throw new Error(`API request failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      
      // Update file status back to ready on error
      setUploadedFiles(prev => prev.map(file => ({ ...file, status: 'ready' })));
      alert(`Upload failed: ${error.message}`);
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
                  onClick={() => window.history.back()}
                  className="p-3 hover:bg-white/80 rounded-xl transition-all duration-200 shadow-sm border border-gray-200/50"
                >
                  <span className="material-icons text-gray-600" style={{fontSize: '20px'}}>arrow_back</span>
                </button>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                    <span className="material-icons text-white" style={{fontSize: '28px'}}>upload_file</span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-[#101418] mb-1">Upload Answer Sheets</h1>
                    <p className="text-[#5c728a] text-lg">AI-powered evaluation made simple</p>
                  </div>
                </div>
              </div>
              
              {/* Progress Indicator */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-sm font-medium text-blue-600">Select Exam</span>
                </div>
                <div className="w-12 h-0.5 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-bold">2</span>
                  </div>
                  <span className="text-sm font-medium text-gray-500">Upload Files</span>
                </div>
                <div className="w-12 h-0.5 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-bold">3</span>
                  </div>
                  <span className="text-sm font-medium text-gray-500">AI Evaluation</span>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Enhanced Exam Selection */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <span className="material-icons text-blue-600" style={{fontSize: '24px'}}>quiz</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#101418]">Exam Selection Details</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Select Exam */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-[#5c728a] mb-2">Select Exam</label>
                    <select 
                      value={selectedExam} 
                      onChange={(e) => setSelectedExam(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                    >
                      <option value="">Choose an exam...</option>
                      {availableExams.map(exam => (
                        <option key={exam.id} value={exam.id}>
                          {exam.title}
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
                    >
                      <option value="">Choose class...</option>
                      {availableClasses.map(cls => (
                        <option key={cls} value={cls}>
                          {cls}
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
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                    >
                      <option value="">Choose subject...</option>
                      {availableSubjects.map(subject => (
                        <option key={subject} value={subject}>
                          {subject}
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
                      onChange={(e) => setSelectedStudentId(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                    >
                      <option value="">Choose student ID...</option>
                      {availableStudentIds.map(studentId => (
                        <option key={studentId} value={studentId}>
                          {studentId}
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
                      <strong>Selected:</strong> {selectedExam} | Class {selectedClass} | {selectedSubject} | {selectedStudentId}
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced File Upload Area */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <span className="material-icons text-purple-600" style={{fontSize: '24px'}}>cloud_upload</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#101418]">Upload Answer Sheets</h2>
                </div>
                
                <div 
                  className={`border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                    dragActive 
                      ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 scale-105 shadow-lg' 
                      : 'border-gray-300 hover:border-blue-400 hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className={`p-6 rounded-full transition-all duration-300 ${
                      dragActive ? 'bg-blue-100 scale-110' : 'bg-gradient-to-r from-blue-100 to-purple-100'
                    }`}>
                      <span className={`material-icons transition-all duration-300 ${
                        dragActive ? 'text-blue-600' : 'text-blue-500'
                      }`} style={{fontSize: '48px'}}>cloud_upload</span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xl font-semibold text-[#101418] mb-2">
                        {dragActive ? 'Drop files here!' : 'Drag and drop files here'}
                      </p>
                      {!dragActive && (
                        <div className="flex items-center gap-3">
                          <div className="h-px bg-gray-300 flex-1"></div>
                          <span className="text-gray-500 font-medium">or</span>
                          <div className="h-px bg-gray-300 flex-1"></div>
                        </div>
                      )}
                      <label className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <span className="material-icons" style={{fontSize: '20px'}}>folder_open</span>
                        Browse Files
                        <input 
                          type="file" 
                          multiple 
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                          onChange={(e) => handleFiles(e.target.files)}
                        />
                      </label>
                      <div className="flex items-center justify-center gap-6 mt-4 text-sm text-[#5c728a]">
                        <div className="flex items-center gap-1">
                          <span className="material-icons text-green-500" style={{fontSize: '16px'}}>check_circle</span>
                          PDF, JPG, PNG
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-icons text-blue-500" style={{fontSize: '16px'}}>storage</span>
                          Max 10MB each
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-icons text-purple-500" style={{fontSize: '16px'}}>speed</span>
                          Fast processing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <span className="material-icons text-green-600" style={{fontSize: '20px'}}>folder</span>
                      </div>
                      <h3 className="font-semibold text-[#101418] text-lg">Uploaded Files ({uploadedFiles.length})</h3>
                    </div>
                    <div className="grid gap-3">
                      {uploadedFiles.map(file => (
                        <div key={file.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${
                              file.type.includes('pdf') ? 'bg-red-100' : 'bg-blue-100'
                            }`}>
                              <span className={`material-icons ${
                                file.type.includes('pdf') ? 'text-red-600' : 'text-blue-600'
                              }`} style={{fontSize: '24px'}}>
                                {file.type.includes('pdf') ? 'picture_as_pdf' : 'image'}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold text-[#101418] text-lg">{file.name}</p>
                              <p className="text-sm text-[#5c728a]">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {file.status === 'ready' && (
                              <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span className="text-sm text-blue-700 font-medium">Ready</span>
                              </div>
                            )}
                            {file.status === 'uploading' && (
                              <div className="flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full">
                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-orange-700 font-medium">Uploading...</span>
                              </div>
                            )}
                            {file.status === 'completed' && (
                              <div className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
                                <span className="material-icons text-green-600" style={{fontSize: '16px'}}>check_circle</span>
                                <span className="text-sm text-green-700 font-medium">Completed</span>
                              </div>
                            )}
                            <button 
                              onClick={() => removeFile(file.id)}
                              className="p-2 hover:bg-red-100 rounded-lg text-red-500 hover:text-red-700 transition-colors"
                            >
                              <span className="material-icons" style={{fontSize: '18px'}}>close</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Upload Guidelines */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <span className="material-icons text-blue-600" style={{fontSize: '24px'}}>info</span>
                  </div>
                  <h3 className="font-bold text-blue-900 text-xl">Upload Guidelines</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                      <div className="p-1 bg-green-100 rounded-full mt-1">
                        <span className="material-icons text-green-600" style={{fontSize: '16px'}}>check_circle</span>
                      </div>
                      <div>
                        <p className="font-medium text-blue-900">Clear Quality</p>
                        <p className="text-blue-700 text-sm">Ensure answer sheets are clearly scanned or photographed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                      <div className="p-1 bg-green-100 rounded-full mt-1">
                        <span className="material-icons text-green-600" style={{fontSize: '16px'}}>badge</span>
                      </div>
                      <div>
                        <p className="font-medium text-blue-900">Proper Naming</p>
                        <p className="text-blue-700 text-sm">Name files with student ID or roll number</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                      <div className="p-1 bg-green-100 rounded-full mt-1">
                        <span className="material-icons text-green-600" style={{fontSize: '16px'}}>storage</span>
                      </div>
                      <div>
                        <p className="font-medium text-blue-900">File Size</p>
                        <p className="text-blue-700 text-sm">Maximum 10MB per file for optimal processing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                      <div className="p-1 bg-green-100 rounded-full mt-1">
                        <span className="material-icons text-green-600" style={{fontSize: '16px'}}>psychology</span>
                      </div>
                      <div>
                        <p className="font-medium text-blue-900">AI Evaluation</p>
                        <p className="text-blue-700 text-sm">Automatic evaluation with detailed feedback</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex justify-between items-center pt-6">
                <button 
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                >
                  <span className="material-icons" style={{fontSize: '18px'}}>arrow_back</span>
                  Cancel
                </button>
                
                <button 
                  onClick={handleUpload}
                  disabled={!selectedExam || uploadedFiles.length === 0}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform ${
                    !selectedExam || uploadedFiles.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <span className="material-icons" style={{fontSize: '20px'}}>upload</span>
                  Upload Answer Sheets ({uploadedFiles.length})
                  {(!selectedExam || uploadedFiles.length === 0) && (
                    <span className="material-icons" style={{fontSize: '18px'}}>lock</span>
                  )}
                </button>
              </div>
            </div>

            {/* AI Evaluation Results Section */}
            {showResults && evaluationResults && (
              <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] mt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#101418] flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <span className="material-icons text-purple-600" style={{fontSize: '24px'}}>psychology</span>
                    </div>
                    AI - Evaluation Result and Analysis
                  </h2>
                  <button 
                    onClick={() => setShowResults(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <span className="material-icons text-gray-500" style={{fontSize: '20px'}}>close</span>
                  </button>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-icons text-blue-600" style={{fontSize: '20px'}}>quiz</span>
                      <h3 className="font-semibold text-blue-900">Questions Evaluated</h3>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">
                      {evaluationResults.evaluation_results?.length || 0}
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-icons text-green-600" style={{fontSize: '20px'}}>grade</span>
                      <h3 className="font-semibold text-green-900">Total Marks</h3>
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      {evaluationResults.total_marks || 0} / {evaluationResults.max_possible_marks || 0}
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-icons text-purple-600" style={{fontSize: '20px'}}>percent</span>
                      <h3 className="font-semibold text-purple-900">Percentage</h3>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">
                      {evaluationResults.max_possible_marks ? 
                        Math.round((evaluationResults.total_marks / evaluationResults.max_possible_marks) * 100) : 0}%
                    </p>
                  </div>
                </div>

                {/* Detailed Results */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-[#101418] border-b border-gray-200 pb-2">
                    Question-wise Analysis
                  </h3>
                  
                  {evaluationResults.evaluation_results?.map((result, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-[#101418]">
                          Question {result.question_number}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {result.marks} marks
                          </span>
                        </div>
                      </div>
                      
                      {/* Evaluation Reason */}
                      <div className="mb-4">
                        <h5 className="font-medium text-[#101418] mb-2 flex items-center gap-2">
                          <span className="material-icons text-blue-600" style={{fontSize: '18px'}}>description</span>
                          Evaluation Reason
                        </h5>
                        <p className="text-[#5c728a] bg-gray-50 p-3 rounded-lg">
                          {result.reason}
                        </p>
                      </div>
                      
                      {/* Strengths */}
                      {result.strengths && result.strengths.length > 0 && (
                        <div className="mb-4">
                          <h5 className="font-medium text-[#101418] mb-2 flex items-center gap-2">
                            <span className="material-icons text-green-600" style={{fontSize: '18px'}}>thumb_up</span>
                            Strengths
                          </h5>
                          <ul className="space-y-1">
                            {result.strengths.map((strength, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-[#5c728a]">
                                <span className="material-icons text-green-500 mt-0.5" style={{fontSize: '16px'}}>check_circle</span>
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Areas for Improvement */}
                      {result.areas_for_improvement && result.areas_for_improvement.length > 0 && (
                        <div>
                          <h5 className="font-medium text-[#101418] mb-2 flex items-center gap-2">
                            <span className="material-icons text-orange-600" style={{fontSize: '18px'}}>trending_up</span>
                            Areas for Improvement
                          </h5>
                          <ul className="space-y-1">
                            {result.areas_for_improvement.map((area, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-[#5c728a]">
                                <span className="material-icons text-orange-500 mt-0.5" style={{fontSize: '16px'}}>lightbulb</span>
                                {area}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                  <div className="text-sm text-[#5c728a]">
                    Evaluated on: {evaluationResults.evaluated_at ? 
                      new Date(evaluationResults.evaluated_at * 1000).toLocaleString() : 'N/A'}
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-[#d4dbe2] text-[#5c728a] rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Export Results
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Save to Records
                    </button>
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

export default AnswerSheetUpload;