import { Trophy, Target, Heart, Users } from 'lucide-react';

const milestones = [
  { year: '2012', label: 'Kuruluş Yılı' },
  { year: '300+', label: 'Mezun Sporcu' },
  { year: '10+', label: 'Yıllık Deneyim' },
  { year: '3', label: 'Yaş Grubu' },
];

const values = [
  {
    icon: Trophy,
    title: 'Başarı Odaklı',
    desc: 'Her çocuğun kendi başarısını tanımlamasına yardım eder, bireysel hedefler belirleriz.',
  },
  {
    icon: Target,
    title: 'Profesyonel Eğitim',
    desc: 'UEFA lisanslı antrenörlerimiz bilimsel yöntemlerle her yaş grubuna özel program uygular.',
  },
  {
    icon: Heart,
    title: 'Sevgi ve Saygı',
    desc: 'Saha içinde ve dışında saygı, dürüstlük ve takım dayanışması temel değerlerimizdir.',
  },
  {
    icon: Users,
    title: 'Aile Olmak',
    desc: 'Akademimiz bir spor okulu değil; çocukların ikinci evi, ailelerinse güvenilir ortağıdır.',
  },
];

export default function About() {
  return (
    <section id="hakkimizda-detay" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-24">
          {/* Text */}
          <div>
            <span className="inline-block bg-navy-950/10 text-navy-950 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              Hakkımızda
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 leading-tight mb-6">
              Kartal'ın Kalbinde
              <br />
              <span className="text-crimson-600">Bir Akademi Ailesi</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Taşbulak Futbol Akademisi, 2012 yılında Kartal / İstanbul'da Göktuğ Taşbulak tarafından
              kurulmuştur. Kuruluşumuzdan bu yana tek hedefimiz var: çocuklarımıza sadece futbol değil,
              yaşam boyu onlara yol gösterecek değerler kazandırmak.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              5 ila 14 yaş arasındaki çocuklarımıza sunduğumuz yapılandırılmış eğitim programıyla teknik
              futbol becerilerinin yanı sıra disiplin, takım ruhu ve özgüven geliştiriyoruz. Akademimizden
              yetişen pek çok sporcu bölgesel ve ulusal kulüplerde kariyerlerine devam etmektedir.
            </p>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-crimson-600/30 hover:-translate-y-0.5"
            >
              Bize Katılın
            </a>
          </div>

          {/* Image collage */}
          <div className="relative h-80 sm:h-96 lg:h-[480px] mt-8 lg:mt-0">
            <div className="absolute top-0 left-0 w-[60%] h-[65%] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Akademi antrenman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.pexels.com/photos/2277980/pexels-photo-2277980.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Genç futbolcular"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating logo badge — white bg so original colors show */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center z-10 border-4 border-gray-100">
              <img
                src="/670522956_18079446497156704_4402827622326465033_n__1_-removebg-preview.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {milestones.map((m) => (
            <div
              key={m.label}
              className="bg-navy-950 rounded-2xl px-4 sm:px-6 py-6 sm:py-8 text-center shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-white mb-2">{m.year}</div>
              <div className="text-gray-400 text-xs font-semibold tracking-widest uppercase">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950">
              Temel <span className="text-crimson-600">Değerlerimiz</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-crimson-200 hover:shadow-xl bg-gray-50 hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-crimson-600 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-navy-950 font-black text-base mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coach highlight — dark bg: logo needs white filter */}
        <div className="mt-20 bg-gradient-to-br from-navy-950 to-navy-800 rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg">
            <img
              src="/670522956_18079446497156704_4402827622326465033_n__1_-removebg-preview.png"
              alt="Göktuğ Taşbulak"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-crimson-400 text-xs font-bold tracking-widest uppercase mb-2">Kurucu & Baş Antrenör</div>
            <h3 className="text-white text-xl sm:text-2xl font-black mb-3">Göktuğ Taşbulak</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              "Her çocuk içinde bir yıldız taşır. Biz sadece o yıldızın parlaması için doğru ortamı sunuyoruz.
              Akademimizde kazandığımız en büyük kupa, çocukların mutlu ve özgüvenli büyümesidir."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
