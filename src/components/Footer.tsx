import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="tt-footer" className="!bg-[#0a0a0a]">
            <div className="tt-footer-inner">
                <div className="footer-col tt-align-center-left">
                    <div className="footer-col-inner">
                        <div className="tt-btn tt-btn-link">
                            <a href="#" className="scroll-to-top" data-hover="Back to top">Back to top</a>
                        </div>
                    </div>
                </div>

                <div className="footer-col tt-align-center order-m-last">
                    <div className="footer-col-inner">
                        <div className="tt-copyright">
                            © Copyright - <a href="https://cinedise.studio" target="_blank" rel="noopener noreferrer" className="tt-link">cinedise.studio</a>
                        </div>
                    </div>
                </div>

                <div className="footer-col tt-align-center-right">
                    <div className="footer-col-inner">
                        <div className="footer-social">
                            <div className="footer-social-text"><span>Follow</span><i className="fas fa-share-alt"></i></div>
                            <div className="social-buttons">
                                <ul>
                                    <li><a href="https://www.instagram.com/cinedisestudio" className="magnetic-item" target="_blank" rel="noopener">Ig.</a></li>
                                    <li><a href="https://youtube.com/@cinedise?si=gV6O790ZKDjIDTj5" className="magnetic-item" target="_blank" rel="noopener">Yt.</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
