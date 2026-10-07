import React, { useState } from 'react';
import { Lock, KeyRound, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PasswordGateProps {
  onUnlock: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [shaking, setShaking] = useState<boolean>(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (pin === '0238') {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3', '#ffffff'],
        });
      } catch {
        // ignore
      }
      onUnlock();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  const handleQuickKey = (digit: string) => {
    if (pin.length < 4) {
      const nextPin = pin + digit;
      setPin(nextPin);
      if (nextPin === '0238') {
        setTimeout(() => {
          try {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            });
          } catch {}
          onUnlock();
        }, 150);
      } else if (nextPin.length === 4) {
        setError(true);
        setShaking(true);
        setTimeout(() => setShaking(false), 500);
      }
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 p-4 backdrop-blur-xl">
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative w-full max-w-sm rounded-3xl border border-rose-500/30 bg-gradient-to-b from-rose-950/90 to-stone-950 p-6 sm:p-8 text-center shadow-2xl shadow-rose-950 transition-all ${
          shaking ? 'animate-bounce' : ''
        }`}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-600/20 border border-rose-500/40 text-rose-300">
          <Lock className="h-8 w-8 text-rose-400" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 font-display-ar flex items-center justify-center gap-2">
          <span>ادخلي بالباسورد 😝❤️</span>
        </h2>
        <p className="text-xs text-rose-200/70 mt-1 mb-6 font-cairo">
          اكتبي الرقم السري الخاص بيكي عشان يفتح الموقع
        </p>

        {/* PIN dots display */}
        <div className="flex justify-center items-center gap-3 mb-6" dir="ltr">
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              className={`h-4 w-4 rounded-full border transition-all ${
                pin.length > idx
                  ? 'bg-rose-500 border-rose-400 scale-110 shadow-sm shadow-rose-500'
                  : 'bg-stone-900 border-rose-900/60'
              }`}
            />
          ))}
        </div>

        {error && (
          <div className="mb-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-rose-400 font-cairo">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>الرقم السري مش صح يا اسولتي.. جربي تاني 🥺</span>
          </div>
        )}

        {/* Numeric keypad */}
        <div className="grid grid-cols-3 gap-2.5 max-w-[240px] mx-auto mb-4" dir="ltr">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
            <button
              key={digit}
              type="button"
              onClick={() => handleQuickKey(digit)}
              className="h-12 rounded-xl border border-rose-500/20 bg-rose-900/30 text-lg font-bold text-rose-100 hover:bg-rose-800/50 hover:text-white transition-all active:scale-95"
            >
              {digit}
            </button>
          ))}
          <button
            type="button"
            onClick={handleDelete}
            className="h-12 rounded-xl border border-rose-500/20 bg-rose-950 text-xs font-bold text-rose-300 hover:bg-rose-900 transition-all active:scale-95"
          >
            مسح
          </button>
          <button
            type="button"
            onClick={() => handleQuickKey('0')}
            className="h-12 rounded-xl border border-rose-500/20 bg-rose-900/30 text-lg font-bold text-rose-100 hover:bg-rose-800/50 transition-all active:scale-95"
          >
            0
          </button>
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="h-12 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 text-xs font-bold text-white shadow-md hover:from-rose-500 hover:to-rose-400 transition-all active:scale-95 flex items-center justify-center gap-1 font-cairo"
          >
            <KeyRound className="w-3.5 h-3.5" />
            دخول
          </button>
        </div>
      </div>
    </div>
  );
};
