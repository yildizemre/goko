import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Training from './components/Training';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Training />
        <Gallery />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
}
