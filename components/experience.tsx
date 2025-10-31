import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {

    const timelineData = [
        {
            position: "Software Engineer Intern",
            company: "Otodata",
            location: "Montréal, QC",
            date: "May 2025 - August 2025",
            description: [
                "• 	Developed an FTP reporting feature in the Neevo portal using C# and AngularJS, enabling clients to generate reports for each branch (division) within a company, improving reporting flexibility for tank monitor data",
                "• 	Resolved 15 defects across UI rendering, translations, object-relationship logic, and API endpoints, reducing recurring support tickets and improving platform stability",
                "• 	Executed approximately 400 regression test cases during bi-weekly sprints, validating development tasks and filing bug reports to strengthen release quality",
            ],
        },
        {
            position: "Software Development Research Assistant",
            company: "Human-to-Everything (H2X) Lab",
            location: "Boston, MA",
            date: "October 2024 - May 2025",
            description: [
                "• 	Automated conversion of 250 nuScenes maps into CARLA-supported formats using Linux scripting and Python libraries, streamlining simulation setup",
                "• 	Designed and tested autonomous driving algorithms using the CARLA Python API, simulating urban traffic and sensor data to improve decision-making model accuracy by 15%",
            ],
        },
        {
            position: "Software Engineer Fellow",
            company: "BU Spark!",
            location: "Boston, MA",
            date: "September 2024 - December 2024",
            description: [
                "•	Earned the Innovation Award for AccessiScan project, selected by judges at BU's Experiential Learning Expo",
                "• 	Coordinated research collecting information from 20 professionals and interns who are actively building user-facing software products to determine the most common web accessibility priorities for developers",
                "• 	Engineered a Chrome extension with a connected REST API using Flask that scans developer's; websites to calculate an accessibility score, identify inaccessible web page elements, and provide feedback on improving compliance with WCAG standards",
                "• 	Built and deployed a web application enabling users to login via GitHub OAuth, view previous scan results, track accessibility progress, and collaborate via a community board, leveraging a Next.js, Go, and MongoDB stack",
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