import { useEffect, useState, useMemo } from "react";

const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState("");

  const handleScroll = useMemo(() => {
    return () => {
      let current = "";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActive(current);
    };
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return active;
};

export default useActiveSection;
