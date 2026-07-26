import React from 'react';
import { SKILL_GROUPS } from '../constants';

const SkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SKILL_GROUPS.map((group) => (
        <div
          key={group.category}
          className="bg-white dark:bg-stone-950 rounded-xl p-6 border border-stone-100 dark:border-stone-800 shadow-sm hover:border-orange-200 dark:hover:border-orange-500/40 transition-colors"
        >
          <h3 className="text-xs font-bold text-orange-700 dark:text-orange-500 uppercase tracking-wider mb-4">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-sm font-medium rounded-md border border-stone-100 dark:border-stone-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
