import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImg from "../../assets/profile_img.svg";
import resumePDF from "../../assets/Resume_SuhasNag.pdf";
import "./Hero.css";
const Hero = () => {
  const downloadResume = () => {
    console.log("Executing");
    const aTag = document.createElement("a");
    aTag.href = resumePDF;
    aTag.setAttribute("download", "Resume_SuhasNag.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div id="home" className="hero">
      <img src={profileImg} alt="" />
      <h1>
        <span>I am Suhas Nag,</span> frontend developer based on Bengaluru
      </h1>
      <p>
        I am a frontend developer with 2 years 5 months of experience in
        Bengaluru, Karnataka
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div
          className="hero-resume"
          onClick={() => {
            downloadResume();
          }}
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
