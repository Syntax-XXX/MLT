import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeastmodeEscooter Official: TikTok",
  description: "Official KuKirin partner and electric scooter content creator with a 10€ Beastmode discount code.",
  openGraph: {
    title: "BeastmodeEscooter Official: TikTok",
    description: "Kukirin partner, scooter content, and a 10€ discount code for Beastmode shoppers.",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "BeastmodeEscooter Official: TikTok" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a0b0d" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
