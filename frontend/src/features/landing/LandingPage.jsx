import Hero from "../../components/landing/Hero";
import HowItWorks from "../../components/landing/HowItWorks";
import WhySamvid from "../../components/landing/WhySamvid";
import FAQ from "../../components/landing/FAQ";
import ReadyToBegin from "../../components/landing/ReadyToBegin";
import Footer from "../../components/landing/Footer";
export default function LandingPage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhySamvid />
      <ReadyToBegin />
      <FAQ />
      <Footer />
    </main>
  );
}