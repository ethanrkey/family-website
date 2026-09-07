"use client";
import Link from "next/link";
import Image from "next/image";
import { education } from "@/content/education";

export default function Education() {
  const e = education;
  return (
    <div className="flex flex-row items-start gap-12 w-full px-12 pt-8 pb-16 fade-in">
      <Link href={e.schoolUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
        <Image className="rounded-full" src={e.logo} alt={e.school} height={220} width={220} />
      </Link>
      <div className="flex flex-col">
        <h2 className="text-4xl text-ink font-bold">Education</h2>
        <h3 className="pt-4 text-2xl text-ink">{e.school}</h3>
        <p className="text-accent">
          {e.degree}, {e.major}
        </p>
        <p className="text-accent">{e.location}</p>
        <p className="text-accent">{e.dates}</p>
        <p className="text-accent">GPA: {e.gpa}</p>
        <p className="pt-4 text-ink">
          <span className="font-semibold">Relevant coursework: </span>
          {e.courseworkHighlights.join(", ")}
        </p>
      </div>
    </div>
  );
}
