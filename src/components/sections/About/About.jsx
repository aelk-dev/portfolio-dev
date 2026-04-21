import SectionWrapper from "../../ui/SectionWrapper";
import AboutText from "../About/AboutText";
import AboutCards from "../About/AboutCard";

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl w-full space-y-16">
        <AboutText />
        <AboutCards />
      </div>
    </SectionWrapper>
  );
};

export default About;
