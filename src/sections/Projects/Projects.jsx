import React from "react";
import styles from "./ProjectsStyles.module.css";
import musicplayer from "../../assets/musicplayer.png";
import vibe from "../../assets/vibe.jpg";
import ProjectCard from "../../common/ProjectCard";
import lionelmessi from "../../assets/lionelmessi.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={musicplayer}
          link="https://github.com/Debayan10/Mini_Music"
          h3="Mini Music"
          p="Simple music player"
        />
        <ProjectCard
          src={vibe}
          link="https://github.com/Debayan10/Vibe"
          h3="Vibe"
          p="Chat App"
        />
        <ProjectCard
          src={lionelmessi}
          link="https://main--debayan10designs.netlify.app"
          h3="My Designs"
          p="All the designs I have made"
        />
      </div>
    </section>
  );
}

export default Projects;
