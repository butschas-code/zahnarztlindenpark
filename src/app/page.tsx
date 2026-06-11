import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Lachgas from "@/components/Lachgas";
import Experience from "@/components/Experience";
import GoogleReviews from "@/components/GoogleReviews";
import Location from "@/components/Location";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Lachgas />
        <Experience />
        <GoogleReviews />
        <Team />
        <Location />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
