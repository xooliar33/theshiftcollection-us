/**
 * ============================================================================
 * SITE CONFIGURATION
 * ============================================================================
 * This is the ONLY file you need to edit to customize the site for your own use.
 * All branding, personal info, social links, and site metadata are defined here.
 *
 * After editing this file, restart the dev server to see changes.
 * ============================================================================
 */

import type { ContactCardTitle } from "@/components/contact-card";

export const siteConfig = {
  /** Site name used in metadata, logo, and branding */
  name: "The Shift Collection",

  /** Tagline shown alongside name (e.g. "Photo", "Photography") */
  tagline: "Photo",

  /** Your role/title shown in profile cards and footer */
  role: "Photographer",

  /** Short bio shown on the home page profile card */
  bio: "I'm Dylan, a photographer dedicated to capturing authentic moments and telling stories through creative and emotional imagery, wherever my journey takes me.",

  /** Avatar image path (place your avatar in /public/avatar.jpg) */
  avatar: "/avatar.jpg",

  /** Initials used as avatar fallback */
  initials: "EC",

  /** Site metadata for SEO */
  metadata: {
    title: {
      template: "%s - The Shift Collection",
      default: "The Shift Collection",
    },
    description: "The Shift Collection",
  },

  /** Social links shown in profile card and footer */
  socialLinks: [
    {
      title: "Instagram",
      href: "https://instagram.com/theshiftcollection.us",
    },
    {
      title: "DirtyE9X",
      href: "https://www.dirtye9x.com/",
    },
    {
      title: "Xiaohongshu",
      href: "https://www.xiaohongshu.com/user/profile/66c84ba2000000001b01b3f1",
    },
    {
      title: "Contact me",
      href: "mailto:theshiftcollection@proton.me",
      /** If true, this link gets the primary button style */
      primary: true,
    },
  ] as { title: ContactCardTitle; href: string; primary?: boolean }[],

  /** Footer attribution */
  footer: {
    designCredit: {
      name: "Pawel Gola",
      href: "https://templates.gola.io/template/hanssen",
    },
    poweredBy: {
      name: "The Shift Collection",
      href: "https://github.com/The Shift Collection",
    },
  },

  /**
   * Mapbox custom style URLs (optional).
   * If not set, Mapbox default styles will be used.
   * Create your own at https://studio.mapbox.com/
   */
  mapbox: {
    lightStyle: "mapbox://styles/The Shift Collection/cldmhu6tr000001n33ujbxf7j",
    darkStyle: "mapbox://styles/The Shift Collection/clp8hcmd300km01qx78rt0xaw",
  },

  /**
   * Image loader configuration.
   * Set to "cloudflare" to use the Cloudflare custom image loader,
   * or "default" to use Next.js built-in image optimization.
   */
  imageLoader: "cloudflare" as "cloudflare" | "default",

  /**
   * Gear / equipment shown on the About page.
   * Each item has a brand and model name.
   */
  gear: [
    { brand: "Canon", model: "R10" },
    { brand: "DJI", model: "RS 3 Mini" },
    { brand: "Tamron", model: "50-400mm F/4.5-6.3 Di III VC VXD" },
    { brand: "Sigma", model: "35mm F/1.4 DG HSM" },
    { brand: "Viltrox", model: "AF 40mm F/2.5 FE" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
