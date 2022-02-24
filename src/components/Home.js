import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo.png";
import { Link } from "react-scroll";
export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const click = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="home">
      <div className="left">
        <img src={logo} alt="" />
        <div className="logotxt">
          <div>BioFuel</div>
          <div>We Specialize in Biofuel.</div>
        </div>
      </div>
      <div className="mid">
        <Link
          activeClass="active1"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div>Home</div>
        </Link>
        <Link
          activeClass="active1"
          to="product"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          <div>Product</div>
        </Link>
        <Link
          activeClass="active1"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <div>About Us</div>
        </Link>
        <Link
          activeClass="active1"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div>Contact Us</div>
        </Link>
      </div>
      <div className="right">
        <CallIcon />
        <div>(123)123-3726</div>
      </div>
      <div className="menu">
        <MenuIcon onClick={click} />
        <div className={`sidebar ${sidebar ? "" : "hide"}`}>
          <Link
            onClick={() => {
              setSidebar(false);
            }}
            activeClass="active1"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div>Home</div>
          </Link>
          <Link
            onClick={() => {
              setSidebar(false);
            }}
            activeClass="active1"
            to="product"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <div>Product</div>
          </Link>
          <Link
            onClick={() => {
              setSidebar(false);
            }}
            activeClass="active1"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div>About Us</div>
          </Link>
          <Link
            onClick={() => {
              setSidebar(false);
            }}
            activeClass="active1"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div>Contact Us</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
