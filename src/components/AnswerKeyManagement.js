import React, { useState, useRef } from 'react';

const AnswerKeyManagement = ({ examData, setExamData, setCurrentPhase }) => {
  const [answerKey, setAnswerKey] = useState(examData.answerKey || []);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [uploadMode, setUploadMode] = useState('text'); // 'text' or 'image'
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  // Initialize answer key for all questions
  React.useEffect(() => {
    if (examData.questions && examData.questions.length > 0) {
      const initialAnswerKey = examData.questions.map(question => {
        const existing = answerKey.find(ans => ans.questionId === question.id);
        return existing || {
          questionId: question.id,
          questionNumber: question.questionNumber,
          answerText: '',
          answerImages: [],
          keyPoints: [],
          markingScheme: {
            fullMarks: question.marks,
            partialMarks: [],
            keywords: []
          }
        };
      });
      setAnswerKey(initialAnswerKey);
    }
  }, [examData.questions]);

  const handleAnswerTextChange = (questionId, text) => {
    setAnswerKey(prev => 
      prev.map(ans => 
        ans.questionId === questionId 
          ? { ...ans, answerText: text }
          : ans
      )
    );
  };

  const handleKeyPointsChange = (questionId, keyPoints) => {
    setAnswerKey(prev => 
      prev.map(ans => 
        ans.questionId === questionId 
          ? { ...ans, keyPoints: keyPoints.split('\n').filter(point => point.trim()) }
          : ans
      )
    );
  };

  const handleKeywordsChange = (questionId, keywords) => {
    setAnswerKey(prev => 
      prev.map(ans => 
        ans.questionId === questionId 
          ? { 
              ...ans, 
              markingScheme: { 
                ...ans.markingScheme, 
                keywords: keywords.split(',').map(k => k.trim()).filter(k => k) 
              }
            }
          : ans
      )
    );
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
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
      return validTypes.includes(file.type);
    });

    const newFiles = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      preview: URL.createObjectURL(file)
    }));

    setUploadedImages(prev => [...prev, ...newFiles]);
  };

  const removeImage = (imageId) => {
    setUploadedImages(prev => {
      const updatedImages = prev.filter(img => img.id !== imageId);
      const imageToRemove = prev.find(img => img.id === imageId);
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
      }
      return updatedImages;
    });
  };

  const processAnswerImages = async () => {
    setIsProcessing(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock AI extraction of answers from images
    const extractedAnswers = [
      {
        questionId: examData.questions[0]?.id,
        extractedText: "The derivative of f(x) = x² + 3x + 2 is f'(x) = 2x + 3",
        confidence: 0.95
      },
      {
        questionId: examData.questions[1]?.id,
        extractedText: "Using the quadratic formula: x = (5 ± √(25-24))/4 = (5 ± 1)/4, so x = 3/2 or x = 1",
        confidence: 0.92
      }
    ];
    
    // Update answer key with extracted text
    extractedAnswers.forEach(extracted => {
      if (extracted.questionId) {
        handleAnswerTextChange(extracted.questionId, extracted.extractedText);
      }
    });
    
    setIsProcessing(false);
    setUploadedImages([]);
  };

  const addPartialMarkingPoint = (questionId) => {
    setAnswerKey(prev => 
      prev.map(ans => 
        ans.questionId === questionId 
          ? { 
              ...ans, 
              markingScheme: {
                ...ans.markingScheme,
                partialMarks: [...ans.markingScheme.partialMarks, { points: '', marks: 0 }]
              }
            }
          : ans
      )
    );
  };

  const updatePartialMark = (questionId, index, field, value) => {
    setAnswerKey(prev => 
      prev.map(ans => 
        ans.questionId === questionId 
          ? { 
              ...ans, 
              markingScheme: {
                ...ans.markingScheme,
                partialMarks: ans.markingScheme.partialMarks.map((pm, i) => 
                  i === index ? { ...pm, [field]: value } : pm
                )
              }
            }
          : ans
      )
    );
  };

  const removePartialMark = (questionId, index) => {
    setAnswerKey(prev => 
      prev.map(ans => 
        ans.questionId === questionId 
          ? { 
              ...ans, 
              markingScheme: {
                ...ans.markingScheme,
                partialMarks: ans.markingScheme.partialMarks.filter((_, i) => i !== index)
              }
            }
          : ans
      )
    );
  };

  const handleContinue = () => {
    setExamData(prev => ({
      ...prev,
      answerKey
    }));
    setCurrentPhase('rubrics');
  };

  const getAnswerForQuestion = (questionId) => {
    return answerKey.find(ans => ans.questionId === questionId) || {};
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <span className="material-icons text-purple-600 text-2xl">key</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Answer Key Management</h2>
            <p className="text-gray-600">Add correct answers and marking schemes for each question</p>
          </div>
        </div>
        
        {examData.examName && (
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-purple-800">
              <span className="material-icons text-sm">info</span>
              <span className="font-medium">
                {examData.examName} - {examData.questions?.length || 0} Questions
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Upload Mode Selection */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Answer Input Method</h3>
        <div className="flex gap-4">
          <button
            onClick={() => setUploadMode('text')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors ${
              uploadMode === 'text'
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-300 text-gray-600 hover:border-gray-400'
            }`}
          >
            <span className="material-icons">text_fields</span>
            <span className="font-medium">Type Answers</span>
          </button>
          
          <button
            onClick={() => setUploadMode('image')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors ${
              uploadMode === 'image'
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-300 text-gray-600 hover:border-gray-400'
            }`}
          >
            <span className="material-icons">camera_alt</span>
            <span className="font-medium">Upload Answer Images</span>
          </button>
        </div>
      </div>

      {/* Image Upload Section */}
      {uploadMode === 'image' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Answer Key Images</h3>
          
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              isDragOver 
                ? 'border-purple-500 bg-purple-50' 
                : 'border-gray-300 bg-gray-50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="material-icons text-purple-500 text-3xl">upload_file</span>
              </div>
              <div>
                <p className="text-gray-800 text-lg font-medium mb-2">Upload answer key images</p>
                <p className="text-gray-500 text-sm mb-4">AI will extract answers and match them to questions</p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-medium"
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
            </div>
          </div>

          {uploadedImages.length > 0 && (
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {uploadedImages.map((image) => (
                  <div key={image.id} className="border border-gray-200 rounded-lg p-4 relative">
                    <button
                      onClick={() => removeImage(image.id)}
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors text-sm"
                    >
                      ×
                    </button>
                    <img
                      src={image.preview}
                      alt={image.name}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-600 truncate">{image.name}</p>
                  </div>
                ))}
              </div>
              
              <button
                onClick={processAnswerImages}
                disabled={isProcessing}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <span className="material-icons animate-spin">refresh</span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="material-icons">psychology</span>
                    Extract Answers with AI
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Answer Key Form */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Answer Key Details</h3>
        
        {examData.questions && examData.questions.length > 0 ? (
          <div className="space-y-8">
            {examData.questions.map((question, index) => {
              const answer = getAnswerForQuestion(question.id);
              return (
                <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-medium text-gray-800">
                        Question {question.questionNumber}
                      </h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {question.marks} marks
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{question.questionText}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Answer Text */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Correct Answer
                      </label>
                      <textarea
                        value={answer.answerText || ''}
                        onChange={(e) => handleAnswerTextChange(question.id, e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter the correct answer..."
                      />
                      
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Key Points (one per line)
                        </label>
                        <textarea
                          value={answer.keyPoints?.join('\n') || ''}
                          onChange={(e) => handleKeyPointsChange(question.id, e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Key point 1\nKey point 2\nKey point 3"
                        />
                      </div>
                    </div>

                    {/* Marking Scheme */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Keywords for AI Recognition (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={answer.markingScheme?.keywords?.join(', ') || ''}
                        onChange={(e) => handleKeywordsChange(question.id, e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="keyword1, keyword2, keyword3"
                      />
                      
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Partial Marking Scheme
                          </label>
                          <button
                            onClick={() => addPartialMarkingPoint(question.id)}
                            className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
                          >
                            Add Point
                          </button>
                        </div>
                        
                        <div className="space-y-2">
                          {answer.markingScheme?.partialMarks?.map((pm, pmIndex) => (
                            <div key={pmIndex} className="flex gap-2">
                              <input
                                type="text"
                                value={pm.points}
                                onChange={(e) => updatePartialMark(question.id, pmIndex, 'points', e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Partial answer criteria"
                              />
                              <input
                                type="number"
                                value={pm.marks}
                                onChange={(e) => updatePartialMark(question.id, pmIndex, 'marks', parseInt(e.target.value) || 0)}
                                className="w-20 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Marks"
                                min="0"
                                max={question.marks}
                              />
                              <button
                                onClick={() => removePartialMark(question.id, pmIndex)}
                                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors"
                              >
                                <span className="material-icons text-sm">delete</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-gray-400 text-2xl">quiz</span>
            </div>
            <p className="text-gray-500">No questions available. Please upload question paper first.</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {examData.questions && examData.questions.length > 0 && (
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentPhase('upload-questions')}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            <span className="material-icons">arrow_back</span>
            Back to Questions
          </button>
          
          <button
            onClick={handleContinue}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2"
          >
            Continue to Rubrics
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      )}

      {/* Guidelines */}
      <div className="bg-purple-50 rounded-xl border border-purple-200 p-6">
        <h3 className="text-purple-800 text-lg font-medium mb-3">Answer Key Guidelines</h3>
        <ul className="text-purple-700 text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="material-icons text-purple-500 text-sm mt-0.5">check_circle</span>
            <span>Provide complete and accurate answers for each question</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-purple-500 text-sm mt-0.5">check_circle</span>
            <span>Break down answers into key points for better AI evaluation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-purple-500 text-sm mt-0.5">check_circle</span>
            <span>Add relevant keywords that students might use in their answers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-purple-500 text-sm mt-0.5">check_circle</span>
            <span>Set up partial marking schemes for fair evaluation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-purple-500 text-sm mt-0.5">check_circle</span>
            <span>Use image upload for complex mathematical or scientific answers</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnswerKeyManagement;