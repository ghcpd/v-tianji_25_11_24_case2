import React from 'react';

interface WeeklyDataPoint {
  day: string;
  value: number;
  maxValue: number;
}

interface WeeklyChartProps {
  data: WeeklyDataPoint[];
  label: string;
  unit: string;
}

export const WeeklyChart: React.FC<WeeklyChartProps> = ({ data, label, unit }) => {
  const maxValue = Math.max(...data.map((d) => d.maxValue));

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{label} - Weekly Summary</h3>
      <div className="flex items-end justify-between h-40 gap-2">
        {data.map((point) => {
          const heightPercentage = (point.value / maxValue) * 100;
          return (
            <div key={point.day} className="flex flex-col items-center flex-1">
              <div className="relative w-full flex items-end justify-center h-32">
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all duration-300 hover:opacity-80"
                  style={{ height: `${heightPercentage}%` }}
                  title={`${point.value} ${unit}`}
                />
              </div>
              <p className="text-xs font-semibold text-gray-700 mt-2">{point.day}</p>
              <p className="text-xs text-gray-500">{point.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
