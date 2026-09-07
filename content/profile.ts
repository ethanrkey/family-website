import type { Profile } from "./types";

/**
 * Portfolio identity + contact. Swapping the email when the BU address expires
 * is a one-line change here — nothing else references it.
 */
export const profile: Profile = {
  name: "Ethan Key",
  headline:
    "Software Engineer at Raytheon in Fort Wayne, Indiana. 2026 Computer Science graduate of Boston University.",
  about:
    "I build software end to end — services, web applications, and the interfaces on top of them. The work I like best sits where a technical system meets the person using it: taking something complicated and making it feel obvious. Outside of work I'm usually building something, which is where most of what I actually know came from.",
  email: "ethankey@bu.edu",
  linkedin: "https://www.linkedin.com/in/ethan-key/",
  github: "https://github.com/ethanrkey",
  resumeUrl: "/resumeKeyEthan.pdf",
};
