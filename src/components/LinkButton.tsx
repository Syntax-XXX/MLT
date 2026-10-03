'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { SocialLink } from "@/config/links";

function formatFollowers(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function trackLinkClick(link: SocialLink) {
  if (typeof window === "undefined") return;
  const va = (window as Window & { va?: (event: string, data?: Record<string, string>) => void }).va;
  if (typeof va === "function") {
    va("cta_click", {
      link_id: link.id,
      link_title: link.title,
      link_url: link.url,
    });
  }
}

function TikTokMark() {
  return (
    <span className="brand-image-wrap">
      <Image src="/profile.jpeg" alt="TikTok profile logo" width={20} height={20} priority sizes="20px" className="brand-image" />
    </span>
  );
}

function KuKirinMark() {
  return (
    <span className="brand-image-wrap kukirin-image-wrap" aria-label="Kukirin official logo">
      <img
        src="https://kukirin-escooter.com/cdn/shop/files/KuKirin-04_2e4a6b0a-3782-4ac2-b0cd-5720b0cc2282.png"
        alt="Kukirin official logo"
        className="kukirin-logo"
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </span>
  );
}

const icons = { "shopping-bag": TikTokMark, video: TikTokMark, kukirin: KuKirinMark };

export function LinkButton({ link, index }: { link: SocialLink; index: number }) {
  const Icon = icons[link.icon];
  const [followers, setFollowers] = useState("0 followers");

  useEffect(() => {
    if (link.id !== "tiktok") return;

    let active = true;
    const loadFollowers = async () => {
      try {
        const response = await fetch(
          "https://proxy.cors.dev/https://bm.syntax-xxx.is-a.dev/api/tiktok",
          { cache: "no-store" }
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (!active) return;
        const count = Number(data.followers);
        if (!Number.isFinite(count)) throw new Error("Invalid follower count");
        setFollowers(`${formatFollowers(count)} followers`);
      } catch (error) {
        console.error("TikTok follower API failed:", error);
      }
    };

    void loadFollowers();
    const interval = window.setInterval(loadFollowers, 60_000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [link.id]);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-button ${link.featured ? "featured" : ""} ${link.id === "tiktok" ? "tiktok-link" : ""}`}
      style={{ animationDelay: `${180 + index * 90}ms` }}
      onClick={() => trackLinkClick(link)}
    >
      <span className="link-icon"><Icon /></span>
      <span className="link-copy"><strong>{link.title}</strong><small>{link.subtitle}</small></span>
      {link.id === "tiktok" && (
        <span className="tiktok-merge-badge" aria-label={`${followers} followers`}>
          <span className="tiktok-mini-avatar">
            <Image src="/profile.jpeg" alt="BeastMode avatar" width={18} height={18} priority sizes="18px" />
          </span>
          <span>{followers}</span>
        </span>
      )}
      <ArrowUpRight className="arrow" size={20} strokeWidth={2.1} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
