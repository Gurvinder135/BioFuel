import React from "react";
import bp from "../images/bp.png";
import bq from "../images/bq.png";

function Specs() {
  return (
    <div className="specs">
      <h1>Specifications of</h1>
      <h2>Biomass Pellets & Briquettes</h2>
      <div className="specsCont">
        <div className="table">
          <div>
            <img src={bp} alt="" />
          </div>
          <h1>Biomass Pellets</h1>
          <hr />
          <div className="tableCell">
            <div>Shape</div>
            <div>Cylindrical</div>
          </div>{" "}
          <hr />
          <div className="tableCell">
            <div>Dimensions</div>
            <div>Diameter: 8 mm,10mm, 20mm Length: 10mm to 50mm Approx.</div>
          </div>{" "}
          <hr />
          <div className="tableCell">
            <div>Calorific Value</div>
            <div>Range from 3,200 to 4,100 Kcal/Kg </div>
          </div>{" "}
          <hr />
          <div className="tableCell">
            <div>Ash Content</div>
            <div> Less than 15% (Depending on the raw material used)</div>
          </div>{" "}
        </div>
        <div className="table">
          <div>
            <img src={bq} alt="" />
          </div>
          <h1>Briquettes</h1>
          <hr />
          <div className="tableCell">
            <div>Shape</div>
            <div>Cylindrical</div>
          </div>{" "}
          <hr />
          <div className="tableCell">
            <div>Dimensions</div>
            <div>Diameter: 70 mm,90mm, 100mm Length: 20mm to 350mm Approx.</div>
          </div>{" "}
          <hr />
          <div className="tableCell">
            <div>Calorific Value</div>
            <div>Range from 3,200 to 4,100 Kcal/Kg </div>
          </div>{" "}
          <hr />
          <div className="tableCell">
            <div>Ash Content</div>
            <div> Less than 15% (Depending on the raw material used)</div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Specs;
