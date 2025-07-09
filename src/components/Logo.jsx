import React from 'react';
const Logo = () => {
  return (
    <div className="flex items-center space-x-2 bg-[#ff5c5c] px-4 py-2 rounded">
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L17 5.5L12 9L7 5.5L12 2ZM12 10.5L17 14L12 17.5L7 14L12 10.5ZM12 19L17 22.5L12 26L7 22.5L12 19Z" />
      </svg>
      <span className="text-white font-semibold text-lg">Mybindle</span>
    </div>
  );
};
export default Logo;