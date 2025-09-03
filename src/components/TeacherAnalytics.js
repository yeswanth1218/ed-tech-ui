import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherAnalytics = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [timeRange, setTimeRange] = useState('month');
  const [expandedActions, setExpandedActions] = useState({});
  const [selectedActionDetails, setSelectedActionDetails] = useState(null);
  const [activeJustificationTab, setActiveJustificationTab] = useState('overview');
  const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);

  const overviewMetrics = [
    { label: 'Overall Class Performance', value: '78.5%', trend: '+5.2%', icon: 'trending_up', color: 'green' },
    { label: 'At-Risk Students', value: '12', trend: '-3', icon: 'warning', color: 'orange' },
    { label: 'Top Performers', value: '28', trend: '+7', icon: 'star', color: 'blue' },
    { label: 'Engagement Score', value: '8.4/10', trend: '+0.6', icon: 'psychology', color: 'purple' }
  ];

  const classPerformance = [
    { class: '12', students: 45, avgScore: 82.3, improvement: '+6.2%', engagement: 8.7, atRisk: 3 },
    { class: '11', students: 38, avgScore: 76.8, improvement: '+3.1%', engagement: 7.9, atRisk: 5 },
    { class: '10', students: 40, avgScore: 74.5, improvement: '+2.3%', engagement: 7.6, atRisk: 6 }
  ];

  const atRiskStudents = [
    {
      id: 1,
      name: 'Arjun Sharma',
      class: '12',
      currentGrade: 'D+',
      trend: 'declining',
      lastScore: 45,
      attendance: 78,
      riskFactors: ['Low attendance', 'Declining scores', 'Missing assignments'],
      recommendations: ['Schedule one-on-one session', 'Contact parents', 'Provide additional resources']
    },
    {
      id: 2,
      name: 'Priya Patel',
      class: '11',
      currentGrade: 'C-',
      trend: 'stable_low',
      lastScore: 58,
      attendance: 85,
      riskFactors: ['Consistent low performance', 'Lack of participation'],
      recommendations: ['Peer tutoring program', 'Alternative learning materials', 'Break down complex topics']
    },
    {
      id: 3,
      name: 'Vikram Singh',
      class: '11',
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
      name: 'Ananya Gupta',
      class: '12',
      currentGrade: 'A+',
      lastScore: 96,
      consistency: 94,
      strengths: ['Problem solving', 'Analytical thinking', 'Leadership'],
      opportunities: ['Advanced placement', 'Peer mentoring', 'Competition participation']
    },
    {
      id: 2,
      name: 'Rohan Mehta',
      class: '11',
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

  const classHealthSnapshot = {
    overall: { status: 'needs_attention', score: 72, trend: 'declining' },
    engagement: { level: 'moderate', percentage: 68, recentChange: '-8%' },
    comprehension: { rate: 'below_target', percentage: 65, gapAreas: ['Abstract concepts', 'Problem application'] },
    participation: { active: 23, passive: 15, disengaged: 7 }
  };

  const priorityActions = [
    {
      id: 1,
      priority: 'urgent',
      title: 'Address Conceptual Gaps in Algebra',
      impact: 'high',
      affectedStudents: 12,
      timeToImplement: '2-3 days',
      description: '40% of Class 12 students are struggling with algebraic foundations, creating barriers for calculus progression.',
      specificIssues: [
        'Factoring polynomials (8 students failing)',
        'Equation manipulation (6 students below 60%)',
        'Graph interpretation (10 students confused)'
      ],
      recommendedChanges: {
        teachingMethod: 'Switch from lecture-heavy to interactive problem-solving sessions',
        pacing: 'Slow down by 25% and add more practice time',
        grouping: 'Create mixed-ability pairs for peer teaching',
        resources: 'Use visual algebra tiles and graphing software'
      },
      actionSteps: [
        'Start each class with 10-min algebra warm-up',
        'Implement think-pair-share for problem solving',
        'Create algebra reference sheets for students',
        'Schedule 2 remedial sessions this week'
      ],
      expectedOutcome: 'Improve algebra scores by 20-25% within 2 weeks',
       successMetrics: ['Quiz scores above 70%', 'Increased participation', 'Reduced help requests'],
       aiJustification: {
         dataAnalysis: 'Analysis of last 4 weeks of quiz scores, homework submissions, and classroom observations reveals consistent patterns of algebraic weakness.',
         performanceMetrics: [
           'Quiz average dropped from 78% to 63% over 3 weeks',
           '12 out of 30 students scored below 50% on polynomial factoring',
           'Help desk requests increased by 40% for algebra-related topics',
           'Classroom observation shows 60% confusion during algebraic manipulation'
         ],
         studentFeedback: [
           '"I understand the steps but get lost halfway through" - Common student response',
           'Exit ticket analysis shows 70% struggle with multi-step problems',
           'Peer tutoring requests specifically mention algebra foundations'
         ],
         teachingObservations: [
           'Students can follow along but cannot replicate independently',
           'Abstract algebraic concepts need more concrete visual representation',
           'Current pace too fast for foundational skill building',
           'Students memorize procedures without understanding underlying concepts'
         ],
         researchBasis: [
           'Cognitive Load Theory suggests breaking complex problems into smaller steps',
           'Visual-spatial learning research supports graphical algebra approaches',
           'Peer learning studies show 25% improvement in conceptual understanding',
           'Formative assessment research indicates daily check-ins improve retention by 30%'
         ],
         riskAssessment: 'Without intervention, 40% of students will struggle with calculus prerequisites, affecting college readiness and STEM pathway access.'
       }
    },
    {
       id: 2,
       priority: 'important',
       title: 'Strengthen Calculus Prerequisites Understanding',
       impact: 'high',
       affectedStudents: 18,
       timeToImplement: '2-3 weeks',
       description: '60% of Class 12 students lack solid foundation in limits and derivatives, affecting calculus comprehension.',
       specificIssues: [
         'Limit concept confusion (14 students scoring below 50%)',
         'Derivative rules memorized but not understood (12 students)',
         'Function behavior analysis weak (16 students struggling)'
       ],
       recommendedChanges: {
         teachingMethod: 'Use graphical approach before algebraic manipulation',
         pacing: 'Dedicate extra week to foundational concepts',
         resources: 'Implement dynamic graphing tools and visual aids',
         assessment: 'Add conceptual understanding checks before procedural practice'
       },
       actionSteps: [
         'Start with intuitive limit explanations using graphs',
         'Use physical analogies for derivative concepts',
         'Create step-by-step derivative rule derivations',
         'Implement daily concept check quizzes'
       ],
       expectedOutcome: 'Improve calculus readiness by 30-35% before advanced topics',
       successMetrics: ['Limit quiz scores above 75%', 'Derivative application success', 'Reduced conceptual questions'],
       aiJustification: {
         dataAnalysis: 'Comprehensive analysis of pre-calculus assessment results and calculus readiness indicators shows critical gaps in foundational understanding.',
         performanceMetrics: [
           'Pre-calculus final exam: 60% scored below 70% on limits section',
           'Diagnostic test reveals 14 students cannot explain limit concept intuitively',
           'Derivative application problems: 67% failure rate on conceptual questions',
           'Function analysis tasks show 53% cannot connect graphical and algebraic representations'
         ],
         studentFeedback: [
           '"Limits make no sense to me" - 12 students in feedback survey',
           'Students report memorizing derivative rules without understanding',
           'Confusion between rate of change and slope concepts widespread'
         ],
         teachingObservations: [
           'Students can compute derivatives but cannot explain what they represent',
           'Graphical intuition missing - students rely solely on algebraic manipulation',
           'Conceptual questions reveal surface-level understanding',
           'Students struggle to connect limits to real-world applications'
         ],
         researchBasis: [
           'Mathematics education research emphasizes conceptual before procedural learning',
           'Graphical approach to calculus shows 40% better conceptual retention',
           'Dynamic visualization tools improve limit understanding by 35%',
           'Conceptual assessment before procedural practice reduces misconceptions'
         ],
         riskAssessment: 'Students entering calculus without solid limit/derivative foundations have 70% higher failure rates and struggle throughout advanced mathematics courses.'
       }
     },
     {
       id: 3,
       priority: 'moderate',
       title: 'Address Statistics Interpretation Weaknesses',
       impact: 'medium',
       affectedStudents: 15,
       timeToImplement: '1-2 weeks',
       description: 'Class 10 students can calculate statistics but struggle with data interpretation and real-world application.',
       specificIssues: [
         'Mean vs median confusion in skewed data (11 students)',
         'Correlation vs causation misunderstanding (13 students)',
         'Graph misinterpretation leading to wrong conclusions (9 students)'
       ],
       recommendedChanges: {
         teachingMethod: 'Emphasize interpretation before calculation',
         content: 'Use real datasets from student interests (sports, social media)',
         assessment: 'Focus on explanation and reasoning over computation',
         technology: 'Integrate statistical software for data exploration'
       },
       actionSteps: [
         'Start each lesson with data interpretation scenarios',
         'Create "statistics detective" problem-solving activities',
         'Use current events data for analysis practice',
         'Implement peer explanation sessions for concepts'
       ],
       expectedOutcome: 'Improve statistical reasoning by 25-30%',
       successMetrics: ['Correct interpretation in word problems', 'Better graph analysis', 'Improved reasoning explanations'],
       aiJustification: {
         dataAnalysis: 'Statistical reasoning assessment and real-world problem analysis reveals significant gaps between computational skills and interpretive understanding.',
         performanceMetrics: [
           'Statistics unit test: 85% can calculate mean/median, only 45% interpret correctly',
           'Data interpretation tasks: 73% make incorrect conclusions from correct calculations',
           'Graph analysis problems: 60% misread trends and correlations',
           'Word problems involving statistics: 68% failure rate on explanation components'
         ],
         studentFeedback: [
           '"I can do the math but don\'t know what it means" - Common student response',
           'Students express confusion about when to use mean vs median',
           'Correlation vs causation concept consistently misunderstood'
         ],
         teachingObservations: [
           'Students focus on calculation procedures, skip interpretation steps',
           'Real-world context gets lost in computational focus',
           'Students cannot explain their statistical conclusions',
           'Graphical literacy needs significant improvement'
         ],
         researchBasis: [
           'Statistical education research emphasizes interpretation over computation',
           'Real-world data engagement improves statistical reasoning by 45%',
           'Explanation-focused assessment develops deeper understanding',
           'Context-rich problems improve transfer to real-world situations'
         ],
         riskAssessment: 'Poor statistical reasoning skills limit students\' ability to evaluate information critically, affecting decision-making in academic and personal contexts.'
       }
     }
  ];

  const studentSpotlights = [
     {
       name: 'Arjun Sharma',
       class: '12',
       status: 'needs_support',
       currentGrade: 'D+',
       recentTrend: 'declining',
       keyStrengths: ['Shows work clearly', 'Attempts all problems', 'Consistent submission'],
       mainChallenges: ['Algebraic manipulation errors', 'Multi-step problem solving', 'Conceptual understanding gaps'],
       analysis: 'Consistent effort but struggling with algebraic fundamentals and multi-step problem solving',
        analysisSource: 'Based on past 8 examination\'s answer booklet analysis',
       commonMistakes: ['Sign errors in equations', 'Incomplete factoring', 'Skips verification steps'],
       recommendedApproach: {
         instruction: 'Focus on step-by-step verification methods',
         support: 'Provide worked examples with common error highlights',
         assessment: 'Partial credit for process, error analysis exercises',
         practice: 'Daily algebra warm-ups with immediate feedback'
       },
       nextSteps: ['Create error pattern worksheet', 'Schedule remedial algebra sessions', 'Implement peer checking system']
     },
     {
       name: 'Ananya Gupta',
       class: '12',
       status: 'excelling',
       currentGrade: 'A+',
       recentTrend: 'stable_high',
       keyStrengths: ['Elegant solution methods', 'Shows multiple approaches', 'Clear mathematical reasoning'],
       mainChallenges: ['Occasionally rushes through basics', 'Could explore more complex applications'],
       analysis: 'Exceptional mathematical reasoning with advanced problem-solving techniques and clear explanations',
        analysisSource: 'Based on past 8 examination\'s answer booklet analysis',
       commonPatterns: ['Uses advanced techniques appropriately', 'Provides clear explanations', 'Checks answers systematically'],
       recommendedApproach: {
         instruction: 'Provide open-ended investigation problems',
         support: 'Connect to advanced mathematical concepts',
         assessment: 'Research-based projects and proof writing',
         enrichment: 'Mathematical modeling and real-world applications'
       },
       nextSteps: ['Assign advanced problem sets', 'Explore university-level topics', 'Mentor struggling students']
     },
     {
       name: 'Priya Patel',
       class: '11',
       status: 'improving',
       currentGrade: 'B-',
       recentTrend: 'upward',
       keyStrengths: ['Organized work presentation', 'Follows procedures correctly', 'Shows steady improvement'],
       mainChallenges: ['Calculation speed', 'Complex word problem interpretation', 'Confidence in final answers'],
       analysis: 'Steady improvement in problem-solving with better organization and fewer calculation errors',
        analysisSource: 'Based on past 8 examination\'s answer booklet analysis',
       improvementPatterns: ['Fewer arithmetic errors over time', 'Better problem setup', 'More complete solutions'],
       recommendedApproach: {
         instruction: 'Build on procedural strengths with conceptual connections',
         support: 'Provide word problem templates and strategies',
         assessment: 'Process-focused rubrics with growth tracking',
         confidence: 'Highlight improvement patterns and celebrate progress'
       },
       nextSteps: ['Create progress portfolio', 'Practice timed problem sets', 'Develop word problem strategies']
     }
   ];

  // Simple Teaching Toolkit Actions
  const [selectedToolkitAction, setSelectedToolkitAction] = useState(null);
  
  const teachingToolkitActions = [
    {
      id: 1,
      title: 'One-on-One Concept Sessions',
      description: 'Individual sessions to clarify specific concepts',
      icon: 'person',
      color: 'blue',
      whySuggested: 'AI analysis shows 12 students have conceptual gaps in algebra equation setup. They can isolate variables correctly but struggle with translating word problems into equations.',
      suggestedStudents: ['Arjun Sharma', 'Priya Patel', 'Vikram Singh', 'Rahul Kumar', 'Sneha Gupta', 'Amit Patel', 'Kavya Singh', 'Rohan Mehta', 'Anita Sharma', 'Deepak Kumar', 'Pooja Reddy', 'Sanjay Yadav'],
      timeRequired: '15 minutes per student',
      materials: ['Video call setup', 'Practice worksheets', 'Recording tools'],
      steps: [
        'Schedule individual 15-minute sessions',
        'Ask students to solve word problems while explaining their thinking',
        'Identify specific translation errors',
        'Provide targeted feedback and additional practice'
      ]
    },
    {
      id: 2,
      title: '3D Visualization Workshop',
      description: 'Interactive workshop for spatial reasoning skills',
      icon: 'view_in_ar',
      color: 'blue',
      whySuggested: 'Students in Class 11-A and 11-B show strong performance in 2D geometry (78% average) but struggle with 3D spatial problems (45% average). This indicates a visualization gap.',
      suggestedStudents: ['Class 11-A (18 students)', 'Class 11-B (15 students)'],
      timeRequired: '45 minutes',
      materials: ['3D geometric models', 'GeoGebra software', 'Worksheets'],
      steps: [
        'Introduce physical 3D models for hands-on manipulation',
        'Use GeoGebra 3D for digital visualization',
        'Practice with progressive complexity problems',
        'Encourage peer collaboration on 3D challenges'
      ]
    },
    {
      id: 3,
      title: 'Real-World Problem Scenarios',
      description: 'Connect math concepts to practical applications',
      icon: 'public',
      color: 'blue',
      whySuggested: 'Top 15 performers show excellent theoretical knowledge but experience a 30% performance drop on application-based problems. They need better context connection.',
      suggestedStudents: ['Ananya Gupta', 'Rohan Mehta', 'Priya Sharma', 'Vikash Kumar', 'Neha Patel', 'Arjun Singh', 'Kavita Reddy', 'Sanjay Gupta', 'Pooja Kumar', 'Rahul Sharma', 'Sneha Singh', 'Amit Reddy', 'Deepika Patel', 'Rohit Kumar', 'Anita Gupta'],
      timeRequired: '30 minutes',
      materials: ['Industry case studies', 'Career connection materials', 'Problem database'],
      steps: [
        'Present real industry problems',
        'Connect mathematical concepts to career applications',
        'Facilitate group problem-solving sessions',
        'Have students present their solutions'
      ]
    },
    {
      id: 4,
      title: 'Peer Teaching Circles',
      description: 'Students teach concepts to each other',
      icon: 'groups',
      color: 'blue',
      whySuggested: 'Mixed ability groups can benefit from peer learning. Students with strong conceptual understanding can help those with procedural difficulties, while reinforcing their own knowledge.',
      suggestedStudents: ['Mixed groups from all classes'],
      timeRequired: '20 minutes',
      materials: ['Group formation guidelines', 'Teaching prompts', 'Feedback forms'],
      steps: [
        'Form mixed-ability groups of 3-4 students',
        'Assign teaching roles based on individual strengths',
        'Provide structured teaching prompts',
        'Facilitate peer feedback sessions'
      ]
    },
    {
      id: 5,
      title: 'Error Pattern Analysis',
      description: 'Review and correct common mistake patterns',
      icon: 'bug_report',
      color: 'blue',
      whySuggested: 'Analysis reveals recurring procedural errors across multiple students. Targeted practice on these specific error patterns can improve overall class performance.',
      suggestedStudents: ['Students with procedural difficulties'],
      timeRequired: '15 minutes',
      materials: ['Error analysis worksheets', 'Correction templates', 'Practice problems'],
      steps: [
        'Identify common error patterns from recent assessments',
        'Create targeted practice problems',
        'Work through corrections step-by-step',
        'Provide additional practice for reinforcement'
      ]
    },
    {
      id: 6,
      title: 'Confidence Building Sessions',
      description: 'Low-pressure practice with positive reinforcement',
      icon: 'psychology',
      color: 'blue',
      whySuggested: 'Some students show significant performance drops during formal assessments compared to practice sessions, indicating test anxiety or confidence issues.',
      suggestedStudents: ['Students with test anxiety patterns'],
      timeRequired: '25 minutes',
      materials: ['Low-stakes practice tests', 'Relaxation guides', 'Positive feedback templates'],
      steps: [
        'Create a relaxed, supportive environment',
        'Use low-stakes practice problems',
        'Provide immediate positive feedback',
        'Teach confidence-building techniques'
      ]
    }
  ];



  const resourceLibrary = [
    {
      id: 1,
      title: 'Calculus Problem Bank',
      type: 'Worksheet',
      subject: 'Mathematics',
      class: '12',
      downloads: 45,
      rating: 4.8,
      lastUpdated: '2024-02-15',
      tags: ['Differentiation', 'Practice', 'Advanced']
    },
    {
      id: 2,
      title: 'Interactive Algebra Simulator',
      type: 'Digital Tool',
      subject: 'Algebra',
      class: '11',
      downloads: 32,
      rating: 4.6,
      lastUpdated: '2024-02-10',
      tags: ['Interactive', 'Visualization', 'Equations']
    },
    {
      id: 3,
      title: 'Statistics Data Sets Collection',
      type: 'Dataset',
      subject: 'Statistics',
      class: '10',
      downloads: 28,
      rating: 4.7,
      lastUpdated: '2024-02-12',
      tags: ['Real-world', 'Analysis', 'Projects']
    }
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
                <option value="12">Class 12</option>
                <option value="11">Class 11</option>
                <option value="10">Class 10</option>
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
              <div className="flex p-2 overflow-x-auto">
                {[
                  { id: 'overview', label: 'Overview', icon: 'dashboard' },
                  { id: 'students', label: 'Student Analysis', icon: 'person_search' },
                  { id: 'curriculum', label: 'Curriculum Planning', icon: 'book' },
                  { id: 'insights', label: 'AI Insights', icon: 'psychology' },
                  { id: 'recommendations', label: 'Action Plans', icon: 'lightbulb' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-4 py-2 mx-1 font-medium transition-all duration-300 whitespace-nowrap rounded-full ${
                      selectedView === tab.id
                        ? 'text-white bg-blue-600 shadow-lg shadow-purple-500/30 transform -translate-y-0.5'
                        : 'text-[#5c728a] hover:text-[#101418] hover:bg-gray-100 hover:shadow-md hover:shadow-purple-300/20'
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


                    {/* Performance Analytics Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Class Performance Chart */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="material-icons text-blue-600">bar_chart</span>
                          <h3 className="text-lg font-semibold text-gray-800">Class Performance Comparison</h3>
                        </div>
                        <div className="space-y-4">
                          {classPerformance.map((classData, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-700">Class {classData.class}</span>
                                <span className="text-sm font-semibold text-gray-800">{classData.avgScore}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3">
                                <div 
                                  className={`h-3 rounded-full transition-all duration-500 ${
                                    classData.avgScore >= 80 ? 'bg-green-500' :
                                    classData.avgScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{width: `${classData.avgScore}%`}}
                                ></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>{classData.students} students</span>
                                <span className="text-green-600">{classData.improvement}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Student Distribution Pie Chart */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="material-icons text-purple-600">pie_chart</span>
                          <h3 className="text-lg font-semibold text-gray-800">Student Performance Distribution</h3>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="relative w-48 h-48">
                            {/* CSS Pie Chart */}
                            <div className="w-48 h-48 rounded-full" style={{
                              background: `conic-gradient(
                                #10b981 0deg 126deg,
                                #f59e0b 126deg 198deg,
                                #ef4444 198deg 234deg,
                                #6b7280 234deg 360deg
                              )`
                            }}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                                <div className="text-center">
                                  <p className="text-2xl font-bold text-gray-800">123</p>
                                  <p className="text-xs text-gray-600">Total</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Excelling (35%)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Average (40%)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">At Risk (15%)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">New (10%)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Trends Line Chart */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="material-icons text-green-600">trending_up</span>
                        <h3 className="text-lg font-semibold text-gray-800">Performance Trends (Last 6 Months)</h3>
                      </div>
                      <div className="relative h-64">
                        {/* Line Chart Container */}
                        <div className="absolute inset-0 flex items-end justify-between px-4">
                          {/* Data Points */}
                          {[72, 75, 78, 76, 80, 82].map((value, index) => (
                            <div key={index} className="flex flex-col items-center">
                              <div className="relative">
                                <div 
                                  className="w-2 bg-blue-500 rounded-t transition-all duration-500 hover:bg-blue-600"
                                  style={{height: `${(value / 100) * 200}px`}}
                                ></div>
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700">
                                  {value}%
                                </div>
                              </div>
                              <div className="mt-2 text-xs text-gray-500">
                                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between py-4">
                          {[100, 80, 60, 40, 20, 0].map((value, index) => (
                            <div key={index} className="flex items-center">
                              <span className="text-xs text-gray-400 w-8">{value}%</span>
                              <div className="flex-1 h-px bg-gray-200"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* AI Insights Dashboard */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Engagement Heatmap */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="material-icons text-orange-600">psychology</span>
                          <h3 className="text-lg font-semibold text-gray-800">Engagement Heatmap</h3>
                        </div>
                        <div className="space-y-3">
                          {['Morning (9-11 AM)', 'Mid-Morning (11-1 PM)', 'Afternoon (1-3 PM)', 'Late Afternoon (3-5 PM)'].map((time, index) => {
                            const engagement = [95, 88, 65, 72][index];
                            return (
                              <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium text-gray-700">{time}</span>
                                  <span className="text-sm font-semibold text-gray-800">{engagement}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                      engagement >= 85 ? 'bg-green-500' :
                                      engagement >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                    style={{width: `${engagement}%`}}
                                  ></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* AI Recommendations */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="material-icons text-purple-600">smart_toy</span>
                          <h3 className="text-lg font-semibold text-gray-800">AI Insights & Recommendations</h3>
                        </div>
                        <div className="space-y-4">
                          {aiInsights.slice(0, 3).map((insight, index) => (
                            <div key={index} className={`p-4 rounded-lg border-l-4 ${
                              insight.severity === 'high' ? 'bg-red-50 border-red-500' :
                              insight.severity === 'medium' ? 'bg-yellow-50 border-yellow-500' :
                              'bg-blue-50 border-blue-500'
                            }`}>
                              <h4 className="font-medium text-gray-800 mb-2">{insight.title}</h4>
                              <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">{insight.affectedStudents} students affected</span>
                                <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors">
                                  {insight.action}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="material-icons text-blue-600">flash_on</span>
                        <h3 className="text-lg font-semibold text-gray-800">Quick Actions</h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { icon: 'group', label: 'Schedule Class Meeting', color: 'blue' },
                          { icon: 'assignment', label: 'Create Assessment', color: 'green' },
                          { icon: 'message', label: 'Send Parent Updates', color: 'purple' },
                          { icon: 'analytics', label: 'Generate Report', color: 'orange' }
                        ].map((action, index) => (
                          <button key={index} className={`p-4 bg-white rounded-lg border border-${action.color}-200 hover:shadow-md transition-all duration-200 hover:scale-105`}>
                            <span className={`material-icons text-${action.color}-600 text-2xl mb-2 block`}>{action.icon}</span>
                            <span className="text-sm font-medium text-gray-700">{action.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedView === 'students' && (
                  <div className="space-y-6">
                    {/* Student Spotlights */}
                    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] mb-6">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="material-icons text-purple-600">person_search</span>
                        <h3 className="text-lg font-semibold text-[#101418]">Student Spotlights</h3>
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">Personalized Insights</span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {studentSpotlights.map((student, index) => (
                          <div key={index} className={`border rounded-xl p-5 ${
                            student.status === 'needs_support' ? 'border-red-200 bg-red-50' :
                            student.status === 'excelling' ? 'border-green-200 bg-green-50' :
                            'border-blue-200 bg-blue-50'
                          }`}>
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                student.status === 'needs_support' ? 'bg-red-100' :
                                student.status === 'excelling' ? 'bg-green-100' :
                                'bg-blue-100'
                              }`}>
                                <span className={`material-icons ${
                                  student.status === 'needs_support' ? 'text-red-600' :
                                  student.status === 'excelling' ? 'text-green-600' :
                                  'text-blue-600'
                                }`}>person</span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-[#101418]">{student.name}</h4>
                                <p className="text-sm text-[#5c728a]">Class {student.class} • Grade: {student.currentGrade}</p>
                              </div>
                            </div>
                            
                            <div className="space-y-3 text-sm">
                              <div>
                                <span className="font-medium text-[#101418]">Analysis:</span>
                                <p className="text-[#5c728a] mt-1">{student.analysis}</p>
                              </div>
                              
                              <div>
                                <span className="font-medium text-[#101418]">Analysis Source:</span>
                                <p className="text-[#5c728a] mt-1 italic">{student.analysisSource}</p>
                              </div>
                            </div>
                            
                            <button 
                              onClick={() => setSelectedStudentDetails(student)}
                              className="w-full mt-4 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                              View Full Details
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedView === 'curriculum' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-[#101418]">Curriculum Planning & Management</h2>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Create Lesson Plan
                        </button>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                          Add Resource
                        </button>
                      </div>
                    </div>



                    {/* Priority Actions */}
                    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] mb-6">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="material-icons text-red-600">priority_high</span>
                        <h3 className="text-lg font-semibold text-[#101418]">Priority Teaching Adaptations</h3>
                        <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">Action Required</span>
                      </div>
                      
                      <div className="space-y-4">
                        {priorityActions.map((action) => {
                          const isExpanded = expandedActions[action.id];
                          return (
                            <div key={action.id} className={`border-l-4 rounded-lg p-4 ${
                              action.priority === 'urgent' ? 'border-red-500 bg-red-50' :
                              action.priority === 'important' ? 'border-orange-500 bg-orange-50' :
                              'border-yellow-500 bg-yellow-50'
                            }`}>
                              {/* Collapsed View */}
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <h4 className="text-lg font-semibold text-[#101418]">{action.title}</h4>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${
                                      action.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                                      action.priority === 'important' ? 'bg-orange-100 text-orange-700' :
                                      'bg-yellow-100 text-yellow-700'
                                    }`}>
                                      {action.priority}
                                    </span>
                                  </div>
                                  <p className="text-sm text-[#5c728a] mb-3">{action.description}</p>
                                  <div className="flex items-center gap-6 text-sm">
                                    <div>
                                      <span className="font-medium text-[#101418]">Affected Students:</span>
                                      <span className="ml-2 text-[#5c728a]">{action.affectedStudents} students</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-[#101418]">Time to Implement:</span>
                                      <span className="ml-2 text-[#5c728a]">{action.timeToImplement}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-[#101418]">Expected Impact:</span>
                                      <span className={`ml-2 font-medium ${
                                        action.impact === 'high' ? 'text-green-600' :
                                        action.impact === 'medium' ? 'text-blue-600' :
                                        'text-gray-600'
                                      }`}>{action.impact.toUpperCase()}</span>
                                    </div>
                                  </div>
                                </div>
                                <button 
                                  onClick={() => setExpandedActions(prev => ({...prev, [action.id]: !prev[action.id]}))}
                                  className="ml-4 p-2 hover:bg-white hover:bg-opacity-50 rounded-lg transition-colors"
                                >
                                  <span className={`material-icons text-[#101418] transition-transform ${
                                    isExpanded ? 'rotate-180' : ''
                                  }`}>expand_more</span>
                                </button>
                              </div>
                              
                              {/* Expanded View */}
                              {isExpanded && (
                                <div className="mt-6 pt-4 border-t border-white border-opacity-50">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                    <div>
                                      <h5 className="font-medium text-[#101418] mb-2">Specific Issues:</h5>
                                      <ul className="space-y-1">
                                        {action.specificIssues.map((issue, idx) => (
                                          <li key={idx} className="text-sm text-[#5c728a] flex items-start gap-2">
                                            <span className="material-icons text-xs text-red-500 mt-0.5">error_outline</span>
                                            {issue}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-[#101418] mb-2">Recommended Changes:</h5>
                                      <div className="space-y-2">
                                        {Object.entries(action.recommendedChanges).map(([key, value]) => (
                                          <div key={key} className="text-sm">
                                            <span className="font-medium text-blue-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                            <p className="text-[#5c728a] ml-2">{value}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="bg-white rounded-lg p-4 mb-4">
                                    <h5 className="font-medium text-[#101418] mb-2">Action Steps:</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                      {action.actionSteps.map((step, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm">
                                          <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">{idx + 1}</span>
                                          <span className="text-[#5c728a]">{step}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <div className="flex justify-between items-center">
                                    <div className="text-sm">
                                      <span className="font-medium text-green-600">Expected Outcome:</span>
                                      <span className="ml-2 text-[#5c728a]">{action.expectedOutcome}</span>
                                    </div>
                                    <div className="flex gap-2">
                                       <button 
                                         onClick={() => setSelectedActionDetails(action)}
                                         className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                                       >
                                         View Details
                                       </button>
                                       <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                                         Start Implementation
                                       </button>
                                     </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                     {/* AI Justification Dialog */}
                     {selectedActionDetails && (
                       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
                         <div className="bg-white rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto m-4 animate-slideUp shadow-2xl">
                           <div className="flex justify-between items-start mb-6">
                             <div>
                               <h2 className="text-2xl font-bold text-[#101418] mb-2">AI Analysis & Justification</h2>
                               <h3 className="text-lg text-[#5c728a]">{selectedActionDetails.title}</h3>
                             </div>
                             <button 
                               onClick={() => setSelectedActionDetails(null)}
                               className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                             >
                               <span className="material-icons text-gray-600">close</span>
                             </button>
                           </div>
                           
                           <div className="space-y-6">
                             {/* Data Analysis Section */}
                             <div className="bg-blue-50 rounded-xl p-6">
                               <div className="flex items-center gap-3 mb-4">
                                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                   <span className="material-icons text-blue-600">analytics</span>
                                 </div>
                                 <h4 className="text-lg font-semibold text-[#101418]">Data Analysis Overview</h4>
                               </div>
                               <p className="text-[#5c728a] leading-relaxed">{selectedActionDetails.aiJustification.dataAnalysis}</p>
                             </div>
                             
                             {/* Performance Metrics */}
                             <div className="bg-red-50 rounded-xl p-6">
                               <div className="flex items-center gap-3 mb-4">
                                 <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                   <span className="material-icons text-red-600">trending_down</span>
                                 </div>
                                 <h4 className="text-lg font-semibold text-[#101418]">Performance Indicators</h4>
                               </div>
                               <ul className="space-y-2">
                                 {selectedActionDetails.aiJustification.performanceMetrics.map((metric, idx) => (
                                   <li key={idx} className="flex items-start gap-3 text-[#5c728a]">
                                     <span className="material-icons text-red-500 text-sm mt-0.5">fiber_manual_record</span>
                                     {metric}
                                   </li>
                                 ))}
                               </ul>
                             </div>
                             
                             {/* Student Feedback */}
                             <div className="bg-orange-50 rounded-xl p-6">
                               <div className="flex items-center gap-3 mb-4">
                                 <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                   <span className="material-icons text-orange-600">record_voice_over</span>
                                 </div>
                                 <h4 className="text-lg font-semibold text-[#101418]">Student Feedback Analysis</h4>
                               </div>
                               <ul className="space-y-2">
                                 {selectedActionDetails.aiJustification.studentFeedback.map((feedback, idx) => (
                                   <li key={idx} className="flex items-start gap-3 text-[#5c728a]">
                                     <span className="material-icons text-orange-500 text-sm mt-0.5">format_quote</span>
                                     {feedback}
                                   </li>
                                 ))}
                               </ul>
                             </div>
                             
                             {/* Teaching Observations */}
                             <div className="bg-purple-50 rounded-xl p-6">
                               <div className="flex items-center gap-3 mb-4">
                                 <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                   <span className="material-icons text-purple-600">visibility</span>
                                 </div>
                                 <h4 className="text-lg font-semibold text-[#101418]">Classroom Observations</h4>
                               </div>
                               <ul className="space-y-2">
                                 {selectedActionDetails.aiJustification.teachingObservations.map((observation, idx) => (
                                   <li key={idx} className="flex items-start gap-3 text-[#5c728a]">
                                     <span className="material-icons text-purple-500 text-sm mt-0.5">remove_red_eye</span>
                                     {observation}
                                   </li>
                                 ))}
                               </ul>
                             </div>
                             
                             {/* Research Basis */}
                             <div className="bg-green-50 rounded-xl p-6">
                               <div className="flex items-center gap-3 mb-4">
                                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                   <span className="material-icons text-green-600">school</span>
                                 </div>
                                 <h4 className="text-lg font-semibold text-[#101418]">Educational Research Support</h4>
                               </div>
                               <ul className="space-y-2">
                                 {selectedActionDetails.aiJustification.researchBasis.map((research, idx) => (
                                   <li key={idx} className="flex items-start gap-3 text-[#5c728a]">
                                     <span className="material-icons text-green-500 text-sm mt-0.5">science</span>
                                     {research}
                                   </li>
                                 ))}
                               </ul>
                             </div>
                             
                             {/* Risk Assessment */}
                             <div className="bg-yellow-50 rounded-xl p-6">
                               <div className="flex items-center gap-3 mb-4">
                                 <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                   <span className="material-icons text-yellow-600">warning</span>
                                 </div>
                                 <h4 className="text-lg font-semibold text-[#101418]">Risk Assessment</h4>
                               </div>
                               <p className="text-[#5c728a] leading-relaxed font-medium">{selectedActionDetails.aiJustification.riskAssessment}</p>
                             </div>
                             
                             {/* Action Buttons */}
                             <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                               <button 
                                 onClick={() => setSelectedActionDetails(null)}
                                 className="px-6 py-2 bg-gray-100 text-[#101418] rounded-lg font-medium hover:bg-gray-200 transition-colors"
                               >
                                 Close
                               </button>
                               <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                 Export Analysis
                               </button>
                               <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                                 Implement Recommendation
                               </button>
                             </div>
                           </div>
                         </div>
                       </div>
                     )}



                     {/* Teaching Toolkit */}
                    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="material-icons text-blue-600">build</span>
                        <h3 className="text-lg font-semibold text-[#101418]">Teaching Toolkit</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{teachingToolkitActions.length} Actions Available</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {teachingToolkitActions.map((action) => (
                          <div key={action.id} className={`bg-gradient-to-br from-${action.color}-50 to-${action.color}-100 rounded-xl p-5 border border-${action.color}-200 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer`}>
                            <div className="flex items-center gap-3 mb-4">
                              <span className={`material-icons text-${action.color}-600 text-2xl`}>{action.icon}</span>
                              <div>
                                <h4 className="font-semibold text-[#101418] text-base">{action.title}</h4>
                                <p className="text-sm text-[#5c728a]">{action.description}</p>
                              </div>
                            </div>
                            
                            <div className="mb-4">
                              <p className="text-xs text-[#5c728a] mb-1">Time Required:</p>
                              <p className={`text-sm font-medium text-${action.color}-700`}>{action.timeRequired}</p>
                            </div>
                            
                            <button 
                              onClick={() => setSelectedToolkitAction(action)}
                              className={`w-full px-4 py-2 bg-${action.color}-600 text-white rounded-lg text-sm font-medium hover:bg-${action.color}-700 transition-colors flex items-center justify-center gap-2`}
                            >
                              <span className="material-icons text-sm">play_arrow</span>
                              Take Action
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Details Dialog */}
                    {selectedToolkitAction && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
                        <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto m-4 animate-slideUp shadow-2xl border border-gray-200">
                          {/* Dialog Header */}
                          <div className={`bg-gradient-to-r from-${selectedToolkitAction.color}-600 to-${selectedToolkitAction.color}-700 px-6 py-4 text-white`}>
                            <div className="flex justify-between items-start">
                              <div className="flex items-center gap-3">
                                <span className="material-icons text-2xl">{selectedToolkitAction.icon}</span>
                                <div>
                                  <h3 className="text-xl font-bold">{selectedToolkitAction.title}</h3>
                                  <p className={`text-${selectedToolkitAction.color}-100 text-sm`}>{selectedToolkitAction.description}</p>
                                </div>
                              </div>
                              <button 
                                onClick={() => setSelectedToolkitAction(null)}
                                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                              >
                                <span className="material-icons text-white">close</span>
                              </button>
                            </div>
                          </div>
                          
                          {/* Dialog Content */}
                          <div className="p-6 space-y-6">
                            {/* Why This is Suggested */}
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                              <h4 className="font-semibold text-[#101418] mb-3 flex items-center gap-2">
                                <span className="material-icons text-blue-600 text-lg">lightbulb</span>
                                Why This Action is Suggested
                              </h4>
                              <p className="text-sm text-[#5c728a] leading-relaxed">{selectedToolkitAction.whySuggested}</p>
                            </div>
                            
                            {/* Suggested Students */}
                            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                              <h4 className="font-semibold text-[#101418] mb-3 flex items-center gap-2">
                                <span className="material-icons text-green-600 text-lg">group</span>
                                Suggested Students
                              </h4>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
                                {selectedToolkitAction.suggestedStudents.map((student, idx) => (
                                  <label key={idx} className="flex items-center gap-2 p-2 bg-white rounded border border-green-100 hover:bg-green-50 cursor-pointer">
                                    <input type="checkbox" className="text-green-600" defaultChecked />
                                    <span className="text-xs text-[#5c728a]">{student}</span>
                                  </label>
                                ))}
                              </div>
                              <div className="flex gap-2">
                                <button className="px-3 py-1 bg-green-600 text-white rounded text-xs font-medium hover:bg-green-700 transition-colors">
                                  Select All
                                </button>
                                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium hover:bg-gray-300 transition-colors">
                                  Clear All
                                </button>
                              </div>
                            </div>
                            
                            {/* Implementation Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Required Materials */}
                              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                                <h4 className="font-semibold text-[#101418] mb-3 flex items-center gap-2">
                                  <span className="material-icons text-orange-600 text-lg">inventory</span>
                                  Required Materials
                                </h4>
                                <ul className="space-y-2">
                                  {selectedToolkitAction.materials.map((material, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-[#5c728a]">
                                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                      {material}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              {/* Implementation Steps */}
                              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                                <h4 className="font-semibold text-[#101418] mb-3 flex items-center gap-2">
                                  <span className="material-icons text-purple-600 text-lg">list</span>
                                  Implementation Steps
                                </h4>
                                <ol className="space-y-2">
                                  {selectedToolkitAction.steps.map((step, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-[#5c728a]">
                                      <span className="w-5 h-5 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">{idx + 1}</span>
                                      {step}
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                            
                            {/* Time and Schedule */}
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <h4 className="font-semibold text-[#101418] mb-3 flex items-center gap-2">
                                <span className="material-icons text-gray-600 text-lg">schedule</span>
                                Schedule This Action
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <label className="block text-xs font-medium text-[#5c728a] mb-1">Date</label>
                                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded text-sm" />
                                </div>
                                <div>
                                  <label className="block text-xs font-medium text-[#5c728a] mb-1">Time</label>
                                  <input type="time" className="w-full px-3 py-2 border border-gray-300 rounded text-sm" />
                                </div>
                                <div>
                                  <label className="block text-xs font-medium text-[#5c728a] mb-1">Duration</label>
                                  <input type="text" placeholder={selectedToolkitAction.timeRequired} className="w-full px-3 py-2 border border-gray-300 rounded text-sm" />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Dialog Footer */}
                          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                            <div className="flex justify-end gap-3">
                              <button 
                                onClick={() => setSelectedToolkitAction(null)}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                              >
                                Cancel
                              </button>
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                                <span className="material-icons text-sm">schedule</span>
                                Schedule Action
                              </button>
                              <button className={`px-4 py-2 bg-${selectedToolkitAction.color}-600 text-white rounded-lg text-sm font-medium hover:bg-${selectedToolkitAction.color}-700 transition-colors flex items-center gap-2`}>
                                <span className="material-icons text-sm">play_arrow</span>
                                Start Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}



                    {/* Resource Library */}
                    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                      <h3 className="font-semibold text-[#101418] mb-4">Teaching Resource Library</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {resourceLibrary.map((resource) => (
                          <div key={resource.id} className="border border-[#d4dbe2] rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-[#101418]">{resource.title}</h4>
                              <span className="text-xs text-[#5c728a]">{resource.downloads} downloads</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium">
                                {resource.type}
                              </span>
                              <span className="text-xs text-[#5c728a]">{resource.subject} • Class {resource.class}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-3">
                              <span className="material-icons text-yellow-500 text-sm">star</span>
                              <span className="text-sm font-medium text-[#101418]">{resource.rating}</span>
                              <span className="text-xs text-[#5c728a]">• Updated {resource.lastUpdated}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {resource.tags.map((tag, idx) => (
                                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                Use Resource
                              </button>
                              <button className="px-3 py-2 bg-gray-100 text-[#101418] rounded-lg text-sm hover:bg-gray-200 transition-colors">
                                Preview
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
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
                              <p className="font-medium text-[#101418]">Schedule intervention for Arjun Sharma</p>
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
      
      {/* Student Details Dialog - Global */}
      {selectedStudentDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-lg max-w-4xl max-h-[85vh] overflow-y-auto m-4 animate-slideUp shadow-lg border border-gray-200">
            {/* Header */}
            <div className="bg-blue-600 border-b border-blue-700 px-5 py-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="material-icons text-white text-sm">person</span>
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-white">{selectedStudentDetails.name}</h2>
                      <p className="text-blue-100 text-xs">Class {selectedStudentDetails.class} • Grade: {selectedStudentDetails.currentGrade}</p>
                    </div>
                  </div>
                  <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${
                    selectedStudentDetails.status === 'needs_support' ? 'bg-red-100 text-red-800' :
                    selectedStudentDetails.status === 'excelling' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    <span className="material-icons text-xs">
                      {selectedStudentDetails.status === 'needs_support' ? 'warning' :
                       selectedStudentDetails.status === 'excelling' ? 'star' :
                       'trending_up'}
                    </span>
                    {selectedStudentDetails.status.replace('_', ' ')}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedStudentDetails(null)}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                >
                  <span className="material-icons text-white text-sm">close</span>
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Analysis Overview */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-200 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer">
                  <h4 className="text-xs font-semibold text-blue-800 mb-2 flex items-center gap-1">
                    <span className="material-icons text-blue-600 text-xs">insights</span>
                    Analysis Overview
                  </h4>
                  <p className="text-blue-700 text-xs leading-relaxed mb-2">{selectedStudentDetails.analysis}</p>
                  <p className="text-blue-600 text-xs italic">{selectedStudentDetails.analysisSource}</p>
                </div>
              
              {/* Strengths and Challenges */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 border border-green-200 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer">
                     <h4 className="text-xs font-semibold text-green-800 mb-2 flex items-center gap-1">
                       <span className="material-icons text-green-600 text-xs">check_circle</span>
                       Strengths in Written Work
                     </h4>
                     <div className="space-y-1">
                       {selectedStudentDetails.keyStrengths.map((strength, idx) => (
                         <div key={idx} className="flex items-center gap-1">
                           <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                           <span className="text-green-700 text-xs">{strength}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                   
                   <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-3 border border-orange-200 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer">
                     <h4 className="text-xs font-semibold text-orange-800 mb-2 flex items-center gap-1">
                       <span className="material-icons text-orange-600 text-xs">flag</span>
                       Areas for Improvement
                     </h4>
                     <div className="space-y-1">
                       {selectedStudentDetails.mainChallenges.map((challenge, idx) => (
                         <div key={idx} className="flex items-center gap-1">
                           <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                           <span className="text-orange-700 text-xs">{challenge}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
              
              {/* Detailed Analysis */}
              {selectedStudentDetails.commonMistakes && (
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-3 border border-red-200 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer">
                    <h4 className="text-xs font-semibold text-red-800 mb-2 flex items-center gap-1">
                      <span className="material-icons text-red-600 text-xs">error_outline</span>
                      Common Mistakes
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedStudentDetails.commonMistakes.map((mistake, idx) => (
                        <div key={idx} className="flex items-start gap-1 p-1.5 bg-white rounded-lg border border-red-100 hover:bg-red-50 transition-colors duration-150">
                          <span className="material-icons text-red-500 text-xs mt-0.5">close</span>
                          <span className="text-red-700 text-xs">{mistake}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              
              {selectedStudentDetails.commonPatterns && (
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 border border-green-200 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer">
                    <h4 className="text-xs font-semibold text-green-800 mb-2 flex items-center gap-1">
                      <span className="material-icons text-green-600 text-xs">verified</span>
                      Positive Patterns
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedStudentDetails.commonPatterns.map((pattern, idx) => (
                        <div key={idx} className="flex items-start gap-1 p-1.5 bg-white rounded-lg border border-green-100 hover:bg-green-50 transition-colors duration-150">
                          <span className="material-icons text-green-500 text-xs mt-0.5">check</span>
                          <span className="text-green-700 text-xs">{pattern}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedStudentDetails.improvementPatterns && (
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 border border-blue-200 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer">
                    <h4 className="text-xs font-semibold text-blue-800 mb-2 flex items-center gap-1">
                      <span className="material-icons text-blue-600 text-xs">trending_up</span>
                      Improvement Trends
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedStudentDetails.improvementPatterns.map((pattern, idx) => (
                        <div key={idx} className="flex items-start gap-1 p-1.5 bg-white rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors duration-150">
                          <span className="material-icons text-blue-500 text-xs mt-0.5">arrow_upward</span>
                          <span className="text-blue-700 text-xs">{pattern}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              
              {/* Recommended Actions */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 border border-purple-200 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer">
                  <h4 className="text-xs font-semibold text-purple-800 mb-2 flex items-center gap-1">
                    <span className="material-icons text-purple-600 text-xs">assignment</span>
                    Recommended Actions
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedStudentDetails.nextSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-1 p-1.5 bg-white rounded-lg border border-purple-100 hover:bg-purple-50 transition-colors duration-150">
                        <span className="w-3 h-3 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-medium">{idx + 1}</span>
                        <span className="text-purple-700 text-xs">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            
            {/* Footer */}
             <div className="bg-gray-50 border-t border-gray-200 px-4 py-3">
               <div className="flex justify-end gap-2">
                 <button 
                   onClick={() => setSelectedStudentDetails(null)}
                   className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded text-xs font-medium hover:bg-gray-300 transition-colors"
                 >
                   Close
                 </button>
                 <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs font-medium hover:bg-blue-700 transition-colors flex items-center gap-1">
                   <span className="material-icons text-xs">download</span>
                   Export
                 </button>
                 <button className="px-3 py-1.5 bg-green-600 text-white rounded text-xs font-medium hover:bg-green-700 transition-colors flex items-center gap-1">
                   <span className="material-icons text-xs">edit</span>
                   Action Plan
                 </button>
               </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherAnalytics;