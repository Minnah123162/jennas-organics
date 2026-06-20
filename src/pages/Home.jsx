import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyUs from "../components/WhyUs";

function Home() {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <WhyUs />
    </div>
  );
}

export default Home;