import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Introduction from './Introductionpage';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "#000",
          },
          image: "",
          position: "",
          repeat: "",
          size: "",
          opacity: 1,
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        clear: true,
        defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: false,
              mode: [],
            },
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle",
            },
            onHover: {
              enable: true,
              mode: "trail",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: {
              delay: 0.5,
              enable: true,
            },
          },
          modes: {
            trail: {
              delay: 0.005,
              pauseOnStop: true,
              quantity: 5,
              particles: {
                color: {
                  value: "#ff0000",
                  animation: {
                    enable: true,
                    speed: 400,
                    sync: true,
                  },
                },
                collisions: {
                  enable: false,
                },
                links: {
                  enable: false,
                },
                move: {
                  outModes: {
                    default: "destroy",
                  },
                  speed: 2,
                },
                size: {
                  value: {
                    min: 1,
                    max: 5,
                  },
                  animation: {
                    enable: true,
                    speed: 5,
                    sync: true,
                    startValue: "min",
                    destroy: "max",
                  },
                },
              },
            },
            attract: {
              distance: 200,
              duration: 0.4,
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 50,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 200,
              duration: 0.4,
              mix: false,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          number: {
            value: 10,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "star",
            options: {
              sides: 5,
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 600,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        retina_detect: true,
      }}
      
    />
    
  );
  
};

export default ParticleBackground;