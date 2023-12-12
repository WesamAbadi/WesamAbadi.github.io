import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { SiSvelte, SiMysql, SiApachemaven } from "react-icons/si";
import { FaReact, FaSass, FaPython, FaChrome } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoFirebase, IoLogoWindows } from "react-icons/io5";

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
                    <h3>Foto</h3>
                    <p>Photo-hosting website made using Django.</p>
                    <div className="stack">
                      <FaPython />
                      <DiSqllite />
                    </div>
                  </div>
                </a>
              </div>
              <div target="_blank" rel="noreferrer" className="project">
                <a href="https://wesamabadi.com">
                  <div className="project-div">
                    <h3>Events Manager</h3>
                    <p>
                      Spring boot app to manage events, seminars and workshops.
                    </p>
                    <div className="stack">
                      <BiLogoSpringBoot />
                      <SiMysql />
                      <SiApachemaven />
                    </div>
                  </div>
                </a>
              </div>
              <div target="_blank" rel="noreferrer" className="project">
                <a href="https://wesamabadi.com">
                  <div className="project-div">
                    <h3>Product Price Tracker</h3>
                    <p>A product price tracker and price chart maker.</p>
                    <div className="stack">
                      <FaPython />
                      <IoLogoWindows />
                    </div>
                  </div>
                </a>
              </div>
              <div target="_blank" rel="noreferrer" className="project">
                <a href="https://wesamabadi.com">
                  <div className="project-div">
                    <h3>Website Alchemist</h3>
                    <p>A Chrome extension to add custom code to any website.</p>
                    <div className="stack">
                      <FaChrome />
                    </div>
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
