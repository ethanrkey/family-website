import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const timelineData = [
        {
            position: "Software Development Research Assistant",
            company: "Human-to-Everything (H2X) Lab",
            location: "Boston, MA",
            date: "October 2024 - Present",
            description: [
                "• 	Configured 250 real-world maps from nuScenes dataset by transforming OpenStreetMap data in RoadRunner to CARLA supported formats using Linux scripting and Python conversion libraries",
                "• 	Developed and tested autonomous driving algorithms using the CARLA Python API, simulating urban environments, traffic scenarios, and sensor data to improve accuracy of decision-making models by 15%",
            ],
        },
        {
            position: "Software Engineer Fellow",
            company: "BU Spark!",
            location: "Boston, MA",
            date: "September 2024 - December 2024",
            description: [
                "• 	Coordinated research collecting information from 20 professionals and interns who are actively building user-facing software products to determine the most common web accessibility priorities for developers",
                "• 	Engineered a Chrome extension with a connected REST API using Flask that scans developer's; websites to calculate an accessibility score, identify inaccessible web page elements, and provide feedback on improving compliance with WCAG standards",
                "• 	Built and deployed a web application enabling users to login via GitHub OAuth, view previous scan results, track accessibility progress, and collaborate via a community board, leveraging a Next.js, Go, and MongoDB stack",
                "•	Earned the Innovation Award for AccessiScan project, selected by judges at BU's Experiential Learning Expo",
            ],
        },
        {
            position: "Computing Department Associate",
            company: "Best Buy",
            location: "Watertown, MA",
            date: "September 2024 - December 2024",
            description: [
                "• 	Provided technical support for computing products including laptops, desktops, peripherals, and accessories",
                "• 	Resolved customer software issues including trouble with operating system performance, application installation, and cloud storage",
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
            contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
            date={item.date}
            iconStyle={{ background: clickedIndices.includes(index) ? '#8bf0f0' : '#60a8a8', color: '#fff' }}
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