import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Replace profile.jpg with your actual image filename in src/assets/images/ */}
          <img src={require("../assets/images/profile.jpg")} alt="Abdirashid Omar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rashiedomar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abdulrashiid-o-matan" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Abdirashid Omar</h1>
          <p>Student @ Kookmin University • AI & Computer Vision</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/rashiedomar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abdulrashiid-o-matan" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
