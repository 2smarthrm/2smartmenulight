import { ContentItem } from "../types";

export const contentItems: ContentItem[] = [
 {
    id: "1",
    title: "Automatização de Processos e Envio de Relatórios",
    subtitle: "Mobilidade",
    description: "Envie automaticamente relatórios e notificações, aos seus colaboradores",
    category: "Automatização",
    tags: ["Relatórios", "Notificações", "processos Automáticos"],
    image: "https://i.imgur.com/4rsE8Fh.png",
    content:
      "O módulo de Automatização de Processos e Envio de Relatórios permite programar o envio de qualquer relatório já disponível no 2Smart HR, garantindo que a informação chega às pessoas certas no momento definido. Além dos relatórios, também permite automatizar notificações e processos internos, eliminando tarefas repetitivas e reduzindo erros manuais.",
    blocks: [
      {
        type: "image",
        src: "https://i.imgur.com/MPe5qzv.png",
        alt: "Envios configuráveis",
      },
      { type: "heading", level: 2, text: "Envio automatizado de relatórios" },
      {
        type: "text",
        text: "Os Relatórios podem ser enviados para todos, para um grupo ou apenas um colaboradores. É possível configurar a periocidade dos mesmos (1dia, 1 semana, 1mês ( na realidade para u determinado numero de meses conforme a necessidade), a frequência com que o relatório deve ser enviado (diária, semanal, mensal ou várias vezes ao dia), e a hora de envio, sempre de acordo com as necessidades do cliente. Por exemplo é possível agendar para apenas para um determinado dia da semana numa determinada hora ou a ser enviado em horas diferentes num mesmo dia.",
      },
      { type: "heading", level: 3, text: "Processos automatizados e alertas configuráveis" },
      {
        type: "text",
        text: "Para além do agendamento de relatórios, este módulo permite também automatizar processos específicos, garantindo que a informação chega às pessoas indicadas no momento programado.",
      },
      {
        type: "image",
        src: "https://i.imgur.com/5SZZWF7.png",
        alt: "cliente",
      },
      {
        type: "heading",
        level: 3,
        text: "Envio conforme as necessidades do cliente",
      },
      {
        type: "text",
        text: "Para além dos relatórios e das notificações  cujo seu envio é passível de ser desativado caso cliente assim entenda, existe ainda a possibilidade de nos serem solicitadas outro tipo de notificações para suprimir algum tipo de necessidade que o cliente possa ter. Para isso basta contactar-nos, para que seja fornecido o documento  a ser preenchido com a descrição da funcionalidade pretendida. Que nos deverá ser remetido para que possamos assim avaliar.",
      },
    ],
    features: [
  {
    title: "Relatórios incluídos",
    items: [
      "Registo de tempos de trabalho",
      "Marcações diárias",
      "Mapa resumo de assiduidade",
      "mapa de horários",
      "Mapa de faltas",
    ],
  },
],
    cta: {
      label: "Veja Mais",
      href: "https://2smart.pt/automatic_reports.html",
      variant: "primary",
    },
    
    
  },
  {
    id: "2",
    title: "Novo Site 2Smart HR",
    subtitle: "Re-Design",
    description: "Uma nova imagem, uma navegação mais simples",
    category: "Website",
    tags: ["UI/UX", "Visual Design", "Moderno"],
    image: "https://i.imgur.com/7nNaZpj.jpeg",
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
    id: "3",
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
        text: "A tecnologia de geofencing permite automatizar o controlo de presenças com base em zonas geográficas pré-definidas.O colaborador pode aceder à sua webapp e registar a sua entrada ou saída de forma segura. Esta mesma picagem é comunicada de forma automática e segura ao sistema",
      },
      { type: "heading", level: 3, text: "Como funciona o geofencing" },
      {
        type: "text",
        text: "A tecnologia de geofencing permite automatizar o controlo de presenças com base em zonas geográficas pré-definidas. Sempre que um colaborador regista um movimento de entrada ou saída, o sistema reconhece a localização, permitindo tais movimentos apenas dentro da zona pré-definida.",
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
      href: "https://2smart.pt/geofencing_and_geolocation.html",
      variant: "primary",
    },
    features: [
      "Visualização de dados em tempo real",
      "Criação de dashboard personalizado",
      "Filtragem e segmentação avançadas",
      "Geração de relatórios de picagens com zona geográfica",
    ],
  },

  {
    id: "4",
    title: "Lançamento 2Smart App",
    subtitle: "Mobile",
    description: "A gestão de recursos na palma da mão",
    category: "Usabilidade",
    tags: ["Mobile", "Responsivo", "Performance"],
    image: "https://i.imgur.com/NN1FW1X.jpeg",
    content:
      "A nova 2Smart App, disponível para Android e iOS, permite aos colaboradores efetuar registos de presença, consultar horários, submeter pedidos e aceder a documentos — tudo de forma simples, prática e integrada com o sistema principal. Uma aplicação pensada para facilitar o dia a dia de quem está no terreno.",
    features: [
      "Performance móvel nativa",
      "Interfaces otimizadas para toque",
      "Compatibilidade multiplataforma",
      "Recursos de aplicativo web progressivo",
    ],
  },
  {
    id: "5",
    title: "Módulo de Exportação para ERP",
    subtitle: "Exportação",
    description: "Ligue a 2Smart HR ao seu sistema de gestão",
    category: "Gestão",
    tags: ["Cloud", "Escalável", "Confiável"],
    image: "https://i.imgur.com/ifsHItW.jpeg",
    content: [
      "Processamento Salarial Otimizado com a integração com o 2Smart HR.",
      "Sabia que o 2Smart HR permite integrar a Assiduidade com o seu ERP para processamento salarial? O novo módulo de exportação para ERP permite integrar de forma otimizada a Assiduidade, Absentismo, Férias e outros para que o processamento salarial seja simplificado.  A aplicação permite a exportação da informação existente no 2Smart HR, bastando para isso que no diga quais os requisitos do seu ERP. Fale com a nossa Equipa 2Smart HR para obter mais informações.",
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
        text: "O 2Smart HR permite gerir todos os dados de Recursos Humanos e exportá-los diretamente para qualquer sistema ERP — desde assiduidade, horas extra, faltas e férias — garantindo informação precisa para a tomada de decisões estratégicas, com integração fácil no ERP que já utiliza.",
      },
      { type: "heading", level: 3, text: "Principais Funcionalidades" },
      {
        type: "text",
        text: "Exportação de assiduidade para ERP, envio da classificação das horas extra, faltas e férias, atualização em tempo real de todos os indicadores, redução de tarefas manuais e erros de lançamento, compatibilidade com qualquer sistema de gestão/ERP.",
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
        text: "A plataforma permite exportar assiduidade, horas extra, faltas e férias diretamente para o seu ERP. Tudo num ambiente digital seguro e centralizado, evitando tarefas repetidas, já que as classificações registadas no 2Smart HR são automaticamente integradas no sistema.",
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
      href: "https://2smart.pt/ERP-solution.html",
      variant: "primary",
    },
  },
  {
    id: "6",
    title: "Desenvolvimentos feitos à sua medida",
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
    id: "7",
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
          "Posibilidade de definir tempo de tolerância na pausa principal - 09/09/2025",
          "Posibildade de consultar a quem foi atribuído determinado plano por período de tempo. Para que esta funcionalidade apresente os resultados em pleno, os horários devem ser atribuídos através dos planos de trabalho - 28/07/2025", 
          "Correção do bug na apresentação do relatório da atribuição. Embora o plano fosse corretamente atribuído, no relatório por vezes apresentava a mensagem de problema de execução - 12/05/2025",
          "Apresentação de relatório com resumo da atribuição e indicação de sucesso/insucesso - 06/04/2025",
          "Definição de tolerância para pausas intermédias quando previstas nos horários - 18/02/2025",
          "Criação de planos de trabalho com objetivo semanal - 18/02/2025",
          "Pesquisa e ordenação de planos de trabalho - 18/02/2025",
        ],
      },
      {
        title: "Mapa de Férias",
        items: [
          "Alteração da vista anual do Mapa de férias, porforma a ter maior visibilidade - 18/02/2025",
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
          "Mapa de imparidades, incongruências - 07/11/2025",
          "Mapa de imparidades, incongruências e faltas - 07/11/2025",
          "Mapa de Horas Extras 100h/175h/200h - 05/11/2025",
          "Mapa de Ausencias e atrasos - 05/11/2025",
          "Mapa de horas Noturnas – 04/11/2025",
          "Mapa de horas extra por tipo de classificação e por estrutura - 04/11/2025",
          "Acréscimo de filtro por estrutura no relatório in-house - 17/09/2025",
           "Alteração Mapa de Banco de Horas por forma a mostrar as horas carregadas inicialmente em Banco de Horas. - 27/06/2025",
          "Alteração do Mapa de Banco de Horas para mostrar horas carregadas inicialmente - 20/06/2025",
          "Relatório Registo Tempos de Trabalho Maps (apresenta o local das picagens) - 24/04/2025",
          "Mapa de Banco de Horas - 18/02/2025",
          "Mapa de Horas Extra - 18/02/2025",
          "Mapa de Horários Semanais - 18/02/2025",
          "Acréscimo de relatórios - 18/02/2025",
        ]
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
          "Possiibilade de excluir um determindo dispositivo, para que as picagens efetuadas no mesmo não sejam tidas em conta aquando do calculo das horas trabalhadas - 24/10/2025",
          "Possibilidade de apagar log de picagens existentes nos dispositivos - 12/05/2025",
          "Melhoria/correção no envio e obtenção de dados biométricos. Passou a ser possivel obter e enviar dados biométricos com FingerprintAlgorithm diferentes(o sistema faz essa gestão) - 06/04/2025",
          "Melhoria no processamento biométrico com gestão automática de diferentes FingerprintAlgorithm - 06/04/2025",
          "Agendamento de recolhas automáticas de movimentos por dispositivo (ou por gateway) - 18/02/2025",
          "Ajuste de hora do dispositivo via consulta de informação - 18/02/2025",
        ],
      },
      {
        title: "Configurações Empresa",
        items: [
           "Posibilidade de definir tempo de tolerância na pausa principal- 14/10/2025",
          "Possibilidade de definir pausas intermédias - O tempo total de pausas pode ser configurado entre a entrada e a saída para almoço, e entre o regresso do almoço e o fim do dia. Se o tempo total das pausas for excedido, o excedente é descontado ao horário. Se não for excedido, não há qualquer desconto. - 14/10/2025",
          "Definição de tolerância para pausas intermédias quando previstas nos horários - 18/02/2025",
          "Data de fecho mensal por empresa: limita submissões a até 1 mês antes do mês atual (perfis com Chefia/App); configuração reservada a RH/Administrador - 18/02/2025",
         ],
      },
      {
        title: "Outros",
        items: [
          "Classificação de horas extras de forma automática para BH + comentários de pagamento no BH - 28/08/2025",
          "Módulo – Automatização de Processos e Envio de Relatórios - 29/10/2025",
          "Possibilidade de costumizar o tempo a pós o qual a sessão vai expirar  por tipo de perfil (colaborador/chefia/RH/administrador) - 21/11/2025",
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
