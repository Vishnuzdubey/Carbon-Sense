import React, { useState } from 'react';
import { Car, Home, ShoppingBag, Utensils } from 'lucide-react';

const EmissionsTracker: React.FC = () => {
  const [emissions, setEmissions] = useState({
    transportation: 0,
    home: 0,
    food: 0,
    shopping: 0,
  });

  const handleEmissionChange = (category: keyof typeof emissions, value: number) => {
    setEmissions(prev => ({ ...prev, [category]: value }));
  };

  const totalEmissions = Object.values(emissions).reduce((sum, value) => sum + value, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Emissions Tracker</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <EmissionCategory
          title="Transportation"
          icon={<Car className="text-blue-500" size={24} />}
          value={emissions.transportation}
          onChange={(value) => handleEmissionChange('transportation', value)}
        />
        <EmissionCategory
          title="Home Energy"
          icon={<Home className="text-green-500" size={24} />}
          value={emissions.home}
          onChange={(value) => handleEmissionChange('home', value)}
        />
        <EmissionCategory
          title="Food"
          icon={<Utensils className="text-yellow-500" size={24} />}
          value={emissions.food}
          onChange={(value) => handleEmissionChange('food', value)}
        />
        <EmissionCategory
          title="Shopping"
          icon={<ShoppingBag className="text-purple-500" size={24} />}
          value={emissions.shopping}
          onChange={(value) => handleEmissionChange('shopping', value)}
        />
      </div>
      <div className="mt-8 bg-white p-4 sm:p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Total Emissions</h3>
        <p className="text-2xl sm:text-3xl font-bold">{totalEmissions.toFixed(2)} tons CO2e</p>
      </div>
    </div>
  );
};

const EmissionCategory: React.FC<{
  title: string;
  icon: React.ReactNode;
  value: number;
  onChange: (value: number) => void;
}> = ({ title, icon, value, onChange }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Enter emissions in tons CO2e"
      />
    </div>
  );
};

export default EmissionsTracker;