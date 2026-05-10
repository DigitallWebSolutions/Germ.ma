import config from '../config.json';
import { trackMetaPixel } from '../utils/metaPixel';

function Header() {
  const whatsappPhone = String(config.contact.phone).replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappPhone}`;

  return (
    <header className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-white py-3 px-4 sm:px-6 sticky top-0 z-50 shadow-lg">
      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-2 sm:gap-4 md:max-w-5xl">
        <div className="flex min-w-0 items-center gap-2">
          <img
            src="/image/logo.png"
            alt="germ.ma"
            className="h-10 w-10 shrink-0 rounded-full object-cover bg-white"
          />
          <div className="min-w-0">
            <h1 className="text-xl font-black md:text-2xl">germ.ma</h1>
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackMetaPixel('Contact')}
          className="inline-flex max-w-[160px] shrink-0 items-center justify-center gap-1.5 rounded-full bg-white px-3 py-2 text-center text-xs font-bold leading-normal text-red-600 transition-all duration-200 hover:scale-105 active:scale-95 sm:max-w-none sm:gap-2 sm:px-4 sm:text-sm md:px-5 md:text-base"
          aria-label="WhatsApp"
        >
          <img
            src={config.assets.icons.whatsapp}
            alt=""
            aria-hidden="true"
            className="h-5 w-5"
          />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
