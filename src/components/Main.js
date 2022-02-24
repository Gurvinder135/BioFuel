import React, { useState } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Main() {
  const [slider, setSlider] = useState(0);

  const click = (dir) => {
    if (dir === "right") {
      if (slider === -200) {
        setSlider(0);
      } else {
        setSlider(slider - 100);
      }
    } else if (dir === "left") {
      if (slider === 0) {
        setSlider(-200);
      } else {
        setSlider(slider + 100);
      }
    }
  };

  return (
    <div className="main" id="home">
      <div
        onClick={() => {
          click("left");
        }}
        className="arrowleft"
      >
        <ChevronLeftIcon />
      </div>
      <div className="maintxt">
        BioFuel
        <span>
          With decades of hands-on experience, we know how biofuel works!
        </span>
      </div>
      <div className="img" style={{ transform: `translateX(${slider}vw)` }}>
        <img src={img1} alt=""></img>

        <img src={img2} alt=""></img>

        <img src={img3} alt=""></img>
      </div>
      <div
        onClick={() => {
          click("right");
        }}
        className="arrowright"
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
}

export default Main;
