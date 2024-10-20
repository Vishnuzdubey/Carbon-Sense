import React, { useState } from 'react';
import { Target, Check, X } from 'lucide-react';

interface Goal {
  id: number;
  description: string;
  target: number;
  current: number;
}

const ReductionGoals: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, description: 'Reduce transportation emissions', target: 20, current: 5 },
    { id: 2, description: 'Lower home energy consumption', target: 15, current: 10 },
    { id: 3, description: 'Decrease food waste', target: 30, current: 15 },
  ]);

  const [newGoal, setNewGoal] = useState({ description: '', target: 0 });

  const handleAddGoal = () => {
    if (newGoal.description && newGoal.target > 0) {
      setGoals([...goals, { ...newGoal, id: Date.now(), current: 0 }]);
      setNewGoal({ description: '', target: 0 });
    }
  };

  const handleUpdateProgress = (id: number, progress: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, current: Math.min(progress, goal.target) } : goal
    ));
  };

  const handleDeleteGoal = (id: number) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reduction Goals</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add New Goal</h3>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            value={newGoal.description}
            onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
            placeholder="Goal description"
            className="flex-grow p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={newGoal.target}
            onChange={(e) => setNewGoal({ ...newGoal, target: parseInt(e.target.value) || 0 })}
            placeholder="Target reduction %"
            className="w-full sm:w-32 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleAddGoal}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Goal
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {goals.map(goal => (
          <div key={goal.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold">{goal.description}</h4>
              <button
                onClick={() => handleDeleteGoal(goal.id)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Target className="text-blue-500 hidden sm:block" size={24} />
              <div className="flex-grow">
                <div className="h-4 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${(goal.current / goal.target) * 100}%` }}
                  ></div>
                </div>
              </div>
              <span className="font-semibold whitespace-nowrap">{goal.current}% / {goal.target}%</span>
            </div>
            <div className="mt-2">
              <input
                type="range"
                min="0"
                max={goal.target}
                value={goal.current}
                onChange={(e) => handleUpdateProgress(goal.id, parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            {goal.current >= goal.target && (
              <div className="mt-2 flex items-center text-green-500">
                <Check size={20} className="mr-1" />
                <span>Goal achieved!</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReductionGoals;