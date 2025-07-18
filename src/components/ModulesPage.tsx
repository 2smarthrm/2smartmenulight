import React, { useState } from 'react';
import { Stethoscope, Settings, Users, Play, TrendingUp, BarChart3 } from 'lucide-react';
import { ModuleModal } from './ModuleModal';
import { useTheme } from '../contexts/ThemeContext';

interface Module {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ComponentType<any>;
  category: string;
  features: string[];
  demoImage: string;
  detailedDescription: string;
}

const modules: Module[] = [
  {
    id: 'medicina',
    title: 'Medicina',
    description: 'Sistema completo de gestão médica com prontuários eletrônicos e agendamento.',
    price: '€19/mês',
    icon: Stethoscope,
    category: 'Saúde',
    features: [
      'Prontuários eletrônicos',
      'Agendamento de consultas',
      'Histórico médico completo',
      'Receitas digitais',
      'Relatórios médicos'
    ],
    demoImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailedDescription: 'O módulo de Medicina oferece uma solução completa para gestão de clínicas e consultórios médicos. Com interface intuitiva e recursos avançados, permite o controlo total dos processos médicos.'
  },
  {
    id: 'onboarding',
    title: 'Onboarding',
    description: 'Processo automatizado de integração de novos colaboradores.',
    price: '€149/mês',
    icon: Settings,
    category: 'RH',
    features: [
      'Fluxos de integração personalizados',
      'Documentação automática',
      'Acompanhamento de progresso',
      'Notificações automáticas',
      'Dashboard de métricas'
    ],
    demoImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailedDescription: 'Simplifique o processo de integração de novos colaboradores com fluxos automatizados e acompanhamento em tempo real.'
  },
  {
    id: 'formacao',
    title: 'Formação',
    description: 'Plataforma de e-learning com cursos e certificações.',
    price: '€199/mês',
    icon: Users,
    category: 'Educação',
    features: [
      'Criação de cursos online',
      'Sistema de avaliações',
      'Certificados automáticos',
      'Relatórios de progresso',
      'Gamificação'
    ],
    demoImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailedDescription: 'Desenvolva e gerencie programas de formação completos com nossa plataforma de e-learning avançada.'
  },
  {
    id: 'streaming',
    title: 'Streaming & Media',
    description: 'Solução completa para transmissões ao vivo e gestão de conteúdo.',
    price: '€399/mês',
    icon: Play,
    category: 'Media',
    features: [
      'Transmissões ao vivo HD',
      'Gestão de conteúdo',
      'Analytics avançados',
      'Multi-plataforma',
      'CDN global'
    ],
    demoImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailedDescription: 'Plataforma profissional para streaming e gestão de conteúdo multimedia com qualidade broadcast.'
  },
  {
    id: 'gestao-activos',
    title: 'Gestão de Ativos Empresariais',
    description: 'Controlo completo de ativos e inventário empresarial.',
    price: '€249/mês',
    icon: TrendingUp,
    category: 'Gestão',
    features: [
      'Inventário em tempo real',
      'Rastreamento de ativos',
      'Manutenção preventiva',
      'Relatórios financeiros',
      'Códigos QR/RFID'
    ],
    demoImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailedDescription: 'Gerencie todos os ativos da sua empresa com controlo total sobre localização, estado e valor.'
  },
  {
    id: 'analytics',
    title: 'Analytics Avançado',
    description: 'Dashboard inteligente com análises preditivas e BI.',
    price: '€349/mês',
    icon: BarChart3,
    category: 'Analytics',
    features: [
      'Dashboards personalizados',
      'Análise preditiva',
      'Machine Learning',
      'Relatórios automáticos',
      'Integração de dados'
    ],
    demoImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailedDescription: 'Transforme dados em insights acionáveis com nossa plataforma de analytics powered by AI.'
  },
];

export const ModulesPage: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModuleClick = (module: Module) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedModule(null), 300);
  };

  return (
    <div className="px-8 lg:px-16 py-8">
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className={`text-3xl lg:text-4xl font-normal mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Módulos e Relatórios
        </h1>
        <p className={`text-base leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Escolha os módulos que melhor se adequam às necessidades da sua empresa. Cada módulo é desenvolvido com tecnologia de ponta e pode ser personalizado.
        </p>
      </div>

      {/* Recursos Humanos Section */}
      <div className="mb-12">
        <h2 className={`text-xl font-semibold mb-8 text-center ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Recursos Humanos & Gestão
        </h2>
        
        <div className="space-y-4 max-w-6xl mx-auto">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <div
                key={module.id}
                className={`flex items-center justify-between p-6 border rounded-xl transition-all cursor-pointer group ${
                  isDark 
                    ? 'bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 hover:border-gray-700' 
                    : 'bg-gray-50/50 border-gray-200 hover:bg-gray-100/70 hover:border-gray-300'
                }`}
                onClick={() => handleModuleClick(module)}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    isDark 
                      ? 'bg-gray-800 group-hover:bg-gray-700' 
                      : 'bg-gray-200 group-hover:bg-gray-300'
                  }`}>
                    <IconComponent className={`w-6 h-6 transition-colors ${
                      isDark 
                        ? 'text-gray-400 group-hover:text-white' 
                        : 'text-gray-600 group-hover:text-gray-900'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className={`text-lg font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {module.title}
                      </h3>
                      <span className={`px-3 py-1 text-sm rounded-full border ${
                      isDark ? 'bg-white/10 text-white-400 border-white/40' : 'bg-black/10 rounded-full border border-black/30'}`}>
                        {module.price}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {module.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 text-xs rounded-full border ${
                    isDark ? 'bg-blue-600/20 text-blue-400 border-blue-600/30' : 'bg-blue-600/20 text-blue-600 border-blue-600/50'}`}>
                    {module.category}
                  </span>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16">
        <p className={`text-sm ${
          isDark ? 'text-gray-500' : 'text-gray-400'
        }`}>
          by Exportech Portugal 2024 v.1.0.0 | Termos De Licenciamento
        </p>
      </div>

      {/* Module Modal */}
      <ModuleModal
        module={selectedModule}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};