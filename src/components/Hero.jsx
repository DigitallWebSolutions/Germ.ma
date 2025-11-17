import { Sparkles } from 'lucide-react';
import config from '../config.json';

function Hero({ onOrderClick }) {
  return (
    <section className="bg-gradient-to-br from-yellow-400 via-red-500 to-yellow-500 text-white px-4 py-8">
      <div className="max-w-md mx-auto text-center animate-section">
        {config.pricing.isPromoActive && (
          <div className="bg-white text-red-600 rounded-full px-4 py-2 mb-4 inline-flex items-center gap-2 font-bold text-sm shadow-lg animate-pulse">
            <Sparkles size={18} />
            <span>عرض محدود</span>
          </div>
        )}

        <h2 className="text-3xl font-bold mb-3 leading-snug">
          {config.product.shortTitle}
        </h2>

        <p className="text-base mb-6 leading-relaxed opacity-95">
          {config.product.shortDescription}
        </p>

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6">
          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="text-5xl font-black">{config.pricing.price}</span>
            <span className="text-xl line-through opacity-75">{config.pricing.oldPrice}</span>
          </div>
          <p className="text-sm font-semibold">
            خصم 75% لفترة محدودة جداً!
          </p>
        </div>

        <button
          onClick={onOrderClick}
          className="w-full bg-white text-red-600 font-bold text-lg py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
        >
          {config.cta.mainButtonText}
        </button>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {config.product.levels.map((level) => (
            <span
              key={level}
              className="bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold"
            >
              {level}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
