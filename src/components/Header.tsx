import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">💪 Fitness Progress Tracker</h1>
            <p className="text-blue-100 mt-2">Monitor your health metrics and achieve your goals</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-blue-100">Week of Nov 24, 2024</p>
          </div>
        </div>
      </div>
    </header>
  );
};
