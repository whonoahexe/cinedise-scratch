"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (isAnimating) return;

    const willOpen = !isMenuOpen;
    setIsAnimating(true);

    if (willOpen) {
      // Opening menu
      document.documentElement.classList.add("tt-no-scroll");
      document.body.classList.add("tt-ol-menu-open", "olm-toggle-no-click");
      setIsMenuOpen(true);

      if (typeof window !== "undefined" && (window as any).gsap) {
        const gsap = (window as any).gsap;
        const Power2 = (window as any).Power2;

        const tl = gsap.timeline({
          onComplete: () => {
            document.body.classList.remove("olm-toggle-no-click");
            setIsAnimating(false);
          },
        });

        tl.to(".tt-overlay-menu", { duration: 0.4, autoAlpha: 1 });
        tl.from(".tt-ol-menu-list > li", {
          duration: 0.4,
          y: 80,
          autoAlpha: 0,
          stagger: 0.05,
          ease: Power2?.easeOut || "power2.out",
          clearProps: "all",
        });
      } else {
        setTimeout(() => {
          document.body.classList.remove("olm-toggle-no-click");
          setIsAnimating(false);
        }, 500);
      }
    } else {
      // Closing menu
      document.body.classList.add("olm-toggle-no-click");

      if (typeof window !== "undefined" && (window as any).gsap) {
        const gsap = (window as any).gsap;
        const Power2 = (window as any).Power2;

        const tl = gsap.timeline({
          onComplete: () => {
            document.documentElement.classList.remove("tt-no-scroll");
            document.body.classList.remove(
              "tt-ol-menu-open",
              "olm-toggle-no-click",
            );
            setIsMenuOpen(false);
            setIsAnimating(false);
          },
        });

        tl.to(".tt-ol-menu-list > li", {
          duration: 0.4,
          y: -80,
          autoAlpha: 0,
          stagger: 0.05,
          ease: Power2?.easeIn || "power2.in",
        });
        tl.to(
          ".tt-overlay-menu",
          {
            duration: 0.4,
            autoAlpha: 0,
            clearProps: "all",
          },
          "+=0.2",
        );
        tl.set(".tt-ol-menu-list > li", { clearProps: "all" });
      } else {
        setTimeout(() => {
          document.documentElement.classList.remove("tt-no-scroll");
          document.body.classList.remove(
            "tt-ol-menu-open",
            "olm-toggle-no-click",
          );
          setIsMenuOpen(false);
          setIsAnimating(false);
        }, 500);
      }
    }
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    if (isAnimating) {
      e.preventDefault();
      return;
    }

    // Close menu with animation when clicking a link
    document.body.classList.add("olm-toggle-no-click");

    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      const Power2 = (window as any).Power2;

      gsap.set("#content-wrap", { autoAlpha: 0 });
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove("tt-no-scroll");
          document.body.classList.remove(
            "tt-ol-menu-open",
            "olm-toggle-no-click",
          );
          setIsMenuOpen(false);
          setIsAnimating(false);
        },
      });

      tl.to(".tt-ol-menu-list > li", {
        duration: 0.4,
        y: -80,
        autoAlpha: 0,
        stagger: 0.05,
        ease: Power2?.easeIn || "power2.in",
      });
      tl.to("#content-wrap", {
        duration: 0.4,
        autoAlpha: 1,
        clearProps: "all",
      });
      tl.to(".tt-overlay-menu", {
        duration: 0.4,
        autoAlpha: 0,
        clearProps: "all",
      });
      tl.set(".tt-ol-menu-list > li", { clearProps: "all" });
    } else {
      setTimeout(() => {
        document.documentElement.classList.remove("tt-no-scroll");
        document.body.classList.remove(
          "tt-ol-menu-open",
          "olm-toggle-no-click",
        );
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 500);
    }
  };

  // Close menu on pathname change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.documentElement.classList.remove("tt-no-scroll");
      document.body.classList.remove("tt-ol-menu-open");
    }
  }, [pathname]);

  // Cleanup on unmount and initialize fixed header
  useEffect(() => {
    // Add fixed header class
    document.body.classList.add("tt-header-fixed-on");

    return () => {
      document.documentElement.classList.remove("tt-no-scroll");
      document.body.classList.remove("tt-ol-menu-open", "olm-toggle-no-click");
    };
  }, []);

  return (
    <header id="tt-header" className="tt-header-fixed">
      <div className="tt-header-inner">
        <div className="tt-header-col">
          <div className="tt-logo">
            <Link href="/">
              <img
                src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/logo-cinedise-light.png"
                className="tt-logo-light magnetic-item"
                alt="Logo"
              />
              <img
                src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/logo-cinedise-dark.png"
                className="tt-logo-dark magnetic-item"
                alt="Logo"
              />
            </Link>
          </div>
        </div>

        <div className="tt-header-col">
          <div id="tt-ol-menu-toggle-btn-wrap" onClick={toggleMenu}>
            <div className="tt-ol-menu-toggle-btn-text">
              <span className="text-menu" data-hover="Open">
                Menu
              </span>
              <span className="text-close">Close</span>
            </div>
            <div className="tt-ol-menu-toggle-btn-holder">
              <a
                href="#"
                className={`tt-ol-menu-toggle-btn magnetic-item ${isMenuOpen ? "is-open" : ""}`}
                onClick={(e) => e.preventDefault()}
              >
                <span></span>
              </a>
            </div>
          </div>

          <nav
            ref={menuRef}
            className={`tt-overlay-menu tt-ol-menu-center tt-ol-menu-count ${isMenuOpen ? "is-open" : ""}`}
            style={{
              visibility: isMenuOpen ? "visible" : "hidden",
              opacity: isMenuOpen ? 1 : 0,
            }}
          >
            <div className="tt-ol-menu-holder !bg-[#0a0a0a]">
              <div className="tt-ol-menu-inner tt-wrap">
                <div className="tt-ol-menu-content">
                  <ul className="tt-ol-menu-list">
                    <li className="tt-ol-submenu-wrap">
                      <div className="tt-ol-submenu-trigger">
                        <Link href="/" onClick={handleMenuClick}>
                          Home
                        </Link>
                      </div>
                    </li>
                    <li className="tt-ol-submenu-wrap">
                      <div className="tt-ol-submenu-trigger">
                        <Link
                          href={pathname === "/" ? "#work" : "/#work"}
                          onClick={handleMenuClick}
                        >
                          Portfolio
                        </Link>
                      </div>
                    </li>
                    <li className="tt-ol-submenu-wrap">
                      <div className="tt-ol-submenu-trigger">
                        <Link href="/about-us" onClick={handleMenuClick}>
                          About
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link href="/contact" onClick={handleMenuClick}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-noise"></div>
          </nav>
        </div>
      </div>
    </header>
  );
}
