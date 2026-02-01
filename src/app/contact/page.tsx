import ContactForm from '@/components/ContactForm';

export default function Contact() {
    return (
        <div id="work">
            {/* Contact Section */}
            <div className="tt-section">
                <div className="tt-section-inner tt-wrap padding-top-150">
                    <div className="tt-row">
                        <div className="tt-col-lg-5 padding-right-lg-5-p">
                            <div className="tt-heading tt-heading-lg margin-bottom-10-p anim-fadeinup">
                                <h3 className="tt-heading-subtitle text-gray">Get in Touch</h3>
                                <h2 className="tt-heading-title">Drop Us<br /> A Line</h2>
                            </div>

                            <ul className="tt-contact-info padding-bottom-40 text-gray">
                                <li className="anim-fadeinup">
                                    <span className="tt-ci-icon"><i className="fas fa-phone"></i></span>
                                    <a href="tel:+918108859741" className="tt-link">+91 81088 59741</a>
                                </li>
                                <li className="anim-fadeinup">
                                    <span className="tt-ci-icon"><i className="fas fa-phone"></i></span>
                                    <a href="tel:+919382788853" className="tt-link">+91 93827 88853</a>
                                </li>
                                <li className="anim-fadeinup">
                                    <span className="tt-ci-icon"><i className="fas fa-envelope"></i></span>
                                    <a href="mailto:business@cinedise.studio" className="tt-link">business@cinedise.studio</a>
                                </li>
                                <li className="anim-fadeinup">
                                    <h6 className="no-margin-bottom margin-top-40">Follow:</h6>
                                    <div className="social-buttons">
                                        <ul>
                                            <li><a href="https://www.instagram.com/cinedisestudio" className="magnetic-item" target="_blank" rel="noopener noreferrer">Ig.</a></li>
                                            <li><a href="https://youtube.com/@cinedise?si=gV6O790ZKDjIDTj5" className="magnetic-item" target="_blank" rel="noopener noreferrer">Yt.</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="tt-col-lg-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* Page Nav */}
            <div className="tt-section padding-bottom-xlg-150">
                <div className="tt-section-inner tt-wrap">
                    <div className="tt-page-nav tt-pn-scroll">
                        <a href="/#work" className="tt-pn-link anim-fadeinup">
                            <div className="tt-pn-title">Portfolio</div>
                            <div className="tt-pn-hover-title">Portfolio</div>
                        </a>
                        <div className="tt-pn-subtitle anim-fadeinup">Selected Works</div>
                        <div className="tt-pn-image">
                            <img src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/cursor.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
