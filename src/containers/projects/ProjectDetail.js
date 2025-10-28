import React, { useContext } from "react";
import { projects } from "../../data/projects";
import StyleContext from "../../contexts/StyleContext";
import "./Project.scss";

export default function ProjectDetail({ match, history }) {
  const { isDark } = useContext(StyleContext);
  const { id } = match.params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className={isDark ? "main dark-mode" : "main"} style={{ padding: 20 }}>
        <h2>Project not found</h2>
      </div>
    );
  }

  return (
    <div className={isDark ? "main dark-mode" : "main"} id="project-detail">
      <div className="project-detail-page">
        <div className={isDark ? "dark-mode project-card" : "project-card"}>
          {project.icon && (
            <div className="project-hero">
              {project.video ? <video controls width="640" height="360" className="project-video">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video> : <img src={project.icon} alt={project.title} />}
            </div>
          )}

          <div className="project-content">
            <h1 className={isDark ? "dark-mode project-title" : "project-title"}>
              {project.title}
            </h1>
            <p className={isDark ? "dark-mode project-desc" : "project-desc"}>
              {project.description}
            </p>

            {project.technology && (
              <div className="tech-section">
                <h3>Technologies Used:</h3>
                <div className="tech-list">
                  {project.technology.map((t, i) => (
                    <span className="tech-pill" key={i}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.footerLink && (
              <div className="project-actions">
                {project.footerLink.map((link, i) => (
                  <button
                    key={i}
                    className="project-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (link.url.startsWith("/")) {
                        // internal route
                        window.location.href = link.url;
                      } else {
                        const w = window.open(link.url, "_blank");
                        if (w) w.focus();
                      }
                    }}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
