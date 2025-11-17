import { ShoppingCart, MessageCircle } from 'lucide-react';
import config from '../config.json';

function StickyBar({ onOrderClick }) {
  const handleWhatsAppClick = () => {
    window.open(config.contact.whatsappLink, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-40 pb-safe">
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="text-center mb-2">
          <p className="text-xs font-semibold text-gray-800">
            {config.cta.stickyTextLine1}
          </p>
          <p className="text-xs text-gray-600">
            {config.cta.stickyTextLine2}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onOrderClick}
            className="flex-1 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            <span>طلب الآن</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StickyBar;
