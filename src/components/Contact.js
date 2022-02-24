import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import HomeIcon from "@mui/icons-material/Home";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="cont">
        <div className="contactCont">
          Contact Us
          <div>
            <EmailIcon /> abc@abc.com
          </div>
          <div>
            <PhoneIphoneIcon />
            (123)345-3845
          </div>
          <div>
            <HomeIcon />
            11559 Ventura Boulevard, Studio City, CA 91604
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
