import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { SiSvelte, SiMysql, SiApachemaven } from "react-icons/si";
import {
  FaHtml5,
  FaReact,
  FaSass,
  FaJava,
  FaPhp,
  FaPython,
  FaChrome,
  FaSymfony,
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiSqllite } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import {
  IoLogoJavascript,
  IoLogoFirebase,
  IoLogoWindows,
} from "react-icons/io5";

function Home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 hero-text">
            <div>
              <div className="hello" >hi, I'm</div>
              <div className="name">
                <span class="w">W</span>
                <span>esam </span>
                <span class="a">A</span>
                <span>badi</span>
              </div>
              <div className="full-stack">
                <p>Full-Stack Developer</p>
                <div className="stacks">
                  <div className="my-stack">
                    Front End
                    <p className="my-stack">
                      <FaHtml5 />
                      <FaCss3Alt />
                      <IoLogoJavascript />
                      <FaSass />
                      <IoLogoFirebase />
                      <FaReact />
                      <SiSvelte />
                    </p>
                  </div>
                  <div className="my-stack">
                    Back End
                    <p>
                      <BiLogoSpringBoot />
                      <FaJava />
                      <FaPhp />
                      <FaSymfony />
                      <DiSqllite />
                      <SiMysql />
                      <FaPython />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
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
                      <IoLogoFirebase />
                    </div>
                  </div>
                </a>
              </div>
              <div target="_blank" rel="noreferrer" className="project">
                <a href="https://github.com/WesamAbadi/WebsiteAlchemist">
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
                <a href="https://events-manager2.onrender.com/">
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
                <a href="https://github.com/WesamAbadi/Product-price-tracker">
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
                <a href="https://github.com/ExtrosDevs/Foto">
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
              <div target="_blank" rel="noreferrer" className="project github">
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
