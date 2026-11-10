/**
 * CELEBRATIONS DATA — "We celebrate together"
 * 
 * HOW TO ADD A NEW CELEBRATION PHOTO OR VIDEO:
 * 1. Drop your image or video file into:
 *    - /public/images/life/your-filename.webp (or .jpg / .png)
 * 2. Add an entry to the array below:
 *    {
 *      type: "image", // or "video"
 *      src: "/images/life/your-filename.webp",
 *      alt: "Descriptive alt text for SEO and screen readers",
 *      caption: "Moment title",
 *      tag: "Festival", // "Festival" | "Launch" | "Milestone" or custom
 *      width: 1024,
 *      height: 768
 *    }
 * 
 * Note: Each photo is rendered at its natural aspect ratio with NO cropping.
 * Adding photos automatically scales the reel and expands in the "See all moments" grid.
 */

export interface CelebrationItem {
  type: "image" | "video";
  src: string;
  alt: string;
  caption: string;
  tag?: "Festival" | "Launch" | "Milestone" | string;
  width?: number;
  height?: number;
  date?: string;
  poster?: string;
}

export const celebrations: CelebrationItem[] = [
  {
    type: "image",
    src: "/images/life/teknoppy-diwali-celebration-01.webp",
    alt: "Teknoppy team celebrating Diwali in traditional festive attire with lamps at the Vyttila office",
    caption: "Diwali",
    tag: "Festival",
    width: 1024,
    height: 768
  },
  {
    type: "image",
    src: "/images/life/teknoppy-halloween-celebration-01.webp",
    alt: "Teknoppy team celebrating Halloween in themed costumes and spooky makeup at the studio",
    caption: "Halloween",
    tag: "Festival",
    width: 1024,
    height: 768
  },
  {
    type: "image",
    src: "/images/life/teknoppy-onam-celebration.webp",
    alt: "Onam festival celebration at Teknoppy Vyttila studio",
    caption: "Onam Festival",
    tag: "Festival",
    width: 1024,
    height: 1024
  },
  {
    type: "image",
    src: "/images/life/teknoppy-pookkalam-preparation.webp",
    alt: "Traditional floral pookkalam carpet created by team members",
    caption: "Pookkalam",
    tag: "Festival",
    width: 478,
    height: 850
  },
  {
    type: "image",
    src: "/images/life/teknoppy-team-client-milestone.webp",
    alt: "Team celebrating major delivery milestone with client",
    caption: "Team milestone",
    tag: "Milestone",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-client-partnership-meeting.jpg",
    alt: "Partnership meeting and project kickoff with international client",
    caption: "Client partnership",
    tag: "Milestone",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-behind-the-scenes-shoot.webp",
    alt: "Behind the scenes photoshoot and content production day",
    caption: "Behind the scenes",
    tag: "Launch",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-core-team-portrait.jpg",
    alt: "Teknoppy full core team portrait at the Kochi office",
    caption: "The whole team",
    tag: "Milestone",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-side-by-side-review.jpg",
    alt: "Design and technical review celebration session",
    caption: "Collaborative reviews",
    tag: "Milestone",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-come-say-hello.webp",
    alt: "Lenaa client partnership handshake with leadership",
    caption: "Partnership handshake",
    tag: "Milestone",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-friday-knowledge-share.webp",
    alt: "Friday engineering knowledge share",
    caption: "Friday knowledge-share",
    tag: "Launch",
    width: 1024,
    height: 682
  },
  {
    type: "image",
    src: "/images/life/teknoppy-team-collaboration.webp",
    alt: "Cross-functional team collaboration on client web deliverables",
    caption: "Team collaboration",
    tag: "Milestone",
    width: 682,
    height: 1024
  },
  {
    type: "image",
    src: "/images/life/teknoppy-inhouse-team-full-lineup.jpg",
    alt: "In-house design and development team lineup at Teknoppy",
    caption: "Studio lineup",
    tag: "Milestone",
    width: 1024,
    height: 682
  }
];

export default celebrations;
