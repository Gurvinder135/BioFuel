import React, { useState } from "react";
import img1 from "../images/bag1.jpg";
import img2 from "../images/bag2.jpg";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
function Product() {
  const [slider, setSlider] = useState(0);
  const click = () => {
    if (slider === -100) {
      setSlider(0);
    } else {
      setSlider(slider - 100);
    }
  };
  return (
    <div className="product" id="product">
      <div className="producttxt">
        Our products <hr />
      </div>
      <div
        className="productCont"
        style={{ transform: `translateX(${slider}vw)` }}
      >
        <div>
          <div>Biomass Pellets </div>
          <img src={img1} alt="" />
          <div>
            Concerning the biofuels, it's probably the industrial sector of the
            economy that uses it the most.
          </div>
        </div>
        <div>
          <div>Briquettes </div>
          <img src={img2} alt="" />
          <div>
            With so many companies going green in the last couple decades, this
            is the product that provides sustainable fuel solutions.
          </div>
        </div>
      </div>
      <div className="slider">
        <div onClick={click}>
          <CircleOutlinedIcon className={slider === 0 ? "active" : ""} />
        </div>
        <div onClick={click}>
          <CircleOutlinedIcon className={slider === -100 ? "active" : ""} />
        </div>
      </div>
    </div>
  );
}

export default Product;
