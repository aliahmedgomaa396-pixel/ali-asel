import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export const LoveCounter: React.FC = () => {
  // Relationship date: March 11, 2026 at 11:07 PM (23:07)
  const relationshipDate = new Date('2026-03-11T23:07:00');
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const diffMs = Math.max(0, now.getTime() - relationshipDate.getTime());
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <section className="relative w-full max-w-2xl mx-auto px-4 py-8 text-center">
      <div className="rounded-3xl border border-rose-500/20 bg-gradient-to-b from-rose-950/40 via-stone-950/60 to-rose-950/30 p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-rose-950/40">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display-ar">
            مع بعض بقالنا
          </h3>
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
        </div>

        <p className="text-xs text-rose-300/80 font-cairo mb-6">
          من 11 / 3 / 2026 — الساعة 11:07 م
        </p>

        {/* 4 Clean Minimalist Timer Numbers */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto" dir="ltr">
          <div className="rounded-2xl border border-rose-500/20 bg-stone-900/60 py-3 sm:py-4 px-2">
            <span className="text-xl sm:text-3xl font-black text-rose-100 font-mono tabular-nums block">
              {days}
            </span>
            <span className="text-[11px] text-rose-300/80 font-cairo block mt-0.5">
              يوم
            </span>
          </div>

          <div className="rounded-2xl border border-rose-500/20 bg-stone-900/60 py-3 sm:py-4 px-2">
            <span className="text-xl sm:text-3xl font-black text-rose-100 font-mono tabular-nums block">
              {String(hours).padStart(2, '0')}
            </span>
            <span className="text-[11px] text-rose-300/80 font-cairo block mt-0.5">
              ساعة
            </span>
          </div>

          <div className="rounded-2xl border border-rose-500/20 bg-stone-900/60 py-3 sm:py-4 px-2">
            <span className="text-xl sm:text-3xl font-black text-rose-100 font-mono tabular-nums block">
              {String(minutes).padStart(2, '0')}
            </span>
            <span className="text-[11px] text-rose-300/80 font-cairo block mt-0.5">
              دقيقة
            </span>
          </div>

          <div className="rounded-2xl border border-rose-400/40 bg-rose-950/50 py-3 sm:py-4 px-2 shadow-inner">
            <span className="text-xl sm:text-3xl font-black text-rose-400 font-mono tabular-nums block animate-pulse">
              {String(seconds).padStart(2, '0')}
            </span>
            <span className="text-[11px] text-rose-200 font-cairo block mt-0.5">
              ثانية
            </span>
          </div>
        </div>

        <p className="mt-5 text-sm sm:text-base text-rose-200/90 font-serif-ar">
          «كل ثانية بتعدي وإنتي في قلبي، ومكانك بيكبر أكتر وأكتر يـ اسولتي ❤️»
        </p>
      </div>
    </section>
  );
};
