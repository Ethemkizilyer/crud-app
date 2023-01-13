import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-5 py-3">
      <a href="#" target="_blank">
        <FaInstagram className="duration-300 hover:opacity-30 cursor-pointer" />
      </a>
      <a href="https://www.linkedin.com/in/ethem-kizilyer/" target="_blank">
        <FaLinkedin className="duration-300 hover:opacity-30 cursor-pointer" />
      </a>
      <a href="https://github.com/Ethemkizilyer" target="_blank">
        <FaGithub className="duration-300 hover:opacity-30 cursor-pointer" />
      </a>
    </div>
  );
}
