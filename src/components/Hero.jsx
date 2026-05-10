import config from '../config.json';

function Hero({ onOrderClick }) {
  return (
    <>
      <section className="bg-gradient-to-br from-yellow-400 via-red-500 to-yellow-500 sm:px-4">
        <div className="w-screen sm:w-full -ml-[calc((100vw-100%)/2)] sm:ml-0">
          <img 
            src="/image/germ_ma_image_1.webp" 
            alt="Germ.ma صورة 1"
            className="w-full block"
          />
          <img 
            src="/image/germ_ma_image_2.webp" 
            alt="Germ.ma صورة 2"
            className="w-full block"
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-yellow-400 via-red-500 to-yellow-500 px-4 py-6 md:py-10">
        <div className="mx-auto max-w-md md:max-w-3xl">
          <div className="rounded-2xl bg-white p-5 text-center shadow-2xl md:p-8">
            <p className="mb-2 text-sm font-black text-red-600">
              عرض محدود للمغاربة
            </p>
            <h2 className="text-2xl font-black leading-tight text-gray-950 md:text-4xl">
              {config.offer.topTitle}
            </h2>
            <div className="my-4 flex items-baseline justify-center gap-3">
              <span className="text-4xl font-black text-red-600 md:text-6xl">
                {config.offer.topPrice}
              </span>
              <span className="text-lg font-bold text-gray-400 line-through md:text-2xl">
                {config.pricing.oldPrice}
              </span>
            </div>
            <p className="mx-auto mb-5 max-w-xl text-sm font-semibold leading-relaxed text-gray-700 md:text-base">
              الدفع بالطريقة اللي تناسبك والتوصل بالملفات مباشرة عبر الواتساب بعد تأكيد الطلب.
            </p>
            <button
              type="button"
              onClick={onOrderClick}
              className="w-full rounded-full bg-white px-5 py-4 text-lg font-bold leading-normal text-red-600 shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 md:mx-auto md:block md:max-w-xl md:text-xl"
            >
              {config.cta.mainButtonText}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
