import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import PermissionModal from './PermissionModal';

const Financials = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalActionType, setModalActionType] = useState('');
  const [budgetUtilization, setBudgetUtilization] = useState(0);
  const [renovationProgress, setRenovationProgress] = useState(0);

  // Animation for budget utilization
  useEffect(() => {
    const timer = setTimeout(() => {
      setBudgetUtilization(74);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Animation for renovation progress
  useEffect(() => {
    const timer = setTimeout(() => {
      setRenovationProgress(65);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAddClick = (actionType) => {
    setModalActionType(actionType);
    setModalOpen(true);
  };

  // Mock data for financial information
  const financialOverview = {
    totalBudget: 2500000,
    spent: 1850000,
    remaining: 650000,
    pendingApprovals: 125000
  };

  const damages = [
    {
      id: 1,
      item: 'Laboratory Equipment - Microscope',
      department: 'Biology Lab',
      reportedDate: '2024-01-15',
      estimatedCost: 15000,
      status: 'Under Review',
      priority: 'High'
    },
    {
      id: 2,
      item: 'Classroom Projector',
      department: 'Room 204',
      reportedDate: '2024-01-12',
      estimatedCost: 8500,
      status: 'Approved',
      priority: 'Medium'
    },
    {
      id: 3,
      item: 'HVAC System - Main Building',
      department: 'Facilities',
      reportedDate: '2024-01-10',
      estimatedCost: 45000,
      status: 'Pending',
      priority: 'Critical'
    }
  ];

  const renovations = [
    {
      id: 1,
      area: 'Computer Science Lab Upgrade',
      description: 'Complete renovation with new workstations and networking',
      estimatedCost: 180000,
      timeline: '3 months',
      status: 'In Progress',
      completion: 65
    },
    {
      id: 2,
      area: 'Library Modernization',
      description: 'Digital catalog system and reading area renovation',
      estimatedCost: 95000,
      timeline: '2 months',
      status: 'Planning',
      completion: 15
    },
    {
      id: 3,
      area: 'Cafeteria Expansion',
      description: 'Expand seating capacity and kitchen facilities',
      estimatedCost: 220000,
      timeline: '4 months',
      status: 'Approved',
      completion: 0
    }
  ];

  const newEquipment = [
    {
      id: 1,
      item: '3D Printers (5 units)',
      department: 'Mechanical Engineering',
      cost: 75000,
      vendor: 'TechEquip Solutions',
      deliveryDate: '2024-02-15',
      status: 'Ordered'
    },
    {
      id: 2,
      item: 'Smart Boards (10 units)',
      department: 'Multiple Classrooms',
      cost: 45000,
      vendor: 'EduTech Corp',
      deliveryDate: '2024-01-30',
      status: 'Delivered'
    },
    {
      id: 3,
      item: 'Laboratory Computers (25 units)',
      department: 'Computer Science',
      cost: 125000,
      vendor: 'CompuWorld',
      deliveryDate: '2024-03-01',
      status: 'Pending Approval'
    }
  ];

  const pendingBills = [
    {
      id: 1,
      vendor: 'PowerGrid Utilities',
      description: 'Electricity Bill - December 2023',
      amount: 28500,
      dueDate: '2024-01-25',
      category: 'Utilities',
      priority: 'High'
    },
    {
      id: 2,
      vendor: 'CleanPro Services',
      description: 'Cleaning Services - Q4 2023',
      amount: 15200,
      dueDate: '2024-01-20',
      category: 'Maintenance',
      priority: 'Medium'
    },
    {
      id: 3,
      vendor: 'SecureNet Systems',
      description: 'Network Security License Renewal',
      amount: 35000,
      dueDate: '2024-02-01',
      category: 'IT Services',
      priority: 'Critical'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Financial Overview', icon: 'analytics' },
    { id: 'damages', label: 'Damages & Repairs', icon: 'build' },
    { id: 'renovations', label: 'Renovations', icon: 'construction' },
    { id: 'equipment', label: 'New Equipment', icon: 'computer' },
    { id: 'bills', label: 'Pending Bills', icon: 'receipt' }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': case 'pending approval': return 'bg-yellow-100 text-yellow-800';
      case 'under review': return 'bg-blue-100 text-blue-800';
      case 'in progress': return 'bg-purple-100 text-purple-800';
      case 'delivered': case 'ordered': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="gap-1 px-6 flex flex-1 py-5">
          <Sidebar />
          <div className="layout-content-container flex flex-col flex-1 ml-4">
            
            {/* Page Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Financial Management</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">Monitor and manage organizational finances, expenses, and budget allocations</p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="px-4 pb-3">
              <div className="flex gap-3 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <span className="material-icons" style={{fontSize: '20px'}}>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="px-4 pb-4">
              
              {/* Financial Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Budget Overview Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-6 rounded-xl border border-[#d4dbe2] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#5c728a]">Total Budget</p>
                          <p className="text-2xl font-bold text-[#101418]">₹{(financialOverview.totalBudget / 100000).toFixed(1)}L</p>
                        </div>
                        <div className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200">
                          <span className="material-icons text-gray-600 hover:text-blue-600 transition-colors duration-200" style={{fontSize: '24px'}}>account_balance_wallet</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-[#d4dbe2] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#5c728a]">Amount Spent</p>
                          <p className="text-2xl font-bold text-[#101418]">₹{(financialOverview.spent / 100000).toFixed(1)}L</p>
                        </div>
                        <div className="p-3 bg-gray-100 hover:bg-red-100 rounded-full transition-colors duration-200">
                          <span className="material-icons text-gray-600 hover:text-red-600 transition-colors duration-200" style={{fontSize: '24px'}}>trending_down</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-[#d4dbe2] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#5c728a]">Remaining</p>
                          <p className="text-2xl font-bold text-[#101418]">₹{(financialOverview.remaining / 100000).toFixed(1)}L</p>
                        </div>
                        <div className="p-3 bg-gray-100 hover:bg-green-100 rounded-full transition-colors duration-200">
                          <span className="material-icons text-gray-600 hover:text-green-600 transition-colors duration-200" style={{fontSize: '24px'}}>trending_up</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-[#d4dbe2] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#5c728a]">Pending Approvals</p>
                          <p className="text-2xl font-bold text-[#101418]">₹{(financialOverview.pendingApprovals / 100000).toFixed(1)}L</p>
                        </div>
                        <div className="p-3 bg-gray-100 hover:bg-orange-100 rounded-full transition-colors duration-200">
                          <span className="material-icons text-gray-600 hover:text-orange-600 transition-colors duration-200" style={{fontSize: '24px'}}>pending</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Budget Utilization Chart */}
                  <div className="bg-white p-6 rounded-xl border border-[#d4dbe2] hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg font-semibold text-[#101418] mb-4">Budget Utilization</h3>
                    <div className="w-full bg-gray-200 rounded-full h-4 hover:bg-gray-300 transition-colors duration-200">
                      <div 
                        className="bg-gray-400 hover:bg-blue-500 h-4 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${budgetUtilization}%` }}
                      >
                      </div>
                    </div>
                    <div className="flex justify-between mt-3 text-sm text-[#5c728a]">
                      <span className="font-medium">0%</span>
                      <span className="font-bold text-[#101418]">{budgetUtilization}% Utilized</span>
                      <span className="font-medium">100%</span>
                    </div>
                    <div className="mt-2 text-xs text-slate-500 text-center">
                      ₹{(financialOverview.spent / 100000).toFixed(1)}L of ₹{(financialOverview.totalBudget / 100000).toFixed(1)}L
                    </div>
                  </div>
                </div>
              )}

              {/* Damages Tab */}
              {activeTab === 'damages' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Reported Damages & Repair Requests</h3>
                        <p className="text-sm text-gray-600 mt-1">Track and manage damage reports and repair costs</p>
                      </div>
                      <button 
                        onClick={() => handleAddClick('damage report')}
                        className="bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                      >
                        <span className="material-icons" style={{fontSize: '20px'}}>add</span>
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item/Equipment</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Cost</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {damages.map((damage) => (
                          <tr key={damage.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{damage.item}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{damage.department}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{damage.reportedDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{damage.estimatedCost.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(damage.priority)}`}>
                                {damage.priority}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(damage.status)}`}>
                                {damage.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Renovations Tab */}
              {activeTab === 'renovations' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Renovation Projects</h3>
                      <p className="text-sm text-gray-600">Manage ongoing and planned renovation projects</p>
                    </div>
                    <button 
                      onClick={() => handleAddClick('renovation project')}
                      className="bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    >
                      <span className="material-icons" style={{fontSize: '20px'}}>add</span>
                    </button>
                  </div>
                  {renovations.map((renovation) => (
                    <div key={renovation.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{renovation.area}</h4>
                          <p className="text-sm text-gray-600 mt-1">{renovation.description}</p>
                        </div>
                        <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(renovation.status)}`}>
                          {renovation.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Estimated Cost</p>
                          <p className="text-lg font-bold text-gray-900">₹{renovation.estimatedCost.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600">Timeline</p>
                          <p className="text-lg font-bold text-gray-900">{renovation.timeline}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600">Completion</p>
                          <p className="text-lg font-bold text-gray-900">{renovation.completion}%</p>
                        </div>
                      </div>
                      
                      <div className="w-full bg-slate-200 rounded-full h-3 shadow-inner">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 h-3 rounded-full transition-all duration-2000 ease-out shadow-lg"
                          style={{ width: `${renovationProgress}%` }}
                        >
                          <div className="h-full bg-gradient-to-t from-transparent to-white opacity-30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Equipment Tab */}
              {activeTab === 'equipment' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">New Equipment Purchases</h3>
                        <p className="text-sm text-gray-600 mt-1">Track equipment orders and deliveries</p>
                      </div>
                      <button 
                        onClick={() => handleAddClick('equipment purchase')}
                        className="bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                      >
                        <span className="material-icons" style={{fontSize: '20px'}}>add</span>
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {newEquipment.map((equipment) => (
                          <tr key={equipment.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{equipment.item}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{equipment.department}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{equipment.cost.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{equipment.vendor}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{equipment.deliveryDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(equipment.status)}`}>
                                {equipment.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Bills Tab */}
              {activeTab === 'bills' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Pending Bills & Approvals</h3>
                        <p className="text-sm text-gray-600 mt-1">Bills awaiting approval and payment processing</p>
                      </div>
                      <button 
                        onClick={() => handleAddClick('bill')}
                        className="bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                      >
                        <span className="material-icons" style={{fontSize: '20px'}}>add</span>
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {pendingBills.map((bill) => (
                          <tr key={bill.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bill.vendor}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{bill.amount.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.dueDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.category}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(bill.priority)}`}>
                                {bill.priority}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <PermissionModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actionType={modalActionType}
      />
    </div>
  );
};

export default Financials;