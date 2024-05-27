// src/Components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <div className="flex items-center mb-2">
        <i className="bi bi-telephone text-gray-700 mr-2"></i>
        <span className="text-lg text-gray-700">+91 899390000</span>
      </div>
      <div className="flex items-center">
        <i className="bi bi-envelope text-gray-700 mr-2"></i>
        <span className="text-lg text-gray-700">bharat@gmail.com</span>
      </div>
    </div>
  );
};

export default Contact;