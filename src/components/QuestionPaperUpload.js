import React, { useState, useRef } from 'react';

const QuestionPaperUpload = ({ examData, setExamData, setCurrentPhase }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedQuestions, setExtractedQuestions] = useState([]);
  const [processingStep, setProcessingStep] = useState('');
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const validFiles = files.filter(file => {
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
      return validTypes.includes(file.type);
    });

    const newFiles = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      preview: URL.createObjectURL(file)
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => {
      const updatedFiles = prev.filter(file => file.id !== fileId);
      const fileToRemove = prev.find(file => file.id === fileId);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return updatedFiles;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const simulateAIExtraction = async () => {
    setIsProcessing(true);
    
    // Simulate AI processing steps
    const steps = [
      'Analyzing uploaded images...',
      'Detecting text regions...',
      'Extracting question content...',
      'Structuring questions...',
      'Finalizing extraction...'
    ];
    
    for (let i = 0; i < steps.length; i++) {
      setProcessingStep(steps[i]);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    // Simulate extracted questions
    const mockQuestions = [
      {
        id: 1,
        questionNumber: '1',
        questionText: 'What is the derivative of f(x) = x² + 3x + 2?',
        marks: 5,
        type: 'short_answer',
        difficulty: 'medium'
      },
      {
        id: 2,
        questionNumber: '2',
        questionText: 'Solve the quadratic equation: 2x² - 5x + 3 = 0',
        marks: 8,
        type: 'long_answer',
        difficulty: 'medium'
      },
      {
        id: 3,
        questionNumber: '3',
        questionText: 'Find the area under the curve y = x² from x = 0 to x = 3',
        marks: 10,
        type: 'long_answer',
        difficulty: 'hard'
      },
      {
        id: 4,
        questionNumber: '4a',
        questionText: 'Define the concept of limits in calculus',
        marks: 4,
        type: 'short_answer',
        difficulty: 'easy'
      },
      {
        id: 5,
        questionNumber: '4b',
        questionText: 'Prove that the limit of (sin x)/x as x approaches 0 is 1',
        marks: 8,
        type: 'long_answer',
        difficulty: 'hard'
      }
    ];
    
    setExtractedQuestions(mockQuestions);
    setIsProcessing(false);
    setProcessingStep('');
  };

  const editQuestion = (questionId, field, value) => {
    setExtractedQuestions(prev => 
      prev.map(q => 
        q.id === questionId ? { ...q, [field]: value } : q
      )
    );
  };

  const deleteQuestion = (questionId) => {
    setExtractedQuestions(prev => prev.filter(q => q.id !== questionId));
  };

  const addNewQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      questionNumber: '',
      questionText: '',
      marks: 0,
      type: 'short_answer',
      difficulty: 'medium'
    };
    setExtractedQuestions(prev => [...prev, newQuestion]);
  };

  const handleContinue = () => {
    setExamData(prev => ({
      ...prev,
      questions: extractedQuestions
    }));
    setCurrentPhase('answer-key');
  };

  const totalMarks = extractedQuestions.reduce((sum, q) => sum + (parseInt(q.marks) || 0), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="material-icons text-blue-600 text-2xl">quiz</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Upload Question Paper</h2>
            <p className="text-gray-600">Upload images of your question paper for AI extraction</p>
          </div>
        </div>
        
        {examData.examName && (
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-blue-800">
              <span className="material-icons text-sm">info</span>
              <span className="font-medium">Current Exam: {examData.examName} ({examData.subject})</span>
            </div>
          </div>
        )}
      </div>

      {/* File Upload Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Question Paper Images</h3>
        
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            isDragOver 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 bg-gray-50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="material-icons text-blue-500 text-3xl">camera_alt</span>
            </div>
            <div>
              <p className="text-gray-800 text-lg font-medium mb-2">Drag and drop question paper images</p>
              <p className="text-gray-500 text-sm mb-4">or</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Browse Files
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".png,.jpg,.jpeg,.webp"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
            <p className="text-gray-500 text-sm">Supported formats: PNG, JPG, JPEG, WEBP (Max 10MB each)</p>
          </div>
        </div>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-medium text-gray-800 mb-4">Uploaded Files ({uploadedFiles.length})</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="border border-gray-200 rounded-lg p-4 relative">
                  <button
                    onClick={() => removeFile(file.id)}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors text-sm"
                  >
                    ×
                  </button>
                  <div className="mb-3">
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium truncate" title={file.name}>
                      {file.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
              <button
                onClick={simulateAIExtraction}
                disabled={isProcessing}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <span className="material-icons animate-spin">refresh</span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="material-icons">psychology</span>
                    Extract Questions with AI
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* AI Processing Status */}
      {isProcessing && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="material-icons text-blue-600 animate-spin">refresh</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">AI Processing in Progress</h3>
              <p className="text-gray-600">{processingStep}</p>
            </div>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{width: '60%'}}></div>
          </div>
        </div>
      )}

      {/* Extracted Questions */}
      {extractedQuestions.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Extracted Questions</h3>
              <p className="text-gray-600">Review and edit the AI-extracted questions</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Questions: {extractedQuestions.length}</div>
              <div className="text-sm text-gray-500">Total Marks: {totalMarks}</div>
            </div>
          </div>

          <div className="space-y-4">
            {extractedQuestions.map((question, index) => (
              <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Q. No.</label>
                    <input
                      type="text"
                      value={question.questionNumber}
                      onChange={(e) => editQuestion(question.id, 'questionNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="1"
                    />
                  </div>
                  
                  <div className="md:col-span-7">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Question Text</label>
                    <textarea
                      value={question.questionText}
                      onChange={(e) => editQuestion(question.id, 'questionText', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter question text..."
                    />
                  </div>
                  
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Marks</label>
                    <input
                      type="number"
                      value={question.marks}
                      onChange={(e) => editQuestion(question.id, 'marks', parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="0"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <select
                      value={question.type}
                      onChange={(e) => editQuestion(question.id, 'type', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="short_answer">Short Answer</option>
                      <option value="long_answer">Long Answer</option>
                      <option value="mcq">Multiple Choice</option>
                      <option value="true_false">True/False</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-1 flex items-end">
                    <button
                      onClick={() => deleteQuestion(question.id)}
                      className="w-full bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors"
                    >
                      <span className="material-icons text-sm">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={addNewQuestion}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <span className="material-icons">add</span>
              Add Question
            </button>
            
            <div className="flex gap-3">
              <button
                onClick={() => setCurrentPhase('create-exam')}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
              >
                <span className="material-icons">arrow_back</span>
                Back
              </button>
              
              <button
                onClick={handleContinue}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
              >
                Continue to Answer Key
                <span className="material-icons">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h3 className="text-blue-800 text-lg font-medium mb-3">Upload Guidelines</h3>
        <ul className="text-blue-700 text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="material-icons text-blue-500 text-sm mt-0.5">check_circle</span>
            <span>Ensure question papers are clearly visible and well-lit</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-blue-500 text-sm mt-0.5">check_circle</span>
            <span>Upload high-resolution images for better AI recognition</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-blue-500 text-sm mt-0.5">check_circle</span>
            <span>Make sure all text is legible and not blurred</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-blue-500 text-sm mt-0.5">check_circle</span>
            <span>You can upload multiple pages of the question paper</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-blue-500 text-sm mt-0.5">check_circle</span>
            <span>Review and edit extracted questions before proceeding</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionPaperUpload;