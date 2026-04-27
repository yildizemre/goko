import { CheckCircle2 } from 'lucide-react';

const programs = [
  {
    age: '5-7 Yaş',
    title: 'Başlangıç Grubu',
    color: 'from-sky-500 to-sky-700',
    badge: 'bg-sky-100 text-sky-700',
    items: [
      'Top kontrolü ve koordinasyon',
      'Oyun temelli aktiviteler',
      'Temel hareket becerileri',
      'Eğlenceli grup oyunları',
    ],
  },
  {
    age: '8-11 Yaş',
    title: 'Gelişim Grubu',
    color: 'from-navy-700 to-navy-950',
    badge: 'bg-navy-100 text-navy-700',
    featured: true,
    items: [
      'Teknik futbol eğitimi',
      'Takım taktikleri',
      'Pozisyon bazlı antrenmanlar',
      'Maç simülasyonları',
    ],
  },
  {
    age: '12-14 Yaş',
    title: 'İleri Grup',
    color: 'from-crimson-600 to-crimson-800',
    badge: 'bg-crimson-100 text-crimson-700',
    items: [
      'İleri düzey teknik beceri',
      'Fiziksel kondisyon',
      'Kulüp transferine hazırlık',
      'Bireysel performans analizi',
    ],
  },
];

export default function Training() {
  return (
    <section id="egitimler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-crimson-50 text-crimson-600 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Eğitim Programları
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 mb-4">
            Yaşa Göre{' '}
            <span className="text-crimson-600">Özel Program</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Her yaş grubunun ihtiyacına uygun, bilimsel temelli antrenman programları ile çocuğunuz adım adım gelişir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div
              key={prog.age}
              className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                prog.featured ? 'ring-2 ring-navy-600 ring-offset-4' : ''
              }`}
            >
              {prog.featured && (
                <div className="absolute top-4 right-4 bg-crimson-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 tracking-wide">
                  En Popüler
                </div>
              )}
              {/* Card header */}
              <div className={`bg-gradient-to-br ${prog.color} px-6 py-8`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${prog.badge} mb-3`}>
                  {prog.age}
                </span>
                <h3 className="text-white text-2xl font-black">{prog.title}</h3>
              </div>
              {/* Card body */}
              <div className="bg-white px-6 py-6">
                <ul className="space-y-3">
                  {prog.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#iletisim"
                  className="mt-6 block text-center bg-navy-950 hover:bg-navy-800 text-white font-bold py-3 rounded-xl text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                >
                  Kayıt Yaptır
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
