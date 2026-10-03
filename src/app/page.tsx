import { CopyLinkButton } from "../components/CopyLinkButton";
import { FeaturedScooter } from "../components/FeaturedScooter";
import { LinkButton } from "../components/LinkButton";
import { Profile } from "../components/Profile";
import { links } from "../config/links";

export default function Home() {
  const activeLinks = links.filter((link) => link.enabled);
  return (
    <main className="site-shell">
      <div className="background-grid" aria-hidden="true" />
      <div className="stars" aria-hidden="true">
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
        <span className="star star-7" />
        <span className="star star-8" />
        <span className="star star-9" />
        <span className="star star-10" />
      </div>
      <div className="orange-glow" aria-hidden="true" />
      <section className="content" aria-label="BeastMode links">
        <Profile />
        <FeaturedScooter />
        <section className="tutorial-card reveal reveal-delay-1" aria-labelledby="tutorial-title">
          <div className="tutorial-heading">
            <div>
              <span className="tutorial-eyebrow">QUICK TUTORIAL</span>
              <h2 id="tutorial-title">How to use the code</h2>
              <p>Watch the short guide to see exactly how to use the BeastMode code.</p>
            </div>
            <span className="tutorial-badge">VIDEO GUIDE</span>
          </div>
          <div className="tutorial-video-wrap">
            <video
              className="tutorial-video"
              controls
              playsInline
              preload="metadata"
              poster="/tutorial-code-poster.jpg"
            >
              <source src="/tutorial-code.mp4" type="video/mp4" />
              Your browser does not support the video player.
            </video>
          </div>
        </section>
        <nav className="link-list" aria-label="BeastMode destinations">
          {activeLinks.map((link, index) => <LinkButton key={link.id} link={link} index={index} />)}
        </nav>
        <CopyLinkButton />
        <p className="footer-note">© {new Date().getFullYear()} BeastMode <span aria-hidden="true">·</span> Made by <a href="https://syntax-xxx.is-a.dev/" target="_blank" rel="noopener noreferrer">Syntax-XXX<span className="sr-only"> (opens in a new tab)</span></a></p>
      </section>
    </main>
  );
}
