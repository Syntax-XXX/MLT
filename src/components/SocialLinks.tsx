'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

function formatFollowers(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export function SocialLinks() {
  const [followers, setFollowers] = useState("0 followers");

  useEffect(() => {
    let active = true;

    fetch("/api/tiktok")
      .then((response) => response.json())
      .then((data) => {
        if (!active) return;
        setFollowers(`${formatFollowers(Number(data.followers ?? 0))} followers`);
      })
      .catch(() => {
        if (active) setFollowers("1K followers");
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="social-row reveal reveal-delay-3">
      <a href="https://www.tiktok.com/@beastmode3501" target="_blank" rel="noopener noreferrer" className="social-avatar-link" aria-label="Follow BeastMode on TikTok (opens in a new tab)">
        <div className="social-avatar">
          <Image src="/profile.jpeg" alt="BeastMode profile avatar" width={36} height={36} priority sizes="36px" />
        </div>
      </a>
      <span className="followers-badge">{followers}</span>
    </div>
  );
}
