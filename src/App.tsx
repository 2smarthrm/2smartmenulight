import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentCard } from './components/ContentCard';
import { SidePanel } from './components/SidePanel';
import { Navigation } from './components/Navigation';
import { ModulesPage } from './components/ModulesPage';
import { SupportPage } from './components/SupportPage';
import { LearningPage } from './components/LearningPage';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { contentItems } from './data/content';
import { ContentItem } from './types';

function AppContent() {
  const { isDark } = useTheme();
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('novidades');
  const [showLearningPage, setShowLearningPage] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSelectItem = (item: ContentItem) => {
    setSelectedItem(item);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  const handleLearnClick = () => {
    setShowLearningPage(true);
  };

  const handleBackFromLearning = () => {
    setShowLearningPage(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderContent = () => {
    if (showLearningPage) {
      return <LearningPage onBack={handleBackFromLearning} />;
    }

    if (activeTab === 'modulos') {
      return <ModulesPage />;
    }

    if (activeTab === 'suporte') {
      return <SupportPage onLearnClick={handleLearnClick} />;
    }

    // Default: Novidades content
    const currentItem = contentItems[currentSlide];
    
    return (
      <div className="px-8 lg:px-16 py-8">
        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <h1 className={`text-3xl lg:text-4xl font-normal mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            O que a 2Smart tem de novidades e campanhas!
          </h1>
          <p className={`text-base leading-relaxed mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Acompanhe as nossas comunicações importantes e novidades preparadas especialmente para si.
          </p>
          <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Desde promoções sazonais a atualizações de serviços — partilhamos tudo aqui.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 relative group">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {currentItem.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Tags */}
            <div className="flex gap-3">
              <span className={`px-4 py-2 text-sm rounded-full border ${
                isDark 
                ? 'bg-blue-600/20 text-blue-400 border-blue-600/30'
                :'bg-blue-400/20 text-blue-500 border-blue-600/40'
              }`}>
                {currentItem.subtitle}
              </span>
              <span className={`px-4 py-2 text-sm rounded-full border ${
                isDark 
                  ? 'bg-gray-800/50 text-gray-300 border-gray-700' 
                  : 'bg-gray-200/50 text-gray-700 border-gray-300'
              }`}>
                {currentItem.category}
              </span>
            </div>

            {/* Title */}
            <h3 className={`text-2xl lg:text-3xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {currentItem.description}
            </h3>

            {/* Description */}
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Acompanhe as nossas comunicações importantes e novidades preparadas especialmente para si.
              Desde promoções sazonais a atualizações de serviços — partilhamos tudo aqui.
              Acompanhe as nossas comunicações importantes.
            </p>

            {/* CTA Button */}
            <button 
              onClick={() => handleSelectItem(currentItem)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Saiba mais
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? (isDark ? 'bg-white' : 'bg-gray-900') 
                  : (isDark ? 'bg-gray-600 hover:bg-gray-400' : 'bg-gray-400 hover:bg-gray-600')
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className={`transition-all duration-300 ${isPanelOpen ? 'lg:mr-[500px]' : ''}`}>
        {/* Navigation - hide when showing learning page */}
        {!showLearningPage && (
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        )}

        {/* Content */}
        {renderContent()}
      </div>

      {/* Side Panel - only show for novidades tab and not on learning page */}
      {activeTab === 'novidades' && !showLearningPage && (
        <SidePanel
          item={selectedItem}
          isOpen={isPanelOpen}
          onClose={handleClosePanel}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;