import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area } from 'recharts';
import StudentSidebar from './StudentSidebar';
import Header from './Header';

const StudentAnalytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('semester');
  
  const learningPatterns = [
    { day: 'Mon', studyHours: 3.5, efficiency: 85, focus: 78 },
    { day: 'Tue', studyHours: 4.2, efficiency: 88, focus: 82 },
    { day: 'Wed', studyHours: 3.8, efficiency: 82, focus: 75 },
    { day: 'Thu', studyHours: 4.5, efficiency: 90, focus: 85 },
    { day: 'Fri', studyHours: 3.2, efficiency: 75, focus: 70 },
    { day: 'Sat', studyHours: 5.1, efficiency: 92, focus: 88 },
    { day: 'Sun', studyHours: 4.8, efficiency: 89, focus: 86 }
  ];

  const skillsRadar = [
    { skill: 'Problem Solving', current: 88, potential: 95 },
    { skill: 'Critical Thinking', current: 85, potential: 92 },
    { skill: 'Memory Retention', current: 82, potential: 88 },
    { skill: 'Speed & Accuracy', current: 90, potential: 96 },
    { skill: 'Conceptual Understanding', current: 87, potential: 94 },
    { skill: 'Application Skills', current: 84, potential: 91 }
  ];

  const progressTrend = [
    { month: 'Sep', score: 78, prediction: 82 },
    { month: 'Oct', score: 82, prediction: 85 },
    { month: 'Nov', score: 85, prediction: 87 },
    { month: 'Dec', score: 87, prediction: 89 },
    { month: 'Jan', score: 88, prediction: 91 },
    { month: 'Feb', score: null, prediction: 92 },
    { month: 'Mar', score: null, prediction: 94 }
  ];

  const aiInsights = [
    {
      type: 'strength',
      title: 'Mathematical Reasoning',
      description: 'You excel in logical problem-solving and mathematical concepts. Your pattern recognition skills are in the top 10% of your class.',
      confidence: 94,
      icon: 'psychology'
    },
    {
      type: 'improvement',
      title: 'Study Schedule Optimization',
      description: 'AI analysis suggests studying Physics on Thursday evenings when your focus levels are highest (85% efficiency).',
      confidence: 87,
      icon: 'schedule'
    },
    {
      type: 'prediction',
      title: 'Performance Forecast',
      description: 'Based on current trends, you are likely to achieve a 92% average by the end of this semester.',
      confidence: 91,
      icon: 'trending_up'
    },
    {
      type: 'recommendation',
      title: 'Learning Style Match',
      description: 'Your learning pattern indicates you are a visual-kinesthetic learner. Consider using more diagrams and hands-on activities.',
      confidence: 89,
      icon: 'lightbulb'
    }
  ];

  const getInsightColor = (type) => {
    switch (type) {
      case 'strength': return 'bg-green-50 border-green-200 text-green-800';
      case 'improvement': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'prediction': return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'recommendation': return 'bg-orange-50 border-orange-200 text-orange-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getInsightIconColor = (type) => {
    switch (type) {
      case 'strength': return 'text-green-600';
      case 'improvement': return 'text-blue-600';
      case 'prediction': return 'text-purple-600';
      case 'recommendation': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="Student Portal" />
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <StudentSidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">AI Analytics</p>
                <p className="text-[#5c728a] text-base font-normal leading-normal">Personalized insights powered by artificial intelligence to optimize your learning</p>
              </div>
              <div className="flex items-center gap-3">
                <select 
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="bg-white border border-[#d4dbe2] rounded-lg px-4 py-2 text-sm"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="semester">This Semester</option>
                  <option value="year">This Year</option>
                </select>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <span className="material-icons" style={{fontSize: '20px'}}>refresh</span>
                  Update Analysis
                </button>
              </div>
            </div>

            {/* AI Insights Cards */}
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
              {aiInsights.map((insight, index) => (
                <div key={index} className={`rounded-xl border p-6 ${getInsightColor(insight.type)}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getInsightIconColor(insight.type)}`} style={{backgroundColor: `${getInsightIconColor(insight.type).replace('text-', 'bg-').replace('-600', '-100')}`}}>
                      <span className="material-icons" style={{fontSize: '24px'}}>{insight.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">{insight.title}</h3>
                        <span className="text-xs font-medium px-2 py-1 bg-white rounded-full">
                          {insight.confidence}% confidence
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Patterns Analysis */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] bg-white p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Weekly Learning Patterns</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={learningPatterns}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="studyHours" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Study Hours" />
                      <Area type="monotone" dataKey="efficiency" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Efficiency %" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] bg-white p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Skills Assessment Radar</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={skillsRadar}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="skill" tick={{fontSize: 10}} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{fontSize: 10}} />
                      <Radar name="Current Level" dataKey="current" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                      <Radar name="Potential" dataKey="potential" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Performance Prediction */}
            <div className="flex flex-col gap-2 rounded-xl border border-[#d4dbe2] bg-white p-6 m-4">
              <p className="text-[#101418] text-base font-medium leading-normal">AI Performance Prediction</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[70, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} name="Actual Score" connectNulls={false} />
                    <Line type="monotone" dataKey="prediction" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="AI Prediction" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Personalized Recommendations */}
            <div className="flex justify-between items-center px-4 pb-3 pt-5">
              <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Personalized Study Plan</h2>
            </div>
            <div className="px-4 py-3">
              <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="material-icons text-blue-600" style={{fontSize: '32px'}}>access_time</span>
                    </div>
                    <h3 className="font-medium text-[#101418] mb-2">Optimal Study Time</h3>
                    <p className="text-lg font-bold text-blue-600">4:00 PM - 6:00 PM</p>
                    <p className="text-sm text-[#5c728a]">Peak focus period</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="material-icons text-green-600" style={{fontSize: '32px'}}>psychology</span>
                    </div>
                    <h3 className="font-medium text-[#101418] mb-2">Learning Style</h3>
                    <p className="text-lg font-bold text-green-600">Visual-Kinesthetic</p>
                    <p className="text-sm text-[#5c728a]">Use diagrams & practice</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="material-icons text-purple-600" style={{fontSize: '32px'}}>speed</span>
                    </div>
                    <h3 className="font-medium text-[#101418] mb-2">Study Intensity</h3>
                    <p className="text-lg font-bold text-purple-600">25 min sessions</p>
                    <p className="text-sm text-[#5c728a]">With 5 min breaks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 p-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Generate Study Schedule
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Take Learning Style Quiz
              </button>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                View Detailed Analytics
              </button>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Export AI Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAnalytics;