import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateDev = import.meta.env.VITE_EMAIL_TEMPLATE_DEV;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateDev, form.current, publicKey)
      .then(() => {})
      .then(() => {
        console.log("Auto-reply envoyé au visiteur ✅");
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("ERROR DETAILS:", error);
        alert("Error sending message");
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="
        p-6 rounded-3xl
        bg-white/20 dark:bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-xl
        space-y-4
      "
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-lg bg-transparent border border-white/20"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-lg bg-transparent border border-white/20"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full p-3 rounded-lg bg-transparent border border-white/20"
      />

      <button
        type="submit"
        className="
          w-full py-3 rounded-full
          bg-linear-to-r from-fuchsia-500 to-purple-500
          text-white font-bold
          hover:scale-105 transition
        "
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
