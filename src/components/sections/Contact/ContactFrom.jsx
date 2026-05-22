import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setStatus("success");
      setMessage("Message sent successfully!");
      form.current.reset();

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
      setMessage("Error sending message. Please try again.");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="p-6 rounded-3xl bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl space-y-4"
    >
      <label htmlFor="user_name" className="block text-sm font-semibold mb-2">
        Full Name
      </label>
      <input
        id="user_name"
        type="text"
        name="user_name"
        placeholder="Full Name"
        required
        disabled={status === "loading"}
        className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:border-fuchsia-400 focus:outline-none transition disabled:opacity-50"
      />

      <label htmlFor="user_email" className="block text-sm font-semibold mb-2">
        Email
      </label>
      <input
        id="user_email"
        type="email"
        name="user_email"
        placeholder="Email"
        required
        disabled={status === "loading"}
        className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:border-fuchsia-400 focus:outline-none transition disabled:opacity-50"
      />

      <label htmlFor="message" className="block text-sm font-semibold mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        required
        disabled={status === "loading"}
        className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:border-fuchsia-400 focus:outline-none transition disabled:opacity-50"
      />

      {message && (
        <div
          className={`p-3 rounded-lg text-center font-semibold ${
            status === "success"
              ? "bg-green-500/20 text-green-600 dark:text-green-400"
              : "bg-red-500/20 text-red-600 dark:text-red-400"
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="
          w-full py-3 rounded-full
          bg-linear-to-r from-fuchsia-500 to-purple-500
          text-white font-bold
          hover:scale-105 active:scale-95 transition
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        "
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
