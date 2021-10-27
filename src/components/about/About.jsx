import "./about.scss";
import aboutImg from '../../img/about-img.jpg'
import awardImg from '../../img/award.png'
import {aboutTextDesc,aboutText,achievementTexts} from '../../data'
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={aboutImg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">{aboutText}</p>
      <p className="a-desc">{aboutTextDesc} </p>
        <div className="a-award">
          <img src={awardImg} alt="" className="a-award-img" />
          <div className="a-award-texts">
           {achievementTexts.map((a,i)=>
             (
               <>
            {i}  <h4 className="a-award-title">{a.title}</h4>
            <p className="a-award-desc">{a.desc }</p>
               </>
             )

           )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;