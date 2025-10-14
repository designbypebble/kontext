"use client";

import { ISourceOptions } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import clsx from "clsx";

export const particleDefaultOptions: ISourceOptions = {
  autoPlay: true,

  backgroundMask: {
    composite: "destination-out",
    cover: {
      opacity: 1,
      color: { value: "" },
    },
    enable: false,
  },
  clear: true,
  defaultThemes: {},
  delay: 0,
  fullScreen: { enable: false, zIndex: 0 },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: { enable: true, mode: "push" },
      /*   onDiv: {
          selectors: {},
          enable: false,
          mode: {},
          type: "circle",
        }, */
      onHover: {
        enable: true,
        mode: "grab",
        parallax: { enable: true, force: 60, smooth: 10 },
      },
      resize: { delay: 0.5, enable: true },
    },
    modes: {
      trail: { delay: 1, pauseOnStop: false, quantity: 1 },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: { distance: 200 },
      bubble: {
        distance: 400,
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 40,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: {},
        },
      },
      connect: {
        distance: 80,
        links: { opacity: 0.5 },
        radius: 60,
      },
      grab: {
        distance: 500,
        links: { blink: false, consent: false, opacity: 1 },
      },
      push: { default: true, groups: [], quantity: 4 },
      remove: { quantity: 2 },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 10,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 10,
          easing: "ease-out-quad",
          selectors: {},
        },
      },
      slow: { factor: 3, radius: 200 },
      particle: { replaceCursor: false, pauseOnStop: false, stopDelay: 0 },
      light: {
        area: {
          gradient: {
            start: { value: "#ffffff" },
            stop: { value: "#000000" },
          },
          radius: 1000,
        },
        shadow: {
          color: { value: "#000000" },
          length: 2000,
        },
      },
    },
  },
  manualParticles: [],
  particles: {
    bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
    collisions: {
      absorb: { speed: 2 },
      bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
      enable: false,
      maxSpeed: 50,
      mode: "bounce",
      overlap: { enable: true, retries: 0 },
    },
    color: {
      value: "#00573F",
      animation: {
        h: { enable: false },
        s: { enable: false },
        l: { enable: false },
      },
    },
    effect: { close: true, fill: true, options: {} /* type: {} */ },
    /*   groups: [], */
    move: {
      angle: { offset: 0, value: 90 },
      attract: {
        distance: 200,
        enable: false,
        rotate: { x: 3000, y: 3000 },
      },
      center: { x: 50, y: 50, mode: "percent", radius: 0 },
      decay: 0,
      direction: "none",
      drift: 0,
      enable: true,
      gravity: { enable: false },
      path: { clamp: true, enable: false, options: {} },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 1,
      spin: { enable: false },
      straight: false,
      trail: { enable: false, length: 6, fill: {} },
      vibrate: false,
      warp: false,
    },
    number: {
      density: { enable: true, width: 980, height: 780 },
      limit: { mode: "delete", value: 0 },
      value: 100,
    },
    opacity: {
      value: { min: 0.7, max: 1 },
      animation: {
        enable: true,
        speed: 3,
        sync: false,
      },
    },
    shape: { close: true, fill: true, options: {}, type: "circle" },
    size: {
      value: { min: 1, max: 5 },
      animation: { enable: true, speed: 20, sync: false },
    },
    links: {
      color: { value: "#E1E3E2" },
      distance: 120,
      enable: true,
      opacity: 0.9,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  zLayers: 100,
  key: "parallax",
  name: "Parallax",
  motion: { disable: false, reduce: { factor: 4, value: true } },
};

type Props = {
  className?: string;
  engineOptions?: ISourceOptions;
  id?: string;
};
const KontextParticles = ({
  className = "",
  engineOptions = particleDefaultOptions,
}: Props) => {
  const options: ISourceOptions = useMemo(() => engineOptions, [engineOptions]);
  const [engineInitialized, setEngineInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineInitialized(true);
    });
  }, []);

  if (!engineInitialized) return null;
  return (
    <div className="overflow-hidden absolute inset-0 pointer-events-none">
      <Particles
        id={"personalzie"}
        className={clsx("w-full overflow-hidden h-full", className)}
        options={options}
      />
    </div>
  );
};

export default KontextParticles;
