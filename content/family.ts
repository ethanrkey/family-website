import type { FamilyMember, FamilyPhoto } from "./types";

export const familyName = "Key Family";
export const tagline = "Dedicated. Resilient. Determined.";

/**
 * Display order on the homepage. Each member's page lives at `href` and sets
 * `data-theme={theme}`. Ethan's page is his portfolio (content/profile.ts etc.);
 * Amy and Bryce render through components/PersonPage from the fields below.
 */
export const members: FamilyMember[] = [
  {
    name: "Amy Key",
    firstName: "Amy",
    slug: "amykey",
    theme: "amy",
    href: "/amykey",
    photo: "/mom3.webp",
    identity: "Registered Nurse · Mansfield, Texas",
    bio: "Amy is a Registered Nurse, Medical Claim Assessor, and Yoga Instructor. She graduated from the UT Arlington College of Nursing in 1995, earning a Bachelor of Science in Nursing. Amy is a mother to two sons, Ethan and Bryce, and three dogs, Gigi, Geoffrey, and George. She enjoys spending time with her sons, her dogs, and her best friends, “the Beavers”. Amy is a lifelong Texan, born and raised in DFW.",
    timeline: [
      {
        title: "Registered Nurse",
        org: "Lemmon Avenue Plastic Surgery",
        // TODO: start date
      },
      {
        title: "Preop/PACU RN",
        org: "Kirby Plastic Surgery",
        location: "Fort Worth, TX",
        dates: "Mar 2025 – Present",
      },
      {
        title: "LTC Insurance RN Assessor",
        org: "illumifin",
        meta: "Remote",
        dates: "Jan 2024 – Present",
      },
      {
        title: "Preop/PACU RN",
        org: "HCA Medical City Southlake",
        dates: "May 2023 – Present",
      },
      {
        title: "Bachelor of Science in Nursing",
        org: "UT Arlington College of Nursing",
        dates: "Dec 1995",
      },
    ],
    highlights: ["Registered Nurse", "Medical claim assessor", "Yoga instructor", "Lifelong Texan"],
    feature: {
      title: "Texas",
      paragraphs: [
        "Amy was born and raised in Dallas–Fort Worth and has never seriously considered living anywhere else. Home is Mansfield: the yoga mat by the window, three dogs underfoot, and a group chat with the Beavers that has been going for longer than either of her sons has been alive.",
        "Yoga is how the day starts. Gigi, Geoffrey, and George are how it ends. In between there are shifts, assessments, and — whenever the boys are home — a full kitchen and a very full table.",
      ],
      photos: [
        { src: "/family7.webp", alt: "Amy and her sons with one of the dogs" },
        { src: "/family5.webp", alt: "Amy in a Rangers cap at the ballpark with Ethan and Bryce" },
      ],
    },
  },
  {
    name: "Ethan Key",
    firstName: "Ethan",
    slug: "ethankey",
    theme: "ethan",
    href: "/ethankey",
    photo: "/me.webp",
    identity: "Software Engineer · Raytheon",
    bio: "Ethan graduated from Boston University in May 2026 with a degree in Computer Science and is now a software engineer at Raytheon in Fort Wayne, Indiana. He enjoys spending time with his family and friends, setting goals, working out, biking, listening to music, studying the stock market, and watching various sporting events.",
  },
  {
    name: "Bryce Key",
    firstName: "Bryce",
    slug: "brycekey",
    theme: "bryce",
    href: "/brycekey",
    photo: "/bryce2.webp",
    identity: "Biochemistry & Music · Columbia University",
    bio: "Bryce is a junior at Columbia University, where he studies Biochemistry and Music on the pre-med track and competes on the Swimming and Diving team. Bryce graduated from his high school, The Oakridge School, as the Valedictorian of his class. He is an outstanding scholar, earning a 4.96 weighted GPA in high school and scoring a 35 on the ACT. In his free time, Bryce likes to hang out with friends, read, crochet, sing, and design fashion.",
    timeline: [
      {
        title: "Undergraduate Research Fellow",
        org: "UT Southwestern Medical Center",
        dates: "Jun 2026 – Present",
      },
      {
        title: "Research Assistant",
        org: "Columbia University Irving Medical Center",
        location: "New York, NY",
        dates: "Sep 2025 – Present",
        bullets: ["PCR and DNA isolation"],
      },
      {
        title: "Research Assistant",
        org: "New York State Psychiatric Institute",
        location: "New York, NY",
        dates: "Sep 2025 – Feb 2026",
      },
      {
        title: "Medical Scribe",
        org: "Baylor Scott & White Health",
        dates: "May 2025 – Aug 2025",
      },
      {
        title: "Swim Coach",
        org: "Mansfield ISD",
        location: "Mansfield, TX",
        dates: "May 2023 – Aug 2024",
        bullets: ["Coached 60+ kids"],
      },
    ],
    highlights: [
      "Oakridge valedictorian",
      "National Merit Finalist",
      "NCAA D1 men's varsity swimming",
      "Unity Club founder & president",
    ],
    feature: {
      title: "Swimming",
      paragraphs: [
        "Bryce swims for Columbia's Division I men's varsity team — early mornings in the pool before the first lecture, meets on weekends, and a season that runs most of the academic year.",
        "Before Columbia, he spent two summers coaching for Mansfield ISD, working with more than sixty kids from their first lap to their first race. The habit of breaking a hard thing into a sequence of small, teachable pieces carried straight into the lab.",
      ],
      photos: [
        { src: "/family6.webp", alt: "Bryce in a National Team swim shirt with Ethan and Amy at the beach" },
        { src: "/family8.webp", alt: "Bryce with Amy and Ethan at his Columbia signing celebration" },
      ],
    },
  },
];

/** Look up a member by route slug; throws at build time if the slug is wrong. */
export function getMember(slug: string): FamilyMember {
  const m = members.find((x) => x.slug === slug);
  if (!m) throw new Error(`Unknown family member slug: ${slug}`);
  return m;
}

/** Homepage gallery — two rows. */
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
