import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { VideoPlayerModal } from './VideoPlayerModal';
import { useTheme } from '../contexts/ThemeContext';

interface LearningCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  onClick: () => void;
  isDark: boolean;
}

const LearningCard: React.FC<LearningCardProps> = ({ title, subtitle, description, image, tags, onClick, isDark }) => {
  return (
    <div 
      onClick={onClick}
      className={`rounded-2xl overflow-hidden border transition-all duration-300 group cursor-pointer ${
        isDark 
          ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' 
          : 'bg-gray-50/50 border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={`text-sm leading-relaxed mb-4 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {description}
        </p>
        
        {/* Learn More Button */}
        <button className="text-green-400 hover:text-green-300 font-medium text-sm transition-colors">
          Saiba mais
        </button>
      </div>
    </div>
  );
};

const learningContent = [
  {
    title: 'Chegadas e saídas automáticas com Geofence',
    subtitle: 'Localização',
    description: 'Ativa ações automáticas com base na localização do teu smartphone. O 2smart detecta quando entras ou sais de uma área definida - ideal para automatizar rotinas sem mexer no app.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Localização', 'Automatização']
  },
  {
    title: 'Chegadas e saídas automáticas com Geofence',
    subtitle: 'Localização',
    description: 'Ativa ações automáticas com base na localização do teu smartphone. O 2smart detecta quando entras ou sais de uma área definida - ideal para automatizar rotinas sem mexer no app.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Localização', 'Automatização']
  },
  {
    title: 'Chegadas e saídas automáticas com Geofence',
    subtitle: 'Localização',
    description: 'Ativa ações automáticas com base na localização do teu smartphone. O 2smart detecta quando entras ou sais de uma área definida - ideal para automatizar rotinas sem mexer no app.',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Localização', 'Automatização']
  },
  {
    title: 'Controlo de Dispositivos Inteligentes',
    subtitle: 'Automação',
    description: 'Aprende a controlar todos os teus dispositivos smart de forma centralizada. Desde luzes a termostatos, tudo numa só aplicação.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Automação', 'Dispositivos']
  },
  {
    title: 'Configuração de Rotinas Personalizadas',
    subtitle: 'Personalização',
    description: 'Cria rotinas personalizadas que se adaptam ao teu estilo de vida. Automatiza tarefas diárias e poupa tempo e energia.',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Personalização', 'Rotinas']
  },
  {
    title: 'Monitorização em Tempo Real',
    subtitle: 'Monitorização',
    description: 'Acompanha o estado dos teus dispositivos em tempo real. Recebe notificações e mantém-te sempre informado.',
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Monitorização', 'Tempo Real']
  }
];

interface LearningPageProps {
  onBack: () => void;
}

export const LearningPage: React.FC<LearningPageProps> = ({ onBack }) => {
  const { isDark } = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<typeof learningContent[0] | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(learningContent.length / itemsPerPage);

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return learningContent.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleCardClick = (item: typeof learningContent[0]) => {
    setSelectedVideo(item);
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <div className="px-8 lg:px-16 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className={`flex items-center gap-2 transition-colors mb-8 ${
          isDark 
            ? 'text-gray-400 hover:text-white' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar ao Centro de Suporte
      </button>

      {/* Header */}
      <div className="mb-16 max-w-4xl">
        <h1 className={`text-3xl lg:text-4xl font-normal mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Aprender a usar o 2SMART
        </h1>
        <p className={`text-base leading-relaxed mb-2 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Explore vídeos curtos e práticos que mostram como tirar o máximo partido do 2SMART.
        </p>
        <p className={`text-base leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Aprenda passo a passo a configurar, personalizar e usar todas as funcionalidades — ao seu ritmo e sem complicações.
        </p>
      </div>

      {/* Learning Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {getCurrentItems().map((item, index) => (
          <LearningCard
            key={`${currentPage}-${index}`}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            image={item.image}
            tags={item.tags}
            onClick={() => handleCardClick(item)}
            isDark={isDark}
          />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-8">
        <button
          onClick={prevPage}
          className={`p-2 rounded-lg transition-colors ${
            isDark 
              ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
              : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
          }`}
          disabled={totalPages <= 1}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentPage 
                  ? (isDark ? 'bg-white' : 'bg-gray-900') 
                  : (isDark ? 'bg-gray-600 hover:bg-gray-400' : 'bg-gray-400 hover:bg-gray-600')
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          className={`p-2 rounded-lg transition-colors ${
            isDark 
              ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
              : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
          }`}
          disabled={totalPages <= 1}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
        videoTitle={selectedVideo?.title || ''}
      />
    </div>
  );
};