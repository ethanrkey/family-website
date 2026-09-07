"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { profile } from "@/content/profile";

export default function About() {
  const [showRest, setShowRest] = useState(false);

  return (
    <div className="relative overflow-x-hidden pt-6">
      <h2 className="text-2xl text-center font-bold text-ink">About Me</h2>
      <div className="mx-auto mt-4 max-w-3xl pb-6">
        <TypeAnimation
          sequence={[profile.headline, () => setShowRest(true)]}
          wrapper="p"
          cursor={false}
          repeat={0}
          className="text-center text-lg leading-8 text-ink font-medium"
        />

        <p
          className={`text-center text-lg leading-8 text-ink mt-3 transition-opacity duration-700 ${
            showRest ? "opacity-100" : "opacity-0"
          }`}
        >
          {profile.about}
        </p>
      </div>
    </div>
  );
}
