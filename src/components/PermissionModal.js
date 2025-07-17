import React from 'react';

const PermissionModal = ({ isOpen, onClose, actionType }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <span className="material-icons text-red-600" style={{fontSize: '24px'}}>block</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
          Permission Denied
        </h3>
        
        <p className="text-gray-600 text-center mb-6">
          You don't have permission to add {actionType}. Please contact the organization super-admin for access.
        </p>
        
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionModal;