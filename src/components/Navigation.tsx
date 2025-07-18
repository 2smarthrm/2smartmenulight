import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationItems = [
  { id: 'novidades', label: 'Novidades' },
  { id: 'modulos', label: 'Módulos e Relatórios' },
  { id: 'suporte', label: 'Centro de Suporte' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const { isDark } = useTheme();
  
  return (
    <nav className={`flex items-center justify-between mb-16 border-b px-8 lg:px-16 ${
      isDark ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="flex items-center gap-12">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`pb-4 font-medium transition-colors relative ${
              activeTab === item.id
                ? `${isDark ? 'text-white' : 'text-gray-900'} border-b-2 ${isDark ? 'border-white' : 'border-gray-600'}`
                : `${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      
      <ThemeToggle />
    </nav>
  );
};