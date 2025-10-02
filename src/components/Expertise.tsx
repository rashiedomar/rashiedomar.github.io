import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Python", "PyTorch", "YOLOv8", "DeepSORT", "OpenCV",
  "TensorBoard", "PyTorch Lightning", "scikit-learn", "NumPy", "Pandas"
];

const labelsSecond = [
  "FastAPI", "Flask", "SQL", "PostgreSQL",
  "Docker", "Git", "GitHub Actions", "Linux", "DVC", "Weights & Biases"
];

const labelsThird = [
  "Hugging Face", "Transformers", "SentencePiece",
  "LangChain", "LlamaIndex", "Streamlit", "React", "TypeScript"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          {/* Computer Vision & Deep Learning */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x"/>
            <h3>Computer Vision & Deep Learning</h3>
            <p>
              Modeling and analysis for images/video: object detection, multi-object
              tracking, and remote-sensing workflows. Comfortable training, evaluation,
              and visualization pipelines end-to-end.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools:</span>
              {labelsFirst.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Data & MLOps */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x"/>
            <h3>Data & MLOps</h3>
            <p>
              Clean data → version it → ship it. APIs, reproducible training,
              experiment tracking, CI/CD, and containerized deployments on Linux.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Stack:</span>
              {labelsSecond.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* GenAI & NLP */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x"/>
            <h3>GenAI & NLP</h3>
            <p>
              Building LLM-powered apps and Somali-centric NLP pipelines: tokenization,
              retrieval, and lightweight app UIs for demos and analysis.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Ecosystem:</span>
              {labelsThird.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
