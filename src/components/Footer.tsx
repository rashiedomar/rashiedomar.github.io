import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rashiedomar" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/abdulrashiid-o-matan" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} Abdirashid Omar · Built with 💜 using 
        <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer"> React Portfolio Template</a>
      </p>
    </footer>
  );
}

export default Footer;
