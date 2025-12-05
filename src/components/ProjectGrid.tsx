import Link from 'next/link';

const projects = [
    { title: "Films", category: "pages", link: "/films", image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/category-thumbnails/category-1.jpg" },
    { title: "Commercial", category: "portfolio", link: "/commercials", image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/category-thumbnails/category-2.jpg" },
    { title: "Social Media Content", category: "elements", link: "/social-media", image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/category-thumbnails/category-3.jpg" },
    { title: "Events", category: "portfolio", link: "/events", image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/category-thumbnails/category-4.jpg" },
    { title: "Visual Effects", category: "portfolio", link: "/vfx", image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/category-thumbnails/category-5.jpg" },
    { title: "Color", category: "portfolio", link: "/color", image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/category-thumbnails/category-6.jpg" },
    { title: "Motion Design", category: "portfolio", link: "https://brkn.me/motion", image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/category-thumbnails/category-7.jpg", external: true },
    { title: "Graphic Design", category: "portfolio", link: "/graphic-design", image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/category-thumbnails/category-8.jpg" },
    { title: "UI/UX", category: "portfolio", link: "https://brkn.me/web", image: "https://cinedise-video.s3.eu-north-1.amazonaws.com/public/category-thumbnails/category-9.jpg", external: true },
];

export default function ProjectGrid() {
    return (
        <div id="portfolio-grid">
            <div className="tt-grid ttgr-layout-3 ttgr-gap-3 ttgr-not-cropped">
                <div className="tt-grid-items-wrap isotope-items-wrap">
                    {projects.map((project, index) => (
                        <div key={index} className={`tt-grid-item isotope-item ${project.category}`}>
                            <div className="ttgr-item-inner">
                                <div className="portfolio-grid-item">
                                    <Link href={project.link} className="pgi-image-wrap" rel="noopener" data-cursor="View<br>Work" target={project.external ? "_blank" : "_self"}>
                                        <div className="pgi-image-holder">
                                            <div className="pgi-image-inner anim-zoomin">
                                                <figure className="pgi-image ttgr-height">
                                                    <img className="tt-lazy" src={project.image} alt={project.title} />
                                                </figure>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="pgi-caption">
                                        <div className="pgi-caption-inner">
                                            <h2 className="pgi-title">
                                                <Link href={project.link} rel="noopener" target={project.external ? "_blank" : "_self"}>{project.title}</Link>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
