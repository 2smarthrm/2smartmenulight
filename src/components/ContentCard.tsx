import React from 'react';
import { ContentItem } from '../types';

interface ContentCardProps {
  item: ContentItem;
  onSelect: (item: ContentItem) => void;
}

export const ContentCard: React.FC<ContentCardProps> = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="flex-shrink-0 w-[580px] h-[400px] bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] group relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-black/80" />
      </div>
      
      {/* Content */}
      <div className="relative h-full p-12 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-sm rounded-full">
              {item.category}
            </span>
            <span className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm text-white text-sm rounded-full">
              {item.subtitle}
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            {item.title}
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Bottom Section */}
        <div>
          <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
            Saiba mais
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};