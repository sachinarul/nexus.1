
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import Stats from './components/Stats';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-navy min-h-screen text-white font-body selection:bg-teal selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Stats />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
