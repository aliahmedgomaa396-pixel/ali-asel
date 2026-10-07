import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music2, Play, Pause } from 'lucide-react';

interface MusicPlayerProps {
  autoPlayTriggered: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTriggered }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (autoPlayTriggered) {
      setIsPlaying(true);
    }
  }, [autoPlayTriggered]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2.5 rounded-full border border-rose-500/40 bg-stone-950/90 px-4 py-2.5 shadow-2xl backdrop-blur-md">
      {/* Hidden YouTube Audio Stream Player */}
      {isPlaying && (
        <div className="hidden">
          <iframe
            ref={iframeRef}
            width="200"
            height="200"
            src={`https://www.youtube-nocookie.com/embed/JXAP2nChOjM?autoplay=1&loop=1&playlist=JXAP2nChOjM&enablejsapi=1&playsinline=1${
              isMuted ? '&mute=1' : ''
            }`}
            title="Amr Diab - Wahashtiny"
            allow="autoplay; encrypted-media"
          />
        </div>
      )}

      {/* Music Status and Controls */}
      <button
        onClick={togglePlay}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-md hover:scale-105 transition-transform"
        aria-label={isPlaying ? 'إيقاف الأغنية' : 'تشغيل الأغنية'}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
      </button>

      <span className="text-xs font-bold text-rose-200 font-cairo flex items-center gap-1.5 whitespace-nowrap">
        <Music2 className="h-3.5 w-3.5 text-rose-400" />
        عمرو دياب - وحشتيني
      </span>

      {isPlaying && (
        <button
          onClick={toggleMute}
          className="text-rose-400 hover:text-white transition-colors p-1"
          title={isMuted ? 'إلغاء الكتم' : 'كتم'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      )}
    </div>
  );
};
