import React, { useState } from "react";
import "./Page3.css";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logoClick1 from "../../assets/images/logoClick1.png";
import logoClick2 from "../../assets/images/logoClick2.png";
import logoClick3 from "../../assets/images/logoClick3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function Page3() {
  const data = [
    { logo: logo1, logoClicked: logoClick1, id: 1 },
    { logo: logo2, logoClicked: logoClick2, id: 2 },
    { logo: logo3, logoClicked: logoClick3, id: 3 },
  ];
  const [number, setNumber] = useState(1);
  const [sequenceNumber, setSequenceNumber] = useState(false);

  const handelePrev = () => {
    setSequenceNumber(true);
    if (number < 2) {
      setNumber(3);
    } else {
      setNumber(number - 1);
    }
  };

  const handeleNext = () => {
    setSequenceNumber(false);
    if (number > 2) {
      setNumber(1);
    } else {
      setNumber(number + 1);
    }
  };

  return (
    <div id="Page3">
      <div id="About_me">
        <div>
          <p>WE ARE</p>
          <b>A Nember Of</b>
          <p>
            A business development organisation helping to make valuable
            connections between businesses in the global energy sector.
          </p>
          <div>
            <button
              className={sequenceNumber ? "sequenceNumber" : ""}
              onClick={handelePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className={!sequenceNumber ? "sequenceNumber" : ""}
              onClick={handeleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div id="logo_box">
          {data.map((value, index) => {
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                src={
                  number === value.id ? `${value.logoClicked}` : `${value.logo}`
                }
                className={number === value.id ? "logoClicked" : "logo"}
                onClick={() => {
                  setNumber(value.id);
                }}
              />
            );
          })}
        </div>
      </div>
      <b id="title_card">
        Company value reflects its ability to generate future profits,
        management, and market position.
      </b>
      <div className="have">
        <div className="have_card">
          <p>
            2+
          </p>
          <p>FOUNDED</p>
        </div>
        <div className="have_card">
          <p>
            20+
          </p>
          <p>PERSONNEL</p>
        </div>
        <div className="have_card">
          <p>
            14+
          </p>
          <p>PROJECTS</p>
        </div>
        <div className="have_card">
          <p>
            20+
          </p>
          <p>CLIENTS & PARTNERS</p>
        </div>
      </div>
    </div>
  );
}

export default Page3;
