import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const OrganizationExamCreation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    examName: '',
    examType: 'midterm',
    academicYear: '2024-25',
    examDate: '',
    endDate: '',
    description: '',
    selectedClasses: [],
    subjects: [],
    duration: '180',
    totalMarks: '100',
    passingMarks: '40',
    gradingSystem: 'percentage',
    instructions: '',
    allowLateSubmission: false,
    lateSubmissionPenalty: '5',
    enableNegativeMarking: false,
    negativeMarkingValue: '0.25'
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  // Mock data - in real app, this would come from API
  const availableClasses = [
    { id: '6A', name: 'Class 6A', students: 32 },
    { id: '6B', name: 'Class 6B', students: 28 },
    { id: '7A', name: 'Class 7A', students: 35 },
    { id: '7B', name: 'Class 7B', students: 30 },
    { id: '8A', name: 'Class 8A', students: 33 },
    { id: '8B', name: 'Class 8B', students: 29 },
    { id: '9A', name: 'Class 9A', students: 31 },
    { id: '9B', name: 'Class 9B', students: 27 },
    { id: '10A', name: 'Class 10A', students: 34 },
    { id: '10B', name: 'Class 10B', students: 26 },
    { id: '11-Science', name: 'Class 11 Science', students: 25 },
    { id: '11-Commerce', name: 'Class 11 Commerce', students: 22 },
    { id: '12-Science', name: 'Class 12 Science', students: 24 },
    { id: '12-Commerce', name: 'Class 12 Commerce', students: 20 }
  ];

  const examTypes = [
    { value: 'midterm', label: 'Mid-term Examination', description: 'Half-yearly assessment' },
    { value: 'final', label: 'Final Examination', description: 'End of year assessment' },
    { value: 'quarterly', label: 'Quarterly Examination', description: 'Three-month assessment' },
    { value: 'unit', label: 'Unit Test', description: 'Chapter-wise assessment' },
    { value: 'mock', label: 'Mock Examination', description: 'Practice examination' },
    { value: 'entrance', label: 'Entrance Test', description: 'Admission assessment' }
  ];

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 
    'Hindi', 'History', 'Geography', 'Computer Science', 'Economics',
    'Political Science', 'Sociology', 'Psychology', 'Physical Education'
  ];

  const gradingSystems = [
    { value: 'percentage', label: 'Percentage (0-100%)' },
    { value: 'gpa', label: 'GPA (0-10)' },
    { value: 'letter', label: 'Letter Grade (A-F)' },
    { value: 'points', label: 'Points System' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleClassSelection = (classId) => {
    setFormData(prev => ({
      ...prev,
      selectedClasses: prev.selectedClasses.includes(classId)
        ? prev.selectedClasses.filter(id => id !== classId)
        : [...prev.selectedClasses, classId]
    }));
  };

  const handleSubjectSelection = (subject) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.examName.trim()) newErrors.examName = 'Exam name is required';
      if (!formData.examType) newErrors.examType = 'Exam type is required';
      if (!formData.examDate) newErrors.examDate = 'Exam date is required';
      if (!formData.description.trim()) newErrors.description = 'Description is required';
    }
    
    if (step === 2) {
      if (formData.selectedClasses.length === 0) newErrors.selectedClasses = 'Select at least one class';
      if (formData.subjects.length === 0) newErrors.subjects = 'Select at least one subject';
    }
    
    if (step === 3) {
      if (!formData.duration || parseInt(formData.duration) <= 0) newErrors.duration = 'Valid duration is required';
      if (!formData.totalMarks || parseInt(formData.totalMarks) <= 0) newErrors.totalMarks = 'Valid total marks is required';
      if (!formData.passingMarks || parseInt(formData.passingMarks) <= 0) newErrors.passingMarks = 'Valid passing marks is required';
      if (parseInt(formData.passingMarks) >= parseInt(formData.totalMarks)) {
        newErrors.passingMarks = 'Passing marks should be less than total marks';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Generate exam ID
      const examId = `ORG-EX-${Date.now().toString().slice(-6)}`;
      
      const examData = {
        ...formData,
        examId,
        createdAt: new Date().toISOString(),
        status: 'draft',
        organizationLevel: true
      };
      
      console.log('Organization Exam Created:', examData);
      // Here you would typically save to backend
      
      // Navigate back to upload page or show success message
      navigate('/upload');
    }
  };

  const getTotalStudents = () => {
    return formData.selectedClasses.reduce((total, classId) => {
      const classData = availableClasses.find(c => c.id === classId);
      return total + (classData ? classData.students : 0);
    }, 0);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Examination Name *
            </label>
            <input
              type="text"
              name="examName"
              value={formData.examName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.examName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Half Yearly Examination 2024"
            />
            {errors.examName && <p className="text-red-500 text-sm mt-1">{errors.examName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Examination Type *
            </label>
            <select
              name="examType"
              value={formData.examType}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.examType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {examTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
            {errors.examType && <p className="text-red-500 text-sm mt-1">{errors.examType}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Academic Year
            </label>
            <input
              type="text"
              name="academicYear"
              value={formData.academicYear}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 2024-25"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Exam Start Date *
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

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Exam End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Description</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Examination Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Provide a detailed description of this examination, its purpose, and any special instructions..."
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Class Selection</h3>
        <p className="text-gray-600 mb-4">Select the classes that will participate in this examination</p>
        
        {errors.selectedClasses && <p className="text-red-500 text-sm mb-4">{errors.selectedClasses}</p>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableClasses.map(classItem => (
            <div
              key={classItem.id}
              onClick={() => handleClassSelection(classItem.id)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                formData.selectedClasses.includes(classItem.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">{classItem.name}</h4>
                  <p className="text-sm text-gray-600">{classItem.students} students</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.selectedClasses.includes(classItem.id)
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {formData.selectedClasses.includes(classItem.id) && (
                    <span className="material-icons text-white text-sm">check</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {formData.selectedClasses.length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 font-medium">
              Selected: {formData.selectedClasses.length} classes ({getTotalStudents()} total students)
            </p>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Subject Selection</h3>
        <p className="text-gray-600 mb-4">Select the subjects for this examination</p>
        
        {errors.subjects && <p className="text-red-500 text-sm mb-4">{errors.subjects}</p>}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {subjects.map(subject => (
            <div
              key={subject}
              onClick={() => handleSubjectSelection(subject)}
              className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 text-center ${
                formData.subjects.includes(subject)
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="font-medium">{subject}</span>
              {formData.subjects.includes(subject) && (
                <span className="material-icons text-green-600 text-sm ml-2">check_circle</span>
              )}
            </div>
          ))}
        </div>
        
        {formData.subjects.length > 0 && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 font-medium">
              Selected: {formData.subjects.length} subjects
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Configuration</h3>
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
              placeholder="180"
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
              placeholder="100"
              min="1"
            />
            {errors.totalMarks && <p className="text-red-500 text-sm mt-1">{errors.totalMarks}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passing Marks *
            </label>
            <input
              type="number"
              name="passingMarks"
              value={formData.passingMarks}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.passingMarks ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="40"
              min="1"
            />
            {errors.passingMarks && <p className="text-red-500 text-sm mt-1">{errors.passingMarks}</p>}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Grading & Assessment</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Grading System
            </label>
            <select
              name="gradingSystem"
              value={formData.gradingSystem}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {gradingSystems.map(system => (
                <option key={system.value} value={system.value}>{system.label}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="allowLateSubmission"
                  checked={formData.allowLateSubmission}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-sm font-medium text-gray-700">
                  Allow Late Submission
                </label>
              </div>
              
              {formData.allowLateSubmission && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Late Submission Penalty (%)
                  </label>
                  <input
                    type="number"
                    name="lateSubmissionPenalty"
                    value={formData.lateSubmissionPenalty}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="5"
                    min="0"
                    max="100"
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="enableNegativeMarking"
                  checked={formData.enableNegativeMarking}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-sm font-medium text-gray-700">
                  Enable Negative Marking
                </label>
              </div>
              
              {formData.enableNegativeMarking && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Negative Marking Value
                  </label>
                  <input
                    type="number"
                    name="negativeMarkingValue"
                    value={formData.negativeMarkingValue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.25"
                    min="0"
                    step="0.01"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            General Instructions for Students
          </label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter general instructions that will be displayed to all students before the exam..."
          />
        </div>
      </div>
    </div>
  );

  const renderStepIndicator = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between">
        {[1, 2, 3].map(step => (
          <div key={step} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              step === currentStep ? 'bg-blue-600 text-white' :
              step < currentStep ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {step < currentStep ? (
                <span className="material-icons text-sm">check</span>
              ) : (
                step
              )}
            </div>
            <div className="ml-3">
              <div className={`font-medium ${
                step === currentStep ? 'text-blue-600' :
                step < currentStep ? 'text-green-600' : 'text-gray-600'
              }`}>
                {step === 1 && 'Basic Information'}
                {step === 2 && 'Class & Subject Selection'}
                {step === 3 && 'Configuration & Settings'}
              </div>
            </div>
            {step < 3 && (
              <div className={`w-16 h-0.5 mx-4 ${
                step < currentStep ? 'bg-green-600' : 'bg-gray-200'
              }`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="Organization Exam Creation" />
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <Sidebar />
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            {/* Breadcrumb Navigation */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={() => navigate('/upload')}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="material-icons text-sm">home</span>
                  <span>AI Evaluation</span>
                </button>
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span className="text-gray-600 font-medium">Create Organization Exam</span>
              </div>
            </div>



            {renderStepIndicator()}

            <form onSubmit={handleSubmit}>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => navigate('/upload')}
                    className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
                  >
                    <span className="material-icons">arrow_back</span>
                    Back to AI Evaluation
                  </button>
                  
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors flex items-center gap-2"
                    >
                      <span className="material-icons">chevron_left</span>
                      Previous
                    </button>
                  )}
                </div>
                
                <div>
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
                    >
                      Next Step
                      <span className="material-icons">chevron_right</span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2"
                    >
                      <span className="material-icons">check_circle</span>
                      Create Examination
                    </button>
                  )}
                </div>
              </div>
            </form>

            {/* Summary Preview */}
            {currentStep === 3 && (
              <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mt-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Examination Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div><span className="font-medium text-blue-700">Exam:</span> {formData.examName}</div>
                    <div><span className="font-medium text-blue-700">Type:</span> {examTypes.find(t => t.value === formData.examType)?.label}</div>
                    <div><span className="font-medium text-blue-700">Classes:</span> {formData.selectedClasses.length} selected ({getTotalStudents()} students)</div>
                    <div><span className="font-medium text-blue-700">Subjects:</span> {formData.subjects.length} selected</div>
                  </div>
                  <div className="space-y-2">
                    <div><span className="font-medium text-blue-700">Duration:</span> {formData.duration} minutes</div>
                    <div><span className="font-medium text-blue-700">Total Marks:</span> {formData.totalMarks}</div>
                    <div><span className="font-medium text-blue-700">Passing Marks:</span> {formData.passingMarks}</div>
                    <div><span className="font-medium text-blue-700">Date:</span> {formData.examDate}</div>
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

export default OrganizationExamCreation;