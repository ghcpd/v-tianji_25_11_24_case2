import { MetricCard } from './components/MetricCard';
import { GoalCard } from './components/GoalCard';
import { WeeklySummaryComponent } from './components/WeeklySummary';
import { mockMetrics, mockGoals, mockWeeklySummary } from './mockData';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🏋️ Fitness Progress Tracker</h1>
        <p className="app-subtitle">Track your journey to a healthier you</p>
      </header>

      <main className="app-main">
        <section className="metrics-section">
          <h2 className="section-title">Your Metrics</h2>
          <div className="metrics-grid">
            {mockMetrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </section>

        <section className="goals-section">
          <h2 className="section-title">Goals</h2>
          <div className="goals-grid">
            {mockGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </section>

        <section className="summary-section">
          <WeeklySummaryComponent summary={mockWeeklySummary} />
        </section>
      </main>

      <footer className="app-footer">
        <p>Keep pushing your limits! 💪</p>
      </footer>
    </div>
  );
}

export default App;
