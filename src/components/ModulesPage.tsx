import React, { useState } from "react";
import {
  GaugeCircle,
  CalendarClock,
  ListTree,
  CalendarCheck,
  CalendarRange,
  Users,
  Clock,
  FileWarning,
  Moon,
  Bot,
  FileClock,
  BarChart3,
  Fingerprint,
  Filter,
  MapPin,
  ScanLine,
  List,
  Radar,
  Workflow,
  FileText,
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
  createdAt?: string;
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
    id: "mapa_ausencias_atrasos",
    title: "Mapa de Ausências e Atrasos",
    description:
      "Permite consultar, de forma imediata, que colaboradores faltaram ou se atrasaram num determinado dia ou período definido.",
    price: "8€/mês",
    icon: CalendarClock,
    category: "Relatórios",
    features: [
      "Consulta por dia ou período",
      "Identificação de ausências e atrasos",
      "Histórico de assiduidade",
    ],
    demoImage: "https://i.imgur.com/4IXc3ld.png",

    demoVideo: "https://youtu.be/u3T9GI3xxTI",
    detailedDescription:
      "O Relatório permite consultar, de forma simples e centralizada, quais os colaboradores que não compareceram ao trabalho ou que se apresentaram com atraso num determinado dia ou período. A informação pode ser filtrada por data, departamento, equipa ou tipo de ausência, facilitando o trabalho diário de RH e chefias.",
    createdAt: "2025-12-01",
  },
  {
    id: "mapa_horas_extras_100h_175h_200h",
    title: "Mapa de Horas Extras 100h/175h/200h",
    description:
      "Lista os colaboradores que atingiram as seguintes marcas de horas extra :  100HE, 175HE e 200HE.",
    price: "8€/mês",
    icon: GaugeCircle,
    category: "Relatórios",
    features: [
      "Identificação por patamares de horas extra",
      "Análise de risco e sobrecarga",
      "Apoio ao controlo de custos",
    ],
    demoImage: "https://i.imgur.com/loOfBdF.png",

    demoVideo: "https://youtu.be/dPJXGzQbxbs",
    detailedDescription:
      "O Relatório permite acompanhar de forma rigorosa os colaboradores que atingem ou ultrapassam determinados volumes de trabalho suplementar. Através de patamares pré-definidos (100h, 175h e 200h), o sistema destaca rapidamente os casos que exigem maior atenção, seja por motivos de bem-estar, cumprimento legal ou controlo de custos.",
    createdAt: "2025-12-01",
  },
  {
    id: "mapa_horas_extras_por_estrutura",
    title: "Mapa de Horas Extra por tipo de Classificação e por Estrutura",
    description:
      "Permite selecionar qual a estrutra e qual o tipo(s) de classificação(ões) que foram atribuídas para justificar absenteísmo. Para um determinado período de tempo selecionado previamente pelo utilizador.",
    price: "8€/mês",
    icon: ListTree,
    category: "Relatórios",
    features: [
      "Análise por estrutura organizacional",
      "Melhor controlo",
      "Apoio ao controlo de custos",
    ],
    demoImage: "https://i.imgur.com/6iy1DQo.png",

    demoVideo: "https://youtu.be/eJC4Sq6SZv4",
    detailedDescription:
      "O Mapa permite uma análise aprofundada das horas extra realizadas na organização, cruzando a informação entre a estrutura (departamentos, unidades, equipas) e os diferentes tipos de classificação de horas registados.",
    createdAt: "2025-12-01",
  },
  {
    id: "mapa_horas_noturnas",
    title: "Mapa de Horas Noturnas",
    description:
      "Lista, por colaborador, todas as horas noturnas efetuadas num período selecionado, incluindo identificação do colaborador, data e total de horas registadas.",
    price: "8€/mês",
    icon: Moon,
    category: "Relatórios",
    features: [
      "Listagem de Horas Noturnas por Colaborador",
      "Identificação de Colaboradores com Registos Noturnos",
      "Facilita controlo para RH",
    ],
    demoImage: "https://i.imgur.com/aB71DWk.png",

    demoVideo: "https://youtu.be/xQSPVL5Ssow",
    detailedDescription:
      "O Mapa permite consultar, de forma clara e organizada, todos os registos de trabalho noturno efetuados pelos colaboradores num determinado período de tempo escolhido pelo utilizador. O relatório apresenta informação detalhada por colaborador, incluindo número interno, número ERP, nome, data e total de horas noturnas realizadas, sendo exibidos apenas os colaboradores que tenham efetivamente trabalhado em horário noturno.",
    createdAt: "2025-12-01",
  },
  {
    id: "mapa_imparidades_incongruencias_faltas",
    title: "Mapa de Imparidades, Incongruências e Faltas",
    description:
      "Identifica, num determinado período, todos os dias em que existem marcações ímpares, registos inconsistentes e/ou faltas dos colaboradores.",
    price: "8€/mês",
    icon: FileWarning,
    category: "Relatórios",
    features: [
      "Deteção de marcações ímpares",
      "Sinalização de incongruências",
      "Apoio à regularização e ao controlo de assiduidade",
    ],
    demoImage: "https://i.imgur.com/G03LOLz.png",

    demoVideo: "https://youtu.be/9QO4NRtIyHk",
    detailedDescription:
      "O Mapa de Imparidades, Incongruências e Faltas é um relatório orientado ao controlo rigoroso da assiduidade, permitindo identificar rapidamente todos os dias em que existem problemas nas marcações de ponto dos colaboradores. Para um período de tempo previamente selecionado pelo utilizador, o mapa assinala dias com marcações ímpares (por exemplo, apenas entrada ou apenas saída), dias com incongruências nos registos (horários incoerentes, sobreposições ou tempos fora do expectável) e dias em que não existe qualquer registo, configurando faltas.",
    createdAt: "2025-12-01",
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
      "O Módulo de Integração com ERP conecta o 2Smart ao sistema ERP da sua organização, através da exportação de ficheiros, garantindo uma transferência simples e estruturada da informação necessária para o processamento no sistema do cliente. A aplicação disponibiliza a exportação de dados relativos a faltas, horas extra e férias, no formato mais adequado ao seu ERP — TXT, Excel ou CSV — para que possam ser posteriormente importados no sistema de gestão da empresa. Este módulo reduz o trabalho manual, diminui a probabilidade de erros e facilita a integração dos dados de assiduidade com os processos administrativos e de recursos humanos.",
  },
  {
    id: "autoRela",
    title: "Automatização de Processos e Envio de Relatórios",
    description:
      "Permite agendar e enviar automaticamente qualquer relatório do 2Smart HR para destinatários pré-definidos.",
    price: "8€/mês",
    icon: Bot,
    category: "Módulos",
    features: [
      "Agendamento Automático de Relatórios",
      "Integração com Todos os Relatórios Contratados",
      "Maior Controlo Operacional",
    ],
    demoImage: "https://i.imgur.com/USp0oJr.png",
    demoVideo: "https://youtu.be/6dqx_7rcHDw",
    detailedDescription:
      "O Módulo de Automatização de Processos e Envio de Relatórios foi concebido para simplificar e acelerar a forma como a informação circula dentro da organização, é possível configurar o envio automático de qualquer relatório existente no 2Smart HR – desde os relatórios base incluídos na instalação até relatórios adicionais contratados – definindo previamente destinatários, datas, horas e periodicidades.",
    createdAt: "2025-12-01",
  },
];

