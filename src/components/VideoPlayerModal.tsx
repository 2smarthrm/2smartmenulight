import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle: string;
  videoUrl?: string;
}

function toEmbedUrl(raw?: string): { mode: 'video' | 'iframe' | 'blocked'; src?: string } {
  if (!raw) return { mode: 'blocked' };

  // MP4 direto
  if (/\.(mp4|webm|ogg)(\?|#|$)/i.test(raw)) {
    return { mode: 'video', src: raw };
  }

  // YouTube
  // - youtu.be/ID
  // - youtube.com/watch?v=ID
  // - youtube.com/shorts/ID
  const ytMatchShort = raw.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/i);
  const ytMatchWatch = raw.match(/[?&]v=([A-Za-z0-9_-]{6,})/i);
  const ytMatchShorts = raw.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]{6,})/i);
  const ytId = ytMatchShort?.[1] || ytMatchWatch?.[1] || ytMatchShorts?.[1];
  if (ytId) {
    const src = `https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1&playsinline=1`;
    return { mode: 'iframe', src };
  }

  // Vimeo
  // vimeo.com/ID -> player.vimeo.com/video/ID
  const vimeoMatch = raw.match(/vimeo\.com\/(\d+)/i);
  if (vimeoMatch) {
    const src = `https://player.vimeo.com/video/${vimeoMatch[1]}?byline=0&portrait=0`;
    return { mode: 'iframe', src };
  }

  // ScreenApp e outros que costumam bloquear iFrame
  if (/screenapp\.io/i.test(raw)) {
    return { mode: 'blocked' }; // normalmente X-Frame-Options: SAMEORIGIN
  }

  // Caso genérico: tentar em iframe (pode falhar se o site bloquear)
  return { mode: 'iframe', src: raw };
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  videoTitle,
  videoUrl
}) => {
  const { isDark } = useTheme();

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !videoUrl) return null;

  const embed = toEmbedUrl(videoUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className={`relative w-full max-w-6xl mx-4 rounded-2xl overflow-hidden border ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {videoTitle}
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
            }`}
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Player */}
        <div className="aspect-video bg-black flex items-center justify-center">
          {embed.mode === 'video' && embed.src && (
            <video
              key={embed.src}              // força remount quando muda
              src={embed.src}
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
              playsInline
            />
          )}

          {embed.mode === 'iframe' && embed.src && (
            <iframe
              key={embed.src}
              src={embed.src}
              title={videoTitle}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}

          {embed.mode === 'blocked' && (
            <div className="text-center px-6">
              <p className="text-white/90 mb-4">
                Este fornecedor não permite abrir o vídeo dentro do site.
              </p>
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
              >
                Abrir no site do vídeo <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};