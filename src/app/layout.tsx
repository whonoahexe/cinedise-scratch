import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinedise Studio",
  description: "Cinedise Studio Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Legacy CSS */}
        <link
          rel="stylesheet"
          href="/assets/vendor/normalize/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/fontawesome/css/fontawesome-all.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/css/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/lightgallery/css/lightgallery.min.css"
        />
        <link rel="stylesheet" href="/assets/css/helper.css" />
        <link rel="stylesheet" href="/assets/css/theme.css" />
      </head>
      <body
        id="body"
        className={`${spaceGrotesk.className} tt-transition tt-boxed tt-smooth-scroll tt-magic-cursor`}
        data-react-menu="true"
      >
        <main id="body-inner">
          {/* Page transition */}
          <div id="page-transition">
            <div className="ptr-overlay"></div>
            <div className="ptr-preloader">
              <div className="ptr-prel-content">
                <img
                  src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/logo-cinedise-light.png"
                  className="ptr-prel-image tt-logo-light"
                  alt="Logo"
                />
              </div>
            </div>
          </div>

          {/* Magic cursor */}
          <div id="magic-cursor">
            <div id="ball"></div>
          </div>

          {/* Noise background */}
          <div className="bg-noise"></div>

          <div id="scroll-container">
            <Header />
            <PageTransition>
              <div id="content-wrap">
                {children}
                <Footer />
              </div>
            </PageTransition>
          </div>
        </main>

        {/* Legacy Scripts - Loaded lazily or after interactive */}
        {/* jQuery is required for many legacy plugins. We load it before others. */}
        {/* Legacy Scripts */}
        <Script
          src="/assets/vendor/jquery/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/vendor/gsap/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/gsap/ScrollToPlugin.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/gsap/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/smooth-scrollbar.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/swiper/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/isotope/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/isotope/isotope.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/isotope/packery-mode.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/lightgallery/js/lightgallery-all.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/jquery.mousewheel.min.js"
          strategy="afterInteractive"
        />

        {/* Theme JS - Must be loaded last */}
        <Script src="/assets/js/theme.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
