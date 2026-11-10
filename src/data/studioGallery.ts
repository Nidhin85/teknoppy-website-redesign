/**
 * STUDIO GALLERY DATA — "Studio, up close"
 * 
 * HOW TO ADD A NEW PHOTO OR VIDEO:
 * 1. Drop your file into the public directory:
 *    - Images: /public/images/life/your-filename.webp (or .jpg / .png)
 *    - Videos: /public/videos/life/your-filename.mp4
 * 2. Add an entry to the array below:
 *    {
 *      type: "image", // or "video"
 *      src: "/images/life/your-filename.webp",
 *      alt: "Descriptive alt text for SEO and screen readers",
 *      caption: "Card caption",
 *      size: "wide", // optional: "tall" | "wide" | "square" | "standard"
 *      poster: "/images/life/poster.webp" // required when type is "video"
 *    }
 * 
 * Note: The dual-row marquee automatically balances items and repeats them
 * seamlessly so there are never empty gaps on any screen resolution (1440px, 1920px+).
 */

export interface StudioGalleryItem {
  type: "image" | "video";
  src: string;
  alt: string;
  caption: string;
  size?: "tall" | "wide" | "square" | "standard";
  poster?: string;
  width?: number;
  height?: number;
}

export const studioGallery: StudioGalleryItem[] = [
  {
    type: "image",
    src: "/images/life/teknoppy-friday-knowledge-share.jpg",
    alt: "Teknoppy team discussing weekly sprint tasks on board",
    caption: "Sprint board",
    size: "wide",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-design-sprint-collaboration.jpg",
    alt: "Behind the scenes design sprint and UI ideation session",
    caption: "Behind the scenes",
    size: "tall",
    width: 1024,
    height: 682
  },
  {
    type: "video",
    src: "/videos/life/teknoppy-launch-day-reel.mp4",
    poster: "/images/life/teknoppy-project-launch-presentation.webp",
    alt: "Teknoppy client website launch day celebration reel",
    caption: "Launch day",
    size: "tall",
    width: 1080,
    height: 1920
  },
  {
    type: "image",
    src: "/images/life/teknoppy-side-by-side-review.jpg",
    alt: "Colleagues reviewing live web design work at the desk",
    caption: "Design review",
    size: "wide",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-individual-workstation-focus.png",
    alt: "Developer working at clean dual-monitor workstation",
    caption: "Studio workstation",
    size: "standard",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-team-lunch-together.jpg",
    alt: "Teknoppy team enjoying afternoon tea and lunch together",
    caption: "Tea & lunch",
    size: "square",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-client-consultation-lenaa.webp",
    alt: "Client strategy and website consultation in meeting room",
    caption: "Client consultation",
    size: "wide",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-open-workstation-bay.webp",
    alt: "Open workstation bay at Vyttila studio",
    caption: "Collaboration bay",
    size: "tall",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-side-by-side-mentorship.webp",
    alt: "Side-by-side developer mentorship session at Teknoppy",
    caption: "Side-by-side mentorship",
    size: "standard",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-friday-knowledge-share.webp",
    alt: "Friday technical SEO and engineering knowledge share",
    caption: "Friday knowledge-share",
    size: "wide",
    width: 1024,
    height: 682
  }
];

export default studioGallery;
