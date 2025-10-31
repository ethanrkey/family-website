"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  const [showRest, setShowRest] = useState(false);

  return (
    <div className="relative overflow-x-hidden pt-6">
      <h2 className="text-2xl text-center font-bold text-[#3c4f70]">About Me</h2>
      <div className="mx-auto mt-4 max-w-3xl pb-6">
        <TypeAnimation
          sequence={[
            "I am a passionate and driven Computer Science student at Boston University, graduating in May 2026.",
            () => setShowRest(true),
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
          className="text-center text-lg leading-8 text-[#3c4f70] font-medium"
        />

        <p
          className={`text-center text-lg leading-8 text-[#3c4f70] mt-3 transition-opacity duration-700 ${
            showRest ? "opacity-100" : "opacity-0"
          }`}
        >
          I have a strong foundation in programming, software development, and problem-solving,
          coupled with a curiosity for learning and applying new technologies. My academic journey
          has been marked by dedication and determination. I enjoy tackling challenges that have a
          meaningful impact and I am particularly drawn to projects that intersect technology with
          real-world usability, crafting solutions that improve user experiences and solve practical
          problems.
        </p>
      </div>
    </div>
  );
}
