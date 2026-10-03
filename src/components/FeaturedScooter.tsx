import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const scooterUrl = "https://www.kugooescooters.com/products/kukirin-g2-ultra-electric-scooter?utm_source=matycube&utm_medium=paid";

export function FeaturedScooter() {
  const specs = [
    { label: "Battery", value: "48V 18Ah" },
    { label: "Price", value: "€669,00" },
    { label: "Price", value: "€669,00" },
    { label: "Motor", value: "1600W" },
  ];

  return (
    <article className="scooter-card reveal reveal-delay-1" aria-labelledby="ride-title">
      <div className="card-topline"><span>BEASTMODE&apos;S RIDE</span><span className="pulse-dot" aria-hidden="true" /> LIVE</div>
      <div className="scooter-art"><Image src="/g2-ultra-full.webp" alt="KuKirin G2 Ultra electric scooter" width={650} height={650} priority sizes="(max-width: 520px) calc(100vw - 64px), 436px" /></div>
      <div className="ride-details">
        <div><h2 id="ride-title">KuKirin G2 Ultra</h2><p>Built for the ride.</p></div>
        <a href={scooterUrl} target="_blank" rel="noopener noreferrer" className="round-action" aria-label="Explore the KuKirin G2 Ultra on the product page">
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </div>

      <div className="scooter-specs" aria-label="KuKirin G2 Ultra specifications">
        {specs.map((spec) => (
          <div key={spec.label} className="spec-item">
            <span className="spec-label">{spec.label}</span>
            <strong className="spec-value">{spec.value}</strong>
          </div>
        ))}
      </div>

      <a href={scooterUrl} target="_blank" rel="noopener noreferrer" className="card-link"><span>Explore the Scooter</span><ArrowUpRight size={17} aria-hidden="true" /></a>
    </article>
  );
}
