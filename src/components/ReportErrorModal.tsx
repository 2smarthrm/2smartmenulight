import React, { useState } from "react";
import { X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface ReportErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportErrorModal: React.FC<ReportErrorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { isDark } = useTheme();

  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    const subject = encodeURIComponent("Reportar Erro 2Smart HR");
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${userEmail}\n\nDescrição do erro:\n${message}`
    );

    window.location.href = `mailto:pedro.goncalves@exportech.com.pt?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-lg rounded-xl p-8 relative ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 opacity-70 hover:opacity-100"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-semibold mb-4">Reportar Erro</h2>

        <p
          className={`text-sm mb-6 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Descreva o problema que encontrou. A nossa equipa irá analisar a
          situação e contactar caso seja necessário.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="O seu nome (opcional)"
            className={`w-full p-3 rounded-lg border ${
              isDark
                ? "bg-gray-800 border-gray-700 text-gray-200"
                : "bg-gray-100 border-gray-300"
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="O seu email (opcional)"
            className={`w-full p-3 rounded-lg border ${
              isDark
                ? "bg-gray-800 border-gray-700 text-gray-200"
                : "bg-gray-100 border-gray-300"
            }`}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <textarea
            placeholder="Descreva o erro encontrado"
            rows={5}
            className={`w-full p-3 rounded-lg border ${
              isDark
                ? "bg-gray-800 border-gray-700 text-gray-200"
                : "bg-gray-100 border-gray-300"
            }`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Enviar para o Helpdesk
        </button>
      </div>
    </div>
  );
};