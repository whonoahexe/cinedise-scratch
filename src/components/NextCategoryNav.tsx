"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface NextCategoryNavProps {
  href: string;
  categoryName: string;
  thumbnailUrl: string;
}

export default function NextCategoryNav({
  href,
  categoryName,
  thumbnailUrl,
}: NextCategoryNavProps) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    let timeoutId: NodeJS.Timeout;
    const initHover = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).$ &&
        (window as any).gsap
      ) {
        timeoutId = setTimeout(() => {
          const $ = (window as any).$;
          const gsap = (window as any).gsap;
          const $ball = $("#ball");
          const $pageNav = $(navRef.current);

          if ($ball.length && $pageNav.length) {
            const $ballWidth = 34;
            const $ballHeight = 34;
            const $ballOpacity = 0.5;

            // Remove old handlers
            $pageNav.find(".tt-pn-link").off("mouseenter mouseleave");

            const $originalImage = $pageNav.find(".tt-pn-image");

            if ($originalImage.length) {
              $pageNav
                .find(".tt-pn-link")
                .on("mouseenter", function () {
                  // Remove any old images from ball
                  $ball.find(".tt-pn-image").remove();

                  $("#magic-cursor").addClass("tt-pn-hover-on");
                  const $imageClone = $originalImage.clone();
                  $imageClone.appendTo($ball);
                  gsap.to($ball, {
                    duration: 0.3,
                    width: "20vw",
                    height: "20vw",
                    opacity: 1,
                  });

                  $ball.find(".tt-pn-image video").each(function (
                    this: HTMLVideoElement,
                  ) {
                    this.play();
                  });
                })
                .on("mouseleave", function () {
                  $("#magic-cursor").removeClass("tt-pn-hover-on");
                  $ball.find(".tt-pn-image").remove();
                  gsap.to($ball, {
                    duration: 0.3,
                    width: $ballWidth,
                    height: $ballHeight,
                    opacity: $ballOpacity,
                  });
                });

              $pageNav.find(".tt-pn-link").addClass("not-hide-cursor");
            }
          }
        }, 300);
      } else {
        timeoutId = setTimeout(initHover, 200);
      }
    };

    initHover();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      // Clean up handlers
      if (
        typeof window !== "undefined" &&
        (window as any).$ &&
        navRef.current
      ) {
        const $ = (window as any).$;
        $(navRef.current).find(".tt-pn-link").off("mouseenter mouseleave");
      }
    };
  }, []);

  return (
    <div className="tt-section padding-bottom-xlg-150">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-page-nav tt-pn-scroll" ref={navRef}>
          <Link href={href} className="tt-pn-link anim-fadeinup">
            <div className="tt-pn-title">Next Category</div>
            <div className="tt-pn-hover-title">{categoryName}</div>
          </Link>

          <div className="tt-pn-subtitle anim-fadeinup">Explore More</div>

          <div className="tt-pn-image">
            <img src={thumbnailUrl} alt={categoryName} />
          </div>
        </div>
      </div>
    </div>
  );
}
