import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    return (
        <div style={{ transform: "scale(0.75)", transformOrigin: "top left" }}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#B36D6D', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
            date="2011 - present"
            iconStyle={{ background: '#2196f3', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
            <p>
            Configured 250 real-world maps from nuScenes dataset by transforming OpenStreetMap data in RoadRunner to CARLA supported formats using Linux scripting and Python conversion libraries
            </p>
          </VerticalTimelineElement>
          {/* Add more VerticalTimelineElement components here */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#B36D6D', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
            date="2011 - present"
            iconStyle={{ background: '#2196f3', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Fellow</h3>
            <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
            <p>
            Coordinated research collecting information from 20 professionals and interns who are actively building user-facing software products to determine the most common web accessibility priorities for developers 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#B36D6D', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
            date="2011 - present"
            iconStyle={{ background: '#2196f3', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Computing Department Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Watertown, MA</h4>
            <p>
            Provided technical support for computing products including laptops, desktops, peripherals, and accessories
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#B36D6D', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
            date="2011 - present"
            iconStyle={{ background: '#2196f3', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Junior Development Team</h3>
            <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
            <p>
            Assisted club members in learning full stack web development projects using technologies such as React, JavaScript, Node.js, MongoDB, HTML, and CSS during weekly live coding workshops
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }