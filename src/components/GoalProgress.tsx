import React from 'react';

interface GoalProps {
  name: string;
  current: number;
  target: number;
  unit: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

const colorProgressClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  purple: 'bg-purple-500',
};

export const GoalProgress: React.FC<GoalProps> = ({
  name,
  current,
  target,
  unit,
  color,
}) => {
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <span className="text-sm text-gray-600">
          {current} / {target} {unit}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${colorProgressClasses[color]} transition-all duration-500 rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">{Math.round(percentage)}% complete</p>
    </div>
  );
};
