import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import "../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <a href="https://github.com/WesamAbadi">
        <div>
          <IoLogoGithub />
        </div>
      </a>
      <a href="mailto:wisamabady7@gmail.com">
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
  );
}

export default Header;
