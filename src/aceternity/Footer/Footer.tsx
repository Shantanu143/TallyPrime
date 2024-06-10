import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-sm hover:text-gray-500 transition duration-300">
              Tally Prime
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-500 transition duration-300">
              Excel & Advance Excel 
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
