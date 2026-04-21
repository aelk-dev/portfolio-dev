import SectionWrapper from "../../ui/SectionWrapper";
import ContactInfo from "../Contact/ContactInfo";
import ContactForm from "../Contact/ContactFrom";

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div
        className="
        max-w-6xl w-full 
        grid md:grid-cols-2 gap-12 items-start
      "
      >
        <ContactInfo />
        <ContactForm />
      </div>
    </SectionWrapper>
  );
};

export default Contact;
