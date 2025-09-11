import React, { useState } from "react";
import {
  CalendarCheck,
  CalendarRange,
  Users,
  Clock,
  FileClock,
  BarChart3,
  Fingerprint,
  Filter,
  MapPin,
  ScanLine,
  List,
  Radar,
  Workflow,
} from "lucide-react";
import { ModuleModal } from "./ModuleModal";
import { useTheme } from "../contexts/ThemeContext";

interface Module {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ComponentType<any>;
  category: string;
  features: string[];
  demoImage: string;
  demoVideo?: string;
  detailedDescription: string;
  note?: string;
}

const modules: Module[] = [
  {
    id: "assiduidades_subsidios",
    title: "Mapa Resumo de Assiduidade e Subsídios",
    description:
      "Veja, num só mapa, todas as horas, faltas, férias e subsídios dos seus colaboradores, para o período de tempo que definir.",
    price: "8€/mês",
    icon: BarChart3,
    category: "Relatórios",
    features: [
      "Totais de horas previstas, trabalhadas e de ausência",
      "Faltas classificadas e não classificadas",
      "Horas extra e Banco de Horas",
      "Dias de férias e subsídios",
    ],
    demoImage: "https://i.imgur.com/PchiS0S.png",
    demoVideo: "https://youtu.be/bQD-qSXCYxY",
    detailedDescription:
      "O Mapa Resumo de Assiduidade e Subsídios apresenta, por colaborador e para o período selecionado, o total de horas previstas e trabalhadas, faltas (classificadas e não classificadas), horas extra (classificadas e não classificadas), saldo de Banco de Horas (quando aplicável), dias de férias gozados e número de dias de subsídio de alimentação a que tem direito. O mapa pode ser gerado com ou sem segmentação por estrutura.",
  },
  {
    id: "empresa_externa",
    title: "Mapa de Resumo de Assiduidade de Empresas Externas",
    description:
      "Resumo de assiduidade dedicado a colaboradores de empresas externas.",
    price: "8€/mês",
    icon: Users,
    category: "Relatórios",
    features: [
      "Gestão de empresas e colaboradores externos",
      "Alocação a empresas do grupo",
      "Relatório de assiduidade para externos",
      "Horas, faltas e desempenho",
    ],
    demoImage: "https://i.imgur.com/OEP3gH0.png",
    demoVideo: "https://www.youtube.com/watch?v=iLlEDHfi7ZM",
    detailedDescription:
      "O sistema permite alocar colaboradores de empresas externas, como por exemplo empresas de trabalho temporário, à sua organização. Estas empresas e os seus colaboradores podem ser criados no sistema e associados à sua empresa para executar tarefas. Além de monitorizar a assiduidade, é gerado um relatório específico — semelhante ao Mapa Resumo de Assiduidade — que garante controlo e análise detalhada do desempenho,  pode ainda ser disponibilizado diretamente às próprias empresas externas, caso seja definido esse acesso.",
  },
  {
    id: "faltas",
    title: "Mapa de Faltas - Filtro",
    description: "Filtros avançados no Mapa de Faltas.",
    price: "8€/mês",
    icon: Filter,
    category: "Relatórios",
    features: [
      "Filtragem por estado da falta",
      "Filtragem por tipo de classificação",
      "Visualização segmentada das ausências",
      "Facilita a análise detalhada",
    ],
    demoImage: "https://i.imgur.com/YB9VYSS.png",
    demoVideo: "https://youtu.be/NMPP8TSqi8w",
    detailedDescription:
      "Relatório de faltas que permite aplicar filtros avançados por estado e tipo de classificação, facilitando a análise e segmentação da informação.",
  },
  {
    id: "registo_tempo",
    title: "Registo de Trabalho sem Contar Horas Suplementares",
    description:
      "Registos de tempos de trabalho sem horas extra “a não considerar”.",
    price: "8€/mês",
    icon: FileClock,
    category: "Relatórios",
    features: [
      "Registo detalhado de tempos de trabalho por colaborador",
      "Informação precisa e ajustada à política da empresa",
      "Visualização clara e objetiva",
      "Exportação do relatório para diferentes formatos",
    ],
    demoImage: "https://i.imgur.com/Bh64ykm.png",
    demoVideo: "https://youtu.be/2d25bmxjZ7M",
    detailedDescription:
      "Relatório que apresenta o registo dos tempos de trabalho dos colaboradores, semelhante ao Mapa de Registos de Tempos de Trabalho, mas excluindo as horas extra classificadas como “não considerar” na contabilização. Estas horas são assim marcadas por não terem sido previamente autorizadas pela entidade competente.",
  },
  {
    id: "registo_tempo_maps",
    title: "Registo de Tempos de Trabalho - Maps",
    description: "Registos de trabalho com localização via Geofencing.",
    price: "8€/mês",
    icon: MapPin,
    category: "Relatórios",
    features: [
      "Registo detalhado das horas trabalhadas",
      "Indicação do local exato das marcações",
      "Integração com a funcionalidade de Geofencing",
    ],
    demoImage: "https://i.imgur.com/RIoR4Sq.png",
    demoVideo: "https://youtu.be/_wEuey2PjmA",
    detailedDescription:
      "Relatório semelhante ao Mapa de Registos de Tempos de Trabalho, mas com indicação do local exato onde cada registo foi efetuado, através de dados de geolocalização. Disponível para clientes que utilizam a funcionalidade de Geofencing.",
  },
  {
    id: "picagens_vm",
    title: "Mapa de Métodos de Picagem por Dispositivo",
    description: "Consulta de picagens por dispositivo com detalhe do método.",
    price: "8€/mês",
    icon: Fingerprint,
    category: "Relatórios",
    features: [
      "Listagem de picagens por dispositivo",
      "Indicação do método de registo (VerifyMode)",
      "Remoção opcional do cabeçalho do relatório",
    ],
    demoImage: "https://i.imgur.com/f97vPsV.png",
    demoVideo: "https://youtu.be/h_8jWnJjwO0",
    detailedDescription:
      "Mapa que mostra, por dispositivo, os colaboradores que efetuaram picagens e o método utilizado. Permite ordenar pelas colunas disponíveis, como por exemplo o nome do colaborador, identificando de imediato em que dispositivo registou a picagem e qual o método utilizado. Os métodos possíveis incluem: impressão digital, reconhecimento facial, código PIN, WebApp, aplicação móvel, lançamento manual ou cartão.",
  },
  {
    id: "registo_tempo_trabalho_vm",
    title: "Mapa de Registos de Trabalho por Picagem",
    description: "Registos de trabalho com detalhe do método usado na picagem.",
    price: "8€/mês",
    icon: ScanLine,
    category: "Relatórios",
    features: [
      "Registo detalhado dos tempos de trabalho",
      "Identificação do método de picagem (VerifyMode)",
      "Associação a cada colaborador",
      "Maior controlo e rastreabilidade",
    ],
    demoImage: "https://i.imgur.com/Bh64ykm.png",
    demoVideo: "https://youtu.be/2d25bmxjZ7M",
    detailedDescription:
      "Mapa semelhante ao Mapa de Registos de Tempos de Trabalho, mas que acrescenta a indicação do método utilizado pelo colaborador em cada picagem (impressão digital, reconhecimento facial, código PIN, WebApp, aplicação móvel, lançamento manual ou cartão).",
  },
  {
    id: "listagem_registo_tempo_trabalho_vm",
    title: "Registos de Tempos de Trabalho por Método de Picagem",
    description: "Registos de trabalho com detalhe do método usado na picagem.",
    price: "8€/mês",
    icon: List,
    category: "Relatórios",
    features: [
      "Visualização em formato de lista",
      "Remoção opcional do cabeçalho",
      "Exportação direta para Excel",
      "Dados prontos para tratamento e filtragem",
    ],
    demoImage: "https://i.imgur.com/l4c8spo.png",

    demoVideo: "https://youtu.be/txNJELklSuc",
    detailedDescription:
      "Relatório semelhante ao Mapa de Registos de Tempos de Trabalho, apresentado em formato de listagem em vez de agrupado por colaborador. Permite remover o cabeçalho para exportação direta em Excel, facilitando o tratamento e análise dos dados. Inclui ainda a indicação do método utilizado em cada picagem (impressão digital, reconhecimento facial, código PIN, WebApp, aplicação móvel, lançamento manual ou cartão).",
  },
  {
    id: "Geo",
    title: "Geolocalização & Geofencing",
    description: "Veja, a movimentação, presença e cobertura das equipas.",
    price: "1€/mês por Colaborador",
    icon: Radar,
    category: "Módulos",
    features: [
      "Localização em tempo real",
      "Definição de zonas geográficas personalizadas",
      "Registo e histórico de deslocações",
    ],
    demoImage: "https://i.imgur.com/zsTqEa7.jpeg",
    demoVideo: "https://youtu.be/e5N4s3dj0AM",
    detailedDescription:
      "Permite monitorizar a localização de colaboradores e ativos, definindo áreas geográficas específicas para controlo e automatização de processos. Com esta funcionalidade, é possível validar se os colaboradores cumpriram o percurso atribuído, garantindo uma gestão mais eficiente das equipas no terreno.",
    note: "O valor apresentado aplica-se apenas aos colaboradores que utilizam esta funcionalidade.",
  },
  {
    id: "erp",
    title: "Integração com ERP",
    description:
      "Este módulo melhora a produtividade e reforça o controlo sobre os processos internos da sua empresa.",
    price: "0,65€/mês por Colaborador",
    icon: Workflow,
    category: "Módulos",
    features: [
      "Exportar informação adaptada aos sistemas ERP existentes",
      "Exportar alterações nos dados",
      "Facilitar tarefas administrativas e financeiras",
    ],
    demoImage: "https://i.imgur.com/cvHyef1.png",
    demoVideo: "https://youtu.be/uWzivIkfFzo",
    detailedDescription:
      "O Módulo de Integração com ERP conecta o 2Smart ao sistema ERP da sua organização, garantindo que dados relativos a colaboradores, horários, registos e relatórios são atualizados de forma automática e contínua. Esta integração elimina tarefas repetitivas, reduz erros humanos e assegura uma gestão mais ágil e precisa.",
  },
];

