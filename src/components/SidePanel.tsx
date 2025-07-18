import React from 'react';
import { X, Tag, CheckCircle } from 'lucide-react';
import { ContentItem } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface SidePanelProps {
  item: ContentItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SidePanel: React.FC<SidePanelProps> = ({ item, isOpen, onClose }) => {
  const { isDark } = useTheme();
  
  if (!item) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full lg:w-[500px] border-l z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          isDark 
            ? 'bg-black border-gray-800' 
            : 'bg-white border-gray-200'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className={`flex items-center justify-between p-8 border-b ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div>
              <h2 className={`text-2xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>WEBSITE</h2>
              <p className="text-blue-400 font-medium">CORPORATIVO</p>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
              }`}
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="space-y-8">
              {/* Main Image */}
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {[
                  'ATRAENTE',
                  'INOVADOR',
                  'EFICIENTE',
                  'FUNCIONAL',
                  'SOFISTICADO',
                  'MODERNO',
                  'INTUITIVO',
                  'CONFIÁVEL',
                  'ELEGANTE',
                  'DINÂMICO',
                  'IMPACTANTE',
                  'RESPONSIVO',
                  'CATIVANTE',
                  'ACESSÍVEL',
                  'VERSÁTIL',
                  'SEGURO',
                  'INTERATIVO',
                  'ADAPTÁVEL'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-blue-400 rounded-full" />
                    <span className={`text-sm font-medium tracking-wider ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Text */}
              <div className={`pt-8 border-t ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <p className="text-blue-400 font-medium text-sm tracking-wider">
                  MAIS QUE ADJETIVOS, <span className={isDark ? 'text-white' : 'text-gray-900'}>QUALIDADE EM CADA DETALHE</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};