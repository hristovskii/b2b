import EESTEC from "./components/Eestec";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Promo from "./components/Promo";
import Sponsors from "./components/Sponsors";
import Statistics from "./components/Statistics";
import Events from "./components/Events";
import Organizators from "./components/organizators";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      {/* <Agenda/> */}
      <Organizators/>
      <KeyFeatures/>
      <EESTEC/>
      <Statistics/>
      <Events/>
      <Sponsors/>
      <Promo/>
      <Footer/>
    </>
  );
}