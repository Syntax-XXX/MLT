export type LinkIcon = "shopping-bag" | "video" | "kukirin";

export type SocialLink = {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: LinkIcon;
  featured: boolean;
  enabled: boolean;
};

export const links: SocialLink[] = [
  {
    id: "partner",
    title: "Shop KuKirin Scooters",
    subtitle: "BeastMode Partner",
    url: "https://www.kugooescooters.com/?ref=Beastmode",
    icon: "kukirin",
    featured: true,
    enabled: true,
  },
  {
    id: "tiktok",
    title: "TikTok",
    subtitle: "@beastmode3501",
    url: "https://www.tiktok.com/@beastmode3501",
    icon: "video",
    featured: false,
    enabled: true,
  },
  // Add future socials here. Set enabled: true only after adding a real URL.
  {
    id: "instagram",
    title: "Instagram",
    subtitle: "",
    url: "",
    icon: "video",
    featured: false,
    enabled: false,
  },
  {
    id: "youtube",
    title: "YouTube",
    subtitle: "",
    url: "",
    icon: "video",
    featured: false,
    enabled: false,
  },
];
