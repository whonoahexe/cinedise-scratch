
import Link from 'next/link';

export default function ColorPage() {
    return (
        <div id="page-content">
            <div className="tt-portfolio-slider cursor-drag-mouse-down" data-speed="1000" data-mousewheel="true" data-keyboard="true" data-simulate-touch="true" data-grab-cursor="true" data-pagination-type="fraction" data-parallax-mouse-move="true">

                {/* Begin swiper container */}
                <div className="swiper">

                    {/* Begin swiper wrapper */}
                    <div className="swiper-wrapper">

                        {/* Slide 1: The Unequals */}
                        <div className="swiper-slide" data-title="The Unequals | Color" data-category="Grading">
                            <video className="tt-bg-video" loop muted preload="metadata">
                                <source src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/color/the-unequals.mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/* Slide 2: Atomic Brew */}
                        <div className="swiper-slide" data-title="Atomic Brew | Color" data-category="Grading">
                            <video className="tt-bg-video" loop muted preload="metadata">
                                <source src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/color/atomic-brew.mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/* Slide 3: Aminova 25 */}
                        <div className="swiper-slide" data-title="Aminova 25 | Color" data-category="Grading">
                            <div className="tt-portfolio-slider-item cover-opacity-3" data-swiper-parallax="50%">
                                <video className="tt-bg-video" loop muted preload="metadata">
                                    <source src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/color/aminova-25.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                    </div>
                    {/* End swiper wrapper */}

                </div>
                {/* End swiper container */}

                {/* Caption */}
                <div className="tt-portfolio-slider-caption psc-center">
                    <div className="tt-ps-caption-inner">
                        <h2 className="tt-psc-elem tt-ps-caption-title"></h2>
                        <div className="tt-psc-elem tt-ps-caption-category"></div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="tt-portfolio-slider-navigation tt-swiper-nav">
                    <div className="tt-ps-nav-prev">
                        <div className="tt-ps-nav-arrow tt-ps-nav-arrow-prev magnetic-item"></div>
                    </div>
                    <div className="tt-ps-nav-next">
                        <div className="tt-ps-nav-arrow tt-ps-nav-arrow-next magnetic-item"></div>
                    </div>
                    <div className="tt-ps-nav-pagination"></div>
                </div>

            </div>

            {/* Footer absolute for this page as per legacy */}
            <footer id="tt-footer" className="footer-absolute">
                <div className="tt-footer-inner">
                    <div className="footer-col tt-align-center-left">
                        <div className="footer-col-inner">
                            <div className="tt-btn tt-btn-link">
                                <Link href="/contact" data-hover="Get in Touch">Get in Touch</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-col tt-align-center-right">
                        <div className="footer-col-inner">
                            <div className="footer-social">
                                <div className="footer-social-text"><span>Follow</span><i className="fas fa-share-alt"></i></div>
                                <div className="social-buttons">
                                    <ul>
                                        <li><a href="https://www.instagram.com/cinedisestudio" className="magnetic-item" target="_blank" rel="noopener noreferrer">Ig.</a></li>
                                        <li><a href="https://youtube.com/@cinedise?si=gV6O790ZKDjIDTj5" className="magnetic-item" target="_blank" rel="noopener noreferrer">Yt.</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
