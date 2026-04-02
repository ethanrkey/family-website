import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {

    const timelineData = [
        {
            position: "CS411 Course Grader",
            company: "Boston University",
            location: "Boston, MA",
            date: "January 2026 - Present",
            description: [
                "• 	Grade assignments and provide detailed feedback for students in Software Engineering (CS411) course",
            ],
        },
        {
            position: "LLM Trainer",
            company: "Handshake",
            location: "Boston, MA (remote)",
            date: "October 2025 - Present",
            description: [
                "• 	Train AI models by performing tasks in the HandshakeAI Fellowship program",
            ],
        },
        {
            position: "Software Engineer Intern",
            company: "Otodata",
            location: "Montréal, QC",
            date: "May 2025 - August 2025",
            description: [
                "• 	Developed an FTP reporting feature in the Neevo portal using C# and AngularJS, enabling clients to generate branch-level tank monitor reports",
                "• 	Resolved 15 defects in UI rendering, translations, object-relationship logic, and API endpoints, reducing recurring support tickets and improving platform stability",
                "• 	Optimized CI/CD unit test pipeline by identifying and removing redundant mock database initialization, reducing test suite run time from ~60s to under 5s",
            ],
        },
        {
            position: "Software Development Research Assistant",
            company: "Human-to-Everything (H2X) Lab",
            location: "Boston, MA",
            date: "October 2024 - January 2025",
            description: [
                "• 	Created 40 CARLA simulation maps by converting real-world nuScenes driving routes from Singapore into detailed road networks using OpenStreetMap and RoadRunner",
                "• 	Integrated completed maps into the CARLA simulator, validating scene accuracy and preparing simulation viewpoints for autonomous driving research use",
            ],
        },
        {
            position: "Software Engineer Fellow",
            company: "BU Spark!",
            location: "Boston, MA",
            date: "September 2024 - December 2024",
            description: [
                "•	Earned the Innovation Award for AccessiScan project, selected by judges at BU's Experiential Learning Expo",
                "• 	Coordinated research with 20 professionals and interns to identify common web accessibility priorities for developers",
                "• 	Engineered a Chrome extension with a REST API using Flask to scan websites, compute accessibility scores, and identify WCAG compliance issues",
                "• 	Built and deployed a connected web application with GitHub OAuth, scan history, accessibility progress tracking, and a community discussion board using a Next.js, Go, and MongoDB stack",
            ],
        },
        {
            position: "Computing Department Associate",
            company: "Best Buy",
            location: "Watertown, MA",
            date: "September 2024 - December 2024",
            description: [
                "• 	Assisted 30+ customers weekly in troubleshooting OS performance, software installation, and cloud storage issues, ensuring quick resolution and improved customer satisfaction",
                "• 	Guided customers in understanding computing technologies by translating technical concepts into clear, actionable terms to support informed purchasing decisions",
            ],
        },
        {
            position: "Junior Development Team",
            company: "Hack4Impact",
            location: "Boston, MA",
            date: "January 2024 - May 2024",
            description: [
                "• 	Assisted club members in learning full stack web development projects using technologies such as React, JavaScript, Node.js, MongoDB, HTML, and CSS during weekly live coding workshops",
            ],
        }
    ]

    const [clickedIndices, setClickedIndices] = useState<number[]>([]);

    const toggleExpand = (index: number) => {
        setClickedIndices((prev) =>
            prev.includes(index)
            ? prev.filter((i) => i !== index) // Collapse if already expanded
            : [...prev, index] // Expand if not already expanded
        );
    };

    return (
        <div style={{ transform: "scale(0.9)", position: "relative", top: "-10px" }}>
        <VerticalTimeline>
            {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--work ${
                clickedIndices.includes(index) ? "clicked" : ""
              }`}
            contentStyle={{ 
                background: '#B36D6D', 
                color: '#fff' 

            }}
            contentArrowStyle={{ borderRight: '7px solid  #3c4f70' }}
            date={item.date}
            iconStyle={{ background: clickedIndices.includes(index) ? '#648cd1' : '#3c4f70', color: '#fff', border: '3px solid #3c4f70', cursor: 'pointer' }}
            iconOnClick={() => toggleExpand(index)}
            // icon={<WorkIcon />}
          >
            <div className="content" onClick={() => toggleExpand(index)}>
                <h3 className="vertical-timeline-element-title">{item.position}</h3>
                <h3 className="vertical-timeline-element-title">{item.company}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                <div className="expandable-content">
                    {item.description.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </div>
          </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </div>
    );
}