import React, { useState } from 'react';

const ExamCreation = ({ examData, setExamData, setCurrentPhase }) => {
  const [formData, setFormData] = useState({
    examName: examData.examName || '',
    subject: examData.subject || '',
    classId: examData.classId || '',
    duration: examData.duration || '',
    totalMarks: examData.totalMarks || '',
    instructions: examData.instructions || '',
    examDate: examData.examDate || '',
    examType: examData.examType || 'written'
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.examName.trim()) newErrors.examName = 'Exam name is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.classId.trim()) newErrors.classId = 'Class ID is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    if (!formData.totalMarks.trim()) newErrors.totalMarks = 'Total marks is required';
    if (!formData.examDate.trim()) newErrors.examDate = 'Exam date is required';
    
    if (formData.totalMarks && (isNaN(formData.totalMarks) || parseInt(formData.totalMarks) <= 0)) {
      newErrors.totalMarks = 'Total marks must be a positive number';
    }
    
    if (formData.duration && (isNaN(formData.duration) || parseInt(formData.duration) <= 0)) {
      newErrors.duration = 'Duration must be a positive number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Generate exam ID
      const examId = `EX${Date.now().toString().slice(-6)}`;
      
      setExamData(prev => ({
        ...prev,
        ...formData,
        examId
      }));
      
      setCurrentPhase('upload-questions');
    }
  };

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 
    'History', 'Geography', 'Computer Science', 'Economics', 'Other'
  ];

  const examTypes = [
    { value: 'written', label: 'Written Exam' },
    { value: 'mcq', label: 'Multiple Choice' },
    { value: 'mixed', label: 'Mixed (MCQ + Written)' },
    { value: 'practical', label: 'Practical Exam' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="material-icons text-green-600 text-2xl">add_circle</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Create New Exam</h2>
            <p className="text-gray-600">Set up your exam with detailed information and metadata</p>
          </div>
        </div>
      </div>

      {/* Exam Creation Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exam Name *
              </label>
              <input
                type="text"
                name="examName"
                value={formData.examName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.examName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Mid-term Mathematics Exam"
              />
              {errors.examName && <p className="text-red-500 text-sm mt-1">{errors.examName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.subject ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Subject</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Class ID *
              </label>
              <input
                type="text"
                name="classId"
                value={formData.classId}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.classId ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., 10A, 12-Science, Grade-8"
              />
              {errors.classId && <p className="text-red-500 text-sm mt-1">{errors.classId}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exam Type
              </label>
              <select
                name="examType"
                value={formData.examType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {examTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Exam Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (minutes) *
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.duration ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., 120"
                min="1"
              />
              {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Marks *
              </label>
              <input
                type="number"
                name="totalMarks"
                value={formData.totalMarks}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.totalMarks ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., 100"
                min="1"
              />
              {errors.totalMarks && <p className="text-red-500 text-sm mt-1">{errors.totalMarks}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exam Date *
              </label>
              <input
                type="date"
                name="examDate"
                value={formData.examDate}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.examDate ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.examDate && <p className="text-red-500 text-sm mt-1">{errors.examDate}</p>}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Instructions</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instructions for Students
            </label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter any specific instructions for students taking this exam..."
            />
          </div>
        </div>

        {/* Preview */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Exam Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div><span className="font-medium text-blue-700">Exam:</span> {formData.examName || 'Not specified'}</div>
              <div><span className="font-medium text-blue-700">Subject:</span> {formData.subject || 'Not specified'}</div>
              <div><span className="font-medium text-blue-700">Class:</span> {formData.classId || 'Not specified'}</div>
              <div><span className="font-medium text-blue-700">Type:</span> {examTypes.find(t => t.value === formData.examType)?.label || 'Written Exam'}</div>
            </div>
            <div className="space-y-2">
              <div><span className="font-medium text-blue-700">Duration:</span> {formData.duration ? `${formData.duration} minutes` : 'Not specified'}</div>
              <div><span className="font-medium text-blue-700">Total Marks:</span> {formData.totalMarks || 'Not specified'}</div>
              <div><span className="font-medium text-blue-700">Date:</span> {formData.examDate || 'Not specified'}</div>
              <div><span className="font-medium text-blue-700">Exam ID:</span> Will be auto-generated</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => setCurrentPhase('landing')}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            <span className="material-icons">arrow_back</span>
            Back to Overview
          </button>
          
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
          >
            Create Exam & Continue
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExamCreation;