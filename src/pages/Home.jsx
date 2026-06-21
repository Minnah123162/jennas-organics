import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials"

function Home() {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <WhyUs />
      <Testimonials />
    </div>
  );
}

export default Home;