import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import StudentSidebar from './StudentSidebar';
import Header from './Header';

const StudentFees = () => {
  const [selectedSemester, setSelectedSemester] = useState('current');
  
  const feeStructure = [
    { category: 'Tuition Fee', amount: 15000, paid: 15000, due: 0, dueDate: '2024-01-15', status: 'paid' },
    { category: 'Laboratory Fee', amount: 2500, paid: 2500, due: 0, dueDate: '2024-01-15', status: 'paid' },
    { category: 'Library Fee', amount: 800, paid: 800, due: 0, dueDate: '2024-01-15', status: 'paid' },
    { category: 'Sports Fee', amount: 1200, paid: 1200, due: 0, dueDate: '2024-01-15', status: 'paid' },
    { category: 'Examination Fee', amount: 1500, paid: 0, due: 1500, dueDate: '2024-02-28', status: 'pending' },
    { category: 'Miscellaneous', amount: 500, paid: 500, due: 0, dueDate: '2024-01-15', status: 'paid' }
  ];

  const paymentHistory = [
    {
      id: 'PAY-2024-001',
      date: '2024-01-15',
      description: 'Semester Fee Payment',
      amount: 20000,
      method: 'Online Banking',
      status: 'completed',
      receipt: 'RCP-001-2024'
    },
    {
      id: 'PAY-2023-012',
      date: '2023-12-20',
      description: 'Late Fee Payment',
      amount: 200,
      method: 'Credit Card',
      status: 'completed',
      receipt: 'RCP-012-2023'
    },
    {
      id: 'PAY-2023-011',
      date: '2023-08-15',
      description: 'Semester Fee Payment',
      amount: 19500,
      method: 'Bank Transfer',
      status: 'completed',
      receipt: 'RCP-011-2023'
    },
    {
      id: 'PAY-2023-010',
      date: '2023-07-10',
      description: 'Summer Course Fee',
      amount: 3000,
      method: 'Online Banking',
      status: 'completed',
      receipt: 'RCP-010-2023'
    }
  ];

  const monthlyPayments = [
    { month: 'Aug 2023', amount: 19500 },
    { month: 'Sep 2023', amount: 0 },
    { month: 'Oct 2023', amount: 0 },
    { month: 'Nov 2023', amount: 0 },
    { month: 'Dec 2023', amount: 200 },
    { month: 'Jan 2024', amount: 20000 }
  ];

  const totalAmount = feeStructure.reduce((sum, fee) => sum + fee.amount, 0);
  const totalPaid = feeStructure.reduce((sum, fee) => sum + fee.paid, 0);
  const totalDue = feeStructure.reduce((sum, fee) => sum + fee.due, 0);

  const pieData = [
    { name: 'Paid', value: totalPaid, color: '#10b981' },
    { name: 'Due', value: totalDue, color: '#ef4444' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <StudentSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Student Portal" />
        <div className="flex-1 overflow-auto p-6">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Fees & Payments</p>
                <p className="text-[#5c728a] text-base font-normal leading-normal">Manage your fee payments and view transaction history</p>
              </div>
              <div className="flex items-center gap-3">
                <select 
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="bg-white border border-[#d4dbe2] rounded-lg px-4 py-2 text-sm"
                >
                  <option value="current">Current Semester</option>
                  <option value="previous">Previous Semester</option>
                  <option value="all">All Semesters</option>
                </select>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <span className="material-icons" style={{fontSize: '20px'}}>payment</span>
                  Make Payment
                </button>
              </div>
            </div>

            {/* Fee Summary Cards */}
            <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Total Fee</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">₹{totalAmount.toLocaleString()}</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Current semester</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Amount Paid</p>
                <p className="text-green-600 tracking-light text-2xl font-bold leading-tight">₹{totalPaid.toLocaleString()}</p>
                <p className="text-green-600 text-sm font-normal leading-normal">{((totalPaid/totalAmount)*100).toFixed(1)}% completed</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Amount Due</p>
                <p className="text-red-600 tracking-light text-2xl font-bold leading-tight">₹{totalDue.toLocaleString()}</p>
                <p className="text-red-600 text-sm font-normal leading-normal">Due by Feb 28, 2024</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Payment Status</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">{totalDue > 0 ? 'Partial' : 'Complete'}</p>
                <p className={`text-sm font-normal leading-normal ${totalDue > 0 ? 'text-yellow-600' : 'text-green-600'}`}>
                  {totalDue > 0 ? '1 payment pending' : 'All payments made'}
                </p>
              </div>
            </div>

            {/* Fee Breakdown and Payment Chart */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] bg-white p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Fee Breakdown</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        label={({name, value}) => `${name}: ₹${value.toLocaleString()}`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] bg-white p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Payment History (6 Months)</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyPayments}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                      <Bar dataKey="amount" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Fee Structure Table */}
            <div className="flex justify-between items-center px-4 pb-3 pt-5">
              <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Current Semester Fee Structure</h2>
            </div>
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#d4dbe2] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Fee Category</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Total Amount</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Paid</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Due</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Due Date</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Status</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className="border-t border-t-[#d4dbe2]">
                        <td className="h-[72px] px-4 py-2 text-[#101418] text-sm font-medium leading-normal">
                          {fee.category}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-[#101418] text-sm font-normal leading-normal">
                          ₹{fee.amount.toLocaleString()}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-green-600 text-sm font-medium leading-normal">
                          ₹{fee.paid.toLocaleString()}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-red-600 text-sm font-medium leading-normal">
                          ₹{fee.due.toLocaleString()}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-[#5c728a] text-sm font-normal leading-normal">
                          {fee.dueDate}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(fee.status)}`}>
                            {fee.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                          {fee.status === 'pending' ? (
                            <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition-colors">
                              Pay Now
                            </button>
                          ) : (
                            <button className="text-green-600 hover:text-green-800 text-xs font-medium">
                              Receipt
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payment History */}
            <div className="flex justify-between items-center px-4 pb-3 pt-5">
              <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Recent Payment History</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Transactions
              </button>
            </div>
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#d4dbe2] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Transaction ID</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Date</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Description</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Amount</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Method</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Status</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Receipt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.map((payment) => (
                      <tr key={payment.id} className="border-t border-t-[#d4dbe2]">
                        <td className="h-[72px] px-4 py-2 text-[#101418] text-sm font-medium leading-normal">
                          {payment.id}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-[#5c728a] text-sm font-normal leading-normal">
                          {payment.date}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-[#101418] text-sm font-normal leading-normal">
                          {payment.description}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-[#101418] text-sm font-bold leading-normal">
                          ₹{payment.amount.toLocaleString()}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-[#5c728a] text-sm font-normal leading-normal">
                          {payment.method}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPaymentStatusColor(payment.status)}`}>
                            {payment.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                          <button className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center gap-1">
                            <span className="material-icons" style={{fontSize: '16px'}}>download</span>
                            {payment.receipt}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 p-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Set Up Auto-Pay
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Request Fee Waiver
              </button>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                Payment Reminder
              </button>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Contact Finance Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFees;