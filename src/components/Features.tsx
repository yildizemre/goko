import { Users, GraduationCap, Star, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: '5-14 Yaş Grupları',
    description:
      'Her yaş grubuna özel olarak tasarlanmış, seviyeye uygun antrenman programları ile çocuğunuz en uygun ortamda gelişir.',
    accent: 'bg-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: GraduationCap,
    title: 'Akademik Eğitmenler',
    description:
      'Lisanslı, deneyimli ve profesyonel antrenörlerimiz eşliğinde her çocuğa bireysel ilgi gösterilir.',
    accent: 'bg-crimson-600',
    bg: 'bg-crimson-600/10',
    border: 'border-crimson-500/20',
  },
  {
    icon: Star,
    title: 'Yetenek Keşfi',
    description:
      'Temel futbol eğitiminin yanı sıra her çocuğun güçlü yönleri belirlenerek kulüp vizyon programına dahil edilir.',
    accent: 'bg-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: Shield,
    title: 'Disiplin ve Takım Ruhu',
    description:
      'Taktik, teknik ve fiziksel gelişimin yanında karakter eğitimi ile takım ruhunu içselleştiren sporcular yetiştirir.',
    accent: 'bg-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
];

export default function Features() {
  return (
    <section id="hakkimizda" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-navy-900/10 text-navy-900 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Neden Biz?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 mb-4">
            Akademi Farkımızı
            <span className="text-crimson-600"> Keşfedin</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Taşbulak Futbol Akademisi olarak çocuklarınıza sadece futbol değil; disiplin, özgüven ve takım ruhu da kazandırıyoruz.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group relative rounded-2xl border ${f.border} ${f.bg} p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 ${f.accent} rounded-xl mb-5 shadow-lg`}
              >
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-navy-950 font-black text-lg mb-3 leading-tight">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${f.accent} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 rounded-2xl bg-navy-950 px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-white text-2xl font-black mb-2">Akademimizi Ziyaret Edin</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Çocuğunuzun potansiyelini birlikte keşfedelim. Antrenmanlarımızı yerinde görün, sorularınızı sorun.
            </p>
          </div>
          <a
            href="#iletisim"
            className="flex-shrink-0 bg-crimson-600 hover:bg-crimson-500 text-white font-bold px-8 py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200 shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Ücretsiz Deneme Dersi Al
          </a>
        </div>
      </div>
    </section>
  );
}
