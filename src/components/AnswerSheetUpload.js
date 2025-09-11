import React, { useState, useEffect } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const AnswerSheetUpload = () => {
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedExamCode, setSelectedExamCode] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedSubjectCode, setSelectedSubjectCode] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [selectedStudentCode, setSelectedStudentCode] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [evaluationResults, setEvaluationResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle'); // 'idle', 'submitted', 'evaluating', 'completed'

  // Dynamic data states
  const [availableExams, setAvailableExams] = useState([]);
  const [availableClasses, setAvailableClasses] = useState([]);
  const [availableSubjects, setAvailableSubjects] = useState([]);
  const [availableStudentIds, setAvailableStudentIds] = useState([]);
  const [loading, setLoading] = useState({
    exams: false,
    classes: false,
    subjects: false,
    students: false
  });

  const apiUrl = process.env.REACT_APP_API_URL;

  // API functions
  const fetchExams = async () => {
    setLoading(prev => ({ ...prev, exams: true }));
    try {
      const response = await fetch(`${apiUrl}/admin/exams`);
      if (response.ok) {
        const result = await response.json();
        setAvailableExams(result.data || []);
      } else {
        console.error('Failed to fetch exams');
      }
    } catch (error) {
      console.error('Error fetching exams:', error);
    } finally {
      setLoading(prev => ({ ...prev, exams: false }));
    }
  };

  const fetchClasses = async () => {
    setLoading(prev => ({ ...prev, classes: true }));
    try {
      const response = await fetch(`${apiUrl}/admin/classes`);
      if (response.ok) {
        const result = await response.json();
        setAvailableClasses(result.data || []);
      } else {
        console.error('Failed to fetch classes');
      }
    } catch (error) {
      console.error('Error fetching classes:', error);
    } finally {
      setLoading(prev => ({ ...prev, classes: false }));
    }
  };

  const fetchSubjects = async () => {
    setLoading(prev => ({ ...prev, subjects: true }));
    try {
      const response = await fetch(`${apiUrl}/admin/subjects`);
      if (response.ok) {
        const result = await response.json();
        setAvailableSubjects(result.data || []);
      } else {
        console.error('Failed to fetch subjects');
      }
    } catch (error) {
      console.error('Error fetching subjects:', error);
    } finally {
      setLoading(prev => ({ ...prev, subjects: false }));
    }
  };

  const fetchStudentsByClass = async (classValue) => {
    if (!classValue) {
      setAvailableStudentIds([]);
      return;
    }
    setLoading(prev => ({ ...prev, students: true }));
    try {
      const response = await fetch(`${apiUrl}/admin/students_by_class?class=${encodeURIComponent(classValue)}`);
      if (response.ok) {
        const result = await response.json();
        setAvailableStudentIds(result.data || []);
      } else {
        console.error('Failed to fetch students');
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(prev => ({ ...prev, students: false }));
    }
  };

  // useEffect hooks
  useEffect(() => {
    fetchExams();
    fetchClasses();
    fetchSubjects();
  }, []);

  useEffect(() => {
    fetchStudentsByClass(selectedClass);
    // Reset student selection when class changes
    setSelectedStudentId('');
    setSelectedStudentCode('');
  }, [selectedClass]);

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
    // Clear error message when new files are added
    setErrorMessage(null);
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
      setErrorMessage('Please complete all required selections and upload at least one file before proceeding.');
      return;
    }
    
    // Clear any previous errors
    setErrorMessage(null);
    
    // Set status to submitted immediately
    setUploadStatus('submitted');
    
    // Update file status to uploading
    setUploadedFiles(prev => prev.map(file => ({ ...file, status: 'uploading' })));
    
    // After a brief moment, change to evaluating status
    setTimeout(() => {
      setUploadStatus('evaluating');
    }, 1000);
    
    try {
      // Create FormData for API request
      const formData = new FormData();
      
      // Add dynamic values from dropdown selections
      formData.append('student_id', selectedStudentCode);
      
      // Construct golden_code as: class-subject_code-examination_code
      const goldenCode = `${selectedClass}-${selectedSubjectCode}-${selectedExamCode}`;
      formData.append('golden_code', goldenCode);
      
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
      
      let result;
      try {
        result = await response.json();
        console.log('API Response:', result);
      } catch (jsonError) {
        console.error('Failed to parse JSON response:', jsonError);
        result = {};
      }
      
      if (response.ok) {
         // Update file status to completed
         setUploadedFiles(prev => prev.map(file => ({ ...file, status: 'completed' })));
         
         // Set status to completed
         setUploadStatus('completed');
         
         // Store evaluation results and show them
         if (result.evaluation_results) {
           setEvaluationResults(result);
           setShowResults(true);
           setErrorMessage(null); // Clear any previous errors
         }
         
         // Show success message after a brief delay
         setTimeout(() => {
           alert('Answer sheets uploaded and sent to AI for evaluation successfully!');
         }, 500);
       } else {
           // Handle error responses - check for various error formats
           if (result.detail) {
             // Standard detail format
             setUploadedFiles(prev => prev.map(file => ({ ...file, status: 'ready' })));
             setUploadStatus('idle');
             setErrorMessage(result.detail);
             return;
           } else if (response.status === 400) {
             // Handle 400 Bad Request specifically for duplication
             setUploadedFiles(prev => prev.map(file => ({ ...file, status: 'ready' })));
             setUploadStatus('idle');
             setErrorMessage('The questions in this answer sheet are already evaluated before');
             return;
           }
           throw new Error(`API request failed with status: ${response.status}`);
        }
    } catch (error) {
      console.error('Upload error:', error);
      
      // Update file status back to ready on error
      setUploadedFiles(prev => prev.map(file => ({ ...file, status: 'ready' })));
      setUploadStatus('idle');
      setErrorMessage(`Upload failed: ${error.message}`);
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
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedExam && selectedClass && selectedSubject && selectedStudentId
                      ? 'bg-green-600'
                      : 'bg-blue-600'
                  }`}>
                    {selectedExam && selectedClass && selectedSubject && selectedStudentId ? (
                      <span className="material-icons text-white" style={{fontSize: '16px'}}>check</span>
                    ) : (
                      <span className="text-white text-sm font-bold">1</span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    selectedExam && selectedClass && selectedSubject && selectedStudentId
                      ? 'text-green-600'
                      : 'text-blue-600'
                  }`}>Select Exam</span>
                </div>
                <div className={`w-12 h-0.5 ${
                  selectedExam && selectedClass && selectedSubject && selectedStudentId && uploadedFiles.length > 0
                    ? 'bg-green-300'
                    : 'bg-gray-300'
                }`}></div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    uploadStatus === 'submitted' || uploadStatus === 'evaluating' || uploadStatus === 'completed'
                      ? 'bg-green-600'
                      : uploadedFiles.length > 0
                      ? 'bg-blue-600'
                      : 'bg-gray-300'
                  }`}>
                    {uploadStatus === 'submitted' || uploadStatus === 'evaluating' || uploadStatus === 'completed' ? (
                      <span className="material-icons text-white" style={{fontSize: '16px'}}>check</span>
                    ) : uploadedFiles.length > 0 ? (
                      <span className="text-white text-sm font-bold">2</span>
                    ) : (
                      <span className="text-gray-600 text-sm font-bold">2</span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    uploadStatus === 'submitted' || uploadStatus === 'evaluating' || uploadStatus === 'completed'
                      ? 'text-green-600'
                      : uploadedFiles.length > 0
                      ? 'text-blue-600'
                      : 'text-gray-500'
                  }`}>Upload Files</span>
                </div>
                <div className={`w-12 h-0.5 ${
                  uploadStatus === 'completed'
                    ? 'bg-green-300'
                    : uploadStatus === 'evaluating'
                    ? 'bg-yellow-300'
                    : 'bg-gray-300'
                }`}></div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    uploadStatus === 'completed'
                      ? 'bg-green-600'
                      : uploadStatus === 'evaluating'
                      ? 'bg-yellow-500'
                      : 'bg-gray-300'
                  }`}>
                    {uploadStatus === 'completed' ? (
                      <span className="material-icons text-white" style={{fontSize: '16px'}}>check</span>
                    ) : uploadStatus === 'evaluating' ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <span className="text-gray-600 text-sm font-bold">3</span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    uploadStatus === 'completed'
                      ? 'text-green-600'
                      : uploadStatus === 'evaluating'
                      ? 'text-yellow-600'
                      : 'text-gray-500'
                  }`}>AI Evaluation</span>
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
                      onChange={(e) => {
                        const selectedOption = availableExams.find(exam => exam.name === e.target.value);
                        setSelectedExam(e.target.value);
                        setSelectedExamCode(selectedOption ? selectedOption.examination_code : '');
                      }}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                      disabled={loading.exams}
                    >
                      <option value="">{loading.exams ? 'Loading exams...' : 'Choose an exam...'}</option>
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
                      disabled={loading.classes}
                    >
                      <option value="">{loading.classes ? 'Loading classes...' : 'Choose class...'}</option>
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
                      disabled={loading.subjects}
                    >
                      <option value="">{loading.subjects ? 'Loading subjects...' : 'Choose subject...'}</option>
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
                      disabled={loading.students || !selectedClass}
                    >
                      <option value="">
                        {!selectedClass ? 'Select class first...' : 
                         loading.students ? 'Loading students...' : 
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
                
                {uploadStatus === 'idle' && (
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
                )}
                
                {uploadStatus === 'submitted' && (
                  <div className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold bg-green-500 text-white shadow-lg">
                    <span className="material-icons" style={{fontSize: '20px'}}>check_circle</span>
                    Submitted Successfully
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  </div>
                )}
                
                {uploadStatus === 'evaluating' && (
                  <div className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold bg-yellow-500 text-white shadow-lg">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Evaluating Answer Sheets...
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                  </div>
                )}
                
                {uploadStatus === 'completed' && (
                   <div className="flex items-center gap-4">
                     <div className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold bg-green-600 text-white shadow-lg">
                       <span className="material-icons" style={{fontSize: '20px'}}>check_circle</span>
                       Evaluation Completed
                       <span className="material-icons" style={{fontSize: '20px'}}>done_all</span>
                     </div>
                     <button 
                       onClick={() => {
                         setUploadStatus('idle');
                         setUploadedFiles([]);
                         setEvaluationResults(null);
                         setShowResults(false);
                         setErrorMessage(null);
                       }}
                       className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all duration-200"
                     >
                       <span className="material-icons" style={{fontSize: '18px'}}>refresh</span>
                       New Upload
                     </button>
                   </div>
                 )}
              </div>
              
              {/* Enhanced Error Message Display */}
              {errorMessage && (
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <span className="material-icons text-orange-600" style={{fontSize: '24px'}}>warning</span>
                    </div>
                    <h3 className="font-bold text-orange-900 text-xl">Duplication Detected</h3>
                    <div className="ml-auto">
                      <button 
                        onClick={() => setErrorMessage(null)}
                        className="p-2 hover:bg-white/60 rounded-full transition-all duration-200 group"
                      >
                        <span className="material-icons text-gray-500 group-hover:text-gray-700 transition-colors" style={{fontSize: '20px'}}>close</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/60 rounded-lg p-4">
                      <p className="text-orange-800 font-medium">
                        <span className="material-icons text-orange-600 mr-2" style={{fontSize: '18px', verticalAlign: 'middle'}}>info</span>
                        The questions in this answer sheet are already evaluated before
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <button 
                        onClick={() => setErrorMessage(null)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <span className="material-icons" style={{fontSize: '16px'}}>check_circle</span>
                        Got it, Thanks!
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-orange-700">
                      <span className="material-icons" style={{fontSize: '16px'}}>lightbulb</span>
                      <span>Try selecting different questions</span>
                    </div>
                  </div>
                </div>
              )}
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