const REQUEST_FORM_URL =
  "/assets/2Smart HR - Formulário de desenvolvimento.pdf"; // ajusta se o nome do ficheiro for diferente

const categoryTabs = ["Todos", "Módulos", "Relatórios", "Solicitar"] as const;
type CategoryFilter = (typeof categoryTabs)[number];

export const ModulesPage: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("Todos");

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

  // Filtrar categorias a renderizar (não mostra nada quando está em "Solicitar")
  const categoriesToRender =
    categoryFilter === "Solicitar"
      ? []
      : Object.keys(groupedModules)
          .sort((a, b) => a.localeCompare(b))
          .filter((cat) =>
            categoryFilter === "Todos" ? true : cat === categoryFilter
          );

  const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;

  const isNewModule = (module: Module) => {
    if (!module.createdAt) return false;
    const createdTime = new Date(module.createdAt).getTime();
    return Date.now() - createdTime <= FIFTEEN_DAYS_MS;
  };

  return (
    <div className="px-8 lg:px-16 py-8">
      {/* Header */}
      <div className="relative mb-16 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
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
      </div>

      {/* Botões de filtro + aba Solicitar */}
      <div className="mb-8 flex items-center justify-center">
        <div
          className={`inline-flex rounded-xl overflow-hidden ${
            isDark
              ? "bg-gray-900/50 border border-gray-800"
              : "bg-gray-100 border border-gray-200"
          }`}
        >
          {categoryTabs.map((c) => {
            const isSelected = categoryFilter === c;
            const isSolicitar = c === "Solicitar";

            return (
              <button
                key={c}
                onClick={() => setCategoryFilter(c)}
                className={`px-4 sm:px-6 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  ${
                    isSelected
                      ? isDark
                        ? "bg-white/10 text-white border border-white/20"
                        : "bg-white text-gray-900 border border-gray-300"
                      : isDark
                      ? isSolicitar
                        ? "text-blue-300 hover:text-blue-200"
                        : "text-gray-300 hover:text-white"
                      : isSolicitar
                      ? "text-blue-700 hover:text-blue-800"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                aria-pressed={isSelected}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

     {/* Loop por categoria (Módulos / Relatórios / Todos) */}
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
                        strokeWidth={2.2}
                        absoluteStrokeWidth
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
                        {isNewModule(module) && (
                          <span
                            className={`px-3 py-1 text-sm rounded-full border
                              ${
                                isDark
                                  ? "bg-green-500/10 text-green-400 border-green-500/40"
                                  : "bg-green-500/10 text-green-700 border-green-500/60"
                              }`}
                          >
                            Novo
                          </span>
                        )}
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

              {/* Secção Solicitar módulo/relatório */}
      {(categoryFilter === "Todos" || categoryFilter === "Solicitar") && (
        <div className="mt-12 max-w-6xl mx-auto">
          {categoryFilter === "Solicitar" && (
            <h2
              className={`text-2xl font-semibold mb-6 text-center ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Solicitar novo módulo/relatório
            </h2>
          )}

          <div
            className={`p-6 md:p-7 rounded-xl border ${
              isDark
                ? "bg-gray-900/70 border-gray-800"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Texto / instruções */}
              <div className="md:max-w-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isDark ? "bg-blue-500/15" : "bg-blue-50"
                    }`}
                  >
                    <FileText
                      className={`w-5 h-5 ${
                        isDark ? "text-blue-300" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-base md:text-lg font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Não encontrou o módulo ou relatório que precisa?
                    </h3>
                    <p
                      className={`text-xs mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${
                        isDark
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span className="text-[10px] font-mono tracking-wide">
                        PDF
                      </span>
                      Formulário de pedido 2Smart HR
                    </p>
                  </div>
                </div>

                <p
                  className={`text-sm mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Pode solicitar o desenvolvimento de um módulo ou relatório
                  específico para a sua empresa. O processo é simples:
                </p>

                <ol
                  className={`list-decimal pl-5 space-y-1.5 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <li>Descarregue o <strong>Formulário descritivo de novos desenvolvimentos.</strong></li>
                  <li>
                    Indique o objetivo, campos de informação e filtros que
                    pretende.
                  </li>
                  <li>
                    Envie o formulário para{" "}
                    <a
                      href="mailto:helpdesk@2smart.pt"
                      className="underline decoration-blue-500/60 underline-offset-2"
                    >
                      helpdesk@2smart.pt
                    </a>{" "}
                    ou para o seu contacto habitual 2Smart HR.
                  </li>
                </ol>
              </div>

              {/* Ação / download */}
              <div className="md:min-w-[240px] flex flex-col gap-3">
                <a
                  href={REQUEST_FORM_URL}
                  download
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Descarregar formulário
                </a>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Após receção do mesmo, a equipa 2Smart HR ira analisar o seu pedido e entrar em
                  contacto para alinhar os requisitos, prazos e condições
                  comerciais.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Module Modal */}
      <ModuleModal
        module={selectedModule}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
