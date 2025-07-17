import React, { useState } from 'react';

const RubricConfiguration = ({ examData, setExamData, setCurrentPhase }) => {
  const [rubrics, setRubrics] = useState(examData.rubrics || []);
  const [globalRules, setGlobalRules] = useState({
    ignoreHandwriting: false,
    ignoreSpelling: false,
    allowPartialCredit: true,
    strictKeywordMatching: false,
    considerSynonyms: true,
    penalizeIncorrectInfo: false,
    customInstructions: ''
  });

  const [presetRubrics] = useState([
    {
      id: 'lenient',
      name: 'Lenient Grading',
      description: 'Focus on understanding rather than perfection',
      rules: {
        ignoreHandwriting: true,
        ignoreSpelling: true,
        allowPartialCredit: true,
        strictKeywordMatching: false,
        considerSynonyms: true,
        penalizeIncorrectInfo: false
      }
    },
    {
      id: 'standard',
      name: 'Standard Grading',
      description: 'Balanced approach to evaluation',
      rules: {
        ignoreHandwriting: true,
        ignoreSpelling: false,
        allowPartialCredit: true,
        strictKeywordMatching: false,
        considerSynonyms: true,
        penalizeIncorrectInfo: true
      }
    },
    {
      id: 'strict',
      name: 'Strict Grading',
      description: 'Precise evaluation with high standards',
      rules: {
        ignoreHandwriting: false,
        ignoreSpelling: false,
        allowPartialCredit: false,
        strictKeywordMatching: true,
        considerSynonyms: false,
        penalizeIncorrectInfo: true
      }
    }
  ]);

  const handleGlobalRuleChange = (rule, value) => {
    setGlobalRules(prev => ({
      ...prev,
      [rule]: value
    }));
  };

  const applyPresetRubric = (preset) => {
    setGlobalRules(prev => ({
      ...prev,
      ...preset.rules
    }));
  };

  const addQuestionSpecificRubric = () => {
    const newRubric = {
      id: Date.now(),
      questionId: '',
      questionNumber: '',
      rules: {
        customWeight: 1,
        specificInstructions: '',
        keywordEmphasis: [],
        penaltyRules: [],
        bonusRules: []
      }
    };
    setRubrics(prev => [...prev, newRubric]);
  };

  const updateQuestionRubric = (rubricId, field, value) => {
    setRubrics(prev => 
      prev.map(rubric => 
        rubric.id === rubricId 
          ? { ...rubric, [field]: value }
          : rubric
      )
    );
  };

  const updateQuestionRubricRule = (rubricId, rule, value) => {
    setRubrics(prev => 
      prev.map(rubric => 
        rubric.id === rubricId 
          ? { 
              ...rubric, 
              rules: { ...rubric.rules, [rule]: value }
            }
          : rubric
      )
    );
  };

  const removeQuestionRubric = (rubricId) => {
    setRubrics(prev => prev.filter(rubric => rubric.id !== rubricId));
  };

  const addKeywordEmphasis = (rubricId) => {
    setRubrics(prev => 
      prev.map(rubric => 
        rubric.id === rubricId 
          ? { 
              ...rubric, 
              rules: {
                ...rubric.rules,
                keywordEmphasis: [...rubric.rules.keywordEmphasis, { keyword: '', weight: 1 }]
              }
            }
          : rubric
      )
    );
  };

  const updateKeywordEmphasis = (rubricId, index, field, value) => {
    setRubrics(prev => 
      prev.map(rubric => 
        rubric.id === rubricId 
          ? { 
              ...rubric, 
              rules: {
                ...rubric.rules,
                keywordEmphasis: rubric.rules.keywordEmphasis.map((ke, i) => 
                  i === index ? { ...ke, [field]: value } : ke
                )
              }
            }
          : rubric
      )
    );
  };

  const removeKeywordEmphasis = (rubricId, index) => {
    setRubrics(prev => 
      prev.map(rubric => 
        rubric.id === rubricId 
          ? { 
              ...rubric, 
              rules: {
                ...rubric.rules,
                keywordEmphasis: rubric.rules.keywordEmphasis.filter((_, i) => i !== index)
              }
            }
          : rubric
      )
    );
  };

  const addPenaltyRule = (rubricId) => {
    setRubrics(prev => 
      prev.map(rubric => 
        rubric.id === rubricId 
          ? { 
              ...rubric, 
              rules: {
                ...rubric.rules,
                penaltyRules: [...rubric.rules.penaltyRules, { condition: '', penalty: 0 }]
              }
            }
          : rubric
      )
    );
  };

  const updatePenaltyRule = (rubricId, index, field, value) => {
    setRubrics(prev => 
      prev.map(rubric => 
        rubric.id === rubricId 
          ? { 
              ...rubric, 
              rules: {
                ...rubric.rules,
                penaltyRules: rubric.rules.penaltyRules.map((pr, i) => 
                  i === index ? { ...pr, [field]: value } : pr
                )
              }
            }
          : rubric
      )
    );
  };

  const removePenaltyRule = (rubricId, index) => {
    setRubrics(prev => 
      prev.map(rubric => 
        rubric.id === rubricId 
          ? { 
              ...rubric, 
              rules: {
                ...rubric.rules,
                penaltyRules: rubric.rules.penaltyRules.filter((_, i) => i !== index)
              }
            }
          : rubric
      )
    );
  };

  const handleContinue = () => {
    setExamData(prev => ({
      ...prev,
      rubrics,
      globalRules
    }));
    setCurrentPhase('student-upload');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <span className="material-icons text-orange-600 text-2xl">rule</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Rubric Configuration</h2>
            <p className="text-gray-600">Define evaluation rules and instructions for AI grading</p>
          </div>
        </div>
        
        {examData.examName && (
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-orange-800">
              <span className="material-icons text-sm">info</span>
              <span className="font-medium">
                {examData.examName} - Setting up evaluation criteria
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Preset Rubrics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Setup with Presets</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {presetRubrics.map(preset => (
            <div key={preset.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-2">{preset.name}</h4>
              <p className="text-gray-600 text-sm mb-4">{preset.description}</p>
              <button
                onClick={() => applyPresetRubric(preset)}
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Apply Preset
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Global Evaluation Rules */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Global Evaluation Rules</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">Ignore Handwriting Quality</h4>
                <p className="text-sm text-gray-600">Don't penalize for poor handwriting</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={globalRules.ignoreHandwriting}
                  onChange={(e) => handleGlobalRuleChange('ignoreHandwriting', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">Ignore Spelling Errors</h4>
                <p className="text-sm text-gray-600">Focus on content over spelling</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={globalRules.ignoreSpelling}
                  onChange={(e) => handleGlobalRuleChange('ignoreSpelling', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">Allow Partial Credit</h4>
                <p className="text-sm text-gray-600">Award marks for partially correct answers</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={globalRules.allowPartialCredit}
                  onChange={(e) => handleGlobalRuleChange('allowPartialCredit', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">Strict Keyword Matching</h4>
                <p className="text-sm text-gray-600">Require exact keyword matches</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={globalRules.strictKeywordMatching}
                  onChange={(e) => handleGlobalRuleChange('strictKeywordMatching', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">Consider Synonyms</h4>
                <p className="text-sm text-gray-600">Accept synonymous terms and phrases</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={globalRules.considerSynonyms}
                  onChange={(e) => handleGlobalRuleChange('considerSynonyms', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">Penalize Incorrect Information</h4>
                <p className="text-sm text-gray-600">Deduct marks for wrong information</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={globalRules.penalizeIncorrectInfo}
                  onChange={(e) => handleGlobalRuleChange('penalizeIncorrectInfo', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Custom Instructions for AI Evaluator
          </label>
          <textarea
            value={globalRules.customInstructions}
            onChange={(e) => handleGlobalRuleChange('customInstructions', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Add any specific instructions for the AI evaluator (e.g., 'Be lenient with mathematical notation variations', 'Focus on conceptual understanding over exact wording')..."
          />
        </div>
      </div>

      {/* Question-Specific Rubrics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Question-Specific Rubrics</h3>
          <button
            onClick={addQuestionSpecificRubric}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
          >
            <span className="material-icons">add</span>
            Add Question Rubric
          </button>
        </div>

        {rubrics.length > 0 ? (
          <div className="space-y-6">
            {rubrics.map((rubric, index) => (
              <div key={rubric.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-gray-800">Question-Specific Rule #{index + 1}</h4>
                  <button
                    onClick={() => removeQuestionRubric(rubric.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Question</label>
                    <select
                      value={rubric.questionId}
                      onChange={(e) => {
                        const selectedQuestion = examData.questions?.find(q => q.id === parseInt(e.target.value));
                        updateQuestionRubric(rubric.id, 'questionId', parseInt(e.target.value));
                        updateQuestionRubric(rubric.id, 'questionNumber', selectedQuestion?.questionNumber || '');
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select Question</option>
                      {examData.questions?.map(question => (
                        <option key={question.id} value={question.id}>
                          Question {question.questionNumber}: {question.questionText.substring(0, 50)}...
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Custom Weight Multiplier</label>
                    <input
                      type="number"
                      value={rubric.rules.customWeight}
                      onChange={(e) => updateQuestionRubricRule(rubric.id, 'customWeight', parseFloat(e.target.value) || 1)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      min="0.1"
                      max="2"
                      step="0.1"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specific Instructions</label>
                  <textarea
                    value={rubric.rules.specificInstructions}
                    onChange={(e) => updateQuestionRubricRule(rubric.id, 'specificInstructions', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Special instructions for evaluating this specific question..."
                  />
                </div>

                {/* Keyword Emphasis */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">Keyword Emphasis</label>
                    <button
                      onClick={() => addKeywordEmphasis(rubric.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
                    >
                      Add Keyword
                    </button>
                  </div>
                  <div className="space-y-2">
                    {rubric.rules.keywordEmphasis?.map((ke, keIndex) => (
                      <div key={keIndex} className="flex gap-2">
                        <input
                          type="text"
                          value={ke.keyword}
                          onChange={(e) => updateKeywordEmphasis(rubric.id, keIndex, 'keyword', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Important keyword"
                        />
                        <input
                          type="number"
                          value={ke.weight}
                          onChange={(e) => updateKeywordEmphasis(rubric.id, keIndex, 'weight', parseFloat(e.target.value) || 1)}
                          className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Weight"
                          min="0.1"
                          max="3"
                          step="0.1"
                        />
                        <button
                          onClick={() => removeKeywordEmphasis(rubric.id, keIndex)}
                          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors"
                        >
                          <span className="material-icons text-sm">delete</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Penalty Rules */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">Penalty Rules</label>
                    <button
                      onClick={() => addPenaltyRule(rubric.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                    >
                      Add Penalty
                    </button>
                  </div>
                  <div className="space-y-2">
                    {rubric.rules.penaltyRules?.map((pr, prIndex) => (
                      <div key={prIndex} className="flex gap-2">
                        <input
                          type="text"
                          value={pr.condition}
                          onChange={(e) => updatePenaltyRule(rubric.id, prIndex, 'condition', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Penalty condition (e.g., 'if answer contains incorrect formula')"
                        />
                        <input
                          type="number"
                          value={pr.penalty}
                          onChange={(e) => updatePenaltyRule(rubric.id, prIndex, 'penalty', parseInt(e.target.value) || 0)}
                          className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Penalty"
                          min="0"
                        />
                        <button
                          onClick={() => removePenaltyRule(rubric.id, prIndex)}
                          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors"
                        >
                          <span className="material-icons text-sm">delete</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-gray-400 text-2xl">rule</span>
            </div>
            <p className="text-gray-500">No question-specific rubrics added yet.</p>
            <p className="text-gray-400 text-sm">Global rules will apply to all questions.</p>
          </div>
        )}
      </div>

      {/* Rubric Summary */}
      <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
        <h3 className="text-orange-800 text-lg font-medium mb-4">Rubric Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-orange-800 mb-2">Active Global Rules</h4>
            <ul className="text-orange-700 text-sm space-y-1">
              {globalRules.ignoreHandwriting && <li>• Ignoring handwriting quality</li>}
              {globalRules.ignoreSpelling && <li>• Ignoring spelling errors</li>}
              {globalRules.allowPartialCredit && <li>• Allowing partial credit</li>}
              {globalRules.strictKeywordMatching && <li>• Strict keyword matching enabled</li>}
              {globalRules.considerSynonyms && <li>• Considering synonyms</li>}
              {globalRules.penalizeIncorrectInfo && <li>• Penalizing incorrect information</li>}
              {!globalRules.ignoreHandwriting && !globalRules.ignoreSpelling && !globalRules.allowPartialCredit && 
               !globalRules.strictKeywordMatching && !globalRules.considerSynonyms && !globalRules.penalizeIncorrectInfo && 
               <li className="text-orange-500">• No global rules active</li>}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-orange-800 mb-2">Question-Specific Rules</h4>
            <div className="text-orange-700 text-sm">
              {rubrics.length > 0 ? (
                <p>{rubrics.length} question(s) have specific evaluation rules</p>
              ) : (
                <p className="text-orange-500">No question-specific rules defined</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentPhase('answer-key')}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
        >
          <span className="material-icons">arrow_back</span>
          Back to Answer Key
        </button>
        
        <button
          onClick={handleContinue}
          className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 flex items-center gap-2"
        >
          Continue to Student Upload
          <span className="material-icons">arrow_forward</span>
        </button>
      </div>

      {/* Guidelines */}
      <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
        <h3 className="text-orange-800 text-lg font-medium mb-3">Rubric Guidelines</h3>
        <ul className="text-orange-700 text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="material-icons text-orange-500 text-sm mt-0.5">check_circle</span>
            <span>Global rules apply to all questions unless overridden by question-specific rules</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-orange-500 text-sm mt-0.5">check_circle</span>
            <span>Use lenient settings for creative subjects, strict for technical subjects</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-orange-500 text-sm mt-0.5">check_circle</span>
            <span>Question-specific rules allow fine-tuning evaluation for individual questions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-orange-500 text-sm mt-0.5">check_circle</span>
            <span>Custom instructions help AI understand your specific evaluation preferences</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-orange-500 text-sm mt-0.5">check_circle</span>
            <span>Test your rubrics with sample answers before final deployment</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RubricConfiguration;