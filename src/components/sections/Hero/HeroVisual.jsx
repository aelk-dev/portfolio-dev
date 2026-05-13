import { useEffect, useRef } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// LOGOS
import reactLogo from "../../../assets/react.svg";
import javaLogo from "../../../assets/java.svg";
import nodeLogo from "../../../assets/node.svg";
import cLogo from "../../../assets/c.svg";
import tsLogo from "../../../assets/ts.svg";
import dockerLogo from "../../../assets/docker.svg";
import csharpLogo from "../../../assets/csharp.svg";
import dataLogo from "../../../assets/data.svg";
import djangoLogo from "../../../assets/django.svg";
import htmlLogo from "../../../assets/html.svg";
import jsLogo from "../../../assets/js.svg";
import pythonLogo from "../../../assets/python.svg";
import springLogo from "../../../assets/spring.svg";

const techs = [
  reactLogo,
  javaLogo,
  nodeLogo,
  cLogo,
  tsLogo,
  dockerLogo,
  csharpLogo,
  dataLogo,
  djangoLogo,
  htmlLogo,
  jsLogo,
  pythonLogo,
  springLogo,
];

const HeroVisual = () => {
  const containerRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);

      await tsParticles.load({
        id: "galaxy-bg",

        options: {
          fullScreen: { enable: false },

          background: { color: "transparent" },

          detectRetina: true,
          fpsLimit: 60,

          particles: {
            number: {
              value: 800,
              density: {
                enable: true,
                area: 600,
              },
            },

            color: {
              value: ["#ffffff", "#a855f7", "#6366f1"],
            },

            shape: {
              type: "circle",
            },

            opacity: {
              value: { min: 0.2, max: 0.8 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.2,
              },
            },

            size: {
              value: { min: 1, max: 2.5 },
            },

            move: {
              enable: true,
              speed: 0.7,
              random: true,
              straight: false,

              attract: {
                enable: true,
                rotateX: 1000,
                rotateY: 1200,
              },

              outModes: {
                default: "bounce",
              },
            },

            links: {
              enable: true,
              distance: 120,
              color: "#a855f7",
              opacity: 0.18,
              width: 1.2,
            },
          },

          interactivity: {
            detectsOn: "window",

            events: {
              onHover: {
                enable: true,
                mode: ["grab", "bubble"],
              },
              resize: {
                enable: true,
              },
            },

            modes: {
              grab: {
                distance: 240,
                links: {
                  opacity: 1,
                },
              },

              bubble: {
                distance: 180,
                size: 4,
                duration: 2,
                opacity: 1,
              },
            },
          },
        },
      });
    };

    initParticles();
  }, []);

  useEffect(() => {
    let animationFrame;

    const container = containerRef.current;
    if (!container) return;

    const logoSize = 50;

    const motionData = techs.map(() => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 1.4,
      vy: (Math.random() - 0.5) * 1.4,
    }));

    const initPositions = () => {
      const rect = container.getBoundingClientRect();

      motionData.forEach((d) => {
        d.x = Math.random() * rect.width;
        d.y = Math.random() * rect.height;
      });
    };

    initPositions();

    const animate = () => {
      const rect = container.getBoundingClientRect();

      logoRefs.current.forEach((logo, i) => {
        if (!logo) return;

        const d = motionData[i];

        // drift
        d.x += d.vx;
        d.y += d.vy;

        // micro chaos organique
        d.vx += (Math.random() - 0.5) * 0.008;
        d.vy += (Math.random() - 0.5) * 0.008;

        // limite vitesse
        d.vx = Math.max(-0.5, Math.min(0.5, d.vx));
        d.vy = Math.max(-0.5, Math.min(0.5, d.vy));

        // SAFE BOUNDS (important)
        const minX = logoSize;
        const maxX = rect.width - logoSize;
        const minY = logoSize;
        const maxY = rect.height - logoSize;

        if (d.x < minX) {
          d.x = minX;
          d.vx *= -1;
        }

        if (d.x > maxX) {
          d.x = maxX;
          d.vx *= -1;
        }

        if (d.y < minY) {
          d.y = minY;
          d.vy *= -1;
        }

        if (d.y > maxY) {
          d.y = maxY;
          d.vy *= -1;
        }

        logo.style.transform = `
          translate(${d.x}px, ${d.y}px)
          translate(-50%, -50%)
        `;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-[600px] overflow-hidden">
      <div id="galaxy-bg" className="absolute inset-0 w-full h-full" />

      <div className="absolute w-75 h-75 rounded-full bg-purple-500/10 blur-[120px]" />

      <div ref={containerRef} className="absolute inset-0">
        {techs.map((logo, index) => (
          <img
            key={index}
            ref={(el) => (logoRefs.current[index] = el)}
            src={logo}
            alt="tech"
            className="
              absolute
              w-10 md:w-14
              opacity-95
              select-none
              pointer-events-none
              will-change-transform
              drop-shadow-[0_0_20px_rgba(168,85,247,0.55)]
            "
          />
        ))}
      </div>
    </div>
  );
};

export default HeroVisual;
