import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Partners from '@/components/Partners';
import Pillars from '@/components/Pillars';
import Contact from '@/components/Contact';
import EnactusSection from '@/components/EnactusSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Mission />
      <Partners />
      <Pillars />
      <Contact />
      <EnactusSection />
      <Footer />
    </div>
  );
}