import React from "react";
import "./Navbar.css";
import $ from 'jquery'
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgNav from "../../../assets/images/anh.png";

function Navbar() {
  const handleShowMenu = () =>{
    $('.Navbar').slideToggle()
  }
  return (
    <>
        <div className="Bars"><FontAwesomeIcon icon={faBars} className="bars" onClick={handleShowMenu}/></div>
      <div className="Navbar">
        <ul className="menu">
          <li className="menu_Item">Home</li>
          <li className="menu_Item" id="Item_About_Us">
            About us <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </li>
          <li className="menu_Item">Project</li>
          <li className="menu_Item">Service</li>
          <li className="menu_Item">Careers</li>
          <li className="menu_Item">News</li>
          <li className="menu_Item">Contact</li>
        </ul>
        <div className="menu_son">
          <ul className="list_item">
            <li className="menu_Item_son">Introduce</li>
            <li className="menu_Item_son">Our people</li>
            <li className="menu_Item_son">QHSE</li>
            <li className="menu_Item_son">Asset And facility</li>
          </ul>
          <div className="img_box">
            <img src={imgNav} alt="" className="image_card" />
            <div>
              <p className="Introduce">Introduce</p>
              <p className="describe">
                The Company comprises dynamic qualified personnel, experienced
                in the field of offshore transportation and installation
              </p>
              <button className="describe_btn">SEE MORE +</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
