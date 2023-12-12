import React from "react";
import { IoLogoGithub } from "react-icons/io";

function Home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-6 hero-text">
            <div>
              <h2>Hi, I'm</h2>
              <h1>Wesam Abadi</h1>
              <p>Front End Developer</p>
            </div>
          </div>
          <div className="col-6">
            <div className="projects">
              <div className="project">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://language.wesamabadi.com/"
                >
                  <h2>Language Master</h2>
                  <p>Description of project 1</p>
                </a>
              </div>
              <div className="project">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://cinema.wesamabadi.com/"
                >
                  <h2>Movie Mate</h2>
                  <p>Description of project 2</p>
                </a>
              </div>

              <div target="_blank" rel="noreferrer" className="project">
                <a href="https://wesamabadi.com/">
                  <h2>Project 3</h2>
                  <p>Description of project 3</p>
                </a>
              </div>
              <div target="_blank" rel="noreferrer" className="project">
                <a href="https://wesamabadi.com/">
                  <h2>
                    More on <IoLogoGithub />
                  </h2>
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
