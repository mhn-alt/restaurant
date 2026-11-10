import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Menu from "../components/home/Menu";
import Experience from "../components/home/Experience";
import Testimonials from "../components/home/Testimonials";
import Reservation from "../components/home/Reservation";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0d10] text-zinc-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
