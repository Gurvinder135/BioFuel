import React from "react";
import brick from "../images/brick.jpg";
import diary from "../images/diary.png";
import manufacturing from "../images/manufacturing.png";
import power from "../images/power.png";

function Industry() {
  return (
    <div className="industry">
      <hr />
      <div className="industryTxt">
        INDUSTRY THRIVING <span>with Pellets & Briquettes</span>
        <p>
          Biomass pellets & briquettes are promising substitutes for coal &
          charcoal. As the world is striving towards advancement, Biomass
          pellets & briquettes are also being welcomed by the industrial,
          commercial and household sectors for vanous applications.
        </p>
        <div className="industryCont">
          <div className="industryImg">
            <img src={brick} alt="" />
            <div>Brick Kilns</div>
          </div>
          <div className="industryImg">
            <img src={diary} alt="" />
            <div>Dairy industry</div>
          </div>
          <div className="industryImg">
            <img src={manufacturing} alt="" />
            <div>Manufacturing Industry</div>
          </div>
          <div className="industryImg">
            <img src={power} alt="" />
            <div>Power genration</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industry;
