import config from '../config.json';

function Header() {
  return (
    <header className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-white py-3 px-4 sm:px-6 sticky top-0 z-50 shadow-lg">
      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-4 md:max-w-5xl">
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
          href={config.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 bg-white text-red-600 px-3 py-1.5 md:px-5 md:py-2 rounded-full text-sm md:text-base font-bold hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <img
            src="/icons/whatsapp.png"
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
