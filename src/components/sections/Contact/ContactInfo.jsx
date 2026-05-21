import { contacts } from "../../../data/contacts";

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
        {contacts.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.ariaLabel}
              className="
                flex items-center gap-3
                transition-colors duration-300
                hover:text-fuchsia-500
              "
            >
              <Icon className="text-lg" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
