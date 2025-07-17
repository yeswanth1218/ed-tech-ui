import React, { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const UploadPage = () => {
  const [examDetails, setExamDetails] = useState({
    examId: '',
    classId: '',
    studentId: ''
  });
  
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExamDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
      const validTypes = ['image/png', 'image/jpeg', 'image/webp'];
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
      // Clean up object URLs
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

  const handleSubmit = () => {
    if (!examDetails.examId || !examDetails.classId || !examDetails.studentId) {
      alert('Please fill in all exam details');
      return;
    }
    
    if (uploadedFiles.length === 0) {
      alert('Please upload at least one answer sheet');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Submitting:', { examDetails, files: uploadedFiles });
    alert('Answer sheets submitted successfully!');
    
    // Reset form
    setExamDetails({ examId: '', classId: '', studentId: '' });
    setUploadedFiles([]);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="Upload Answer Sheets" />
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <Sidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Upload Answer Sheets</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Upload student answer sheets for AI-powered evaluation and grading.</p>
              </div>
            </div>

            {/* Exam Details Section */}
            <div className="p-4">
              <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Exam Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#101418] mb-2">Exam ID</label>
                    <input
                      type="text"
                      name="examId"
                      value={examDetails.examId}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Exam ID"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#101418] mb-2">Class ID</label>
                    <input
                      type="text"
                      name="classId"
                      value={examDetails.classId}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Class ID"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#101418] mb-2">Student ID</label>
                    <input
                      type="text"
                      name="studentId"
                      value={examDetails.studentId}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Student ID"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* File Upload Section */}
            <div className="p-4">
              <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Upload Answer Sheets</h2>
                
                {/* Drag and Drop Zone */}
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    isDragOver 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-[#d4dbe2] bg-gray-50'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="material-icons text-blue-500" style={{fontSize: '32px'}}>cloud_upload</span>
                    </div>
                    <div>
                      <p className="text-[#101418] text-lg font-medium mb-2">Drag and drop your files here</p>
                      <p className="text-[#5c728a] text-sm mb-4">or</p>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
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
                    <p className="text-[#5c728a] text-xs">Supported formats: PNG, JPG, WEBP (Max 10MB each)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Uploaded Files Review */}
            {uploadedFiles.length > 0 && (
              <div className="p-4">
                <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                  <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Review Uploaded Files</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {uploadedFiles.map((file) => (
                      <div key={file.id} className="border border-[#d4dbe2] rounded-lg p-4 relative">
                        <button
                          onClick={() => removeFile(file.id)}
                          className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
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
                          <p className="text-[#101418] text-sm font-medium truncate" title={file.name}>
                            {file.name}
                          </p>
                          <p className="text-[#5c728a] text-xs">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Submit Section */}
            <div className="p-4">
              <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[#101418] text-lg font-medium">Ready to Submit?</h3>
                    <p className="text-[#5c728a] text-sm">
                      {uploadedFiles.length} file(s) ready for evaluation
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setExamDetails({ examId: '', classId: '', studentId: '' });
                        setUploadedFiles([]);
                      }}
                      className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={uploadedFiles.length === 0 || !examDetails.examId || !examDetails.classId || !examDetails.studentId}
                      className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Send for Evaluation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="p-4">
              <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
                <h3 className="text-blue-800 text-lg font-medium mb-3">Upload Instructions</h3>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• Ensure answer sheets are clearly visible and well-lit</li>
                  <li>• Upload high-resolution images for better AI recognition</li>
                  <li>• Make sure all text is legible and not blurred</li>
                  <li>• Supported formats: PNG, JPG, JPEG, WEBP</li>
                  <li>• Maximum file size: 10MB per image</li>
                  <li>• You can upload multiple answer sheets at once</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;