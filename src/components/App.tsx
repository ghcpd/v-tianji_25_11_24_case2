import React from 'react';
import { Header } from './Header';
import { MetricsSection } from './MetricsSection';
import { GoalsSection } from './GoalsSection';
import { WeeklySection } from './WeeklySection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <MetricsSection />
        <GoalsSection />
        <WeeklySection />
      </main>
      <footer className="border-t border-gray-200 mt-12 py-6 text-center text-gray-600">
        <p>&copy; 2024 Fitness Progress Tracker. Keep pushing forward! 💪</p>
      </footer>
    </div>
  );
};
