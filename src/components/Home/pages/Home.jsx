import AboutusSection from "./AboutusSection";
import CarouselSection from "./CarouselSection";
import PremiumHoodiesSection from "./PremiumHoodiesSection";
import RoundedSections from "./RoundedSections";

const Home = () => {
  return (
    <>
      {/* <div className="flex flex-col h-screen"> */}
      <CarouselSection />

      <div className="flex flex-col gap-2 bg-[#ffffff]">
        <PremiumHoodiesSection />
        <RoundedSections />
      </div>

      <AboutusSection />
      {/* </div> */}
    </>
  );
};

export default Home;
