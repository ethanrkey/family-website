"use client";
import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function EthanKey() {
  return (
    <div className="bg-[#4B4B4B] text-white min-h-screen">
      <header className="flex flex-col items-center justify-center h-48">
        <Link href="/">
          <h1 className="text-4xl font-bold">Ethan Key</h1>
        </Link>
        <p className="text-lg">Software Engineer | Boston University</p>
      </header>
      <main className="px-8 py-16">
        <section>
        <Stack spacing={3} direction="column">
          <Button
            variant="contained"
            sx={{
              width: '120px',
              fontFamily: "inherit",
              textTransform: "none",
              backgroundColor: '#D9D9D9',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#B36D6D',
              },
            }}
          >
            Experience
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '120px',
              fontFamily: "inherit",
              textTransform: "none",
              backgroundColor: '#D9D9D9',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#B36D6D',
              },
            }}
          >
            Education
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '120px',
              fontFamily: "inherit",
              textTransform: "none",
              backgroundColor: '#D9D9D9',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#B36D6D',
              },
            }}
          >
            Projects
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '120px',
              fontFamily: "inherit",
              textTransform: "none",
              backgroundColor: '#D9D9D9',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#B36D6D',
              },
            }}
          >
            Skills
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '120px',
              fontFamily: "inherit",
              textTransform: "none",
              backgroundColor: '#D9D9D9',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#B36D6D',
              },
            }}
          >
            Contact
          </Button>
        
        </Stack>
          <h2 className="text-2xl font-semibold mb-4 mt-4">Experience</h2>
          <ul>
            <li>Software Engineer Fellow - BU Spark!</li>
            <li>Research Assistant - H2x Lab</li>
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p>Boston University, Bachelor's Degree in Computer Science</p>
          <p>GPA: 3.63</p>
        </section>
      </main>
    </div>
  );
}
