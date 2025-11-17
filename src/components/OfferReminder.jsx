import { Gift, Clock, Shield, TrendingUp } from 'lucide-react';
import config from '../config.json';

function OfferReminder({ onOrderClick }) {
  return (
    <section className="bg-white px-4 py-8">
      <div className="max-w-md mx-auto animate-section">
        <div className="bg-gradient-to-br from-red-500 to-yellow-500 rounded-3xl p-6 text-white shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Gift size={28} />
            <h3 className="text-2xl font-bold">{config.offer.reminderTitle}</h3>
          </div>

          <p className="text-base leading-relaxed mb-6 bg-white/20 backdrop-blur-sm rounded-xl p-4">
            {config.offer.reminderText}
          </p>

          <div className="space-y-3 mb-6">
            {config.offer.benefits.map((benefit, index) => {
              const icons = [Clock, Shield, TrendingUp];
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3"
                >
                  <Icon size={20} className="mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">{benefit}</p>
                </div>
              );
            })}
          </div>

          <button
            onClick={onOrderClick}
            className="w-full bg-white text-red-600 font-bold text-lg py-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {config.cta.mainButtonText}
          </button>

          <p className="text-center text-xs mt-4 opacity-90">
            العرض ساري لفترة محدودة - لا تفوت الفرصة!
          </p>
        </div>
      </div>
    </section>
  );
}

export default OfferReminder;
