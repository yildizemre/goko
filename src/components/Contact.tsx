import { useState } from 'react';
import { MapPin, Phone, Instagram, Send, CheckCircle2, MessageCircleMore } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  age: string;
  message: string;
}

const initialForm: FormData = { name: '', phone: '', age: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="iletisim" className="bg-navy-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-crimson-600/20 text-crimson-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Hemen{' '}
            <span className="text-crimson-400">Başvur</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Çocuğunuzu akademimizle tanıştırmak için formu doldurun, sizi arayalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-navy-900/60 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                <h3 className="text-white text-2xl font-black">Başvurunuz Alındı!</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  En kısa sürede sizinle iletişime geçeceğiz. Taşbulak Futbol Akademisi'ni tercih ettiğiniz için teşekkürler.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-crimson-600 hover:bg-crimson-500 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors"
                >
                  Yeni Başvuru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-300 text-xs font-semibold tracking-wide mb-2 uppercase">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Örn: Ahmet Yılmaz"
                      className="w-full bg-navy-800/60 border border-white/10 focus:border-crimson-500 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-xs font-semibold tracking-wide mb-2 uppercase">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="05XX XXX XXXX"
                      className="w-full bg-navy-800/60 border border-white/10 focus:border-crimson-500 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-xs font-semibold tracking-wide mb-2 uppercase">
                    Çocuğunuzun Yaşı
                  </label>
                  <select
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy-800/60 border border-white/10 focus:border-crimson-500 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-navy-900">Yaş seçin</option>
                    {Array.from({ length: 10 }, (_, i) => i + 5).map((age) => (
                      <option key={age} value={age} className="bg-navy-900">
                        {age} Yaş
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-xs font-semibold tracking-wide mb-2 uppercase">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Sorularınızı veya notlarınızı buraya yazabilirsiniz..."
                    className="w-full bg-navy-800/60 border border-white/10 focus:border-crimson-500 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-crimson-600/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div className="flex flex-col gap-6">
            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  label: 'Adres',
                  value: 'Soğanlık Yeni, Muş Sk. No:6 Kartal / İstanbul',
                  href: 'https://maps.google.com/?q=Kartal,Istanbul',
                },
                {
                  icon: Phone,
                  label: 'Telefon',
                  value: '0 (532) 174 3943\nGöktuğ Taşbulak',
                  href: 'tel:+905321743943',
                },
                {
                  icon: MessageCircleMore,
                  label: 'WhatsApp',
                  value: 'Hızlı iletişim için WhatsApp\'tan yazın',
                  href: 'https://wa.me/905321743943?text=Merhaba%21%20Futbol%20Akademisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
                },
                {
                  icon: Instagram,
                  label: 'Instagram',
                  value: '@tasbulakfutbolakademisi',
                  href: 'https://instagram.com/tasbulakfutbolakademisi',
                },
              ].map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group bg-navy-900/60 border border-white/10 hover:border-crimson-500/40 rounded-2xl p-5 transition-all duration-200 hover:bg-navy-800/60"
                >
                  <div className="w-10 h-10 bg-crimson-600/20 group-hover:bg-crimson-600/30 rounded-xl flex items-center justify-center mb-3 transition-colors">
                    <info.icon className="w-5 h-5 text-crimson-400" />
                  </div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">{info.label}</div>
                  <div className="text-white text-sm font-medium leading-relaxed whitespace-pre-line">{info.value}</div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 min-h-64">
              <iframe
                title="Taşbulak Futbol Akademisi Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.5!2d29.185!3d40.888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5f5c5f5c5f5%3A0x0!2sKartal%2C+%C4%B0stanbul!5e0!3m2!1str!2str!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '260px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/670522956_18079446497156704_4402827622326465033_n__1_-removebg-preview.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div>
              <div className="text-white font-black text-sm tracking-tight">Taşbulak Futbol Akademisi</div>
              <div className="text-gray-500 text-xs">Kartal, İstanbul</div>
            </div>
          </div>
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Taşbulak Futbol Akademisi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </section>
  );
}
