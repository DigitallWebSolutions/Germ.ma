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

      <section className="bg-gradient-to-br from-yellow-400 via-red-500 to-yellow-500 px-4 py-8 md:py-10">
        <div className="mx-auto max-w-md md:max-w-3xl">
          <button
            onClick={onOrderClick}
            className="mb-6 w-full bg-white text-red-600 font-bold text-lg py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 md:mx-auto md:block md:max-w-xl md:text-xl"
          >
            طلب الحزمة الآن
          </button>

          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 text-center text-white md:p-8">
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="text-5xl font-black md:text-6xl">{config.pricing.price}</span>
              <span className="text-xl line-through opacity-75">{config.pricing.oldPrice}</span>
            </div>
            <p className="text-sm font-semibold">
              خصم 75% لفترة محدودة جداً!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
