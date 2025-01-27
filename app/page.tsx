"use client"
import Link from "next/link";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import DynamicTitle from "@/components/browsertitle";
import PhotoGallery from "@/components/photogallery";

export default function Home() {
  return (
    
    <div className="bg-[#1F2937] text-white min-h-screen">
      <DynamicTitle title="Key Family"/>
      {/* Hero Section */}
        <h1 className="text-8xl leading-tight text-primary text-center py-6 font-heading border-b-2 border-[#ffffff]">Key Family</h1>
        <div className="bg-[#687a94]">
          <p className="text-4xl leading-tight text-primary text-center pt-16">Dedicated. Resilient. Determined.</p>
          
        {/* Family Members Section */}
        <div className="flex flex-row items-center justify-between px-16 py-10 my-20 border-b border-t border-[#ffffff]">
          {/* Amy Key */}
          <div className="flex flex-col w-full justify-center items-center p-8">
            <Avatar alt="Amy Key" src="/mom3.jpg" className="scale-150 border" sx={{ width: 150, height: 150 }}/>
            <h2 className="text-3xl font-semibold pt-14">Amy Key</h2>
          </div>
          <div className="ml-16 px-44">
            <p className="text-center pb-10">
              Amy is a Registered Nurse, Medical Claim Assessor, and Yoga Instructor. She graduated from the UT Arlington College of Nursing in 1995, earning a Bachelor of Science in Nursing. Amy is a mother to two sons, Ethan and Bryce, and two dogs, Gigi and Geoffrey. She enjoys spending time with her sons, her dogs, and her best friends, &quot;the Beavers&quot;. Amy is a lifelong Texan, born and raised in DFW.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between px-16 py-10 my-20 border-b border-t border-[#ffffff]">
          {/* Ethan Key */}
          <div className="mr-16 px-44">
            <p className="text-center pb-10">
              Ethan is in his junior year at Boston University. He studies computer science, and aspires to be a software engineer. Ethan has been on the Dean&apos;s List in the 2024 Spring and Fall semesters, maintaining a cumulative GPA of 3.67. Ethan enjoys spending time with his family and friends, setting goals, working out, biking, listening to music, looking at the stock market, and watching various sports.
            </p>
          </div>
          <div className="flex flex-col w-full justify-center items-center p-8">
            <Link href="/ethankey">
                <Avatar alt="Ethan Key" src="/me.jpg" className="scale-150 border" sx={{ width: 150, height: 150,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "scale(1.6)", // Slightly enlarge on hover
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)", // Glow effect
                  },
                 }}/>
            </Link>
            <h2 className="text-3xl font-semibold pt-14">Ethan Key</h2>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between px-16 py-10 mt-20 border-b border-t border-[#ffffff]">
          {/* Bryce Key */}
          <div className="flex flex-col w-full justify-center items-center p-8">
            <Avatar alt="Bryce Key" src="/bryce2.jpg" className="scale-150 border" sx={{ width: 150, height: 150 }}/>
            <h2 className="text-3xl font-semibold pt-14">Bryce Key</h2>
          </div>
          <div className="ml-16 px-44">
            <p className="text-center pb-10">
              Bryce is currently a freshman at Columbia University, where he studies Biochemistry and Philosophy and competes on the Swimming and Diving team. Bryce graduated his high school, The Oakridge School, as the Valedictorian of his class. He is an outstanding scholar, earning a 4.96 weighted GPA in high school, scoring a 35 on the ACT, and currently maintaining a 4.0 GPA at Columbia. In his free time, Bryce likes to hang out with friends, read, crochet, sing, and design fashion. 
            </p>
          </div>
        </div>
      </div>

      {/* Animated Images Section */}
      <div className="p-10">
        <PhotoGallery/>
      </div>
    </div>
  );
}
