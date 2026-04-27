import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/92 via-navy-900/82 to-navy-800/70" />
      <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-navy-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        <div className="inline-flex items-center gap-2 bg-crimson-600/20 border border-crimson-500/40 text-crimson-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-crimson-400 rounded-full animate-pulse" />
          2024-2025 Sezonu Kayıtları Açık
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
          Geleceğin{' '}
          <span className="text-crimson-400">Yıldızları</span>
          <br />
          Burada Yetişiyor!
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed px-2">
          5-14 Yaş Futbol Eğitimi, Yetenek Keşfi ve Profesyonel Gelişim.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
          <a
            href="#iletisim"
            className="group flex items-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-bold px-8 py-4 rounded-xl text-base tracking-wide transition-all duration-200 shadow-xl hover:shadow-crimson-600/40 hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto justify-center"
          >
            Hemen Başvur
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#hakkimizda-detay"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-base tracking-wide transition-all duration-200 backdrop-blur-sm hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto justify-center"
          >
            Daha Fazla Bilgi
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-lg mx-auto">
          {[
            { value: '10+', label: 'Yıllık Deneyim' },
            { value: '300+', label: 'Mezun Sporcu' },
            { value: '5-14', label: 'Yaş Aralığı' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-gray-400 font-medium mt-1 tracking-wide leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#hakkimizda"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Aşağı kaydır"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}