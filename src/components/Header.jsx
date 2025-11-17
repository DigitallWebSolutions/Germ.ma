import { BookOpen } from 'lucide-react';
import config from '../config.json';

function Header() {
  return (
    <header className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen size={28} className="text-white" />
          <div>
            <h1 className="text-xl font-bold">{config.brand.name}</h1>
            <p className="text-xs opacity-90">{config.brand.tagline}</p>
          </div>
        </div>
        <a
          href={config.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-red-600 px-3 py-1.5 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
        >
          اتصل بنا
        </a>
      </div>
    </header>
  );
}

export default Header;
