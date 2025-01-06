"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import About from "@/components/about";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


export default function EthanKey() {
  const [activeSection, setActiveSection] = useState("");

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
      default:
        return <About />;
    }
  };

  return (
    <div className="bg-[#4B4B4B] flex flex-col min-h-screen">
      <header className="flex flex-col items-center justify-center h-48">
        <Link href="/">
          <h1 className="text-5xl font-bold">Ethan Key</h1>
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
          </Stack>
        </div>
        <div className="flex flex-1 justify-center">{renderContent()}</div>
      </div>
      
      <footer className="">
        <div className="flex items-center justify-center">
          <FaLinkedin size={36}/>
        </div>
        <div className="flex flex-row items-center justify-center py-3 space-x-5">
          <MdLocalPhone size={36}/>
          <Button 
            variant="text"
            sx={{
              color: 'white',
              fontFamily: "inherit",
              textTransform: "none",
              fontWeight: "bold",
              '&:hover': {
                  backgroundColor: '#473c3c',
                },
            }}
          >
              Contact Me
          </Button>
          <MdEmail size={36}/>
        </div>
      </footer>
    </div>
  );
}
