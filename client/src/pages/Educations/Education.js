import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024 - 2026"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h4 className="vertical-timeline-element-title">
            B-Tech <span style={{ fontSize: '0.85em' }}>(Minor degree in AI and ML)</span>
            </h4>


            <h4 className="vertical-timeline-element-subtitle">
              NIT DELHI
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022-26"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h4 className="vertical-timeline-element-title">B-Tech (Mechanical)</h4>
            <h4 className="vertical-timeline-element-subtitle">
              NIT DELHI
            </h4>
          </VerticalTimelineElement>
         
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;