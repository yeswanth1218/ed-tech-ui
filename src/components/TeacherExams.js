import React, { useState, useEffect } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherExams = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [pendingExams, setPendingExams] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch exams from API
  useEffect(() => {
    fetch('http://34.93.230.130:9000/api/admin/exams')
      .then(res => res.json())
      .then(data => {
        setPendingExams(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="flex h-screen">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#101418] mb-2">Exams & Evaluations</h1>
              <p className="text-[#5c728a]">Manage exam creation, evaluation, and AI performance monitoring</p>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl border border-[#d4dbe2] mb-6">
              <div className="flex border-b border-[#d4dbe2]">
                <button
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'pending'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-[#5c728a] hover:text-[#101418]'
                  }`}
                  onClick={() => setActiveTab('pending')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>pending_actions</span>
                    Pending Actions ({pendingExams.length})
                  </div>
                </button>
                <button
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'recent'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-[#5c728a] hover:text-[#101418]'
                  }`}
                  onClick={() => setActiveTab('recent')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>history</span>
                    Recent Exams
                  </div>
                </button>
                <button
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'analytics'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-[#5c728a] hover:text-[#101418]'
                  }`}
                  onClick={() => setActiveTab('analytics')}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons" style={{fontSize: '20px'}}>analytics</span>
                    AI Performance
                  </div>
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'pending' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-[#101418]">Exams Requiring Action</h2>
                    </div>
                    {loading ? (
                      <div className="text-gray-600">Loading...</div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pendingExams.map(exam => (
                          <div key={exam.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{exam.name}</h2>
                            <p className="text-gray-600 mb-2">ID: {exam.id}</p>
                            <p className="text-gray-600 mb-2">Status: {exam.status === 1 ? 'Active' : 'Inactive'}</p>
                            <p className="text-gray-500 text-sm">Created At: {new Date(exam.createdAt).toLocaleString()}</p>
                            <p className="text-gray-500 text-sm">Updated At: {new Date(exam.updatedAt).toLocaleString()}</p>
                            <button
                              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                              onClick={() => alert(`Take action for exam: ${exam.name}`)}
                            >
                              Take Action
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* You can keep or remove the recent/analytics sections as needed */}
                {activeTab === 'recent' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-[#101418]">Recently Completed Exams</h2>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Export Results
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-[#101418]">AI Evaluation Performance</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6 border border-[#d4dbe2]">
                        <h3 className="font-semibold text-[#101418] mb-4">Accuracy Trends</h3>
                        <div className="h-48 flex items-center justify-center text-[#5c728a]">
                          [Chart: AI Accuracy over time]
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border border-[#d4dbe2]">
                        <h3 className="font-semibold text-[#101418] mb-4">Evaluation Speed</h3>
                        <div className="h-48 flex items-center justify-center text-[#5c728a]">
                          [Chart: Time per evaluation]
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                      <h3 className="font-semibold text-[#101418] mb-4">Latest Sanity Test Results</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-[#101418]">Mathematics - Calculus Test</span>
                          <span className="text-green-600 font-medium">98.5% Accuracy</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-[#101418]">Algebra - Problem Solving</span>
                          <span className="text-green-600 font-medium">96.2% Accuracy</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                          <span className="text-[#101418]">Statistics - Data Analysis</span>
                          <span className="text-yellow-600 font-medium">89.1% Accuracy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherExams;