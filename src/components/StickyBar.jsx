import config from '../config.json';

function StickyBar({ onOrderClick }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-red-200 bg-gradient-to-l from-yellow-400 via-orange-500 to-red-500 px-4 py-3 shadow-2xl pb-safe" dir="rtl">
      <div className="mx-auto grid max-w-md items-center gap-2 sm:max-w-3xl sm:grid-cols-[1fr_auto]">
        <div className="min-w-0 text-center sm:text-right">
          <p className="text-sm font-bold leading-tight text-white">
            {config.cta.stickyTextLine1}
          </p>
          <p className="mt-1 text-xs font-semibold leading-tight text-white/90">
            {config.cta.stickyTextLine2}
          </p>
        </div>

        <button
          type="button"
          onClick={onOrderClick}
          className="w-full rounded-full bg-white px-5 py-4 text-lg font-bold leading-normal text-red-600 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 sm:w-auto sm:min-w-[260px]"
        >
          {config.cta.mainButtonText}
        </button>
      </div>
    </div>
  );
}

export default StickyBar;
