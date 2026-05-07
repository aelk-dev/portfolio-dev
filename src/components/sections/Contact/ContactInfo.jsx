import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold">
        Contact <span className="text-fuchsia-500">Me</span>
      </h2>

      <p className="text-indigo-900/80 dark:text-white/80">
        Feel free to reach out for opportunities or collaborations.
      </p>

      <div className="space-y-4">
        <a
          href="https://github.com/aelk-dev"
          target="_blank"
          className="flex items-center gap-3"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/aya-el-hakkouni-5659ba257"
          target="_blank"
          className="flex items-center gap-3"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <div className="flex items-center gap-3">
          <FaEnvelope /> ayaelhakkounii@gmail.com
        </div>

        <div className="flex items-center gap-3">
          <FaPhone /> +32 488 18 66 20
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
