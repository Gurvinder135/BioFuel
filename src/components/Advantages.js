import React from "react";
import carbon from "../images/carbon.jpg";
import cost from "../images/cost.jpg";
import recycle from "../images/recycle.jpg";
import source from "../images/source.jpg";

function Advantages() {
  return (
    <div className="advantage">
      <h1>The benefits of using biofuel</h1>
      <p>
        Most of the fossil fuels will expire and end up in smoke one day. Since
        most of the biofuel sources are renewable and are not likely to run out
        any time soon, it makes the use of biofuels efficient in nature.{" "}
      </p>
      <div className="advantageList">
        <div className="imgCont">
          <img src={recycle} alt="" />
          <p>Renewable</p>
        </div>
        <div className="imgCont">
          <img src={carbon} alt="" />
          <p>Reduce Greenhouse Gases</p>
        </div>
        <div className="imgCont">
          <img src={cost} alt="" />
          <p>Cost-Benefit</p>
        </div>
        <div className="imgCont">
          <img src={source} alt="" />
          <p>Easy to Source</p>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
