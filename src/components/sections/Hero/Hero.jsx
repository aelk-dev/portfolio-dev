import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section
      id="home"
      className="
    min-h-screen 
    flex items-center justify-center 
    px-6 
    py-16 md:pt-32
    text-indigo-900 dark:text-white
  "
    >
      <div
        className="
      max-w-6xl w-full 
      grid md:grid-cols-2 
      gap-10 items-center
    "
      >
        <div className="space-y-4 text-center md:text-left">
          <HeroText />
          <HeroButtons />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
