import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-slide-down">
      <div className="bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm">
        <CheckCircle size={24} className="flex-shrink-0" />
        <p className="text-sm font-semibold">{message}</p>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default Toast;
