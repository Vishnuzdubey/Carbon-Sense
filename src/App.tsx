import React, { useState } from 'react';
import { Leaf, BarChart, Target, Zap, Menu } from 'lucide-react';
import Dashboard from './components/Dashboard';
import EmissionsTracker from './components/EmissionsTracker';
import ReductionGoals from './components/ReductionGoals';
import OffsetActions from './components/OffsetActions';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'emissions':
        return <EmissionsTracker />;
      case 'goals':
        return <ReductionGoals />;
      case 'offset':
        return <OffsetActions />;
      default:
        return <Dashboard />;
    }
  };

  const NavItem = ({ tab, icon, label }: { tab: string; icon: React.ReactNode; label: string }) => (
    <button
      onClick={() => {
        setActiveTab(tab);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center p-2 ${activeTab === tab ? 'font-bold bg-green-700' : ''}`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center">
            <Leaf className="mr-2" /> CarbonSense
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <NavItem tab="dashboard" icon={<BarChart className="mr-1" size={18} />} label="Dashboard" />
              <NavItem tab="emissions" icon={<Zap className="mr-1" size={18} />} label="Emissions" />
              <NavItem tab="goals" icon={<Target className="mr-1" size={18} />} label="Goals" />
              <NavItem tab="offset" icon={<Leaf className="mr-1" size={18} />} label="Offset" />
            </ul>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <nav className="md:hidden bg-green-600 text-white">
          <ul className="flex flex-col">
            <NavItem tab="dashboard" icon={<BarChart className="mr-1" size={18} />} label="Dashboard" />
            <NavItem tab="emissions" icon={<Zap className="mr-1" size={18} />} label="Emissions" />
            <NavItem tab="goals" icon={<Target className="mr-1" size={18} />} label="Goals" />
            <NavItem tab="offset" icon={<Leaf className="mr-1" size={18} />} label="Offset" />
          </ul>
        </nav>
      )}
      <main className="flex-grow container mx-auto mt-8 px-4">
        {renderContent()}
      </main>
      <footer className="bg-green-600 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CarbonSense. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;