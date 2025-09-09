import { ContentItem } from "../types";

export const contentItems: ContentItem[] = [
  {
    id: "1",
    title: "Novo Site 2Smart HR",
    subtitle: "Re-Design",
    description: "Uma nova imagem, uma navegação mais simples",
    category: "Website",
    tags: ["UI/UX", "Visual Design", "Moderno"],
    image: "https://i.imgur.com/9DzmdjM.jpeg",
    content:
      "Apresentamos o novo site do 2Smart HR, com um design mais moderno, navegação intuitiva e acesso facilitado à informação. Este novo site foi pensado para melhorar a experiência dos nossos clientes e parceiros, reunindo num só local todas as funcionalidades, novidades e apoio ao utilizador.",
    features: [
      "Interface limpa e moderna",
      "Padrões de acessibilidade aprimorados",
      "Design responsivo para todos os dispositivos",
      "Hierarquia visual aprimorada",
      "Fluxos de trabalho simplificados",
    ],
    cta: {
      label: "Visitar site",
      href: "https://www.2smart.pt",
      variant: "primary",
    },
  },
  {
    id: "2",
    title: "Geolocalização & Geofencing",
    subtitle: "Localização",
    description: "Saiba onde estão as suas equipas, em tempo real",
    category: "Geolocalização",
    tags: ["Dados", "Relatórios", "Insights"],
    image: "https://i.imgur.com/1ngYvZB.jpeg",
    content:
      "Já está disponível a nova funcionalidade de Geolocalização & Geofencing! Agora é possível acompanhar, em tempo real, a localização das equipas no terreno, definir zonas geográficas específicas e consultar, no registo de movimentos do colaborador, onde foi feita cada picagem. Uma ferramenta poderosa para melhorar o controlo operacional e a gestão de recursos em mobilidade.",
    blocks: [
      {
        type: "image",
        src: "https://ik.imagekit.io/fsobpyaa5i/Group%2030471%20(1).png",
        alt: "Mapa e geofencing",
      },
      { type: "heading", level: 2, text: "Geofencing na Gestão de Equipas" },
      {
        type: "text",
        text: "A tecnologia de geofencing permite automatizar o controlo de presenças com base em zonas geográficas pré-definidas. O colaborador pode aceder á sua webapp e registar a sua entrada ou saída de forma segura. A esta mesma picagem é comunicada de forma automática ao sistema praticamente no mesmo instante de forma segura",
      },
      { type: "heading", level: 3, text: "Como funciona o geofencing" },
      {
        type: "text",
        text: "A tecnologia de geofencing permite automatizar o controlo de presenças com base em zonas geográficas pré-definidas. Sempre que um colaborador entra ou sai dessas zonas, o sistema reconhece a localização e regista o evento de forma automática e segura.",
      },
      {
        type: "image",
        src: "https://ik.imagekit.io/fsobpyaa5i/Group%2030472%20(1).png",
        alt: "Mapa e geofencing",
      },
      {
        type: "heading",
        level: 3,
        text: "Vantagens para empresas e colaboradores",
      },
      {
        type: "text",
        text: "O geofencing oferece mais do que automatização: promove a confiança, reduz erros e facilita a mobilidade das equipas. É uma solução ideal para empresas com operações descentralizadas, trabalhos externos ou locais com múltiplas unidades.",
      },
      {
        type: "heading",
        level: 3,
        text: "Mais controlo, menos esforço manual",
      },
      {
        type: "text",
        text: "Ao definir zonas de atuação no mapa, é possível saber com precisão quando um colaborador chegou ao local de trabalho, iniciou uma atividade ou terminou o turno. Tudo é registado, sem depender de validações manuais ou supervisores.",
      },
      {
        type: "image",
        src: "https://i.imgur.com/1ngYvZB.jpeg",
        alt: "Mapa e geofencing",
      },
    ],
    cta: {
      label: "Veja Mais",
      href: "https://www.2smart.pt/geofencing_and_geolocation",
      variant: "primary",
    },
    features: [
      "Visualização de dados em tempo real",
      "Criação de dashboard personalizado",
      "Filtragem e segmentação avançadas",
      "Geração de relatórios de picagens geográficas",
    ],
  },

  {
    id: "3",
    title: "Lançamento 2Smart App",
    subtitle: "Mobile",
    description: "A gestão de recursos na palma da mão",
    category: "Usabilidade",
    tags: ["Mobile", "Responsivo", "Performance"],
    image: "https://i.imgur.com/NN1FW1X.jpeg",
    content:
      "O 2Smart HR chegou ao telemóvel! A nova 2Smart App, disponível para Android e iOS, permite aos colaboradores efectuar registos de presença, consultar horários, submeter pedidos e aceder a documentos — tudo de forma simples, prática e integrada com o sistema principal. Uma aplicação pensada para facilitar o dia a dia de quem está no terreno.",
    features: [
      "Performance móvel nativa",
      "Interfaces otimizadas para toque",
      "Compatibilidade multiplataforma",
      "Recursos de aplicativo web progressivo",
    ],
  },
  {
    id: "4",
    title: "Módulo de Exportação para ERP",
    subtitle: "Exportação",
    description: "Ligue a 2Smart HR ao seu sistema de gestão",
    category: "Gestão",
    tags: ["Cloud", "Escalável", "Confiável"],
    image: "https://i.imgur.com/ifsHItW.jpeg",
    content: [
      "Processamento Salarial Automatizado com a integração com o 2Smart HR.",
      "Sabia que o 2Smart HR permite integrar as Assiduidades com o seu ERP para processamento salarial? O novo módulo de exportação para ERP permite integrar de forma programada as Assiduidades, Absenteísmo, Férias e outros para que o processamento salarial seja simplificado.  A aplicação permite a exportação da informação existente no 2smart, bastando para isso que nos digam quais os requisitos do vosso ERP. Fale com a nossa Equipa 2Smart HR para obter mais informações.",
    ],
    blocks: [
      {
        type: "image",
        src: "https://ik.imagekit.io/fsobpyaa5i/Frame%205%20(2).png",
        alt: "ERP",
      },
      {
        type: "heading",
        level: 2,
        text: "2Smart SaaS: RH e Assiduidade Integrados",
      },
      {
        type: "text",
        text: "O 2Smart HR permite gerir todos os dados de Recursos Humanos e exportá-los diretamente para qualquer sistema ERP — desde assiduidade, horas extras, faltas e férias — garantindo informação precisa para a tomada de decisões estratégicas, com integração fácil no ERP que já utiliza.",
      },
      { type: "heading", level: 3, text: "Principais Funcionalidades" },
      {
        type: "text",
        text: "Exportação de assiduidade e horários para ERP, Envio da classificação das horas extras, faltas e férias, Atualização em tempo real de todos os indicadores, Redução de tarefas manuais e erros de lançamento, Compatibilidade com qualquer sistema de gestão/ERP.",
      },
      {
        type: "image",
        src: "https://ik.imagekit.io/fsobpyaa5i/Frame%206.png",
        alt: "ERP",
      },
      {
        type: "heading",
        level: 3,
        text: "Gestão Integrada e Automatizada",
      },
      {
        type: "text",
        text: "A plataforma permite exportar assiduidade, horas extras, faltas e férias diretamente para o seu ERP. Tudo num ambiente digital seguro e centralizado, evitando tarefas repetidas, já que as classificações registadas no 2Smart HR são automaticamente integradas no sistema.",
      },
      {
        type: "image",
        src: "https://ik.imagekit.io/fsobpyaa5i/Group%2030489.png",
        alt: "ERP",
      },
      {
        type: "heading",
        level: 3,
        text: "Lista de ERP's",
      },
      {
        type: "topics",
        items: [
          "Eticadata",
          "Alidata",
          "Primavera",
          "Sage",
          "Microsoft Dynamics",
          "Artsoft Business Software",
          "AIRC",
          "Gestware",
          "PHC",
          "SAP",
          "F3M",
          "Meta4",
        ],
      },
      {
        type: "text",
        text: "Não encontra o seu ERP? Não se preocupe, nós integramos",
      },
    ],
    cta: {
      label: "Fale Connosco",
      href: "https://www.2smart.pt/contactos",
      variant: "primary",
    },
  },
  {
    id: "5",
    title: "Relatório Desenvolvido à sua Medida",
    subtitle: "Customização",
    description: "Soluções personalizadas para as suas necessidades",
    category: "Suporte",
    tags: ["IA", "Machine Learning", "Automação"],
    image: "https://i.imgur.com/torJmpd.jpeg",
    content:
      "Tem necessidades específicas? Pode comunicar facilmente com a nossa equipa técnica e solicitar desenvolvimentos personalizados, adaptados às necessidades específicas da sua empresa.",
    blocks: [
      {
        type: "image",
        src: "https://ik.imagekit.io/fsobpyaa5i/Group%2030481%20(1).png",
        alt: "Solução",
      },
      {
        type: "heading",
        level: 2,
        text: "Soluções 2Smart HR à medida de cada cliente",
      },
      {
        type: "text",
        text: "Na Plataforma 2Smart HR acreditamos que cada organização tem a sua própria realidade e desafios específicos. Por isso, a nossa solução não se limita ao standard — estamos preparados para adaptar, personalizar e desenvolver o que for necessário para responder integralmente às necessidades dos nossos clientes.",
      },
      { type: "heading", level: 3, text: "Desenvolvimento Personalizado" },
      {
        type: "text",
        text: "Seja através de novos relatórios, módulos adicionais ou funcionalidades específicas, a nossa equipa dedica-se a encontrar a melhor solução para cada situação. Trabalhamos lado a lado com os clientes para garantir que o software acompanha verdadeiramente a dinâmica do seu negócio.",
      },
      {
        type: "image",
        src: "https://ik.imagekit.io/fsobpyaa5i/Group%2030480.png",
        alt: "Solução",
      },
      {
        type: "heading",
        level: 3,
        text: "Equipa Dedicada às Suas Necessidades",
      },
      {
        type: "text",
        text: "A equipa 2Smart HR está sempre disponível para escutar, analisar e propor caminhos de evolução. A nossa prioridade é alinhar a tecnologia com os objetivos de cada organização, assegurando que cada desenvolvimento acrescenta valor real ao dia a dia.",
      },
      {
        type: "image",
        src: "https://i.imgur.com/torJmpd.jpeg",
        alt: "Solução",
      },
    ],
  },
  {
    id: "6",
    title: "Melhorias e Novas Funcionalidades",
    subtitle: "Updates",
    description:
      "Acompanhe todas as Atualizações, Melhorias e Novidades da Plataforma 2SMART",
    category: "Logs",
    tags: ["Atualizações", "Melhorias", "Logs"],
    image:
      // "https://i.imgur.com/ORfyaeS.png",
      "https://i.imgur.com/9eusHry.png",
    content:
      "Neste separador poderá consultar todas as novidades e novas funcionalidades disponibilizadas no 2Smart HR. Um espaço simples e rápido para que esteja sempre a par das melhorias que vão sendo introduzidas na solução.",
    features: [
      {
        title: "Horários",
        items: [
          "Definição de tolerância na pausa para almoço em horários não flexíveis - 18/02/2025",
          "Pesquisa de horários - 18/02/2025",
          "Definição de períodos de pausas intermédias - 18/02/2025",
          "Configuração de horário de pausa/descanso semanal - 18/02/2025",
        ],
      },
      {
        title: "Planos de trabalho",
        items: [
          "Apresentação de relatório com resumo da atribuição e indicação de sucesso/insucesso - 06/04/2025",
          "Definição de tolerância para pausas intermédias quando previstas nos horários - 18/02/2025",
          "Criação de planos de trabalho com objetivo semanal - 18/02/2025",
          "Pesquisa e ordenação de planos de trabalho - 18/02/2025",
        ],
      },
      {
        title: "Produtividade",
        items: [
          "Vista com contabilização de horas semanais quando existe plano semanal aplicado - 18/02/2025",
        ],
      },
      {
        title: "Relatórios",
        items: [
          "Alteração do Mapa de Banco de Horas para mostrar horas carregadas inicialmente - 20/06/2025",
          "Relatório Registo Tempos de Trabalho Maps (apresenta o local das picagens) - 24/04/2025",
          "Mapa de Banco de Horas - 18/02/2025",
          "Mapa de Horas Extras - 18/02/2025",
          "Mapa de Horários Semanal - 18/02/2025",
          "Acréscimo de relatórios - 18/02/2025",
        ],
      },
      {
        title: "Classificações",
        items: [
          "CCT/Horas Extra — possibilidade de marcar se pertence ao Banco de Horas, se é contabilizada e se é exportada para ERP - 18/02/2025",
          "Faltas — possibilidade de definir exportação para ERP (tempo ou dias) e indicar inclusão de subsídio de turno/alimentação - 18/02/2025",
        ],
      },
      {
        title: "Dispositivos",
        items: [
          "Melhoria no processamento biométrico com gestão automática de diferentes FingerprintAlgorithm - 06/04/2025",
          "Agendamento de recolhas automáticas de movimentos por dispositivo (ou por gateway) - 18/02/2025",
          "Ajuste de hora do dispositivo via consulta de informação - 18/02/2025",
        ],
      },
      {
        title: "Configurações Empresa",
        items: [
          "Definição de tolerância para pausas intermédias quando previstas nos horários - 18/02/2025",
          "Data de fecho mensal por empresa: limita submissões a até 1 mês antes do mês atual (perfis com Chefia/App); configuração reservada a RH/Administrador - 18/02/2025",
        ],
      },
      {
        title: "Outros",
        items: [
          "Pesquisa rápida nas áreas relevantes e filtro por estrutura e subestruturas - 20/06/2025",
          "Alterações ao layout e disponibilização de tema claro - 20/06/2025",
          "Log de acessos à aplicação (quem fez login e quando) - 02/06/2025",
          "Novos filtros nas vistas: por estrutura e subestruturas - 12/05/2025",
          "Geofencing — definição de locais autorizados para picagens na app - 12/05/2025",
          "Disponibilização da Webapp aos colaboradores - 24/04/2025",
          "Geolocalização — consulta do local onde a picagem foi realizada - 18/02/2025",
          "Customização de variações dos perfis (Administrador, RH, Chefia, Colaborador) - 18/02/2025",
          "Autenticação de duplo fator - 15/02/2025",
        ],
      },
    ],
  },
];
