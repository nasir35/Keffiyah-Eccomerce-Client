import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="relative w-36 h-36 border-4 border-gray-600 rounded-full text-center leading-36 text-orange-500 animate-pulse uppercase tracking-wider shadow-lg ring-shadow">
        Loading
        <span className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-transparent origin-left animate-rotate">
          <span className="absolute w-4 h-4 bg-orange-500 rounded-full -top-1.5 -right-2 shadow-lg"></span>
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
