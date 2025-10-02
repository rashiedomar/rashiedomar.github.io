import React from "react";
import artstyleThumb from '../assets/images/preview.png';
import koreanfoodThumb from '../assets/images/preview2.png';
import somaliwikiThumb from '../assets/images/preview3.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        {/* ArtStyleNET */}
        <div className="project-card">
          <a href="https://github.com/rashiedomar1-spec/ArtStyleNET" target="_blank" rel="noreferrer">
            <img src={artstyleThumb} alt="ArtStyleNET thumbnail" />
          </a>
          <div className="project-body">
            <a href="https://github.com/rashiedomar1-spec/ArtStyleNET" target="_blank" rel="noreferrer">
              <h2>ArtStyleNET</h2>
            </a>
            <p className="project-description">
              Deep learning project that measures artistic style similarity in paintings.
              Uses ResNet feature extraction, PCA dimensionality reduction, and clustering
              for visualization.
            </p>
          </div>
        </div>

        {/* Tourist Taste Korean Food */}
        <div className="project-card">
          <a href="https://github.com/rashiedomar1-spec/tourist-taste-koreanfood" target="_blank" rel="noreferrer">
            <img src={koreanfoodThumb} alt="Tourist Taste Korean Food thumbnail" />
          </a>
          <div className="project-body">
            <a href="https://github.com/rashiedomar1-spec/tourist-taste-koreanfood" target="_blank" rel="noreferrer">
              <h2>Tourist Taste Korean Food</h2>
            </a>
            <p className="project-description">
              Data analysis & visualization project exploring tourist preferences for
              Korean food. Includes survey results, clustering, and visual insights.
            </p>
          </div>
        </div>

        {/* Somali Wikipedia Corpus */}
        <div className="project-card">
          <a href="https://github.com/rashiedomar1-spec/somali-wikipedia-corpus" target="_blank" rel="noreferrer">
            <img src={somaliwikiThumb} alt="Somali Wikipedia Corpus thumbnail" />
          </a>
          <div className="project-body">
            <a href="https://github.com/rashiedomar1-spec/somali-wikipedia-corpus" target="_blank" rel="noreferrer">
              <h2>Somali Wikipedia Corpus</h2>
            </a>
            <p className="project-description">
              A curated dataset project collecting, cleaning, and processing Somali Wikipedia texts.
              Supports NLP, machine translation, and low-resource language model research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
