import { Instagram, Heart, MessageCircle } from 'lucide-react';

const posts = [
  {
    img: 'https://images.pexels.com/photos/2277980/pexels-photo-2277980.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 124,
    comments: 18,
    caption: 'Gençler sahada! Bugünkü antrenman harika geçti. #TaşbulakAkademisi #Futbol',
  },
  {
    img: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 98,
    comments: 12,
    caption: 'Küçük futbolcularımız büyük hayaller kuruyor! ⚽ #GelecekYıldızlar',
  },
  {
    img: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 211,
    comments: 34,
    caption: 'Takım ruhu her şeydir. Birlikte daha güçlüyüz! #TakımRuhu #Akademi',
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-50 text-pink-600 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Sosyal Medya
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 mb-4">
            Instagram'da{' '}
            <span className="text-crimson-600">Biz</span>
          </h2>
          <a
            href="https://instagram.com/tasbulakfutbolakademisi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-600 font-semibold text-sm transition-colors"
          >
            <Instagram className="w-4 h-4" />
            @tasbulakfutbolakademisi
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com/tasbulakfutbolakademisi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-square"
            >
              <img
                src={post.img}
                alt={`Akademi görseli ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/70 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4">
                <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-1.5 text-white font-bold text-sm">
                    <Heart className="w-5 h-5 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 text-white font-bold text-sm">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-white text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed px-2">
                  {post.caption}
                </p>
              </div>
              {/* Instagram icon badge */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                <Instagram className="w-4 h-4 text-pink-600" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com/tasbulakfutbolakademisi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold px-8 py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4" />
            Tüm Fotoğrafları Gör
          </a>
        </div>
      </div>
    </section>
  );
}
