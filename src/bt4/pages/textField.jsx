// BasicTextField.js
import React from 'react';

function BasicTextField({ label, type, value, onChange, name, error, helperText, className }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm ${className}`}
      />
      {helperText && <p className="mt-2 text-sm text-red-600">{helperText}</p>}
    </div>
  );
}

export default BasicTextField;
