import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profilepic1.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Resume.....pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toogleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Debayan Biswas"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toogleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Debayan
          <br />
          Biswas
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/debayan-biswas-45b2a01a1/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/Debayan10" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Hi, I'm a software engineer specializing in web and Android
          development. I create engaging user experiences for the web and build
          innovative mobile apps for Android devices. I'm passionate about
          technology and love the challenge of bringing ideas to life through
          code.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
