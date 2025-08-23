import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherAnalytics = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [timeRange, setTimeRange] = useState('month');

  const overviewMetrics = [
    { label: 'Overall Class Performance', value: '78.5%', trend: '+5.2%', icon: 'trending_up', color: 'green' },
    { label: 'At-Risk Students', value: '12', trend: '-3', icon: 'warning', color: 'orange' },
    { label: 'Top Performers', value: '28', trend: '+7', icon: 'star', color: 'blue' },
    { label: 'Engagement Score', value: '8.4/10', trend: '+0.6', icon: 'psychology', color: 'purple' }
  ];

  const classPerformance = [
    { class: '12-A', students: 45, avgScore: 82.3, improvement: '+6.2%', engagement: 8.7, atRisk: 3 },
    { class: '11-B', students: 38, avgScore: 76.8, improvement: '+3.1%', engagement: 7.9, atRisk: 5 },
    { class: '11-A', students: 42, avgScore: 79.1, improvement: '+4.8%', engagement: 8.2, atRisk: 4 },
    { class: '12-C', students: 40, avgScore: 74.5, improvement: '+2.3%', engagement: 7.6, atRisk: 6 }
  ];

  const atRiskStudents = [
    {
      id: 1,
      name: 'Alex Johnson',
      class: '12-A',
      currentGrade: 'D+',
      trend: 'declining',
      lastScore: 45,
      attendance: 78,
      riskFactors: ['Low attendance', 'Declining scores', 'Missing assignments'],
      recommendations: ['Schedule one-on-one session', 'Contact parents', 'Provide additional resources']
    },
    {
      id: 2,
      name: 'Sarah Chen',
      class: '11-B',
      currentGrade: 'C-',
      trend: 'stable_low',
      lastScore: 58,
      attendance: 85,
      riskFactors: ['Consistent low performance', 'Lack of participation'],
      recommendations: ['Peer tutoring program', 'Alternative learning materials', 'Break down complex topics']
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      class: '11-A',
      currentGrade: 'D',
      trend: 'declining',
      lastScore: 42,
      attendance: 72,
      riskFactors: ['Poor attendance', 'Not submitting homework', 'Low test scores'],
      recommendations: ['Attendance intervention', 'Study skills workshop', 'Motivational counseling']
    }
  ];

  const topPerformers = [
    {
      id: 1,
      name: 'Emma Thompson',
      class: '12-A',
      currentGrade: 'A+',
      lastScore: 96,
      consistency: 94,
      strengths: ['Problem solving', 'Analytical thinking', 'Leadership'],
      opportunities: ['Advanced placement', 'Peer mentoring', 'Competition participation']
    },
    {
      id: 2,
      name: 'David Kim',
      class: '11-B',
      currentGrade: 'A',
      lastScore: 92,
      consistency: 89,
      strengths: ['Quick learning', 'Creative solutions', 'Collaboration'],
      opportunities: ['Research projects', 'Teaching assistant role', 'STEM competitions']
    }
  ];

  const aiInsights = [
    {
      type: 'performance_pattern',
      title: 'Declining Performance Pattern Detected',
      description: 'Students in 12-A show 15% performance drop in algebra topics compared to geometry.',
      severity: 'medium',
      affectedStudents: 12,
      recommendation: 'Consider reviewing algebra fundamentals and providing additional practice materials.',
      action: 'Schedule remedial session'
    },
    {
      type: 'engagement_insight',
      title: 'Low Engagement in Afternoon Classes',
      description: 'Engagement scores drop by 23% in classes scheduled after 2 PM.',
      severity: 'low',
      affectedStudents: 28,
      recommendation: 'Incorporate more interactive activities in afternoon sessions.',
      action: 'Adjust teaching methods'
    },
    {
      type: 'learning_gap',
      title: 'Conceptual Gap in Calculus Prerequisites',
      description: '68% of students struggle with limit concepts, affecting calculus performance.',
      severity: 'high',
      affectedStudents: 31,
      recommendation: 'Dedicate 2-3 sessions to reinforce limit concepts before advancing.',
      action: 'Create intervention plan'
    }
  ];

  const learningTrends = [
    { topic: 'Algebra', mastery: 85, difficulty: 'Medium', timeSpent: '12 hrs', improvement: '+8%' },
    { topic: 'Geometry', mastery: 92, difficulty: 'Low', timeSpent: '8 hrs', improvement: '+12%' },
    { topic: 'Calculus', mastery: 68, difficulty: 'High', timeSpent: '18 hrs', improvement: '+3%' },
    { topic: 'Statistics', mastery: 76, difficulty: 'Medium', timeSpent: '10 hrs', improvement: '+6%' },
    { topic: 'Trigonometry', mastery: 81, difficulty: 'Medium', timeSpent: '14 hrs', improvement: '+9%' }
  ];

  const getMetricColor = (color) => {
    switch (color) {
      case 'green': return 'text-green-600 bg-green-50';
      case 'orange': return 'text-orange-600 bg-orange-50';
      case 'blue': return 'text-blue-600 bg-blue-50';
      case 'purple': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-orange-200 bg-orange-50';
      case 'low': return 'border-yellow-200 bg-yellow-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'declining': return { icon: 'trending_down', color: 'text-red-600' };
      case 'improving': return { icon: 'trending_up', color: 'text-green-600' };
      case 'stable_low': return { icon: 'trending_flat', color: 'text-orange-600' };
      default: return { icon: 'trending_flat', color: 'text-gray-600' };
    }
  };

  const getMasteryColor = (mastery) => {
    if (mastery >= 85) return 'text-green-600 bg-green-100';
    if (mastery >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="flex h-screen">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto" style={{backgroundColor: '#f0f2f5'}}>
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#101418] mb-2">AI Analytics Dashboard</h1>
              <p className="text-[#5c728a]">Comprehensive insights and recommendations powered by artificial intelligence</p>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-4 mb-6">
              <select 
                className="px-4 py-2 border border-[#d4dbe2] rounded-lg text-sm"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="all">All Classes</option>
                <option value="12-A">Class 12-A</option>
                <option value="11-B">Class 11-B</option>
                <option value="11-A">Class 11-A</option>
                <option value="12-C">Class 12-C</option>
              </select>
              <select 
                className="px-4 py-2 border border-[#d4dbe2] rounded-lg text-sm"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="quarter">Last Quarter</option>
                <option value="year">Last Year</option>
              </select>
            </div>

            {/* Overview Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {overviewMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-[#d4dbe2] hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getMetricColor(metric.color)}`}>
                      <span className="material-icons" style={{fontSize: '20px'}}>{metric.icon}</span>
                    </div>
                    <span className={`text-xs font-medium ${
                      metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.trend}
                    </span>
                  </div>
                  <p className="text-[#5c728a] text-sm font-medium">{metric.label}</p>
                  <p className="text-2xl font-bold text-[#101418]">{metric.value}</p>
                </div>
              ))}
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl border border-[#d4dbe2] mb-6">
              <div className="flex border-b border-[#d4dbe2] overflow-x-auto">
                {[
                  { id: 'overview', label: 'Overview', icon: 'dashboard' },
                  { id: 'students', label: 'Student Analysis', icon: 'person_search' },
                  { id: 'performance', label: 'Performance Trends', icon: 'trending_up' },
                  { id: 'insights', label: 'AI Insights', icon: 'psychology' },
                  { id: 'recommendations', label: 'Action Plans', icon: 'lightbulb' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                      selectedView === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                        : 'text-[#5c728a] hover:text-[#101418]'
                    }`}
                    onClick={() => setSelectedView(tab.id)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-icons" style={{fontSize: '20px'}}>{tab.icon}</span>
                      {tab.label}
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-6">
                {selectedView === 'overview' && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-[#101418]">Class Performance Overview</h2>
                    <div className="grid gap-4">
                      {classPerformance.map((classData, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4 border border-[#d4dbe2]">
                          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                            <div>
                              <p className="font-semibold text-[#101418]">{classData.class}</p>
                              <p className="text-sm text-[#5c728a]">{classData.students} students</p>
                            </div>
                            <div>
                              <p className="text-sm text-[#5c728a]">Avg Score</p>
                              <p className="font-semibold text-[#101418]">{classData.avgScore}%</p>
                            </div>
                            <div>
                              <p className="text-sm text-[#5c728a]">Improvement</p>
                              <p className="font-semibold text-green-600">{classData.improvement}</p>
                            </div>
                            <div>
                              <p className="text-sm text-[#5c728a]">Engagement</p>
                              <p className="font-semibold text-[#101418]">{classData.engagement}/10</p>
                            </div>
                            <div>
                              <p className="text-sm text-[#5c728a]">At Risk</p>
                              <p className="font-semibold text-orange-600">{classData.atRisk}</p>
                            </div>
                            <div>
                              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedView === 'students' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-[#101418]">Student Analysis</h2>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-200">
                          At-Risk Students ({atRiskStudents.length})
                        </button>
                        <button className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-medium border border-green-200">
                          Top Performers ({topPerformers.length})
                        </button>
                      </div>
                    </div>
                    
                    {/* At-Risk Students */}
                    <div>
                      <h3 className="font-semibold text-[#101418] mb-4">Students Requiring Attention</h3>
                      <div className="space-y-4">
                        {atRiskStudents.map((student) => {
                          const trendInfo = getTrendIcon(student.trend);
                          return (
                            <div key={student.id} className="bg-white rounded-xl p-6 border border-red-200">
                              <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <span className="material-icons text-red-600">person</span>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-[#101418]">{student.name}</h4>
                                    <p className="text-sm text-[#5c728a]">{student.class} • Grade: {student.currentGrade}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className={`material-icons ${trendInfo.color}`}>{trendInfo.icon}</span>
                                  <span className="text-sm font-medium text-[#101418]">{student.lastScore}%</span>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm font-medium text-[#101418] mb-2">Risk Factors:</p>
                                  <ul className="space-y-1">
                                    {student.riskFactors.map((factor, idx) => (
                                      <li key={idx} className="text-sm text-red-600 flex items-center gap-2">
                                        <span className="material-icons" style={{fontSize: '16px'}}>warning</span>
                                        {factor}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-[#101418] mb-2">AI Recommendations:</p>
                                  <ul className="space-y-1">
                                    {student.recommendations.map((rec, idx) => (
                                      <li key={idx} className="text-sm text-green-600 flex items-center gap-2">
                                        <span className="material-icons" style={{fontSize: '16px'}}>lightbulb</span>
                                        {rec}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="mt-4 flex gap-2">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                  Create Action Plan
                                </button>
                                <button className="px-4 py-2 bg-gray-100 text-[#101418] rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                                  Contact Parent
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {selectedView === 'performance' && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-[#101418]">Learning Trends & Topic Mastery</h2>
                    <div className="space-y-4">
                      {learningTrends.map((trend, index) => (
                        <div key={index} className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
                            <div>
                              <p className="font-semibold text-[#101418]">{trend.topic}</p>
                              <p className="text-sm text-[#5c728a]">Difficulty: {trend.difficulty}</p>
                            </div>
                            <div>
                              <p className="text-sm text-[#5c728a]">Mastery Level</p>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full ${getMasteryColor(trend.mastery).includes('green') ? 'bg-green-500' : 
                                      getMasteryColor(trend.mastery).includes('yellow') ? 'bg-yellow-500' : 'bg-red-500'}`}
                                    style={{width: `${trend.mastery}%`}}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium">{trend.mastery}%</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-[#5c728a]">Time Spent</p>
                              <p className="font-semibold text-[#101418]">{trend.timeSpent}</p>
                            </div>
                            <div>
                              <p className="text-sm text-[#5c728a]">Improvement</p>
                              <p className="font-semibold text-green-600">{trend.improvement}</p>
                            </div>
                            <div>
                              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                Analyze
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedView === 'insights' && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-[#101418]">AI-Generated Insights</h2>
                    <div className="space-y-4">
                      {aiInsights.map((insight, index) => (
                        <div key={index} className={`rounded-xl p-6 border-2 ${getSeverityColor(insight.severity)}`}>
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                insight.severity === 'high' ? 'bg-red-100 text-red-600' :
                                insight.severity === 'medium' ? 'bg-orange-100 text-orange-600' :
                                'bg-yellow-100 text-yellow-600'
                              }`}>
                                <span className="material-icons">psychology</span>
                              </div>
                              <div>
                                <h3 className="font-semibold text-[#101418]">{insight.title}</h3>
                                <p className="text-sm text-[#5c728a]">{insight.affectedStudents} students affected</p>
                              </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              insight.severity === 'high' ? 'bg-red-100 text-red-600' :
                              insight.severity === 'medium' ? 'bg-orange-100 text-orange-600' :
                              'bg-yellow-100 text-yellow-600'
                            }`}>
                              {insight.severity.toUpperCase()} PRIORITY
                            </span>
                          </div>
                          
                          <p className="text-[#101418] mb-4">{insight.description}</p>
                          
                          <div className="bg-white rounded-lg p-4 mb-4">
                            <p className="text-sm font-medium text-[#101418] mb-2">AI Recommendation:</p>
                            <p className="text-sm text-[#5c728a]">{insight.recommendation}</p>
                          </div>
                          
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            {insight.action}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedView === 'recommendations' && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-[#101418]">Personalized Action Plans</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                        <h3 className="font-semibold text-[#101418] mb-4">Immediate Actions (Next 7 Days)</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                            <span className="material-icons text-red-600">priority_high</span>
                            <div className="flex-1">
                              <p className="font-medium text-[#101418]">Schedule intervention for Alex Johnson</p>
                              <p className="text-sm text-[#5c728a]">Due: Tomorrow</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                            <span className="material-icons text-orange-600">schedule</span>
                            <div className="flex-1">
                              <p className="font-medium text-[#101418]">Review calculus teaching approach</p>
                              <p className="text-sm text-[#5c728a]">Due: This week</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <span className="material-icons text-blue-600">groups</span>
                            <div className="flex-1">
                              <p className="font-medium text-[#101418]">Organize peer tutoring sessions</p>
                              <p className="text-sm text-[#5c728a]">Due: Friday</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                        <h3 className="font-semibold text-[#101418] mb-4">Long-term Strategies (Next 30 Days)</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                            <span className="material-icons text-green-600">trending_up</span>
                            <div className="flex-1">
                              <p className="font-medium text-[#101418]">Implement differentiated learning</p>
                              <p className="text-sm text-[#5c728a]">For advanced students</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                            <span className="material-icons text-purple-600">psychology</span>
                            <div className="flex-1">
                              <p className="font-medium text-[#101418]">Develop growth mindset activities</p>
                              <p className="text-sm text-[#5c728a]">Boost student confidence</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                            <span className="material-icons text-indigo-600">assessment</span>
                            <div className="flex-1">
                              <p className="font-medium text-[#101418]">Create formative assessment plan</p>
                              <p className="text-sm text-[#5c728a]">Regular progress monitoring</p>
                            </div>
                          </div>
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

export default TeacherAnalytics;