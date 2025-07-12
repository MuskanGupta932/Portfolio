import React from "react";
import "./Projects.css";
import Roll from "react-reveal/Roll";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          PROJECTS
        </h2>
        <hr />

        {/* card design */}
        <div className="row" id="ads">
          <Roll>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/030/489/577/non_2x/portrait-of-a-robot-in-a-white-futuristic-interior-artificial-intelligence-concept-ai-generated-photo.jpg"
                    alt="project1"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> Assisto </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://virtual-assistant-0dz3.onrender.com/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://assets.therestauranthq.com/uploads/2024/09/FeatureImage_How_to_Create_a_Restaurant_Website.jpg"
                    alt="project2"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Hungryy</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://food-delivery-frontend-5lem.onrender.com/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1200/1*xmGDBIg2mJStWdOEfpFx-g.jpeg"
                    alt="project3"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">LocaMind</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://nextlocation-9freqtq9uf95jainlbuaqq.streamlit.app/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://tse4.mm.bing.net/th/id/OIP.rgwOmoTsYVaLYAP8gTbRkwHaD_?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="project4"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">WhatsStat</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://whatsappchatanalysis-nesezhstxk4f6uyqbjekes.streamlit.app/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://static.wixstatic.com/media/b54430_a09bdf9ccb964b7fb17ea8cd318502af~mv2.png/v1/fit/w_2500,h_1330,al_c/b54430_a09bdf9ccb964b7fb17ea8cd318502af~mv2.png"
                    alt="project5"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">RiskCare</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://icuriskprediction-42pkswamlkx3nesgxxej5n.streamlit.app/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

          </Roll>
        </div>
      </div>
    </>
  );
};

export default Projects;
