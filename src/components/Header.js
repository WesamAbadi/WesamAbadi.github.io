import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

function Header() {
  return (
    <div>
      <IoLogoGithub />
      <SiGmail />
      <FaLinkedinIn />
    </div>
  );
}

export default Header;
