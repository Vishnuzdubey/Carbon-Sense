import React, { useState } from 'react';
import { Leaf, Sprout, Recycle, Wind } from 'lucide-react';

interface OffsetAction {
  id: number;
  title: string;
  description: string;
  impact: number;
  icon: React.ReactNode;
}

const OffsetActions: React.FC = () => {
  const [completedActions, setCompletedActions] = useState<number[]>([]);

  const offsetActions: OffsetAction[] = [
    {
      id: 1,
      title: 'Plant Trees',
      description: 'Plant trees to absorb CO2 from the atmosphere.',
      impact: 0.5,
      icon: <Sprout className="text-green-500" size={24} />,
    },
    {
      id: 2,
      title: 'Renewable Energy Credits',
      description: 'Purchase renewable energy credits to support clean energy production.',
      impact: 1.0,
      icon: <Wind className="text-blue-500" size={24} />,
    },
    {
      id: 3,
      title: 'Recycling Program',
      description: 'Implement a comprehensive recycling program in your community.',
      impact: 0.75,
      icon: <Recycle className="text-yellow-500" size={24} />,
    },
    {
      id: 4,
      title: 'Sustainable Transportation',
      description: 'Switch to electric or hybrid vehicles for daily commutes.',
      impact: 1.25,
      icon: <Leaf className="text-purple-500" size={24} />,
    },
  ];

  const handleCompleteAction = (id: number) => {
    if (completedActions.includes(id)) {
      setCompletedActions(completedActions.filter(actionId => actionId !== id));
    } else {
      setCompletedActions([...completedActions, id]);
    }
  };

  const totalOffset = completedActions.reduce((sum, id) => {
    const action = offsetActions.find(a => a.id === id);
    return sum + (action ? action.impact : 0);
  }, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Offset Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {offsetActions.map(action => (
          <div key={action.id} className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {action.icon}
                <h3 className="text-base sm:text-lg font-semibold ml-2">{action.title}</h3>
              </div>
              <span className="text-green-500 font-semibold">{action.impact} tons CO2e</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4">{action.description}</p>
            <button
              onClick={() => handleCompleteAction(action.id)}
              className={`w-full py-2 px-4 rounded ${
                completedActions.includes(action.id)
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {completedActions.includes(action.id) ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white p-4 sm:p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Total Carbon Offset</h3>
        <p className="text-2xl sm:text-3xl font-bold text-green-500">{totalOffset.toFixed(2)} tons CO2e</p>
      </div>
    </div>
  );
};

export default OffsetActions;