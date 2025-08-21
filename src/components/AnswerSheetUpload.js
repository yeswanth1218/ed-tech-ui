import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const AnswerSheetUpload = () => {
  const [selectedExam, setSelectedExam] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const availableExams = [
    { id: 1, title: 'Mid-term Mathematics Exam', class: '12-A', date: '2024-02-15' },
    { id: 2, title: 'Algebra Unit Test', class: '11-B', date: '2024-02-12' },
    { id: 3, title: 'Statistics Assessment', class: '11-A', date: '2024-02-18' }
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

  const handleUpload = () => {
    if (!selectedExam || uploadedFiles.length === 0) {
      alert('Please select an exam and upload at least one file.');
      return;
    }
    
    // Update file status to uploading
    setUploadedFiles(prev => prev.map(file => ({ ...file, status: 'uploading' })));
    
    // Simulate upload process
    setTimeout(() => {
      setUploadedFiles(prev => prev.map(file => ({ ...file, status: 'completed' })));
      alert('Answer sheets uploaded successfully!');
    }, 2000);
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
              <div className="flex items-center gap-2 mb-2">
                <button 
                  onClick={() => window.history.back()}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="material-icons" style={{fontSize: '20px'}}>arrow_back</span>
                </button>
                <h1 className="text-2xl font-bold text-[#101418]">Upload Answer Sheets</h1>
              </div>
              <p className="text-[#5c728a]">Upload student answer sheets for AI evaluation</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Exam Selection */}
              <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                <h2 className="text-lg font-semibold text-[#101418] mb-4">Select Exam</h2>
                <select 
                  value={selectedExam} 
                  onChange={(e) => setSelectedExam(e.target.value)}
                  className="w-full px-4 py-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose an exam...</option>
                  {availableExams.map(exam => (
                    <option key={exam.id} value={exam.id}>
                      {exam.title} - {exam.class} ({new Date(exam.date).toLocaleDateString()})
                    </option>
                  ))}
                </select>
              </div>

              {/* File Upload Area */}
              <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                <h2 className="text-lg font-semibold text-[#101418] mb-4">Upload Answer Sheets</h2>
                
                <div 
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    dragActive 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-[#d4dbe2] hover:border-blue-300'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-blue-50 rounded-full">
                      <span className="material-icons text-blue-600" style={{fontSize: '32px'}}>cloud_upload</span>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-[#101418] mb-2">
                        Drag and drop files here, or 
                        <label className="text-blue-600 hover:text-blue-700 cursor-pointer underline">
                          browse
                          <input 
                            type="file" 
                            multiple 
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            onChange={(e) => handleFiles(e.target.files)}
                          />
                        </label>
                      </p>
                      <p className="text-[#5c728a] text-sm">
                        Supported formats: PDF, JPG, PNG (Max 10MB per file)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-medium text-[#101418] mb-3">Uploaded Files ({uploadedFiles.length})</h3>
                    <div className="space-y-2">
                      {uploadedFiles.map(file => (
                        <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="material-icons text-[#5c728a]" style={{fontSize: '20px'}}>
                              {file.type.includes('pdf') ? 'picture_as_pdf' : 'image'}
                            </span>
                            <div>
                              <p className="font-medium text-[#101418]">{file.name}</p>
                              <p className="text-sm text-[#5c728a]">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {file.status === 'ready' && (
                              <span className="text-sm text-blue-600 font-medium">Ready</span>
                            )}
                            {file.status === 'uploading' && (
                              <span className="text-sm text-orange-600 font-medium">Uploading...</span>
                            )}
                            {file.status === 'completed' && (
                              <span className="text-sm text-green-600 font-medium">Completed</span>
                            )}
                            <button 
                              onClick={() => removeFile(file.id)}
                              className="p-1 hover:bg-red-100 rounded text-red-600"
                            >
                              <span className="material-icons" style={{fontSize: '16px'}}>close</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Upload Instructions */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">Upload Guidelines</h3>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-blue-600" style={{fontSize: '16px'}}>check_circle</span>
                    Ensure answer sheets are clearly scanned or photographed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-blue-600" style={{fontSize: '16px'}}>check_circle</span>
                    Name files with student ID or roll number for easy identification
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-blue-600" style={{fontSize: '16px'}}>check_circle</span>
                    Maximum file size: 10MB per file
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-icons text-blue-600" style={{fontSize: '16px'}}>check_circle</span>
                    AI will automatically evaluate and provide detailed feedback
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => window.history.back()}
                  className="px-6 py-3 border border-[#d4dbe2] text-[#5c728a] rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleUpload}
                  disabled={!selectedExam || uploadedFiles.length === 0}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Upload Answer Sheets ({uploadedFiles.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerSheetUpload;