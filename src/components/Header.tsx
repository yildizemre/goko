import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Hakkımızda', href: '#hakkimizda-detay' },
  { label: 'Eğitimler', href: '#egitimler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'İletişim', href: '#iletisim' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/670522956_18079446497156704_4402827622326465033_n__1_-removebg-preview.png"
              alt="Taşbulak Futbol Akademisi Logo"
              className="h-14 w-14 object-contain"
              style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.5))' }}
            />
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-base tracking-tight uppercase">Taşbulak</span>
              <span className="text-crimson-400 font-semibold text-xs tracking-widest uppercase">Futbol Akademisi</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-crimson-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#iletisim"
              className="bg-crimson-600 hover:bg-crimson-500 text-white font-bold px-5 py-2.5 rounded-lg text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-crimson-600/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Kayıt Ol
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-navy-950/98 backdrop-blur-sm border-t border-white/10`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:bg-white/5 font-medium px-3 py-3 rounded-lg transition-colors text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={handleNavClick}
            className="mt-2 bg-crimson-600 hover:bg-crimson-500 text-white font-bold px-4 py-3 rounded-lg text-sm text-center tracking-wide transition-colors"
          >
            Kayıt Ol
          </a>
        </nav>
      </div>
    </header>
  );
}
