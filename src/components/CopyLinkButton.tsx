"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);
  async function copyLink() {
    try {
      if (typeof window !== "undefined") {
        const va = (window as Window & { va?: (event: string, data?: Record<string, string>) => void }).va;
        if (typeof va === "function") {
          va("copy_profile_link", { page: window.location.href });
        }
      }
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
      window.prompt("Copy this profile link:", window.location.href);
    }
  }
  return <button type="button" onClick={copyLink} className="copy-button" aria-live="polite"><span>{copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}</span>{copied ? "Link copied" : "Copy profile link"}</button>;
}
