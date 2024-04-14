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
  const projects = [
    {
      name: "Language Master",
      url: "https://language.wesamabadi.com",
      description:
        "Language Learning App With Interactive Lessons & Real-time Progress Tracking.",
      stack: [<FaReact />, <IoLogoFirebase />, <FaSass />],
    },
    {
      name: "Chabase",
      url: "https://chat.wesamabadi.com/",
      description: "A real-time chatting website using React.js and Firebase.",
      stack: [<FaReact />, <IoLogoFirebase />, <FaSass />],
    },
    {
      name: "Note Fuse",
      url: "https://github.com/WesamAbadi/NoteFuse",
      description: "A cross-platform note-taking app built with Flutter.",
      stack: [<FaReact />, <IoLogoFirebase />, <FaSass />],
    },
    {
      name: "Events Manager",
      url: "https://eventmanager.wesamabadi.com",
      description: "Spring boot app to manage events, seminars and workshops.",
      stack: [<BiLogoSpringBoot />, <SiMysql />, <SiApachemaven />],
    },
    {
      name: "Movie Mate",
      url: "https://moviemate.wesamabadi.com",
      description: "Movie streaming & rating site.",
      stack: [<SiSvelte />, <IoLogoFirebase />],
    },
    {
      name: "Website Alchemist",
      url: "https://github.com/WesamAbadi/WebsiteAlchemist",
      description: "A Chrome extension to add custom code to any website.",
      stack: [<FaChrome />],
    },

    {
      name: "Product Price Tracker",
      url: "https://github.com/WesamAbadi/Product-price-tracker",
      description: "A product price tracker and price chart maker.",
      stack: [<FaPython />, <IoLogoWindows />],
    },
    {
      name: "Foto",
      url: "https://github.com/ExtrosDevs/Foto",
      description: "Photo-hosting website made using Django.",
      stack: [<FaPython />, <DiSqllite />],
    },
  ];

  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 hero-text">
            <div>
              <div className="hello">hi, I'm</div>
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
              {projects.map((project, index) => (
                <div key={index} className="project">
                  <a target="_blank" rel="noreferrer" href={project.url}>
                    <div className="project-div">
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <div className="stack">{project.stack}</div>
                    </div>
                  </a>
                </div>
              ))}

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
