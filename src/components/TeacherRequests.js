import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherRequests = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filterType, setFilterType] = useState('all');
  
  const requests = [
    {
      id: 1,
      type: 'academic',
      title: 'Request for Assignment Extension',
      description: 'Student requesting 3-day extension for Mathematics assignment due to medical reasons.',
      student: {
        name: 'Ananya Gupta',
        class: '12',
        rollNo: 'MA001',
        email: 'emma.thompson@school.edu'
      },
      priority: 'medium',
      status: 'pending',
      submittedDate: '2024-01-15',
      dueDate: '2024-01-18',
      attachments: ['medical_certificate.pdf'],
      category: 'Assignment Extension',
      urgency: 'normal'
    },
    {
      id: 2,
      type: 'technical',
      title: 'Lab Equipment Access Issue',
      description: 'Unable to access chemistry lab equipment for practical session. Need immediate assistance.',
      student: {
        name: 'Rohan Mehta',
        class: '12-A',
        rollNo: 'MA002',
        email: 'david.kim@school.edu'
      },
      priority: 'high',
      status: 'pending',
      submittedDate: '2024-01-16',
      dueDate: '2024-01-17',
      attachments: [],
      category: 'Technical Support',
      urgency: 'urgent'
    },
    {
      id: 3,
      type: 'administrative',
      title: 'Grade Clarification Request',
      description: 'Student questioning the grading criteria for recent physics test. Requesting detailed feedback.',
      student: {
        name: 'Priya Patel',
        class: '11',
        rollNo: 'PH003',
        email: 'sarah.chen@school.edu'
      },
      priority: 'low',
      status: 'in_progress',
      submittedDate: '2024-01-14',
      dueDate: '2024-01-20',
      attachments: ['test_paper_scan.pdf'],
      category: 'Grade Inquiry',
      urgency: 'normal'
    },
    {
      id: 4,
      type: 'personal',
      title: 'Counseling Session Request',
      description: 'Student requesting guidance session regarding career choices and subject selection.',
      student: {
        name: 'Vikram Singh',
        class: '11',
        rollNo: 'CS004',
        email: 'michael.rodriguez@school.edu'
      },
      priority: 'medium',
      status: 'resolved',
      submittedDate: '2024-01-10',
      dueDate: '2024-01-15',
      attachments: [],
      category: 'Counseling',
      urgency: 'normal',
      resolvedDate: '2024-01-14',
      resolution: 'Scheduled counseling session for January 18th. Provided career guidance materials.'
    },
    {
      id: 5,
      type: 'academic',
      title: 'Make-up Exam Request',
      description: 'Student missed midterm exam due to family emergency. Requesting make-up exam opportunity.',
      student: {
        name: 'Arjun Sharma',
        class: '12',
        rollNo: 'MT005',
        email: 'alex.johnson@school.edu'
      },
      priority: 'high',
      status: 'pending',
      submittedDate: '2024-01-16',
      dueDate: '2024-01-19',
      attachments: ['emergency_documentation.pdf'],
      category: 'Make-up Exam',
      urgency: 'urgent'
    }
  ];

  const issues = [
    {
      id: 1,
      type: 'behavioral',
      title: 'Classroom Disruption',
      description: 'Student consistently disrupting class with inappropriate behavior.',
      student: {
        name: 'Jake Wilson',
        class: '10-C',
        rollNo: 'BH001'
      },
      severity: 'high',
      status: 'escalated',
      reportedDate: '2024-01-15',
      incidents: 3,
      lastIncident: '2024-01-16'
    },
    {
      id: 2,
      type: 'attendance',
      title: 'Chronic Absenteeism',
      description: 'Student has missed 15+ classes this month without proper documentation.',
      student: {
        name: 'Lisa Park',
        class: '11-A',
        rollNo: 'AT002'
      },
      severity: 'medium',
      status: 'monitoring',
      reportedDate: '2024-01-12',
      incidents: 15,
      lastIncident: '2024-01-16'
    },
    {
      id: 3,
      type: 'academic',
      title: 'Plagiarism Concern',
      description: 'Suspected plagiarism in recent assignment submission.',
      student: {
        name: 'Tom Anderson',
        class: '12-A',
        rollNo: 'PL003'
      },
      severity: 'high',
      status: 'investigating',
      reportedDate: '2024-01-14',
      incidents: 1,
      lastIncident: '2024-01-14'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'in_progress': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'resolved': return 'text-green-600 bg-green-50 border-green-200';
      case 'escalated': return 'text-red-600 bg-red-50 border-red-200';
      case 'monitoring': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'investigating': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredRequests = requests.filter(request => {
    if (activeTab === 'pending') return request.status === 'pending';
    if (activeTab === 'in_progress') return request.status === 'in_progress';
    if (activeTab === 'resolved') return request.status === 'resolved';
    if (activeTab === 'issues') return true;
    return true;
  });

  const RequestCard = ({ request }) => (
    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all cursor-pointer"
         onClick={() => setSelectedRequest(request)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-[#101418]">{request.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
              {request.priority.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-[#5c728a] mb-3">{request.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-[#5c728a]">
            <div className="flex items-center gap-1">
              <span className="material-icons" style={{fontSize: '16px'}}>person</span>
              <span>{request.student.name} ({request.student.class})</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-icons" style={{fontSize: '16px'}}>schedule</span>
              <span>Due: {new Date(request.dueDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <span className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(request.status)}`}>
            {request.status.replace('_', ' ').toUpperCase()}
          </span>
          <span className="text-xs text-[#5c728a]">{request.category}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-[#5c728a]">
          <span className="material-icons" style={{fontSize: '16px'}}>attach_file</span>
          <span>{request.attachments.length} attachments</span>
        </div>
        
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
            View Details
          </button>
          {request.status === 'pending' && (
            <button className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
              Take Action
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const IssueCard = ({ issue }) => (
    <div className="bg-white rounded-xl p-6 border border-[#d4dbe2] hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-[#101418]">{issue.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(issue.severity)}`}>
              {issue.severity.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-[#5c728a] mb-3">{issue.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-[#5c728a]">
            <div className="flex items-center gap-1">
              <span className="material-icons" style={{fontSize: '16px'}}>person</span>
              <span>{issue.student.name} ({issue.student.class})</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-icons" style={{fontSize: '16px'}}>warning</span>
              <span>{issue.incidents} incidents</span>
            </div>
          </div>
        </div>
        
        <span className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(issue.status)}`}>
          {issue.status.replace('_', ' ').toUpperCase()}
        </span>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-[#5c728a]">Last incident: {new Date(issue.lastIncident).toLocaleDateString()}</span>
        
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
            Add Note
          </button>
          <button className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
            Escalate
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto" style={{backgroundColor: '#f0f2f5'}}>
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#101418] mb-2">Requests & Issues Management</h1>
              <p className="text-[#5c728a]">Handle student requests and track classroom issues</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-orange-600">pending_actions</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">{requests.filter(r => r.status === 'pending').length}</h3>
                    <p className="text-sm text-[#5c728a]">Pending Requests</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-blue-600">hourglass_empty</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">{requests.filter(r => r.status === 'in_progress').length}</h3>
                    <p className="text-sm text-[#5c728a]">In Progress</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-red-600">report_problem</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">{issues.length}</h3>
                    <p className="text-sm text-[#5c728a]">Active Issues</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-[#d4dbe2]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-green-600">check_circle</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101418]">{requests.filter(r => r.status === 'resolved').length}</h3>
                    <p className="text-sm text-[#5c728a]">Resolved Today</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl border border-[#d4dbe2] mb-6">
              <div className="flex p-2 overflow-x-auto">
                {[
                  { id: 'pending', label: 'Pending Requests', icon: 'pending_actions', count: requests.filter(r => r.status === 'pending').length },
                  { id: 'in_progress', label: 'In Progress', icon: 'hourglass_empty', count: requests.filter(r => r.status === 'in_progress').length },
                  { id: 'resolved', label: 'Resolved', icon: 'check_circle', count: requests.filter(r => r.status === 'resolved').length },
                  { id: 'issues', label: 'Issues & Incidents', icon: 'report_problem', count: issues.length }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-4 py-2 mx-1 font-medium transition-all duration-300 whitespace-nowrap rounded-full ${
                      activeTab === tab.id
                        ? 'text-white bg-blue-600 shadow-lg shadow-purple-500/30 transform -translate-y-0.5'
                        : 'text-[#5c728a] hover:text-[#101418] hover:bg-gray-100 hover:shadow-md hover:shadow-purple-300/20'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-icons" style={{fontSize: '20px'}}>{tab.icon}</span>
                      {tab.label}
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">{tab.count}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Filters */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-3">
                    <select 
                      className="px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm"
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="academic">Academic</option>
                      <option value="technical">Technical</option>
                      <option value="administrative">Administrative</option>
                      <option value="personal">Personal</option>
                    </select>
                    
                    <select className="px-3 py-2 border border-[#d4dbe2] rounded-lg text-sm">
                      <option>All Classes</option>
                      <option>12-A</option>
                      <option>12-B</option>
                      <option>11-A</option>
                      <option>11-B</option>
                    </select>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Export Report
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                      Bulk Actions
                    </button>
                  </div>
                </div>

                {/* Content */}
                {activeTab !== 'issues' ? (
                  <div className="space-y-4">
                    {filteredRequests.map(request => (
                      <RequestCard key={request.id} request={request} />
                    ))}
                    
                    {filteredRequests.length === 0 && (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="material-icons text-gray-400 text-2xl">inbox</span>
                        </div>
                        <h3 className="font-semibold text-[#101418] mb-2">No requests found</h3>
                        <p className="text-[#5c728a]">There are no {activeTab.replace('_', ' ')} requests at the moment.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {issues.map(issue => (
                      <IssueCard key={issue.id} issue={issue} />
                    ))}
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

export default TeacherRequests;