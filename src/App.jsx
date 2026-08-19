import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandStatement from "./components/BrandStatement/BrandStatement";
import CoffeeSection from "./components/CoffeeSection/CoffeeSection";
import FoodSection from "./components/FoodSection/FoodSection";
import MenuPreview from "./components/MenuPreview/MenuPreview";
import DessertSection from "./components/DessertSection/DessertSection";
import AtmosphereSection from "./components/AtmosphereSection/AtmosphereSection";
import PerfectFor from "./components/PerfectFor/PerfectFor";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Booking from "./components/Booking/Booking";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import MarqueeStrip from "./components/MarqueeStrip/MarqueeStrip";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <MarqueeStrip />
        <CoffeeSection />
        <FoodSection />
        <MenuPreview />
        <DessertSection />
        <AtmosphereSection />
        <PerfectFor />
        <MarqueeStrip dark />
        <Gallery />
        <Testimonials />
        <Booking />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
