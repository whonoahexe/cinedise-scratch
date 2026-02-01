export default function AboutUs() {
    return (
        <div id="work">
            {/* Introduction Section */}
            <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150">
                <div className="tt-section-inner tt-wrap">
                    <div className="tt-row">
                        <div className="tt-col-lg-4 padding-right-lg-5-p">
                            <div className="tt-heading tt-heading-sm margin-bottom-60 anim-fadeinup">
                                <h2 className="tt-heading-title text-gray">The<br className="hide-from-md" /> Idea</h2>
                            </div>
                        </div>

                        <div className="tt-col-lg-8">
                            <div className="text-xxlg font-alter">
                                <p className="anim-fadeinup">Cinedise is a full-service solution for all your video, film production, and marketing needs. We specialize in delivering a cinematic experience within a highly competitive budget. Our dedicated creative team is committed to producing high-quality content that elevates your brand above the rest.</p>
                                <p className="anim-fadeinup">Teams: As a comprehensive studio, CINEDISE houses all essential departments and Heads of Departments (HODs) to ensure a seamless workflow — all coordinated in a single meeting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Carousel Section */}
            <div className="tt-section">
                <div className="tt-section-inner">
                    <div className="tt-content-carousel cc-shifted cursor-drag cc-scale-down cc-hide-pagination cc-hide-navigation" data-simulate-touch="true" data-speed="900">
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                    <div key={num} className="swiper-slide">
                                        <div className="tt-content-carousel-item">
                                            <figure className="cover-opacity-1">
                                                <img className="tt-cc-image anim-image-parallax swiper-lazy" src={`https://cinedise-video.s3.eu-north-1.amazonaws.com/public/about/${num}.jpg`} data-src={`https://cinedise-video.s3.eu-north-1.amazonaws.com/public/about/${num}.jpg`} alt={`About Image ${num}`} />
                                            </figure>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tt-cc-nav-prev">
                            <div className="tt-cc-nav-arrow magnetic-item"></div>
                        </div>
                        <div className="tt-cc-nav-next">
                            <div className="tt-cc-nav-arrow magnetic-item"></div>
                        </div>
                        <div className="tt-cc-pagination hide-cursor"></div>
                    </div>
                </div>
            </div>

            {/* Team Info Section */}
            <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-200">
                <div className="tt-section-inner tt-wrap">
                    <div className="tt-heading tt-heading-xxlg tt-heading-stroke tt-heading-center margin-bottom-10-p anim-fadeinup">
                        <h3 className="tt-heading-subtitle text-gray">What We Do</h3>
                        <h2 className="tt-heading-title">The Team</h2>
                    </div>

                    <div className="tt-accordion tt-ac-xlg tt-ac-borders">
                        <div className="tt-accordion-item anim-fadeinup">
                            <div className="tt-accordion-heading">
                                <h3 className="tt-ac-head-title">Pre-Production</h3>
                                <div className="tt-accordion-caret-wrap">
                                    <div className="tt-accordion-caret magnetic-item"></div>
                                </div>
                            </div>
                            <div className="tt-accordion-content max-width-800">
                                <p>Focused on concept development, storytelling, and shot listing to provide a clear and strategic vision for your shoot or product.</p>
                            </div>
                        </div>

                        <div className="tt-accordion-item anim-fadeinup">
                            <div className="tt-accordion-heading">
                                <h3 className="tt-ac-head-title">Production</h3>
                                <div className="tt-accordion-caret-wrap">
                                    <div className="tt-accordion-caret magnetic-item"></div>
                                </div>
                            </div>
                            <div className="tt-accordion-content max-width-800">
                                <p>Expertise across Direction, Art Direction, Cinematography, Sound, and Makeup to bring your vision to life on set.</p>
                            </div>
                        </div>

                        <div className="tt-accordion-item anim-fadeinup">
                            <div className="tt-accordion-heading">
                                <h3 className="tt-ac-head-title">Post-Production</h3>
                                <div className="tt-accordion-caret-wrap">
                                    <div className="tt-accordion-caret magnetic-item"></div>
                                </div>
                            </div>
                            <div className="tt-accordion-content max-width-800">
                                <p>Specialized professionals in Color Grading and VFX ensure your final product meets the highest visual standards.</p>
                            </div>
                        </div>
                    </div>

                    <div className="tt-btn tt-btn-dark tt-btn-block margin-top-60 anim-fadeinup">
                        <a href="/#team" data-hover="View Team">View Team</a>
                    </div>

                    <div className="tt-heading tt-heading-xxlg tt-heading-stroke tt-heading-center margin-top-150 anim-fadeinup">
                        <h2 className="tt-heading-title">Why choose Cinedise?</h2>
                        <h3 className="tt-heading-subtitle text-gray">With numerous studios available, it’s only natural to ask — why CINEDISE? Here’s what sets us apart:</h3>
                    </div>
                </div>
            </div>

            {/* Testimonials Slider */}
            <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-2">
                <div className="tt-section-inner tt-wrapp">
                    <div className="tt-testimonials-slider text-center cursor-drag ts-scale-down ts-hide-navigation anim-fadeinup" data-loop="true" data-simulate-touch="true" data-speed="900">
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide font-alter">
                                    <div className="tt-ts-item">
                                        <div className="tt-ts-text">
                                            CINEDISE comprises seven specialized departments — Cinematography, Editing, DI, VFX, Motion Design/Animation, Poster/Image Design, and UI/UX — each led by experienced supervisors to ensure top-tier results.
                                        </div>
                                        <div className="tt-ts-subtext">Uncompromising Quality</div>
                                    </div>
                                </div>
                                {/* More slides can be added here following same pattern. For brevity using the few key ones needed or all. 
                    Original had 5. I'll include them all for completeness. */}
                                <div className="swiper-slide font-alter">
                                    <div className="tt-ts-item">
                                        <div className="tt-ts-text">
                                            From concept to delivery, we simplify the process. One meeting is all it takes to align with your vision. Our HODs are dedicated to pushing creative boundaries and delivering precisely what you need.
                                        </div>
                                        <div className="tt-ts-subtext">Streamlined Workflow</div>
                                    </div>
                                </div>
                                <div className="swiper-slide font-alter">
                                    <div className="tt-ts-item">
                                        <div className="tt-ts-text">
                                            We understand the importance of timelines. Our team is equipped to deliver high-quality outputs within the shortest possible time frames.
                                        </div>
                                        <div className="tt-ts-subtext">Rapid Turnaround</div>
                                    </div>
                                </div>
                                <div className="swiper-slide font-alter">
                                    <div className="tt-ts-item">
                                        <div className="tt-ts-text">
                                            Location is never a constraint. Our production team is capable of executing shoots across any location in India.
                                        </div>
                                        <div className="tt-ts-subtext">Pan-India Coverage</div>
                                    </div>
                                </div>
                                <div className="swiper-slide font-alter">
                                    <div className="tt-ts-item">
                                        <div className="tt-ts-text">
                                            CINEDISE collaborates with clients, artists, and studios worldwide. We accept payments in all major currencies and provide high-quality deliverables, including 1-year data retention via Google Drive.
                                        </div>
                                        <div className="tt-ts-subtext">Global Post-Production Capabilities</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tt-ts-nav-prev">
                            <div className="tt-ts-nav-arrow magnetic-item"></div>
                        </div>
                        <div className="tt-ts-nav-next">
                            <div className="tt-ts-nav-arrow magnetic-item"></div>
                        </div>
                        <div className="tt-ts-pagination hide-cursor"></div>
                    </div>
                </div>
            </div>

            {/* Page Nav */}
            <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150">
                <div className="tt-section-inner tt-wrap">
                    <div className="tt-page-nav tt-pn-scroll">
                        <a href="/contact" className="tt-pn-link anim-fadeinup">
                            <div className="tt-pn-title">Contact</div>
                            <div className="tt-pn-hover-title">Contact</div>
                        </a>
                        <div className="tt-pn-subtitle anim-fadeinup">Let's make something great together!</div>
                        <div className="tt-pn-image">
                            <img src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/cursor.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
