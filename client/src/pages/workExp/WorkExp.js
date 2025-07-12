import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="May 2024 - Feb 2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Content Writer intern 
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               Geeks for Geeks
              </h4>
              <p>Authored and refined high-quality technical articles, tutorials, and developer guides by conducting in-depth research on diverse topics in computer science and programming.</p>
             
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="May 2025 - July 2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                 Web development intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Internpe
              </h4>
              <p> Completed diverse remote projects, strengthening core skills in full-stack web development while gaining hands-on experience with industry-relevant tools, libraries, and frameworks. </p>
             
            </VerticalTimelineElement>



            

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;