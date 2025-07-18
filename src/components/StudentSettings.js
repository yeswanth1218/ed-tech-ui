import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar';
import Header from './Header';

const StudentSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    examReminders: true,
    gradeUpdates: true,
    announcements: true,
    assignmentDue: true,
    emailNotifications: false,
    smsNotifications: true
  });
  
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'friends',
    showGrades: false,
    showAttendance: true,
    allowMessaging: true
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'english',
    timezone: 'IST',
    dateFormat: 'DD/MM/YYYY'
  });

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePrivacyChange = (key, value) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: 'person' },
    { id: 'notifications', label: 'Notifications', icon: 'notifications' },
    { id: 'privacy', label: 'Privacy', icon: 'security' },
    { id: 'preferences', label: 'Preferences', icon: 'tune' },
    { id: 'account', label: 'Account', icon: 'account_circle' }
  ];

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
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Settings</p>
                <p className="text-[#5c728a] text-base font-normal leading-normal">Manage your account preferences and privacy settings</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <span className="material-icons" style={{fontSize: '20px'}}>save</span>
                  Save Changes
                </button>
              </div>
            </div>

            {/* Settings Navigation */}
            <div className="flex gap-2 p-4 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white text-[#101418] border border-[#d4dbe2] hover:bg-gray-50'
                  }`}
                >
                  <span className="material-icons" style={{fontSize: '20px'}}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Settings Content */}
            <div className="p-4">
              {activeTab === 'profile' && (
                <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                  <h3 className="text-[#101418] text-xl font-bold mb-6">Profile Information</h3>
                  
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="material-icons text-blue-600" style={{fontSize: '48px'}}>person</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#101418] text-lg font-medium mb-2">Alice Johnson</h4>
                      <p className="text-[#5c728a] text-sm mb-3">Student ID: STU-2024-001</p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                        Change Photo
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#101418] text-sm font-medium mb-2">Full Name</label>
                      <input type="text" defaultValue="Alice Johnson" className="w-full p-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-[#101418] text-sm font-medium mb-2">Email Address</label>
                      <input type="email" defaultValue="alice.johnson@student.edu" className="w-full p-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-[#101418] text-sm font-medium mb-2">Phone Number</label>
                      <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full p-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-[#101418] text-sm font-medium mb-2">Date of Birth</label>
                      <input type="date" defaultValue="2005-03-15" className="w-full p-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[#101418] text-sm font-medium mb-2">Address</label>
                      <textarea defaultValue="123 Main Street, City, State 12345" className="w-full p-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3"></textarea>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                  <h3 className="text-[#101418] text-xl font-bold mb-6">Notification Preferences</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[#101418] text-lg font-medium mb-4">Academic Notifications</h4>
                      <div className="space-y-4">
                        {[
                          { key: 'examReminders', label: 'Exam Reminders', description: 'Get notified about upcoming exams' },
                          { key: 'gradeUpdates', label: 'Grade Updates', description: 'Receive notifications when grades are posted' },
                          { key: 'assignmentDue', label: 'Assignment Due Dates', description: 'Reminders for assignment deadlines' },
                          { key: 'announcements', label: 'School Announcements', description: 'Important updates from the institution' }
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <p className="text-[#101418] font-medium">{item.label}</p>
                              <p className="text-[#5c728a] text-sm">{item.description}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notifications[item.key]}
                                onChange={() => handleNotificationChange(item.key)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[#101418] text-lg font-medium mb-4">Delivery Methods</h4>
                      <div className="space-y-4">
                        {[
                          { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                          { key: 'smsNotifications', label: 'SMS Notifications', description: 'Receive notifications via text message' }
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <p className="text-[#101418] font-medium">{item.label}</p>
                              <p className="text-[#5c728a] text-sm">{item.description}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notifications[item.key]}
                                onChange={() => handleNotificationChange(item.key)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                  <h3 className="text-[#101418] text-xl font-bold mb-6">Privacy Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <label className="block text-[#101418] font-medium mb-2">Profile Visibility</label>
                      <p className="text-[#5c728a] text-sm mb-3">Who can see your profile information</p>
                      <select 
                        value={privacy.profileVisibility}
                        onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                        className="w-full p-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="public">Everyone</option>
                        <option value="friends">Friends Only</option>
                        <option value="private">Only Me</option>
                      </select>
                    </div>

                    {[
                      { key: 'showGrades', label: 'Show Grades to Classmates', description: 'Allow other students to see your academic performance' },
                      { key: 'showAttendance', label: 'Show Attendance Status', description: 'Display your attendance information to others' },
                      { key: 'allowMessaging', label: 'Allow Direct Messages', description: 'Let other students send you messages' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-[#101418] font-medium">{item.label}</p>
                          <p className="text-[#5c728a] text-sm">{item.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={privacy[item.key]}
                            onChange={() => handlePrivacyChange(item.key, !privacy[item.key])}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                  <h3 className="text-[#101418] text-xl font-bold mb-6">App Preferences</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#101418] font-medium mb-2">Theme</label>
                      <select 
                        value={preferences.theme}
                        onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                        className="w-full p-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="auto">Auto</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#101418] font-medium mb-2">Language</label>
                      <select 
                        value={preferences.language}
                        onChange={(e) => handlePreferenceChange('language', e.target.value)}
                        className="w-full p-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#101418] font-medium mb-2">Timezone</label>
                      <select 
                        value={preferences.timezone}
                        onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
                        className="w-full p-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="IST">IST (UTC+5:30)</option>
                        <option value="EST">EST (UTC-5)</option>
                        <option value="PST">PST (UTC-8)</option>
                        <option value="GMT">GMT (UTC+0)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#101418] font-medium mb-2">Date Format</label>
                      <select 
                        value={preferences.dateFormat}
                        onChange={(e) => handlePreferenceChange('dateFormat', e.target.value)}
                        className="w-full p-3 border border-[#d4dbe2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'account' && (
                <div className="bg-white rounded-xl border border-[#d4dbe2] p-6">
                  <h3 className="text-[#101418] text-xl font-bold mb-6">Account Management</h3>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="text-blue-800 font-medium mb-2">Change Password</h4>
                      <p className="text-blue-700 text-sm mb-4">Update your account password for better security</p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Change Password
                      </button>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="text-green-800 font-medium mb-2">Two-Factor Authentication</h4>
                      <p className="text-green-700 text-sm mb-4">Add an extra layer of security to your account</p>
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        Enable 2FA
                      </button>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <h4 className="text-orange-800 font-medium mb-2">Download Data</h4>
                      <p className="text-orange-700 text-sm mb-4">Download a copy of all your academic data</p>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                        Request Data Export
                      </button>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="text-red-800 font-medium mb-2">Deactivate Account</h4>
                      <p className="text-red-700 text-sm mb-4">Temporarily deactivate your student account</p>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        Deactivate Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Save Button */}
            <div className="flex justify-end gap-3 p-4">
              <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                Reset to Default
              </button>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Save All Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSettings;