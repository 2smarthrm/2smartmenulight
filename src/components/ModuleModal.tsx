import React from "react";
import { X, Play, Mail, Phone, CheckCircle, Star } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface Module {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  demoImage: string;
  detailedDescription: string;
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

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleRequestAccess = () => {
    if (module) {
      const subject = `Solicitação de Acesso - ${module.title}`;
      const body = `Olá,

Gostaria de solicitar acesso ao módulo "${module.title}" (${module.price}).

Por favor, enviem-me mais informações sobre:
- Processo de implementação
- Demonstração personalizada
- Condições comerciais
- Suporte técnico

Aguardo o vosso contacto.

Cumprimentos,`;

      const mailtoLink = `mailto:helpdesk@2smart.pt?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  };

  if (!isOpen || !module) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-4xl rounded-2xl overflow-hidden border  ${
          isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between p-6 border-b ${
            isDark
              ? "border-gray-700 bg-gray-800/50"
              : "border-gray-200 bg-gray-50/50"
          }`}
        >
          <div className="flex items-center gap-4">
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
                  ? "bg-white/10 text-white-400 border-white/40"
                  : "bg-black/10 rounded-full border border-black/30"
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
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300"
            }`}
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Left Column - Demo */}
          <div className="space-y-6">
            <div
              className={`relative aspect-video rounded-xl overflow-hidden ${
                isDark ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <img
                src={module.demoImage}
                alt={`${module.title} demo`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-16 h-16 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500/90 transition-colors group">
                  <Play className="w-6 h-6 text-white ml-1" />
                </button>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-sm rounded-full">
                  Demo Interativo
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3
                className={`text-lg font-semibold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Sobre este Módulo
              </h3>
              <p
                className={`leading-relaxed mb-4 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {module.detailedDescription}
              </p>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {module.description}
              </p>
            </div>

            {/* Rating */}
            {/* <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>4.9/5 (127 avaliações)</span>
            </div> */}
          </div>

          {/* Right Column - Features & Contact */}
          <div className="space-y-6">
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
                className={`text-lg font-semibold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Informações de Preço
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                    Preço Base:
                  </span>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {module.price}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                    Setup:
                  </span>
                  <span className="text-blue-600">Gratuito</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                    Suporte:
                  </span>
                  <span className="text-blue-600">24/7 Incluído</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                    Teste Gratuito:
                  </span>
                  <span className="text-blue-600">30 dias</span>
                </div>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="space-y-4">
              <button
                onClick={handleRequestAccess}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5" />
                Solicitar Acesso por Email
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
              <p
                className={`text-xs mt-1 ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Demonstração personalizada disponível
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`border-t p-6 ${
            isDark
              ? "border-gray-700 bg-gray-800/30"
              : "border-gray-200 bg-gray-50/30"
          }`}
        >
          <div className="flex items-center justify-between">
            <div
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <p>
                Implementação profissional • Suporte dedicado • Atualizações
                incluídas
              </p>
            </div>
            <div
              className={`text-sm ${
                isDark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Exportech Portugal © 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
