import React from 'react';
import { Phone, MoreVertical, ArrowLeft, CheckCheck } from 'lucide-react';
import catsAvatar from '../assets/images/sweet_cuddling_cats_1791401817123.jpg';

export const MemoryScreenshot: React.FC = () => {
  return (
    <section id="memories-section" className="relative w-full max-w-4xl mx-auto px-4 py-10 sm:py-16">
      {/* Section Title */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 text-rose-400 text-xs sm:text-sm font-semibold tracking-wide font-cairo">
          🌹 شاتنا القديم اللي عمري ما نسيته
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 font-display-ar">
          فاكرة دي؟ أنا لسه فاكر..
        </h2>
        <p className="text-rose-200/90 text-base sm:text-lg max-w-md mx-auto mt-2 font-cairo">
          أنا حبيتك بجد.. نفسي تفهمي كدا ❤️
        </p>
      </div>

      {/* The Actual WhatsApp Chat Screenshot Frame */}
      <div className="mx-auto max-w-lg rounded-3xl overflow-hidden border border-stone-700/80 bg-[#0b141a] shadow-2xl shadow-rose-950/80">
        {/* WhatsApp Top Bar */}
        <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between border-b border-stone-800 text-white">
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5 text-stone-300" />
            <div className="relative">
              <img
                src={catsAvatar}
                alt="صورة القطتين"
                className="w-10 h-10 rounded-full object-cover border border-stone-600"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base text-white tracking-wide" dir="ltr">
                +20 120 1383422
              </div>
              <div className="text-[11px] text-stone-400 font-cairo">
                آخر ظهور كان قريبًا
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <Phone className="w-4 h-4" />
            <MoreVertical className="w-4 h-4" />
          </div>
        </div>

        {/* WhatsApp Chat Canvas */}
        <div className="p-4 sm:p-6 min-h-[360px] bg-[#0b141a] relative flex flex-col justify-end text-right">
          {/* Previous message timestamp */}
          <div className="self-end mb-3 flex items-center gap-1 text-[11px] text-stone-400" dir="ltr">
            <CheckCheck className="w-4 h-4 text-[#53bdeb]" />
            <span>11:47 ص</span>
          </div>

          {/* Incoming Message Bubble from Aseel */}
          <div className="relative max-w-[95%] sm:max-w-[90%] rounded-2xl rounded-tr-sm bg-[#202c33] p-4 shadow-lg text-stone-100 font-cairo border border-stone-700/40">
            <p className="text-sm sm:text-base text-stone-100 leading-relaxed">
              كلامك حلو اوي بطريقه دخل قلبي بجد وحسسني قد إيه أنا غالية عندك ودا لوحده كفاية يخليني متمسكة بيك أكتر كل يوم
            </p>
            <p className="text-sm sm:text-base text-stone-100 leading-relaxed mt-2.5">
              وأنا كمان مش عايزة غير إننا نفضل سوا مهما حصل نعدي أي حاجة وإحنا ماسكين في بعض لأن وجودك في حياتي بقى فرق معايا بطريقة كبيرة أوي وغريبه بجد
            </p>
            <p className="text-sm sm:text-base text-stone-100 leading-relaxed mt-2.5">
              بحبك اوييييي وبحب وجودك معايا واهتمامك بيا وبوعدك إني هفضل جنبك وأسندك زي ما إنت دايماً سند ليا
            </p>
            <p className="text-sm sm:text-base text-stone-100 leading-relaxed mt-2.5">
              ربنا يخليك ليا وتفضل دايما اكتر حاجه حلوه في حياتي ي لولي 🫶❤️❤️❤️❤️❤️❤️❤️❤️❤️
            </p>

            <div className="flex items-center justify-end gap-1 mt-2 text-[11px] text-stone-400" dir="ltr">
              <span>11:53 ص</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sweet words below the screenshot */}
      <div className="mt-8 text-center max-w-xl mx-auto space-y-3">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display-ar">
          انتي اول حب حياتي
        </h3>
        <p className="text-rose-200 text-base sm:text-lg font-serif-ar leading-relaxed">
          «كلامك ده لسه عايش في قلبي ومش ناسيه ثانية واحدة.. وحشتيني يـ اسولتي ونفسي تفهمي قد إيه إنتي غالية عندي.»
        </p>
      </div>
    </section>
  );
};
