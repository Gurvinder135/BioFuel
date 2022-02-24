import React from "react";
import about from "../images/about.jpg";
import about3 from "../images/about3.png";

function About() {
  return (
    <div className="about" id="about">
      <div className="about1">
        <img src={about} alt="" />
      </div>
      How It All Started <span>IT`S ALL ABOUT ENERGY</span>
      <p>
        Our company is an end-to-end, customer oriented alternative energy
        company that is centered on the marketing, trading, transportation, and
        distribution of biofuel of all sorts in India... Firstly, we’re an
        environmentally friendly renewable energy company offering a broad
        portfolio of products, & solutions to our clients! We combine the power
        of the systems and technologies designed by our team of scientists and
        engineers.
      </p>
      <hr />
      <div className="about2">
        <div className="about2Img">
          <img src={about3} alt="" />
        </div>
        <div className="about2Cont">
          <h1>The Empowering</h1>
          <h2>Infrastructure</h2>
          <p>
            Having emerged as a pioneer in manufacturing Biomass solutions in
            India, we witnessed a rapid demand for Biomass solutions. To produce
            the best quality biomass pellets, briquettes and other solutions, we
            established an R&D department. Our experts continuously work on
            gathering valuable data that help us enhance the efficiency of the
            products.
            <br />
            Our plant is spread across 3,00,000 sq. feet of land that contains
            R&D units and technology-equipped Biomass Machinery to manufacture
            the best quality biomass products under the supervision of highly
            skilled and experienced professionals.
          </p>
          <h3>Our Vision</h3>
          <p>
            To be the world's most sought-after manufacturers of Biomass
            Biofuels, known for replacing fossil fuels with Biofuels.
          </p>{" "}
          <h3>Our Mission</h3>
          <p>
            To accelerate the use of Biomass energy by substituting fossil fuels
            with biofuels.
          </p>
        </div>
      </div>
      <div className="banner">
        <div className="bannerCell">
          <div>1100+</div>
          <div>clients</div>
        </div>
        <div className="bannerCell">
          <div>100%</div>
          <div>Customer Satisfaction</div>
        </div>
        <div className="bannerCell">
          <div>10+</div>
          <div>Employee Strength</div>
        </div>
        <div className="bannerCell">
          <div>100%</div>
          <div>Quality</div>
        </div>
      </div>
    </div>
  );
}

export default About;
