import React from "react";
import { X, Play, Mail, Phone, CheckCircle } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export interface Module {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  demoImage: string;
  detailedDescription: string;
  demoVideo?: string;
  note?: string;

  /** Opcional: força o template de preços */
  pricingType?: "module" | "report";

  /** Opcional: substitui linhas default por estas */
  pricingRows?: Array<{ label: string; value: string }>;
}

interface ModuleModalProps {
  module: Module | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ModuleModal: React.FC<ModuleModalProps> = ({
  module,
  isOpen,
  onClose,
}) => {
  const { isDark } = useTheme();
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  // Bloqueia scroll do body quando modal aberto e reseta vídeo ao fechar/trocar módulo
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsVideoPlaying(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  // dentro do ModuleModal.tsx (no topo do ficheiro)
  const toYouTubeEmbed = (url?: string) => {
    if (!url) return undefined;
    try {
      // normaliza
      const u = new URL(url);
      // youtu.be/<id>
      if (u.hostname.includes("youtu.be")) {
        const id = u.pathname.replace("/", "");
        return `https://www.youtube.com/embed/${id}`;
      }
      // youtube.com/watch?v=<id>
      if (u.hostname.includes("youtube.com")) {
        // /watch?v=...  ou /shorts/<id>  ou /embed/<id>
        if (u.pathname === "/watch") {
          const id = u.searchParams.get("v");
          if (id) return `https://www.youtube.com/embed/${id}`;
        }
        if (u.pathname.startsWith("/shorts/")) {
          const id = u.pathname.split("/")[2];
          if (id) return `https://www.youtube.com/embed/${id}`;
        }
        if (u.pathname.startsWith("/embed/")) {
          return url; // já é embed
        }
      }
      return url; // fallback
    } catch {
      return url;
    }
  };

  React.useEffect(() => {
    // sempre que troca de módulo, parar vídeo
    setIsVideoPlaying(false);
  }, [module?.id]);

  const handleRequestAccess = () => {
    if (!module) return;

    // buscar os parâmetros do link
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name") || "N/D";
    const nif = params.get("nif") || "N/D";

    const subject = `Solicitação de Acesso - ${module.title}`;
    const tipoLabel = kind === "report" ? "relatório" : "módulo";
    const body = `Olá,

Gostaria de solicitar acesso ao ${tipoLabel} "${module.title}" (${module.price}).

Informações do Cliente:
- Nome: ${name}
- NIF: ${nif}

Por favor, enviem-me mais informações sobre:
- Processo de implementação
- Demonstração personalizada
- Condições comerciais
- Suporte técnico

Aguardo o vosso contacto.

Cumprimentos,`;

    const mailtoLink = `mailto:paulo.ferreira@exportech.com.pt?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  if (!isOpen || !module) return null;

  // monta a src do iframe com autoplay quando for para tocar
  const baseEmbed = toYouTubeEmbed(module.demoVideo);
  const iframeSrc =
    baseEmbed && isVideoPlaying
      ? `${baseEmbed}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
      : undefined;
  // Decide o template de preços (por categoria ou override)
  const kind: "module" | "report" =
    module.pricingType ??
    (/relat[óo]rio/i.test(module.category) ? "report" : "module");

  // Linhas por defeito de cada template
  const defaultRowsByKind: Record<
    "module" | "report",
    Array<{ label: string; value: string }>
  > = {
    module: [
      { label: "Preço Base", value: module.price },
      { label: "Setup", value: "Gratuito" },
      { label: "Suporte", value: "De acordo com o SLA Contratado" },
      { label: "Teste Gratuito", value: "Disponível" },
    ],
    report: [
      { label: "Preço Base", value: module.price },
      { label: "Setup", value: "Gratuito" },
      { label: "Implementação", value: "Imediata" },
      { label: "Teste Gratuito", value: "Disponível" },
    ],
  };

  // Se vierem rows personalizadas no module, usamos essas; senão o template
  const pricingRows = module.pricingRows ?? defaultRowsByKind[kind];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-[1200px] max-w-[95vw] max-h-[calc(100vh-4rem)]
              rounded-2xl overflow-hidden border mt-10 mb-10 flex flex-col ${
                isDark
                  ? "bg-gray-900 border-gray-700"
                  : "bg-white border-gray-300"
              }`}
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes do módulo ${module.title}`}
      >
        {/* Header */}
        <div
          className={`sticky top-0 z-10 flex items-center justify-between p-6 border-b ${
            isDark
              ? "border-gray-700 bg-gray-800/70 backdrop-blur"
              : "border-gray-200 bg-gray-50/70 backdrop-blur"
          }`}
        >
          <div className="flex items-center gap-4 flex-wrap">
            <h2
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {module.title}
            </h2>

            <span
              className={`px-3 py-1 text-sm rounded-full border ${
                isDark
                  ? "bg-white/10 text-white/80 border-white/30"
                  : "bg-black/10 text-gray-900 border-black/20"
              }`}
            >
              {module.price}
            </span>

            <span
              className={`px-3 py-1 text-sm rounded-full border ${
                isDark
                  ? "bg-blue-600/20 text-blue-400 border-blue-600/30"
                  : "bg-blue-600/20 text-blue-600 border-blue-600/50"
              }`}
            >
              {module.category}
            </span>

            {module.note && (
              <span
                className={`text-xs leading-snug ml-2 ${
                  isDark ? "text-white/60" : "text-gray-600"
                }`}
              >
                {module.note}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300"
            }`}
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 [@media(max-height:800px)]:p-4">
          <div className="grid lg:grid-cols-2 gap-6 p-6">
            {/* Left Column - Demo (vídeo ou imagem) */}
            <div className="space-y-5">
              <div
                className={`relative aspect-video rounded-xl overflow-hidden w-full ${
                  isDark ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                {iframeSrc ? (
                  <iframe
                    className="w-full h-full"
                    src={iframeSrc}
                    title={module.title}
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={module.demoImage}
                      alt={`${module.title} demo`}
                      className="w-full h-full object-cover"
                    />
                    {module.demoVideo ? (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <button
                          onClick={() => setIsVideoPlaying(true)}
                          className="w-16 h-16 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500/90 transition-colors group"
                          aria-label="Reproduzir vídeo"
                        >
                          <Play className="w-6 h-6 text-white ml-1" />
                        </button>
                      </div>
                    ) : null}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-sm rounded-full">
                        {module.demoVideo
                          ? "Demo Interativa"
                          : "Pré‑visualização"}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Description */}
              <div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {kind === "report"
                    ? "Sobre este Relatório"
                    : "Sobre este Módulo"}
                </h3>
                <p
                  className={`leading-snug mb-1 text-base text-justify ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {module.detailedDescription}
                </p>
                <p
                  className={`leading-none ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {module.description}
                </p>
              </div>
            </div>

            {/* Right Column - Features & Contact */}
            <div className="space-y-5">
              {/* Features */}
              <div>
                <h3
                  className={`text-lg font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Funcionalidades Principais
                </h3>
                <div className="space-y-3">
                  {module.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span
                        className={isDark ? "text-gray-300" : "text-gray-700"}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Info */}
              <div
                className={`rounded-xl p-6 border ${
                  isDark
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-gray-50/50 border-gray-200"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {kind === "report"
                    ? "Informações de Preço (Relatório)"
                    : "Informações de Preço (Módulo)"}
                </h3>

                <div className="space-y-1">
                  {pricingRows.map((row, i) => (
                    <div key={i} className="flex justify-between">
                      <span
                        className={isDark ? "text-gray-400" : "text-gray-600"}
                      >
                        {row.label}:
                      </span>
                      <span
                        className={
                          i === 0
                            ? `font-semibold ${
                                isDark ? "text-white" : "text-gray-900"
                              }`
                            : "text-blue-600"
                        }
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="space-y-4">
                <button
                  onClick={handleRequestAccess}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Quero ser contactado pela Equipa 2Smart HR
                </button>

                <button
                  onClick={() => window.open("tel:+351210353555")}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora: +351 210 353 555
                </button>
              </div>

              {/* Additional Info */}
              <div className="text-center">
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Resposta garantida em{" "}
                  <span
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    24 horas
                  </span>
                </p>
                <p className={`text-xs mt-1 text-gray-500`}>
                  Demonstração personalizada disponível
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div
          className={`sitcky bottom-0 z-10 border-t p-6 ${
            isDark
              ? "border-gray-700 bg-gray-800/60 backdrop-blur"
              : "border-gray-200 bg-gray-50/60 backdrop-blur"
          }`}
        >
          <div className="flex items-center justify-between">
            <div
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Implementação profissional • Suporte dedicado • Atualizações
              incluídas
            </div>
            <div className="text-sm text-gray-500">
              Exportech Portugal © 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
