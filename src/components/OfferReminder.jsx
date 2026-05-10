import { Gift, Clock, Shield, TrendingUp } from 'lucide-react';
import config from '../config.json';

function OfferReminder({ onOrderClick }) {
  return (
    <section className="bg-white px-4 py-8 md:py-12">
      <div className="mx-auto max-w-md animate-section md:max-w-3xl">
        <div className="bg-gradient-to-br from-red-500 to-yellow-500 rounded-3xl p-6 text-white shadow-2xl md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Gift size={28} />
            <h3 className="text-2xl font-bold md:text-3xl">{config.offer.reminderTitle}</h3>
          </div>

          <p className="text-base leading-relaxed mb-6 bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-5 md:text-lg">
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

          <div className="mb-6 space-y-2 rounded-2xl bg-white p-4 text-right text-gray-900 shadow-lg md:p-5">
            {config.offer.trustItems.map((item) => (
              <p key={item} className="text-sm font-bold leading-relaxed md:text-base">
                {item}
              </p>
            ))}
          </div>

          <button
            type="button"
            onClick={onOrderClick}
            className="w-full rounded-full bg-white px-5 py-4 text-lg font-bold leading-normal text-red-600 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 md:mx-auto md:block md:max-w-xl md:text-xl"
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