export const ModulesPage: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtro de categoria
  const [categoryFilter, setCategoryFilter] = useState<
    "Todos" | "Módulos" | "Relatórios"
  >("Todos");

  const handleModuleClick = (module: Module) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedModule(null), 300);
  };

  // Agrupar módulos por categoria
  const groupedModules = modules.reduce((acc, module) => {
    if (!acc[module.category]) {
      acc[module.category] = [];
    }
    acc[module.category].push(module);
    return acc;
  }, {} as Record<string, Module[]>);

  // Filtrar categorias a renderizar
  const categoriesToRender = Object.keys(groupedModules)
    .sort((a, b) => a.localeCompare(b))
    .filter((cat) =>
      categoryFilter === "Todos" ? true : cat === categoryFilter
    );

  return (
    <div className="px-8 lg:px-16 py-8">
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1
          className={`text-3xl lg:text-4xl font-normal mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Módulos e Relatórios
        </h1>
        <p
          className={`text-base leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          A Plataforma 2Smart HR dispõe de vários módulos opcionais que podem
          ser contratados para integrar novas funcionalidades assim como
          Relatórios que lhe permitem efetuar análises mais segmentadas e
          abrangendo informações que não constam da versão base do 2Smart HR.
        </p>
      </div>

      {/* Botões de filtro */}
      <div className="mb-8 flex items-center justify-center">
        <div
          className={`inline-flex rounded-xl overflow-hidden ${
            isDark
              ? "bg-gray-900/50 border border-gray-800"
              : "bg-gray-100 border border-gray-200"
          }`}
        >
          {(["Todos", "Módulos", "Relatórios"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCategoryFilter(c)}
              className={`px-4 sm:px-6 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                ${
                  categoryFilter === c
                    ? isDark
                      ? "bg-white/10 text-white border border-white/20"
                      : "bg-white text-gray-900 border border-gray-300"
                    : isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              aria-pressed={categoryFilter === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Loop por categoria */}
      {categoriesToRender.map((category) => (
        <div key={category} className="mb-12">
          <h2
            className={`text-2xl font-semibold mb-6 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {category}
          </h2>

          <div className="space-y-4 max-w-6xl mx-auto">
            {groupedModules[category].map((module) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={module.id}
                  className={`flex items-center justify-between p-6 border rounded-xl transition-all cursor-pointer group ${
                    isDark
                      ? "bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 hover:border-gray-700"
                      : "bg-gray-50/50 border-gray-200 hover:bg-gray-100/70 hover:border-gray-300"
                  }`}
                  onClick={() => handleModuleClick(module)}
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                        isDark
                          ? "bg-gray-800 group-hover:bg-gray-700"
                          : "bg-gray-200 group-hover:bg-gray-300"
                      }`}
                    >
                      <IconComponent
                        className={`w-6 h-6 transition-colors ${
                          isDark
                            ? "text-gray-400 group-hover:text-white"
                            : "text-gray-600 group-hover:text-gray-900"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h3
                          className={`text-lg font-semibold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {module.title}
                        </h3>
                        <span
                          className={`px-3 py-1 text-sm rounded-full border ${
                            isDark
                              ? "bg-white/10 text-white-400 border-white/40"
                              : "bg-black/10 border border-black/30"
                          }`}
                        >
                          {module.price}
                        </span>
                      </div>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full border ${
                        isDark
                          ? "bg-blue-600/20 text-blue-400 border-blue-600/30"
                          : "bg-blue-600/20 text-blue-600 border-blue-600/50"
                      }`}
                    >
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
      ))}

      {/* Module Modal */}
      <ModuleModal
        module={selectedModule}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
