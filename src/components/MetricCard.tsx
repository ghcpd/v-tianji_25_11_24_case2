import React from 'react';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

const colorClasses = {
  blue: 'bg-blue-50 border-blue-200',
  green: 'bg-green-50 border-green-200',
  orange: 'bg-orange-50 border-orange-200',
  purple: 'bg-purple-50 border-purple-200',
};

const iconColorClasses = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
  purple: 'text-purple-600',
};

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  icon,
  color,
}) => {
  return (
    <div
      className={`rounded-lg border-2 p-4 ${colorClasses[color]} transition-transform hover:scale-105`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {value}
            {unit && <span className="text-lg ml-1">{unit}</span>}
          </p>
        </div>
        <div className={`text-3xl ${iconColorClasses[color]}`}>{icon}</div>
      </div>
    </div>
  );
};
