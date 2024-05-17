import arrowIcon from "../../assets/arrow_icon.svg";
import themePattern from "../../assets/theme_pattern.svg";
import MyWorkData from "../../assets/mywork_data";
import "./MyWork.css";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="mywork-container">
        {MyWorkData.map((work, index) => {
          return <img key={index} src={work.w_img} />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;
