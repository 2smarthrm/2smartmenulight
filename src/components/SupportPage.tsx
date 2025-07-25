import React from 'react';
import { Play, Info, Bug, Phone, Mail, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const supportOptions = [
  {
    id: 'learn',
    title: 'Aprender a usar o 2SMART',
    icon: Play,
    color: 'border-yellow-600 bg-yellow-600/10',
    iconColor: 'text-yellow-500',
  },
  {
    id: 'info',
    title: 'Centro de Informações 2SMART',
    icon: Info,
    color: 'border-green-600 bg-green-600/10',
    iconColor: 'text-green-500',
  },
  {
    id: 'report',
    title: 'Reportar Erro 2Smart',
    icon: Bug,
    color: 'border-red-600 bg-red-600/10',
    iconColor: 'text-red-500',
  },
];

const contactInfo = [
  {
    id: 'phone',
    label: 'Telefone',
    value: '+351 210 353 555',
    icon: Phone,
    color: 'text-green-500',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'helpdesk@2smart.pt',
    icon: Mail,
    color: 'text-orange-500',
  },
  {
    id: 'website',
    label: 'Website',
    value: 'www.2smart.pt',
    icon: Globe,
    color: 'text-red-500',
  },
];

interface SupportPageProps {
  onLearnClick: () => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onLearnClick }) => {
  const { isDark } = useTheme();
  
  const handleOptionClick = (optionId: string) => {
    if (optionId === 'learn') {
      onLearnClick();
    }
    // Handle other options here if needed
  };

  return (
    <div className="px-8 lg:px-16 py-8">
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Left Column - Support Options */}
        <div>
          {/* Header */}
          <div className="mb-16">
            <h1 className={`text-3xl lg:text-4xl font-normal mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              O que o 2Smart tem de novidades e campanhas!
            </h1>
            <p className={`text-base leading-relaxed mb-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Acompanhe as nossas comunicações importantes e novidades preparadas especialmente para si.
            </p>
            <p className={`text-base leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Desde promoções sazonais a atualizações de serviços — partilhamos tudo aqui.
            </p>
          </div>

          {/* Support Options */}
          <div className="space-y-6">
            {supportOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className={`w-full flex items-center gap-6 p-6 rounded-xl border ${option.color} hover:bg-opacity-20 transition-all duration-200 text-left`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${option.color}`}>
                    <IconComponent className={`w-6 h-6 ${option.iconColor}`} />
                  </div>
                  <span className={`text-lg font-medium ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {option.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column - Support Contact */}
        <div>
          <div className={`rounded-2xl p-8 ${
            isDark ? 'bg-gray-900/40' : 'bg-gray-50'
          }`}>
            <h2 className={`text-2xl font-semibold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Suporte
            </h2>
            
            <div className="space-y-8">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <div key={contact.id} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isDark ? 'bg-gray-800' : 'bg-gray-200'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${contact.color}`} />
                    </div>
                    <div>
                      <p className={`font-medium text-lg ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {contact.label}
                      </p>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                        {contact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`mt-12 pt-8 border-t ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <p className={`text-sm leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Caso tenha alguma dúvida, pode entrar em contacto, através dos meio de comunicação disponíveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};