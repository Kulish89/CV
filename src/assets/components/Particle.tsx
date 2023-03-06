import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import type { Engine } from "tsparticles-engine";

const ParticlesComponent = (props: any) => {
  const options = useMemo(() => {
    return {
      autoPlay: true,
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
          color: "#ff014f",
          opacity: "0.3",
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
        },
        opacity: {
          value: { min: 0.1, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        color: {
          value: "#ff014f",
        },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    loadSlim(engine);
  }, []);
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
