import AfterHero from "../components/AfterHero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AfterHero />
        <Testimonials />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
