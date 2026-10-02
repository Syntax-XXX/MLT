'use client';

import Image from "next/image";
import { Globe, Mail, Share2, Sparkles } from "lucide-react";

export function Profile() {
  return (
    <header className="profile reveal">
      <div className="profile-topbar" aria-label="Profile actions">
        <span className="top-icon" aria-hidden="true"><Sparkles size={16} /></span>
        <button
          type="button"
          className="top-icon share-btn"
          aria-label="Share BeastmodeEscooter profile"
          onClick={() => {
            if (typeof window === "undefined") return;
            const va = (window as Window & { va?: (event: string, data?: Record<string, string>) => void }).va;
            if (typeof va === "function") {
              va("share_profile", { page: window.location.href });
            }
          }}
        >
          <Share2 size={16} aria-hidden="true" />
        </button>
      </div>

      <div className="profile-mark">
        <Image src="/profile.jpeg" alt="BeastMode electric scooter profile photo" width={112} height={112} priority sizes="104px" />
      </div>

      <h1>BEASTMODE</h1>

      <p className="description">
        <span className="meta-line"><Mail size={15} aria-hidden="true" />Official KuKirin Partner</span>
        <span className="meta-line meta-muted">beastmode-partnership@outlook.de</span>
        <span className="meta-line meta-inline">
          <Globe size={15} aria-hidden="true" />
          <span>Kukirin Website</span>
          <span className="meta-divider">|</span>
          <span className="meta-highlight">BeastMode</span>
          <span className="meta-discount">10€ off</span>
        </span>
      </p>

      <div className="discount-banner" aria-label="BeastMode discount offer">
        <div className="discount-tag-row">
          <span className="discount-tag">Official partner</span>
          <span className="discount-tag accent">10€ off</span>
        </div>
        <div className="discount-row">
          <span className="discount-code">BEASTMODE</span>
          <span className="discount-badge">Any item</span>
        </div>
      </div>
    </header>
  );
}
