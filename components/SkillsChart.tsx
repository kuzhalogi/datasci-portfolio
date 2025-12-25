import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import { SKILLS } from '../constants';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-100 shadow-xl rounded-lg">
        <p className="font-bold text-gray-900">{payload[0].payload.name}</p>
        <p className="text-red-600 font-medium">Proficiency: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const SkillsChart: React.FC = () => {
  // Sort skills for bar chart
  const sortedSkills = [...SKILLS].sort((a, b) => b.level - a.level);

  return (
    <div className="w-full h-[400px] bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold text-gray-900 mb-6 self-start w-full">Technical Proficiency</h3>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedSkills}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={100} 
              tick={{ fill: '#374151', fontSize: 14, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F3F4F6' }} />
            <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
              {sortedSkills.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index < 3 ? '#DC2626' : '#4B5563'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SkillsChart;
