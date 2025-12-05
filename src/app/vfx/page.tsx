"use client"

import Link from 'next/link';
import { projects } from '@/data/projects';
import { useEffect } from 'react';

export default function VfxPage() {
    const vfxProjects = projects.filter(p => p.category === 'VFX');

    useEffect(() => {
        // Initialize legacy portfolio carousel for client-side navigation
        if (typeof window !== 'undefined' && (window as any).initPortfolioCarousel) {
            (window as any).initPortfolioCarousel();
        }
    }, []);

    return (
        <div id="page-content">
            <div className="tt-portfolio-carousel pci-caption-center cursor-drag-mouse-down pc-scale-down" data-simulate-touch="true" data-mousewheel="true" data-keyboard="true" data-grab-cursor="true" data-pagination-type="fraction">

                {/* Begin swiper container */}
                <div className="swiper">

                    {/* Begin swiper wrapper */}
                    <div className="swiper-wrapper">
                        {vfxProjects.map((project, index) => {
                            // Find the first mp4 in galleryImages to use as preview video, if any
                            const previewVideo = project.galleryImages.find(img => img.endsWith('.mp4'));

                            return (
                                <div key={project.slug} className="swiper-slide">
                                    <Link href={`/${project.slug}`} className="tt-portfolio-carousel-item" data-cursor="View<br>Project">
                                        <figure className="tt-pci-image-wrap cover-opacity-3">
                                            {/* Check for video or image */}
                                            {previewVideo ? (
                                                <video className="tt-pci-video" loop muted preload="metadata">
                                                    <source src={previewVideo} type="video/mp4" />
                                                </video>
                                            ) : (
                                                <img className="tt-pci-image swiper-lazy" src={project.headerImage} data-src={project.headerImage} alt={project.title} />
                                            )}
                                        </figure>
                                        <div className="tt-pci-caption-front">
                                            <div className="tt-pci-caption">
                                                <div className="tt-pci-caption-inner">
                                                    <h2 className="tt-pci-title">{project.title}</h2>
                                                    <div className="tt-pci-categories">
                                                        <div className="tt-pci-category">{project.category}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tt-pci-caption tt-pci-caption-back">
                                            <div className="tt-pci-caption-inner">
                                                <h2 className="tt-pci-title">{project.title}</h2>
                                                <div className="tt-pci-categories">
                                                    <div className="tt-pci-category">{project.category}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    {/* End swiper wrapper */}

                </div>
                {/* End swiper containers */}

                {/* Navigation */}
                <div className="tt-pc-navigation tt-swiper-nav">
                    <div className="tt-pc-nav-prev">
                        <div className="tt-pc-arrow tt-pc-arrow-prev magnetic-item"></div>
                    </div>
                    <div className="tt-pc-nav-next">
                        <div className="tt-pc-arrow tt-pc-arrow-next magnetic-item"></div>
                    </div>
                    <div className="tt-pc-pagination"></div>
                </div>

            </div>

            <footer id="tt-footer">
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
                                © Copyright - <a href="https://cinedise.studio" target="_blank" rel="noopener" className="tt-link">cinedise.studio</a>
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
        </div>
    );
}
