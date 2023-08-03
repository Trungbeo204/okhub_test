import React from "react";
import "./Footer.css";
import logoWeb from "../../../assets/icons/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <div className="Footer">
      <div className="contact">
        <div id="icon">
          <img src={logoWeb} alt="logoWeb" />
          <p>Offshore Energy Installation JSC</p>
        </div>
        <div className="about_us">
          <ul>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CLIENTS & PARTNERS</li>
            <li>NEWS AND EVENT</li>
            <li>SUSTAINABILITY</li>
            <li>DOWNLOAD PROFILE COMPANY</li>
          </ul>
          <ul>
            <li>CAREERS</li>
            <li>CONTACT</li>
            <li>BLOG</li>
            <li>FAQ</li>
            <li>DISCLAIMER</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div className="signUp">
          <p>Sign up for email to receive the latest information</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam sed blandit rhoncus
            id dictum.{" "}
          </p>
          <div id="signUp_box">
            <input type="text" placeholder="Your email" />
            <div>
              <FontAwesomeIcon icon={faPaperPlane} className="icon_send" />
            </div>
          </div>
        </div>
      </div>
      <div id="address">
        <p>ADDRESS</p>
        <p>2nd floor, No.44, 30/4 Rd., Ward 9, Vung Tau City, Vietnam</p>
      </div>
      <div id="phone">
        <p>CONTACT</p>
        <p>(+84) 254 6295268</p>
        <p>info@oei.com.vn</p>
      </div>
    </div>
  );
}

export default Footer;
