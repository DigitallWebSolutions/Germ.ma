import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import config from '../config.json';
import { trackMetaPixel, trackMetaPixelCustom } from '../utils/metaPixel';

const PRICE = Number(String(config?.pricing?.price || '49').replace(/[^\d.]/g, '')) || 49;
const CURRENCY = 'MAD';

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
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center" dir="rtl">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white shadow-2xl animate-slide-up sm:rounded-3xl">
        <div className="sticky top-0 flex items-center justify-between rounded-t-3xl border-b border-gray-200 bg-white px-5 py-4 sm:px-6">
          <h3 className="text-xl font-bold text-gray-900">
            {config.payment.modalTitle}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            className="text-gray-500 hover:text-gray-700 hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-5 py-6 sm:px-6">
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            {config.payment.modalDescription}
          </p>
          <p className="mb-6 rounded-xl bg-green-50 px-4 py-3 text-center text-base font-black text-green-700">
            {config.payment.priceLine}
          </p>

          <div className="space-y-3">
            {config.payment.methods.map((method) => (
              <button
                type="button"
                key={method.id}
                onClick={() => {
                  trackMetaPixel('AddPaymentInfo', {
                    value: PRICE,
                    currency: CURRENCY,
                  });

                  trackMetaPixelCustom('PaymentMethodSelected', {
                    method: method.name,
                    methodId: method.id,
                    value: PRICE,
                    currency: CURRENCY,
                  });

                  onPaymentSelect(method);
                }}
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
              بعد اختيار وسيلة الدفع، سيتم فتح الواتساب تلقائياً برسالة جاهزة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
