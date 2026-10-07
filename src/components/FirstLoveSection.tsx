import React from 'react';
import { Heart } from 'lucide-react';

export const FirstLoveSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-8 sm:py-12 text-center">
      <div className="rounded-3xl border border-rose-500/20 bg-rose-950/40 p-6 sm:p-10 backdrop-blur-sm shadow-xl shadow-rose-950">
        <div className="flex justify-center mb-4">
          <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-pulse" />
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display-ar">
          انتي اول حب حياتي ❤️
        </h3>

        <div className="my-6 space-y-4 text-rose-100 font-serif-ar text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
          <p>
            «أنا حبيتك بجد.. نفسي تفهمي كدا يـ اسولتي.»
          </p>
          <p className="text-rose-200/90 text-base sm:text-lg font-cairo">
            وحشتيني أوي، ومقدرش على بعدك ولا على زعلك.. هتفضلي دايماً البنت الأولى اللي دخلت قلبي ومفيش حد في الدنيا كلها يملى عيني غيرك.
          </p>
        </div>

        <div className="pt-4 border-t border-rose-500/20 flex items-center justify-center gap-2 text-rose-300 font-display-ar text-sm sm:text-base font-bold">
          <span>بحبك يبت ❤️</span>
          <span>•</span>
          <span>لولي</span>
        </div>
      </div>
    </section>
  );
};
