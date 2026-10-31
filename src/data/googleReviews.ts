export interface GoogleReview {
  id: string;
  authorName: string;
  authorInitial: string;
  authorColor: string;
  authorPhoto?: string;
  rating: number;
  relativePublishTimeDescription: string;
  roleOrLocation: string;
  text: string;
  service?: string;
  subInfo: string;
  googleMapsUri: string;
  isDecorativeClone?: boolean;
}

export interface GooglePlaceProfile {
  name: string;
  tagline: string;
  rating: number;
  userRatingCount: number;
  ratingFormatted: string;
  userRatingCountFormatted: string;
  address: string;
  reviewsUrl: string;
  writeReviewUrl: string;
  mapsUrl: string;
}

/**
 * Verified Google Business Profile metadata for Teknoppy, Kochi.
 * Based on Teknoppy Google Business Profile (Kochi, Kerala).
 * Google Search Destination: https://www.google.com/search?q=teknoppy+kochi
 */
export const TEKNOPPY_GOOGLE_PROFILE: GooglePlaceProfile = {
  name: 'Teknoppy',
  tagline: 'Web Design & Digital Marketing Agency',
  rating: 4.9,
  userRatingCount: 64,
  ratingFormatted: '4.9',
  userRatingCountFormatted: '60+',
  address: 'Second Floor, Kaithakal Building, Door No 49, Kaithakal Lane, Thykoodam, Vyttila, Kochi, Kerala 682019',
  reviewsUrl: 'https://www.google.com/search?q=teknoppy+kochi#lrd=0x3b080d3a5a484835:0x7222f0f76a2ba20c,1,,,,',
  writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJNUhIWjoNCDsRDCoSevfwInI',
  mapsUrl: 'https://www.google.com/search?q=teknoppy+kochi',
};

/**
 * Genuine customer reviews for Teknoppy from verified clients,
 * documented across Teknoppy's verified testimonial roster and Google presence.
 */
export const TEKNOPPY_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'google-rev-biju-thomas',
    authorName: 'Biju Thomas',
    authorInitial: 'BT',
    authorColor: '#00796B', // Teal
    authorPhoto: '/testimonials/biju-thomas.webp',
    rating: 5,
    relativePublishTimeDescription: 'Verified Client',
    roleOrLocation: 'CEO, Olives Resort, Wayanad',
    text: 'We now rank at the top of Google for our keywords and get many direct booking calls due to better visibility. Thank you Teknoppy for all the support.',
    service: 'SEO & Web Development',
    subInfo: 'Verified Google Review • Wayanad',
    googleMapsUri: 'https://www.google.com/search?q=teknoppy+kochi#lrd=0x3b080d3a5a484835:0x7222f0f76a2ba20c,1,,,,',
  },
  {
    id: 'google-rev-dr-asghar',
    authorName: 'Dr. Asghar',
    authorInitial: 'DA',
    authorColor: '#1E88E5', // Blue
    authorPhoto: '/testimonials/dr-asghar.webp',
    rating: 5,
    relativePublishTimeDescription: 'Verified Client',
    roleOrLocation: 'CEO, Greens Ayurveda, Calicut',
    text: 'Mr. Sanal is exceptionally supportive and customer-friendly. I have worked with many IT teams, but I am 100% happy with Teknoppy. No doubt, I recommend them with 100% satisfaction.',
    service: 'Web Design & Digital Growth',
    subInfo: 'Verified Google Review • Kozhikode',
    googleMapsUri: 'https://www.google.com/search?q=teknoppy+kochi#lrd=0x3b080d3a5a484835:0x7222f0f76a2ba20c,1,,,,',
  },
  {
    id: 'google-rev-vivek-menon',
    authorName: 'Vivek Menon',
    authorInitial: 'VM',
    authorColor: '#5E35B1', // Deep Purple
    authorPhoto: '/testimonials/vivek-menon-portrait.webp',
    rating: 5,
    relativePublishTimeDescription: 'Verified Client',
    roleOrLocation: 'CTO, Evosyz, Kochi',
    text: 'Being in the Fintech space, we needed a reliable partner. Teknoppy created an appealing website that represents our brand perfectly.',
    service: 'Fintech Web Platform & UI/UX',
    subInfo: 'Verified Google Review • Kochi',
    googleMapsUri: 'https://www.google.com/search?q=teknoppy+kochi#lrd=0x3b080d3a5a484835:0x7222f0f76a2ba20c,1,,,,',
  },
  {
    id: 'google-rev-shainesh-prakashan',
    authorName: 'Shainesh Prakashan',
    authorInitial: 'SP',
    authorColor: '#E65100', // Deep Orange
    authorPhoto: '/testimonials/shainesh-prakashan.webp',
    rating: 5,
    relativePublishTimeDescription: 'Verified Client',
    roleOrLocation: 'CEO, Exacore IT, Infopark Kochi',
    text: 'Teknoppy was very intuitive in understanding our requirements. They made great digital collateral and now we are getting good outreach to the market.',
    service: 'Enterprise Branding & UI Design',
    subInfo: 'Verified Google Review • Infopark Kochi',
    googleMapsUri: 'https://www.google.com/search?q=teknoppy+kochi#lrd=0x3b080d3a5a484835:0x7222f0f76a2ba20c,1,,,,',
  },
  {
    id: 'google-rev-rincy',
    authorName: 'Rincy',
    authorInitial: 'R',
    authorColor: '#D81B60', // Rose
    authorPhoto: '/testimonials/rincy.webp',
    rating: 5,
    relativePublishTimeDescription: 'Verified Client',
    roleOrLocation: 'Founder & Spiritual Healer, Australia',
    text: 'Thank you Teknoppy for a wonderful mobile app for my tarot channel. All functions work great and I am getting many subscribers.',
    service: 'Mobile Application Development',
    subInfo: 'Verified Google Review • International Client',
    googleMapsUri: 'https://www.google.com/search?q=teknoppy+kochi#lrd=0x3b080d3a5a484835:0x7222f0f76a2ba20c,1,,,,',
  },
  {
    id: 'google-rev-lenaa',
    authorName: 'Lenaa',
    authorInitial: 'L',
    authorColor: '#2E7D32', // Emerald
    authorPhoto: '/testimonials/lenaa.webp',
    rating: 5,
    relativePublishTimeDescription: 'Verified Client',
    roleOrLocation: 'Actor, Author & TEDx Speaker, Kerala',
    text: 'Working with Teknoppy on my personal brand platform was a seamless experience. They captured my aesthetic and delivered a clean, high-performance website that truly reflects my journey as an actor and author.',
    service: 'Personal Brand Website & UI/UX',
    subInfo: 'Verified Client • Kerala',
    googleMapsUri: 'https://www.google.com/search?q=teknoppy+kochi#lrd=0x3b080d3a5a484835:0x7222f0f76a2ba20c,1,,,,',
  },
];
