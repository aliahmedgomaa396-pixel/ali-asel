import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, MailOpen, Mail, ChevronDown, Check, Copy } from 'lucide-react';

interface EnvelopeCardProps {
  onCardOpened?: () => void;
}

export const EnvelopeCard: React.FC<EnvelopeCardProps> = ({ onCardOpened }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const fullLetterText = `يـ اسيل بصي، أنا مش عارف أبدأ بإيه بس عامة هفهمك الأول..

أولاً أنا فعلاً وربنا مكنتش بتكلم عليكي، كل ده كانت سلمى عاملاه ومتخطط لأجل إننا نكره بعض أنا وانتي وكمان إنتي عارفة بكدا..

بس عامة بعيد عن الحوار ده كله، عايزك تعرفي إني ماليش غيرك مهما حصل ولا مهما كلمت.. هفضل أحبك إنتي وهتفضلي في قلبي لوحدك!

وبردو مهما حصل هفضل جنبك ووراكي ومش هسمح لأي حد يضايقك أو يكلمك.. وبقولك إيه بجد، هو آه كلامك وجعني بس هتفضلي بردو البنت الأولى اللي حبيتها بجد.

وعامة أنا آه كنت بحاول أضايقك بأي كلمة في الدروس وكدا عشان ألفت نظرك، ولما كتبت ع الديسك مكنتش عايز حد يقربلك أو يدخللك نهائي، متسألينيش ليه لأني بغير عليكي وبحبك..

وعامة مش بقول كدا عشان نرجع أو كدا، أنا بس بعرفك إنك لسه موجودة في قلبي ومكانك محفوظ، وإني مش هحب غيرك مهما حصل..

وقسماً بالله العظيم أنا ما بحب سلمى، أنا لما كنت بكلمها كنت على نياتي وربنا، مكنتش مصدق إن ممكن يحصل كدا ولا كان في بالي.. بس بجد مش بحب إنك تزعلي مني أبداً..

وحشتيني بجد ومش عارف أقولك إيه.. ومقدرش أعيش في بعدك ولا على زعلك مني أبداً..

كفاية الماسدج طولت أوي 😒😒😒

بحبك ❤️`;

  const handleOpen = () => {
    setIsOpen(true);
    if (onCardOpened) onCardOpened();

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3', '#ffffff'],
      });
    } catch {
      // ignore
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fullLetterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToMemories = () => {
    const el = document.getElementById('memories-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

      {!isOpen ? (
        /* Envelope Closed State */
        <div className="relative mx-auto max-w-lg">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 text-rose-300/90 text-sm font-medium tracking-wide font-cairo">
              🌹 رسالة خاصة ليكي
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display-ar">
              افتحي الكارت يـ اسيل 💌
            </h2>
            <p className="text-rose-200/70 text-sm mt-2 font-cairo">
              اضغطي على الختم أو الكارت عشان تقرأي كل اللي في قلبي
            </p>
          </div>

          <div
            onClick={handleOpen}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-rose-500/30 bg-gradient-to-b from-rose-900/90 via-rose-950/95 to-slate-950 p-6 sm:p-8 shadow-2xl shadow-rose-950/80 transition-all duration-300 hover:border-rose-400/50 hover:shadow-rose-700/30 hover:-translate-y-1"
          >
            <div className="relative flex flex-col items-center justify-center py-10 sm:py-14 text-center">
              {/* Wax Seal */}
              <div className="relative mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-rose-700 via-rose-600 to-amber-500 p-1 shadow-lg shadow-rose-600/50 flex items-center justify-center animate-pulse-soft">
                  <div className="w-full h-full rounded-full border-2 border-amber-200/40 bg-gradient-to-b from-rose-700 to-rose-900 flex flex-col items-center justify-center text-amber-100">
                    <Heart className="w-6 h-6 text-rose-300 fill-rose-300 mb-0.5 animate-bounce" />
                    <span className="text-xs font-bold tracking-widest font-serif-ar">A & L</span>
                  </div>
                </div>
                <div className="absolute -inset-2 rounded-full border border-rose-400/20 animate-ping opacity-25" />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-200 text-xs font-medium border border-rose-500/30 font-cairo">
                  <Mail className="w-3.5 h-3.5" />
                  كارت حب مخصوص
                </div>
                <h3 className="text-2xl font-bold text-white font-display-ar">
                  كلام من ورا قلبي ليكي..
                </h3>
                <p className="text-xs text-rose-300/80 max-w-xs mx-auto font-cairo">
                  اضغطي هنا عشان تفتحي الظرف وتقرأي الحقيقة وكل اللي في قلبي
                </p>
              </div>

              <button
                type="button"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-600/40 transition-all duration-200 hover:from-rose-500 hover:to-rose-400 hover:scale-105 active:scale-95 font-cairo"
              >
                <MailOpen className="w-4 h-4" />
                افتحي الكارت الآن
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Envelope Open State: Smooth progressive fade-in with glowing key phrases */
        <div className="relative mx-auto rounded-3xl border border-rose-400/30 bg-gradient-to-b from-rose-950/95 via-stone-900/95 to-slate-950 p-6 sm:p-10 shadow-2xl shadow-rose-950/90 backdrop-blur-md transition-all duration-500">
          {/* Card Header */}
          <div className="flex flex-wrap items-center justify-between border-b border-rose-500/20 pb-5 mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600/30 border border-rose-500/40 text-rose-300">
                <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display-ar">
                  رسالة من القلب.. إلى يـ اسيل
                </h3>
                <span className="text-xs text-rose-300/70 font-cairo">
                  كلام صادق من كل قلبي
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-500/30 bg-rose-900/40 text-xs font-medium text-rose-200 hover:bg-rose-800/60 transition-colors font-cairo"
                title="نسخ الرسالة"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'تم النسخ' : 'نسخ الرسالة'}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-500/30 bg-rose-950 text-xs font-medium text-rose-300 hover:text-white transition-colors font-cairo"
              >
                <Mail className="w-3.5 h-3.5" />
                قفل الكارت
              </button>
            </div>
          </div>

          {/* Letter Body with Progressive Fade-in & Word Glowing Effects */}
          <div className="relative rounded-2xl bg-gradient-to-br from-rose-900/20 to-slate-900/60 border border-rose-500/20 p-5 sm:p-8 font-serif-ar leading-relaxed text-rose-50 text-base sm:text-lg sm:leading-loose shadow-inner space-y-5 text-justify">
            {/* Opening */}
            <div
              className="text-right text-rose-300 text-lg font-display-ar font-bold animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              يـ اسيل.. 🌹
            </div>

            {/* Paragraph 1 */}
            <p
              className="animate-fade-in-up"
              style={{ animationDelay: '0.25s' }}
            >
              بصي، أنا مش عارف أبدأ بإيه بس عامة هفهمك الأول.. أولاً أنا فعلاً وربنا مكنتش بتكلم عليكي، كل ده كانت سلمى عاملاه ومتخطط لأجل إننا نكره بعض أنا وانتي وكمان إنتي عارفة بكدا..
            </p>

            {/* Paragraph 2 (Highlighted & Glowing) */}
            <div
              className="border-r-2 border-rose-400/80 pr-4 bg-rose-950/40 p-4 rounded-l-xl my-3 animate-fade-in-up transition-all hover:bg-rose-900/30"
              style={{ animationDelay: '0.45s' }}
            >
              <p className="text-rose-100 text-lg sm:text-xl font-bold">
                « بس عامة بعيد عن الحوار ده كله، عايزك تعرفي إني{' '}
                <span className="text-glow-rose font-bold">ماليش غيرك مهما حصل</span> ولا مهما كلمت..{' '}
                <span className="text-glow-rose font-bold">هفضل أحبك إنتي وهتفضلي في قلبي لوحدك!</span> »
              </p>
            </div>

            {/* Paragraph 3 */}
            <p
              className="animate-fade-in-up"
              style={{ animationDelay: '0.65s' }}
            >
              وبردو مهما حصل هفضل جنبك ووراكي، وأي حد يكلمك.. وبقولك إيه بجد، هو آه كلامك وجعني بس هتفضلي بردو{' '}
              <span className="text-glow-rose font-bold">البنت الأولى اللي حبيتها بجد</span>.
            </p>

            {/* Paragraph 4 */}
            <p
              className="animate-fade-in-up"
              style={{ animationDelay: '0.85s' }}
            >
              وعامة أنا آه كنت بحاول أضايقك بأي كلمة في الدروس وكدا عشان ألفت نظرك.. وعامة بردو لما كتبت ع الديسك مكنتش عايز حد يدخللك نهائي متسألينيش ليه، عشان أنا{' '}
              <span className="text-glow-rose font-bold">بغير عليكي وبحبك بجد</span>.
            </p>

            {/* Paragraph 5 */}
            <p
              className="animate-fade-in-up"
              style={{ animationDelay: '1.05s' }}
            >
              وعامة مش بقول كدا عشان نرجع أو كدا، أنا بس بعرفك إنك لسه موجودة في قلبي ومكانك محفوظ، وإني مش هحب غيرك مهما حصل.. وقسماً بالله العظيم أنا ما بحب سلمى، أنا لما كنت بكلمها كنت على نياتي وربنا مكنتش مصدق إن ممكن يحصل كدا..
            </p>

            {/* Paragraph 6: Big Emotional Glowing Declaration */}
            <div
              className="pt-2 animate-fade-in-up"
              style={{ animationDelay: '1.25s' }}
            >
              <p className="p-3.5 rounded-xl bg-gradient-to-r from-rose-900/40 via-rose-800/20 to-transparent border-r-4 border-rose-400">
                <span className="text-glow-rose text-lg sm:text-2xl font-bold leading-relaxed block">
                  وحشتيني بجد ومش عارف أقولك إيه.. ومقدرش أعيش في بعدك ولا على زعلك مني أبداً..
                </span>
              </p>
            </div>

            {/* Footer Sign-off */}
            <div
              className="pt-4 border-t border-rose-500/20 flex flex-col sm:flex-row items-center justify-between text-sm font-sans gap-2 animate-fade-in-up"
              style={{ animationDelay: '1.45s' }}
            >
              <span className="text-rose-300/80 italic font-cairo">
                كفاية الماسدج طولت أوي 😒😒😒
              </span>
              <span className="text-2xl font-bold font-display-ar flex items-center gap-1.5">
                <span className="text-glow-rose">بحبك ❤️</span>
              </span>
            </div>
          </div>

          {/* Jump to memories CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={scrollToMemories}
              className="inline-flex items-center gap-2 text-rose-300 hover:text-white transition-colors text-sm font-medium animate-bounce font-cairo"
            >
              <span>انزلي شوفي شاتنا القديم اللي عمري ما نسيته 👇</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
