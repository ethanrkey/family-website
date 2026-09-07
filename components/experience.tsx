"use client";
import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "@/content/experience";

export default function Experience() {
  const [clickedIndices, setClickedIndices] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setClickedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div style={{ transform: "scale(0.9)", position: "relative", top: "-10px" }}>
      <VerticalTimeline>
        {experience.map((item, index) => {
          const open = clickedIndices.includes(index);
          return (
            <VerticalTimelineElement
              key={`${item.company}-${item.dates}`}
              className={`vertical-timeline-element--work ${open ? "clicked" : ""}`}
              contentStyle={{ background: "var(--accent)", color: "var(--accent-ink)" }}
              contentArrowStyle={{ borderRight: "7px solid var(--ink)" }}
              date={item.dates}
              iconStyle={{
                background: open ? "var(--accent)" : "var(--ink)",
                color: "var(--accent-ink)",
                border: "3px solid var(--ink)",
                cursor: "pointer",
              }}
              iconOnClick={() => toggleExpand(index)}
            >
              <div className="content" onClick={() => toggleExpand(index)}>
                <h3 className="vertical-timeline-element-title">{item.position}</h3>
                <h3 className="vertical-timeline-element-title">{item.company}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.location}
                  {item.employmentType && ` · ${item.employmentType}`}
                </h4>
                <ul className="expandable-content list-disc pl-5">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
