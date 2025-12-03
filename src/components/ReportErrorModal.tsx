import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";
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
  const [loading, setLoading] = useState(false);

  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!message.trim()) {
      setFeedback({
        type: "error",
        text: "Por favor descreva o erro encontrado.",
      });
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch(
        "https://mailtxt.vercel.app/report-2smart-error",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email: userEmail,
            description: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro no envio");
      }

      setFeedback({
        type: "success",
        text: "O seu relatório foi enviado com sucesso. Obrigado pelo contributo!",
      });

      setName("");
      setUserEmail("");
      setMessage("");

      // Fecha o modal passado um pouco, se quiseres
      setTimeout(() => {
        onClose();
        setFeedback(null);
      }, 2000);
    } catch (err) {
      setFeedback({
        type: "error",
        text: "Ocorreu um erro ao enviar o relatório. Tente novamente dentro de alguns instantes.",
      });
    } finally {
      setLoading(false);
    }
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
          Descreva o problema encontrado. A nossa equipa irá analisar a
          situação e, se necessário, entrará em contacto consigo.
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
          disabled={loading}
          className={`mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "A enviar..." : "Enviar para o Helpdesk"}
        </button>

        {/* Feedback tipo toast dentro do modal */}
        {feedback && (
          <div
            className={`mt-4 flex items-start gap-2 rounded-lg px-3 py-2 text-sm ${
              feedback.type === "success"
                ? isDark
                  ? "bg-green-900/40 text-green-300"
                  : "bg-green-50 text-green-800"
                : isDark
                ? "bg-red-900/40 text-red-300"
                : "bg-red-50 text-red-800"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 mt-[2px]" />
            ) : (
              <AlertCircle className="w-4 h-4 mt-[2px]" />
            )}
            <p>{feedback.text}</p>
          </div>
        )}
      </div>
    </div>
  );
};