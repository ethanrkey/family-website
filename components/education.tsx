import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
        { image: "/terrier.png", code: "EK125", class: "Introduction to Programming for Engineers", link: "https://www.bu.edu/academics/eng/courses/eng-ek-125/", },
        { image: "/terrier.png", code: "MA225", class: "Multivariate Calculus", link: "https://www.bu.edu/academics/cas/courses/cas-ma-225/",},
        { image: "/terrier.png", code: "CS112", class: "Data Structures & Algorithms", link: "https://www.bu.edu/academics/cas/courses/cas-cs-112/", },
        { image: "/terrier.png", code: "MA242", class: "Linear Algebra", link: "https://www.bu.edu/academics/cas/courses/cas-ma-242/", },
        { image: "/terrier.png", code: "CS210", class: "Computer Systems", link: "https://www.bu.edu/academics/hub/courses/cas-cs-210/", },
        { image: "/terrier.png", code: "CS131", class: "Combinatoric Structures", link: "https://www.bu.edu/academics/cas/courses/cas-cs-131/", },
        { image: "/terrier.png", code: "CS330", class: "Analysis of Algorithms", link: "https://www.bu.edu/academics/cas/courses/cas-cs-330/", },
        { image: "/terrier.png", code: "CS460", class: "Database Systems", link: "https://www.bu.edu/academics/cas/courses/cas-cs-460/", },
        { image: "/terrier.png", code: "CS411", class: "Software Engineering", link: "https://www.bu.edu/academics/hub/courses/cas-cs-411/", },
        { image: "/terrier.png", code: "CS320", class: "Concepts of Programming Languages", link: "https://www.bu.edu/academics/cas/courses/cas-cs-320/", },
        { image: "/terrier.png", code: "CS391", class: "Web Application Development", link: "https://www.bu.edu/academics/cas/courses/cas-cs-391/", },
        { image: "/terrier.png", code: "CS440", class: "Introduction to Artificial Intelligence", link: "https://www.bu.edu/academics/cas/courses/cas-cs-440/", },
    ];

    return (
      <div className="pl-6 flex flex-row w-full">
        <div className="flex flex-col pr-6 pt-8">
            <h2 className="text-4xl text-[#ffffff] font-bold">Education</h2>
            <p className="pt-4 pl-2 text-[#ffffff]">• Boston University</p>
            <p className="pl-2 text-[#ffffff]">• Boston, MA</p>
            <p className="pl-2 text-[#ffffff]">• Bachelor&apos;s Degree</p>
            <p className="pl-2 text-[#ffffff]">• Major: Computer Science</p>
            <p className="pl-2 text-[#ffffff]">• GPA: 3.63</p>
            <p className="pl-2 text-[#ffffff]">• Year: Junior</p>
            <Link className="pt-6" href="https://www.bu.edu/" target="_blank">
                <Image className="rounded-full" src="/bu.png" alt="BU" height={350} width={350}></Image>
            </Link>
        </div>
        <div className="flex w-full flex-col ml-6 px-28">
            <h2 className="text-3xl text-[#ffffff] flex justify-center pt-8 pb-6">Relevant Classes Taken</h2>
            <div className="grid-container pt-2 pb-16 fade-in">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`square ${flippedIndices.includes(index) ? "flipped" : ""}`}
                    onClick={() => toggleFlip(index)}
                >
                    <div className="front">
                        <Image src={item.image} alt={`Item ${index}`} className="scale-50" layout="fill"/>
                    </div>
                    <div className="flex flex-col justify-center back">
                        <h1 className="text-lg text-[#000000]">{item.code}</h1>
                        <a href={item.link} target="_blank">
                            <p className="text-sm text-[#000000] px-2 hover:underline">{item.class}</p>
                        </a>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    );
  }