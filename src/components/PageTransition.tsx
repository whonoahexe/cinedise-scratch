"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useLayoutEffect, useRef } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    // Skip initial load so the legacy loader can run normally.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const anyWindow = window as any;
    const gsap = anyWindow.gsap;
    const Expo = anyWindow.Expo;
    const Scrollbar = anyWindow.Scrollbar;
    const ScrollTrigger = anyWindow.ScrollTrigger;
    const ttInitScrollEffects = anyWindow.ttInitScrollEffects;

    // Always reset scroll position to the top on route change so the
    // next page starts from the beginning, both with and without
    // Smooth Scrollbar enabled.
    try {
      const scrollContainer = document.getElementById("scroll-container");
      if (Scrollbar && scrollContainer) {
        const instance = Scrollbar.get(scrollContainer);
        if (instance) {
          instance.setPosition(0, 0);
        } else {
          scrollContainer.scrollTo(0, 0);
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    } catch {
      // If anything goes wrong, avoid breaking the transition.
    }

    // Re-initialize legacy scroll-based effects (parallax, appear-on-scroll,
    // etc.) for the newly rendered page content.
    try {
      if (ScrollTrigger && typeof ttInitScrollEffects === "function") {
        // Kill existing triggers to avoid duplicates referencing detached
        // DOM nodes, then recreate them for the current markup.
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
        ttInitScrollEffects();
      }
    } catch {
      // Do not let theme re-init failures break navigation.
    }

    // Ensure header videos (like the home page hero) autoplay when
    // present on the new page.
    try {
      document.querySelectorAll<HTMLVideoElement>(".ph-video").forEach((video) => {
        if (video.paused) {
          void video.play().catch(() => {
            // Autoplay might still be blocked by the browser; ignore.
          });
        }
      });
    } catch {
      // Safely ignore video playback errors.
    }

    if (!gsap || !Expo) {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: Expo.easeInOut } });

    // Ensure the loader covers the screen before revealing new content.
    // While the overlay is growing, hide #content-wrap so the page
    // change happens "behind" the loader and isn't visible.
    tl.set("#page-transition", { autoAlpha: 1 });
    tl.set(".ptr-overlay", { scaleY: 0, transformOrigin: "center bottom" });
    tl.set(".ptr-preloader", { autoAlpha: 0 });
    tl.set("#content-wrap", { autoAlpha: 0, y: -40 });

    // 1) Cover: overlay comes from bottom to fully cover the screen.
    // During this phase, #content-wrap is already hidden so the
    // route change is not visible.
    tl.to(".ptr-overlay", { duration: 0.6, scaleY: 1 }, 0);
    tl.to(".ptr-preloader", { duration: 0.6, autoAlpha: 1 }, 0.15);

    // (Route content has already changed behind the fully covered overlay.)

    // 2) Uncover: keep the screen fully covered for a short moment,
    // then fade out logo, slide overlay up, and reveal new content.
    tl.to(".ptr-preloader", { duration: 0.6, autoAlpha: 0 }, "+=0.35");
    tl.to(
      ".ptr-overlay",
      { duration: 0.7, scaleY: 0, transformOrigin: "center top" },
      "-=0.3"
    );
    tl.to(
      "#content-wrap",
      { duration: 0.9, autoAlpha: 1, y: 0, ease: Expo.easeOut },
      "-=0.4"
    );
    tl.set("#page-transition", { autoAlpha: 0 });

    // Set up scroll-based reveal animations for the newly rendered
    // content (appear-on-scroll effects). The legacy theme only
    // initializes these once on initial load, so we recreate the
    // essentials here for SPA route changes.
    if (gsap && ScrollTrigger) {
      try {
        type AppearConfig = {
          selector: string;
          fromVars: any;
          toVars: any;
          start?: string;
        };

        const configs: AppearConfig[] = [
          {
            selector: ".anim-zoomin",
            fromVars: { autoAlpha: 0, scale: 1.2 },
            toVars: {
              duration: 1.5,
              autoAlpha: 1,
              scale: 1,
              ease: Expo.easeOut,
              clearProps: "all",
            },
            start: "top 90%",
          },
          {
            selector: ".anim-fadeinup",
            fromVars: { autoAlpha: 0, y: 100 },
            toVars: {
              duration: 2.0,
              autoAlpha: 1,
              y: 0,
              ease: Expo.easeOut,
              clearProps: "all",
            },
            start: "top 90%",
          },
          {
            selector: ".anim-skewinup",
            fromVars: { autoAlpha: 0, y: 100, skewY: 5, transformOrigin: "left top" },
            toVars: {
              duration: 2.0,
              autoAlpha: 1,
              y: 0,
              skewY: 0,
              ease: Expo.easeOut,
              clearProps: "all",
            },
            start: "top 90%",
          },
          {
            selector: ".anim-stretchinup",
            fromVars: { autoAlpha: 0, y: 100, scaleY: 1.4, transformOrigin: "top" },
            toVars: {
              duration: 2.0,
              autoAlpha: 1,
              y: 0,
              scaleY: 1,
              ease: Expo.easeOut,
              clearProps: "all",
            },
            start: "top 90%",
          },
        ];

        configs.forEach((cfg) => {
          const elements = document.querySelectorAll<HTMLElement>(cfg.selector);
          elements.forEach((el) => {
            // Avoid attaching multiple ScrollTriggers to the same
            // element across repeated navigations.
            if (el.dataset.ttAnimated === "1") return;
            el.dataset.ttAnimated = "1";

            gsap.fromTo(
              el,
              cfg.fromVars,
              {
                ...cfg.toVars,
                scrollTrigger: {
                  trigger: el,
                  start: cfg.start ?? "top bottom",
                  once: true,
                },
              }
            );
          });
        });

        ScrollTrigger.refresh();
      } catch {
        // If anything goes wrong with ScrollTrigger setup, don't
        // break navigation or the main page transition.
      }
    }
  }, [pathname]);

  return (
    <>
      {children}
    </>
  );
}
