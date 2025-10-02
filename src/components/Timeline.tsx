import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

// Logos (put these files in src/assets/images/)
import kmuLogo from '../assets/images/kmu.svg.png';
import thubLogo from '../assets/images/t-hub.png';
import raagsanLogo from '../assets/images/raagsan.png';
import bosasoLogo from '../assets/images/bosaso_logo.png';

function Timeline() {
  const logoStyle: React.CSSProperties = {
    width: 28,
    height: 28,
    objectFit: "contain",
    marginRight: 8,
    verticalAlign: "middle",
    borderRadius: 4,
  };

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* Kookmin University – Researcher */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2024 – Present · Seoul, South Korea"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              <img src={kmuLogo} alt="Kookmin University" style={logoStyle} />
              Deep Learning Researcher
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Kookmin University</h4>
            <p>
              Graduate research focused on satellite/remote-sensing analysis:
              YOLOv8 detection, DeepSORT tracking, and image processing for
              land-use monitoring and environmental change detection.
            </p>
          </VerticalTimelineElement>

          {/* T-Hub – ICT Officer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2022 – Aug 2023 · Garowe, Somalia"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              <img src={thubLogo} alt="T-Hub Innovation Center" style={logoStyle} />
              ICT Officer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">T-Hub Innovation Center</h4>
            <p>
              Managed infrastructure, network security, end-user support, and
              rollout of new tech solutions to enable innovation programs.
            </p>
          </VerticalTimelineElement>

          {/* RAAGSAN – Field Researcher */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2023 · Garowe, Somalia"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              <img src={raagsanLogo} alt="RAAGSAN Consulting" style={logoStyle} />
              Field Researcher
            </h3>
            <h4 className="vertical-timeline-element-subtitle">RAAGSAN Consulting</h4>
            <p>
              Collected and analyzed qualitative data on women’s participation in
              political dialogue; produced insights to inform inclusive policy.
            </p>
          </VerticalTimelineElement>

          {/* Education – Kookmin University */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2023 – Sep 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              <img src={kmuLogo} alt="Kookmin University" style={logoStyle} />
              MEng / Master’s (Data Science, Big Data)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Kookmin University</h4>
            <p>Machine learning, statistical modeling, and data engineering.</p>
          </VerticalTimelineElement>

          {/* Education – University of Bosaso */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2019 – Jun 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              <img src={bosasoLogo} alt="University of Bosaso" style={logoStyle} />
              BSc, Computer Science 
            </h3>
            <h4 className="vertical-timeline-element-subtitle">University of Bosaso</h4>
            <p>Core CS, software development, and data fundamentals.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
