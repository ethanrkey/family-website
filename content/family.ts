import type { FamilyMember, FamilyPhoto } from "./types";

export const familyName = "Key Family";
export const tagline = "Dedicated. Resilient. Determined.";

/**
 * Display order. `slug` is the future route segment and `theme` the
 * data-theme value that route will set. Only members with `href` are linked
 * today — set it when a member's page exists.
 */
export const members: FamilyMember[] = [
  {
    name: "Amy Key",
    slug: "amy",
    theme: "amy",
    photo: "/mom3.webp",
    bio: "Amy is a Registered Nurse, Medical Claim Assessor, and Yoga Instructor. She graduated from the UT Arlington College of Nursing in 1995, earning a Bachelor of Science in Nursing. Amy is a mother to two sons, Ethan and Bryce, and two dogs, Gigi and Geoffrey. She enjoys spending time with her sons, her dogs, and her best friends, “the Beavers”. Amy is a lifelong Texan, born and raised in DFW.",
  },
  {
    name: "Ethan Key",
    slug: "ethankey",
    theme: "ethan",
    photo: "/me.webp",
    href: "/ethankey",
    bio: "Ethan graduated from Boston University in May 2026 with a degree in Computer Science and is now a software engineer at Raytheon in Fort Wayne, Indiana. He enjoys spending time with his family and friends, setting goals, working out, biking, listening to music, studying the stock market, and watching various sporting events.",
  },
  {
    name: "Bryce Key",
    slug: "bryce",
    theme: "bryce",
    photo: "/bryce2.webp",
    bio: "Bryce is a junior at Columbia University, where he studies Biochemistry and Music on the pre-med track and competes on the Swimming and Diving team. Bryce graduated from his high school, The Oakridge School, as the Valedictorian of his class. He is an outstanding scholar, earning a 4.96 weighted GPA in high school and scoring a 35 on the ACT. In his free time, Bryce likes to hang out with friends, read, crochet, sing, and design fashion.",
  },
];

/** Homepage carousel — top row scrolls left, bottom row scrolls right. */
export const galleryTop: FamilyPhoto[] = [
  { src: "/family1.webp", alt: "Key family photo" },
  { src: "/family3.webp", alt: "Key family photo" },
  { src: "/family4.webp", alt: "Key family photo" },
  { src: "/family5.webp", alt: "Key family photo" },
];

export const galleryBottom: FamilyPhoto[] = [
  { src: "/family6.webp", alt: "Key family photo" },
  { src: "/family7.webp", alt: "Key family photo" },
  { src: "/family9.webp", alt: "Key family photo" },
  { src: "/family8.webp", alt: "Key family photo" },
  { src: "/family10.webp", alt: "Key family photo" },
];
