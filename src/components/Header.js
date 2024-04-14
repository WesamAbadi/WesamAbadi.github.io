import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

import "../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-text">
        <a href="https://blog.wesamabadi.com/">My Blog</a>
      </div>
      <div className="header-icons">
        <a href="https://github.com/WesamAbadi">
          <div>
            <IoLogoGithub />
          </div>
        </a>
        <a href="mailto:i@wesamabadi.com">
          <div>
            <SiGmail />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/wesamabadi/">
          <div>
            <FaLinkedinIn />
          </div>
        </a>
      </div>
      <div className="header-text">
        <a href="/CV.pdf">Download CV</a>
      </div>
    </div>
  );
}

export default Header;
