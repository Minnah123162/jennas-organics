import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <WhyUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;