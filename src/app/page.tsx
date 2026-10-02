import { CopyLinkButton } from "@/components/CopyLinkButton";
import { FeaturedScooter } from "@/components/FeaturedScooter";
import { LinkButton } from "@/components/LinkButton";
import { Profile } from "@/components/Profile";
import { links } from "@/config/links";

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
        <nav className="link-list" aria-label="BeastMode destinations">
          {activeLinks.map((link, index) => <LinkButton key={link.id} link={link} index={index} />)}
        </nav>
        <CopyLinkButton />
        <p className="footer-note">© {new Date().getFullYear()} BeastMode <span aria-hidden="true">·</span> Made by <a href="https://syntax-xxx.is-a.dev/" target="_blank" rel="noopener noreferrer">Syntax-XXX<span className="sr-only"> (opens in a new tab)</span></a></p>
      </section>
    </main>
  );
}
