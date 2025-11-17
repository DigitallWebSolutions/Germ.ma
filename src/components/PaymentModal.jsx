import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import config from '../config.json';

function PaymentModal({ isOpen, onClose, onPaymentSelect }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
          <h3 className="text-xl font-bold text-gray-900">
            {config.payment.modalTitle}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-6">
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            {config.payment.modalDescription}
          </p>

          <div className="space-y-3">
            {config.payment.methods.map((method) => (
              <button
                key={method.id}
                onClick={() => onPaymentSelect(method)}
                className="w-full bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl p-4 flex items-center justify-between hover:border-red-500 hover:shadow-lg hover:scale-102 active:scale-98 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    <img
                      src={method.icon}
                      alt={method.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="font-semibold text-gray-900 text-lg">
                    {method.name}
                  </span>
                </div>
                <ExternalLink
                  size={20}
                  className="text-gray-400 group-hover:text-red-500 transition-colors duration-200"
                />
              </button>
            ))}
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-xs text-yellow-800 leading-relaxed text-center">
              بعد اختيار وسيلة الدفع، سيتم فتح الواتساب تلقائياً مع رسالة جاهزة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
