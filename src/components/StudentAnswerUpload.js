import React, { useState, useRef } from 'react';

const StudentAnswerUpload = ({ examData, setExamData, setCurrentPhase }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState('');
  const [processedAnswers, setProcessedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const fileInputRef = useRef(null);

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
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') || file.type === 'application/pdf'
    );
    
    const newFiles = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      preview: null,
      studentId: '',
      studentName: '',
      status: 'uploaded'
    }));

    // Generate previews for images
    newFiles.forEach(fileObj => {
      if (fileObj.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedFiles(prev => 
            prev.map(f => 
              f.id === fileObj.id 
                ? { ...f, preview: e.target.result }
                : f
            )
          );
        };
        reader.readAsDataURL(fileObj.file);
      }
    });

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const updateFileInfo = (fileId, field, value) => {
    setUploadedFiles(prev => 
      prev.map(f => 
        f.id === fileId 
          ? { ...f, [field]: value }
          : f
      )
    );
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const simulateAIProcessing = async () => {
    setIsProcessing(true);
    setProcessingStatus('Initializing AI evaluation system...');
    
    const steps = [
      'Scanning uploaded answer sheets...',
      'Extracting text and handwriting...',
      'Matching answers to questions...',
      'Applying evaluation rubrics...',
      'Calculating scores and feedback...',
      'Generating detailed reports...'
    ];

    for (let i = 0; i < steps.length; i++) {
      setProcessingStatus(steps[i]);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Simulate processed results
    const mockResults = uploadedFiles.map(file => ({
      fileId: file.id,
      studentId: file.studentId || `STU${Math.floor(Math.random() * 1000)}`,
      studentName: file.studentName || `Student ${Math.floor(Math.random() * 100)}`,
      totalScore: Math.floor(Math.random() * 30) + 70, // 70-100
      maxScore: examData.totalMarks || 100,
      percentage: Math.floor(Math.random() * 30) + 70,
      grade: ['A+', 'A', 'B+', 'B'][Math.floor(Math.random() * 4)],
      questionScores: examData.questions?.map(q => ({
        questionId: q.id,
        questionNumber: q.questionNumber,
        maxMarks: q.marks,
        scoredMarks: Math.floor(Math.random() * q.marks) + Math.floor(q.marks * 0.6),
        feedback: [
          'Excellent understanding demonstrated',
          'Good approach, minor calculation error',
          'Correct concept, needs more detail',
          'Partially correct, missing key points'
        ][Math.floor(Math.random() * 4)]
      })) || [],
      overallFeedback: 'Good performance overall. Focus on providing more detailed explanations in future exams.',
      processingTime: `${Math.floor(Math.random() * 5) + 2} seconds`
    }));

    setProcessedAnswers(mockResults);
    setIsProcessing(false);
    setShowResults(true);
  };

  const downloadResults = () => {
    const csvContent = [
      ['Student ID', 'Student Name', 'Total Score', 'Max Score', 'Percentage', 'Grade', 'Overall Feedback'],
      ...processedAnswers.map(result => [
        result.studentId,
        result.studentName,
        result.totalScore,
        result.maxScore,
        `${result.percentage}%`,
        result.grade,
        result.overallFeedback
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${examData.examName || 'exam'}_results.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const resetProcess = () => {
    setShowResults(false);
    setProcessedAnswers([]);
    setUploadedFiles([]);
  };

  if (showResults) {
    return (
      <div className="space-y-6">
        {/* Results Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="material-icons text-green-600 text-2xl">assessment</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Evaluation Results</h2>
              <p className="text-gray-600">AI evaluation completed successfully</p>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-green-800">
                <span className="material-icons text-sm">check_circle</span>
                <span className="font-medium">
                  {processedAnswers.length} answer sheets processed for {examData.examName}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={downloadResults}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <span className="material-icons">download</span>
                  Download Results
                </button>
                <button
                  onClick={resetProcess}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Process More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-2xl font-bold text-blue-600">
              {processedAnswers.length}
            </div>
            <div className="text-gray-600 text-sm">Total Students</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-2xl font-bold text-green-600">
              {Math.round(processedAnswers.reduce((sum, r) => sum + r.percentage, 0) / processedAnswers.length)}%
            </div>
            <div className="text-gray-600 text-sm">Average Score</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-2xl font-bold text-orange-600">
              {Math.max(...processedAnswers.map(r => r.percentage))}%
            </div>
            <div className="text-gray-600 text-sm">Highest Score</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-2xl font-bold text-red-600">
              {Math.min(...processedAnswers.map(r => r.percentage))}%
            </div>
            <div className="text-gray-600 text-sm">Lowest Score</div>
          </div>
        </div>

        {/* Individual Results */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Individual Results</h3>
          <div className="space-y-4">
            {processedAnswers.map((result, index) => (
              <div key={result.fileId} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      result.percentage >= 90 ? 'bg-green-100 text-green-600' :
                      result.percentage >= 80 ? 'bg-blue-100 text-blue-600' :
                      result.percentage >= 70 ? 'bg-orange-100 text-orange-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      <span className="font-bold">{result.grade}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{result.studentName}</h4>
                      <p className="text-gray-600 text-sm">ID: {result.studentId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">
                      {result.totalScore}/{result.maxScore}
                    </div>
                    <div className="text-gray-600 text-sm">{result.percentage}%</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Question-wise Scores</h5>
                    <div className="space-y-1">
                      {result.questionScores.map(qs => (
                        <div key={qs.questionId} className="flex justify-between text-sm">
                          <span>Q{qs.questionNumber}</span>
                          <span>{qs.scoredMarks}/{qs.maxMarks}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Overall Feedback</h5>
                    <p className="text-gray-600 text-sm">{result.overallFeedback}</p>
                    <p className="text-gray-500 text-xs mt-2">Processed in {result.processingTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentPhase('overview')}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            <span className="material-icons">home</span>
            Back to Overview
          </button>
          
          <button
            onClick={resetProcess}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
          >
            <span className="material-icons">refresh</span>
            Process More Answers
          </button>
        </div>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">AI Evaluation in Progress</h2>
            <p className="text-gray-600 mb-6">{processingStatus}</p>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500" 
                     style={{ width: `${(uploadedFiles.length * 16.67)}%` }}></div>
              </div>
              <p className="text-gray-500 text-sm">Processing {uploadedFiles.length} answer sheets...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="material-icons text-blue-600 text-2xl">upload_file</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Student Answer Upload</h2>
            <p className="text-gray-600">Upload student answer sheets for AI evaluation</p>
          </div>
        </div>
        
        {examData.examName && (
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-blue-800">
              <span className="material-icons text-sm">info</span>
              <span className="font-medium">
                Ready to evaluate: {examData.examName} ({examData.questions?.length || 0} questions, {examData.totalMarks || 0} marks)
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Upload Answer Sheets</h3>
        
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            dragActive 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-icons text-blue-600 text-2xl">cloud_upload</span>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Drop answer sheets here</h4>
          <p className="text-gray-600 mb-4">or click to browse files</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Choose Files
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,.pdf"
            onChange={handleFileInput}
            className="hidden"
          />
          <p className="text-gray-500 text-sm mt-4">
            Supported formats: JPG, PNG, PDF • Max size: 10MB per file
          </p>
        </div>
      </div>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Uploaded Answer Sheets ({uploadedFiles.length})</h3>
          
          <div className="space-y-4">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  {/* File Preview */}
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {file.preview ? (
                      <img 
                        src={file.preview} 
                        alt={file.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="material-icons text-gray-400 text-2xl">
                        {file.type === 'application/pdf' ? 'picture_as_pdf' : 'image'}
                      </span>
                    )}
                  </div>
                  
                  {/* File Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">{file.name}</h4>
                      <button
                        onClick={() => removeFile(file.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <span className="material-icons">delete</span>
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{formatFileSize(file.size)}</p>
                    
                    {/* Student Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Student ID
                        </label>
                        <input
                          type="text"
                          value={file.studentId}
                          onChange={(e) => updateFileInfo(file.id, 'studentId', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter student ID"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Student Name
                        </label>
                        <input
                          type="text"
                          value={file.studentName}
                          onChange={(e) => updateFileInfo(file.id, 'studentName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter student name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Evaluation Summary */}
      {uploadedFiles.length > 0 && (
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h3 className="text-blue-800 text-lg font-medium mb-4">Evaluation Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Exam Details</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• {examData.examName || 'Untitled Exam'}</li>
                <li>• {examData.questions?.length || 0} questions</li>
                <li>• {examData.totalMarks || 0} total marks</li>
                <li>• {examData.duration || 'N/A'} duration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Answer Sheets</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• {uploadedFiles.length} files uploaded</li>
                <li>• {uploadedFiles.filter(f => f.studentId).length} with student IDs</li>
                <li>• {uploadedFiles.filter(f => f.studentName).length} with student names</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Evaluation Rules</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• {examData.rubrics?.length || 0} question-specific rules</li>
                <li>• {Object.values(examData.globalRules || {}).filter(Boolean).length} global rules active</li>
                <li>• AI evaluation ready</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentPhase('rubric')}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
        >
          <span className="material-icons">arrow_back</span>
          Back to Rubric
        </button>
        
        <button
          onClick={simulateAIProcessing}
          disabled={uploadedFiles.length === 0}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
            uploadedFiles.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
          }`}
        >
          <span className="material-icons">psychology</span>
          Start AI Evaluation
        </button>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h3 className="text-blue-800 text-lg font-medium mb-3">Upload Instructions</h3>
        <ul className="text-blue-700 text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="material-icons text-blue-500 text-sm mt-0.5">check_circle</span>
            <span>Upload clear, well-lit images of student answer sheets</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-blue-500 text-sm mt-0.5">check_circle</span>
            <span>Ensure all text is readable and pages are properly oriented</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-blue-500 text-sm mt-0.5">check_circle</span>
            <span>Provide student ID and name for accurate record keeping</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-blue-500 text-sm mt-0.5">check_circle</span>
            <span>AI will automatically extract and evaluate answers based on your rubrics</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-blue-500 text-sm mt-0.5">check_circle</span>
            <span>Results will include detailed feedback and question-wise scoring</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentAnswerUpload;