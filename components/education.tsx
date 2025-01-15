import React, { useState } from "react";
import Link from "next/link";

export default function Education() {

    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

    const toggleFlip = (index: number) => {
        if (flippedIndices.includes(index)) {
        setFlippedIndices(flippedIndices.filter((i) => i !== index));
        } else {
        setFlippedIndices([...flippedIndices, index]);
        }
    };

    const items = [
        { image: "terrier.png", code: "EK125", class: "Introduction to Programming for Engineers" },
        { image: "terrier.png", code: "MA225", class: "Multivariate Calculus" },
        { image: "terrier.png", code: "CS112", class: "Data Structures & Algorithms" },
        { image: "terrier.png", code: "MA242", class: "Linear Algebra" },
        { image: "terrier.png", code: "CS210", class: "Computer Systems" },
        { image: "terrier.png", code: "CS131", class: "Combinatoric Structures" },
        { image: "terrier.png", code: "CS330", class: "Analysis of Algorithms" },
        { image: "terrier.png", code: "CS460", class: "Database Systems" },
        { image: "terrier.png", code: "CS411", class: "Software Engineering" },
        { image: "terrier.png", code: "CS320", class: "Concepts of Programming Languages" },
        { image: "terrier.png", code: "CS391", class: "Web Application Development" },
        { image: "terrier.png", code: "CS440", class: "Introduction to Artificial Intelligence" },
    ];

    return (
      <div className="flex flex-row w-full">
        <div className="flex flex-col pr-6 pt-8">
            <h2 className="text-4xl font-bold">Education</h2>
            <p className="pt-4 pl-2">• Boston University</p>
            <p className="pl-2">• Bachelor&apos;s Degree in Computer Science</p>
            <p className="pl-2">• Boston, MA</p>
            <p className="pl-2">• Year: Junior</p>
            <p className="pl-2">• GPA: 3.63</p>
            <Link className="rounded-full  scale-75" href="https://www.bu.edu/" target="_blank">
                <img className="rounded-full" src="bu.png"></img>
            </Link>
        </div>
        <div className="flex w-full flex-col px-20">
            <h2 className="text-3xl flex justify-center pt-8 pb-6">Relevant Classes Taken</h2>
            <div className="grid-container pt-2 pb-16">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`square ${flippedIndices.includes(index) ? "flipped" : ""}`}
                    onClick={() => toggleFlip(index)}
                >
                    <div className="front">
                        <img src={item.image} alt={`Item ${index}`} />
                    </div>
                    <div className="flex flex-col justify-center back">
                        <h1 className="text-lg text-[#000000]">{item.code}</h1>
                        <p className="text-sm text-[#000000] px-2">{item.class}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    );
  }