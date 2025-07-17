import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const AdminPanel = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Administrator', status: 'Active' },
    { id: 2, name: 'Bob Williams', email: 'bob.williams@example.com', role: 'Teacher', status: 'Active' },
    { id: 3, name: 'Charlie Davis', email: 'charlie.davis@example.com', role: 'Student', status: 'Active' },
    { id: 4, name: 'Diana Evans', email: 'diana.evans@example.com', role: 'Teacher', status: 'Active' },
    { id: 5, name: 'Edward Miller', email: 'edward.miller@example.com', role: 'Student', status: 'Inactive' }
  ]);

  const handleEditUser = (userId) => {
    console.log('Edit user:', userId);
    // Implement edit functionality
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Administrator': return 'bg-red-100 text-red-800';
      case 'Teacher': return 'bg-blue-100 text-blue-800';
      case 'Student': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="Admin Panel" />
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <Sidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Settings</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Manage users, roles, permissions, and system configurations.</p>
              </div>
            </div>
            
            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">User Management</h2>
            
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#d4dbe2] bg-gray-50">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-[#101418] w-[400px] text-sm font-medium leading-normal">Name</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-[400px] text-sm font-medium leading-normal">Email</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-60 text-sm font-medium leading-normal">Role</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-60 text-sm font-medium leading-normal">Status</th>
                      <th className="px-4 py-3 text-left text-[#101418] w-60 text-[#5c728a] text-sm font-medium leading-normal">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-t border-t-[#d4dbe2]">
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#101418] text-sm font-normal leading-normal">
                          {user.name}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#5c728a] text-sm font-normal leading-normal">
                          {user.email}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                          <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 ${getRoleColor(user.role)} text-sm font-medium leading-normal w-full`}>
                            <span className="truncate">{user.role}</span>
                          </button>
                        </td>
                        <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                          <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 ${getStatusColor(user.status)} text-sm font-medium leading-normal w-full`}>
                            <span className="truncate">{user.status}</span>
                          </button>
                        </td>
                        <td className="h-[72px] px-4 py-2 w-60 text-[#5c728a] text-sm font-bold leading-normal tracking-[0.015em]">
                          <button 
                            onClick={() => handleEditUser(user.id)}
                            className="hover:text-[#101418] transition-colors cursor-pointer"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Add User Section */}
            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Add New User</h2>
            <div className="px-4 py-3">
              <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#101418] mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#101418] mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#101418] mb-2">Role</label>
                    <select className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select role</option>
                      <option value="Administrator">Administrator</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Student">Student</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#101418] mb-2">Initial Password</label>
                    <input 
                      type="password" 
                      className="w-full px-3 py-2 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Enter initial password"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Add User
                  </button>
                </div>
              </div>
            </div>

            {/* System Settings */}
            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">System Settings</h2>
            <div className="px-4 py-3">
              <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[#101418]">Email Notifications</h3>
                      <p className="text-sm text-[#5c728a]">Send email notifications for exam completions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[#101418]">Auto-Backup</h3>
                      <p className="text-sm text-[#5c728a]">Automatically backup data daily</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[#101418]">Maintenance Mode</h3>
                      <p className="text-sm text-[#5c728a]">Enable maintenance mode for system updates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;