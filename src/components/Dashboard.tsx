import React from 'react';
import { BarChart, Leaf, Target, Zap } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Emissions"
          value="2.5 tons"
          icon={<Zap className="text-yellow-500" size={24} />}
        />
        <DashboardCard
          title="Reduction Goal"
          value="20%"
          icon={<Target className="text-blue-500" size={24} />}
        />
        <DashboardCard
          title="Offset Actions"
          value="5"
          icon={<Leaf className="text-green-500" size={24} />}
        />
        <DashboardCard
          title="Carbon Savings"
          value="0.5 tons"
          icon={<BarChart className="text-purple-500" size={24} />}
        />
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="bg-white shadow rounded-lg divide-y divide-gray-200">
          <ActivityItem
            title="Logged commute"
            description="Bicycle ride - 5 miles"
            date="2 hours ago"
          />
          <ActivityItem
            title="Set new goal"
            description="Reduce emissions by 20% this month"
            date="Yesterday"
          />
          <ActivityItem
            title="Offset action"
            description="Planted 5 trees"
            date="3 days ago"
          />
        </ul>
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl sm:text-3xl font-bold">{value}</p>
    </div>
  );
};

const ActivityItem: React.FC<{ title: string; description: string; date: string }> = ({ title, description, date }) => {
  return (
    <li className="p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm text-gray-400 mt-1 sm:mt-0">{date}</p>
      </div>
    </li>
  );
};

export default Dashboard;