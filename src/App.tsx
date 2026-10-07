import React, { useState, useRef } from 'react';
import { Heart, MailOpen } from 'lucide-react';
import { FloatingHearts } from './components/FloatingHearts.tsx';
import { MusicPlayer } from './components/MusicPlayer.tsx';
import { PasswordGate } from './components/PasswordGate.tsx';
import { EnvelopeCard } from './components/EnvelopeCard.tsx';
import { MemoryScreenshot } from './components/MemoryScreenshot.tsx';
import { FirstLoveSection } from './components/FirstLoveSection.tsx';
import { LoveCounter } from './components/LoveCounter.tsx';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const cardSectionRef = useRef<HTMLDivElement>(null);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const scrollToCard = () => {
    if (cardSectionRef.current) {
      cardSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-rose-950 to-stone-950 text-rose-50 relative selection:bg-rose-500 selection:text-white">
      {/* Password Gate (Password: 0238 - Hidden from user) */}
      {!isUnlocked && <PasswordGate onUnlock={handleUnlock} />}

      {/* Floating Gentle Hearts in Background */}
      <FloatingHearts />

      {/* Amr Diab Song: Wahashtiny (Auto-starts on password unlock) */}
      <MusicPlayer autoPlayTriggered={isUnlocked} />

      {/* Clean Top Bar */}
      <header className="sticky top-0 z-30 w-full border-b border-rose-500/20 bg-stone-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand with Cat Emojis in Top Right */}
          <div className="flex items-center gap-2.5">
            <span className="text-2xl select-none animate-pulse" title="اسولتي 😼😼">
              😼😼
            </span>
            <a
              href="#"
              className="text-lg sm:text-xl font-black text-rose-300 hover:text-white transition-colors tracking-tight font-display-ar flex items-center gap-2"
            >
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <span>اسولتي & لولي</span>
            </a>
          </div>

          {/* Primary Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToCard}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-600 to-rose-500 rounded-xl hover:from-rose-500 hover:to-rose-400 transition-all duration-200 shadow-md shadow-rose-600/30 whitespace-nowrap flex items-center gap-1.5 font-cairo"
            >
              <MailOpen className="w-3.5 h-3.5" />
              <span>افتحي الكارت</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        {/* Hero Section */}
        <section className="relative pt-12 sm:pt-20 pb-8 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-950/60 text-rose-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner font-cairo">
            <span>🌹 رسالة خاصة ليكي من القلب</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-display-ar tracking-tight leading-tight">
            وحشتيني... يـ اسولتي 🌹
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-rose-200/90 font-serif-ar max-w-2xl mx-auto leading-relaxed">
            «أنا مليش غيرك مهما حصل.. وهتفضلي في قلبي لوحدك.»
          </p>
        </section>

        {/* 1. The Interactive Envelope Card */}
        <div id="letter-card" ref={cardSectionRef}>
          <EnvelopeCard />
        </div>

        {/* 2. Love Counter */}
        <LoveCounter />

        {/* 3. WhatsApp Memory Screenshot Section */}
        <MemoryScreenshot />

        {/* 4. First Love & Sweet Words */}
        <FirstLoveSection />
      </main>

      {/* Quiet Classy Footer */}
      <footer className="relative z-10 border-t border-rose-500/20 bg-stone-950/90 py-8 px-4 text-center font-cairo">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-300/70">
          <div className="flex items-center gap-1.5 font-display-ar text-rose-300 font-bold">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>اسولتي.. إنتي الأولى والأخيرة دايماً</span>
          </div>

          <div className="font-bold text-rose-300">
            بحبك يبت ❤️
          </div>
        </div>
      </footer>
    </div>
  );
}
