import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import "../styles/Header.scss";

function Header() {
  // const fileUrl = process.env.PUBLIC_URL + "/ppt.pptx";
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
      {/* <div>
        <a href={fileUrl} download>
          PPT
        </a>
      </div> */}
    </div>
  );
}

export default Header;
