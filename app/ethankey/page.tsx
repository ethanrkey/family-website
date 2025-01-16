"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Experience from "@/components/experience";
import Education from "@/components/education";
const Projects = dynamic(() => import('@/components/projects'), { ssr: false });
import Skills from "@/components/skills";
import About from "@/components/about";
import Personal from "@/components/personal";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import dynamic from 'next/dynamic';
import DynamicTitle from "@/components/browsertitle";


export default function EthanKey() {
  const [activeSection, setActiveSection] = useState("");
  const [contactClicked, setContactClicked] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      case "About2":
        return <Personal />;
      default:
        return <About />;
    }
  };

  return (
    <div className="bg-[#457575] flex flex-col min-h-screen">
      <DynamicTitle title="Portfolio | Ethan Key"/>
      <header className="bg-[#000000] flex flex-col items-center justify-center h-48 border-b-2 border-white">
        <Link href="/">
          <h1 className="text-6xl text-[#ffffff] font-bold">Ethan Key</h1>
        </Link>
      </header>
      <div className="flex flex-1">
        <div className="flex justify-center w-1/5 py-16">
          <Stack spacing={3} direction="column">
            <Button
              onClick={() => setActiveSection("Experience")}
              variant="contained"
              sx={{
                height: "60px", 
                width: '150px',
                fontFamily: "inherit",
                textTransform: "none",
                backgroundColor: activeSection === "Experience" ? "#B36D6D" : "#a6a6a6",
                color: "white",
                padding: '10px 20px',
                borderRadius: '12px',
                '&:hover': {
                  backgroundColor: '#B36D6D',
                },
              }}
            >
              Experience
            </Button>
            <Button
              onClick={() => setActiveSection("Education")}
              variant="contained"
              sx={{
                height: "60px", 
                width: '150px',
                fontFamily: "inherit",
                textTransform: "none",
                backgroundColor: activeSection === "Education" ? "#B36D6D" : "#a6a6a6",
                color: 'white',
                padding: '10px 20px',
                borderRadius: '12px',
                '&:hover': {
                  backgroundColor: '#B36D6D',
                },
              }}
            >
              Education
            </Button>
            <Button
              onClick={() => setActiveSection("Projects")}
              variant="contained"
              sx={{
                height: "60px", 
                width: '150px',
                fontFamily: "inherit",
                textTransform: "none",
                backgroundColor: activeSection === "Projects" ? "#B36D6D" : "#a6a6a6",
                color: 'white',
                padding: '10px 20px',
                borderRadius: '12px',
                '&:hover': {
                  backgroundColor: '#B36D6D',
                },
              }}
            >
              Projects
            </Button>
            <Button
              onClick={() => setActiveSection("Skills")}
              variant="contained"
              sx={{
                height: "60px", 
                width: '150px',
                fontFamily: "inherit",
                textTransform: "none",
                backgroundColor: activeSection === "Skills" ? "#B36D6D" : "#a6a6a6",
                color: 'white',
                padding: '10px 20px',
                borderRadius: '12px',
                '&:hover': {
                  backgroundColor: '#B36D6D',
                },
              }}
            >
              Skills
            </Button>
            {/*
            <Button
              onClick={() => setActiveSection("About2")}
              variant="contained"
              sx={{
                height: "60px", 
                width: '150px',
                fontFamily: "inherit",
                textTransform: "none",
                backgroundColor: activeSection === "About2" ? "#B36D6D" : "#a6a6a6",
                color: 'white',
                padding: '10px 20px',
                borderRadius: '12px',
                '&:hover': {
                  backgroundColor: '#B36D6D',
                },
              }}
            >
              Personal
            </Button>
            */}
          </Stack>
        </div>
        <div className="flex flex-1 justify-center">{renderContent()}</div>
      </div>
      
      <footer className="bg-[#000000] pt-4 flex flex-col border-t-2 border-white">
        <div className="flex items-center justify-center">
          {contactClicked ? (<a href="https://www.linkedin.com/in/ethan-key/" target="_blank">
            <FaLinkedin size={36} className="fill-[#0f74d9] drop-shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-150"/>
          </a>
          ) : (
            <FaLinkedin size={36} className="fill-[#ffffff]"/>
          )}
        </div>
        <div className="flex flex-row items-center justify-center py-3 space-x-5">
          <div>
            <p className={contactClicked ? "block" : "hidden"}>+1 (817) 287-8935</p>
          </div>
          <div className="flex flex-row gap-2">
            <MdLocalPhone size={36} className={contactClicked ? "fill-[#8ccc8b]" : "fill-[#ffffff]"}/>
            <Button 
              variant="text"
              onClick={() => setContactClicked((prev) => !prev)}
              sx={{
                color: 'white',
                fontFamily: "inherit",
                textTransform: "none",
                fontWeight: "bold",
                '&:hover': {
                    backgroundColor: '#556968',
                  },
              }}
            >
                Contact Me
            </Button>
            <MdEmail size={36} className={contactClicked ? "fill-[#8ebdb5]" : "fill-[#ffffff]"}/>
          </div>
          <div>
            <p className={contactClicked ? "block" : "hidden"}>ethankey@bu.edu</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
