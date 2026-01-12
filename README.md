# 💪 Fitness Progress Tracker

A modern, polished fitness progress-tracking interface built with React, TypeScript, and Tailwind CSS. Features real-time metrics, goal tracking, and weekly summaries with full test coverage.

## ✨ Features

- **Real-time Metrics Dashboard**: Display current weight, steps, workout duration, and calorie intake
- **Goal Tracking**: Visual progress bars for weekly fitness goals
- **Weekly Analytics**: Interactive bar charts showing 7-day activity trends
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Gradient backgrounds, smooth animations, color-coded components
- **Type-Safe**: Full TypeScript support with strict mode enabled
- **Well-Tested**: 38 tests covering all components (100% pass rate)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev
```

### Testing

```bash
# Run all tests
npm test

# Watch mode (continuous testing)
npm test:watch

# UI mode (visual test runner)
npm test:ui
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| Test Files | 8 |
| Total Tests | 38 |
| Pass Rate | 100% |
| Test Execution Time | ~9.75s |
| Components | 9 |
| Lines of Code | ~1,200 |

## 🎨 Technology Stack

### Frontend
- **React** 18.2.0 - UI library
- **TypeScript** 5.2 - Type safety
- **Tailwind CSS** 3.3.5 - Styling
- **Zustand** 4.4.0 - State management

### Development
- **Vite** 5.0.0 - Build tool & dev server
- **Vitest** 0.34.6 - Unit testing
- **Testing Library** 14.0.0 - Component testing
- **PostCSS** 8.4.31 - CSS processing

## 📁 Project Structure

```
src/
├── components/
│   ├── App.tsx                  # Main application
│   ├── Header.tsx               # Header component
│   ├── MetricsSection.tsx       # Current metrics display
│   ├── MetricCard.tsx           # Individual metric
│   ├── GoalsSection.tsx         # Goals overview
│   ├── GoalProgress.tsx         # Progress bar
│   ├── WeeklySection.tsx        # Weekly data section
│   ├── WeeklyChart.tsx          # Bar chart
│   └── Card.tsx                 # Reusable card
├── store/
│   └── fitnessStore.ts          # Zustand store
├── main.tsx                     # Entry point
└── index.css                    # Global styles
```

## 🧪 Testing

### Test Coverage

- **Unit Tests**: Component rendering, props, state management
- **Integration Tests**: Component interactions, data flow
- **E2E Tests**: User journey, dashboard display, accessibility

### Running Tests

```bash
# Run once
npm test

# Watch mode
npm test:watch

# Generate coverage report
npm test -- --coverage
```

## 🎯 Component Overview

### MetricCard
Displays a single fitness metric with icon, label, and value.
```tsx
<MetricCard
  label="Current Weight"
  value={75}
  unit="kg"
  icon="⚖️"
  color="blue"
/>
```

### GoalProgress
Shows progress toward a weekly goal with percentage.
```tsx
<GoalProgress
  name="Weight Loss Goal"
  current={75}
  target={72}
  unit="kg"
  color="blue"
/>
```

### WeeklyChart
Renders 7-day bar chart for activity tracking.
```tsx
<WeeklyChart
  data={weeklyData}
  label="Steps"
  unit="steps"
/>
```

## 📊 Data Structure

The app uses Zustand for state management with the following structure:

```typescript
interface FitnessData {
  currentWeight: number;
  currentSteps: number;
  workoutMinutes: number;
  calories: number;
  weightGoal: number;
  stepsGoal: number;
  workoutGoal: number;
  calorieGoal: number;
  weeklySteps: { day: string; value: number }[];
  weeklyWorkouts: { day: string; value: number }[];
}
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom:
- Gradient backgrounds
- Color-coded components (blue, green, orange, purple)
- Responsive grid layouts
- Smooth transitions and hover effects
- Mobile-first design

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests once |
| `npm test:watch` | Run tests in watch mode |
| `npm test:ui` | Open test UI dashboard |

## 📱 Responsive Breakpoints

- **Mobile**: 1 column layout
- **Tablet**: 2 column layout
- **Desktop**: 3-4 column layout

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🚨 Known Limitations

- Data is stored in memory (not persisted)
- No backend integration
- Charts are static visualizations

## 🔜 Future Enhancements

- [ ] LocalStorage persistence
- [ ] Backend API integration
- [ ] User authentication
- [ ] Data export (CSV, PDF)
- [ ] Custom date range selection
- [ ] Mobile app version
- [ ] Dark mode toggle
- [ ] Notifications & reminders

## 📝 License

MIT

## 👨‍💻 Development

### Setup Development Environment

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser to http://localhost:5173
```

### Code Quality

- **TypeScript**: Strict mode enabled
- **Linting**: ESLint ready
- **Formatting**: Prettier compatible

### Git Workflow

```bash
# Clone repository
git clone <repo-url>
cd fitness-progress-tracker

# Create feature branch
git checkout -b feature/your-feature

# Make changes and test
npm test

# Commit changes
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/your-feature
```

## 📞 Support

For issues or questions, please open an issue on GitHub.

## 🎉 Credits

Built as a demonstration of:
- React & TypeScript best practices
- Modern web development with Vite
- Comprehensive testing with Vitest
- Beautiful UI with Tailwind CSS
- State management with Zustand

---

**Status**: ✅ Production Ready | **Last Updated**: November 24, 2024
