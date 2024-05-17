import themePattern from "../../assets/theme_pattern.svg";
import profileImg from "../../assets/about_profile.svg";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profileImg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-parah">
            <p>
              I am an experienced frontend developer with 2.5 years of
              experience.
            </p>
            <p>
              I am a passonate frontend developer with enthusiasm and
              dedication.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE.</p>
        </div>
          <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PROJECTS COMPLETED.</p>
        </div>
          {/* <hr /> */}
      </div>
    </div>
  );
};

export default About;
