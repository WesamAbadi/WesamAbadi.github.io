import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { SiSvelte } from "react-icons/si";
import { FaReact, FaSass } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

function Home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-5 hero-text">
            <div>
              <h2>Hi, I'm</h2>
              <h1>Wesam Abadi</h1>
              <p>Front End Developer</p>
            </div>
          </div>
          <div className="col-7">
            <div className="projects-title">
              <h2>Projects</h2>
            </div>
            <div className="projects">
              <div className="project">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://language.wesamabadi.com"
                >
                  <div className="project-div">
                    <h3>Language Master</h3>
                    <p>
                      Language Learning App With Interactive Lessons & Real-time
                      Progress Tracking.
                    </p>
                    <div className="stack">
                      <FaReact />
                      <IoLogoFirebase />
                      <FaSass />
                    </div>
                  </div>
                </a>
              </div>
              <div className="project">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://moviemate.wesamabadi.com"
                >
                  <div className="project-div">
                    <h3>Movie Mate</h3>
                    <p>Movie streaming & rating site.</p>
                    <div className="stack">
                      <SiSvelte />
                    </div>
                  </div>
                </a>
              </div>

              <div target="_blank" rel="noreferrer" className="project">
                <a href="https://wesamabadi.com">
                  <div className="project-div">
                    <h3>Project 3</h3>
                    <p>Description of project 3</p>
                  </div>
                </a>
              </div>
              <div target="_blank" rel="noreferrer" className="project">
                <a href="https://github.com/WesamAbadi">
                  <div className="project-div">
                    <h3>
                      More on <IoLogoGithub />
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
