import React from "react";
import "./Page2.css";
import imgWeb1 from "../../assets/images/img1.png";
import imgWeb2 from "../../assets/images/img2.png";
import imgWeb3 from "../../assets/images/img3.png";
import imgWeb4 from "../../assets/images/img4.png";

function Page2() {
  // const actionImg1 = useRef()
  // const value = window.scrollY
  // window.addEventListener("scroll", () => {
  //   let actionImg1 = document.getElementById("img1_rows");
  //   let value = window.scrollY;
  //   actionImg1.style.left = value + "px";
  // });
  // const handleImg1 = () => {
  //   actionImg1.current.style.left = value * -1.5 + 'px'
  // }
  // handleImg1()

  return (
    <div id="page2_box">
      <div id="text_box">
        <div>
          <div>
            <p id="about_us">ABOUT US</p>
            <p>
              <span> Offshore Energy Installation</span>
            </p>
            <p>
              {" "}
              OEI is your gateway to renewable energy and <span>
                Oil
              </span> & <span>Gas</span> solutions.
            </p>
          </div>
          <div id="btn_see">SEE MORE</div>
        </div>
        <div id="img_box">
          <div id="img1_rows">
            <img src={imgWeb1} alt="" className="img1" />
            <div>grep</div>
          </div>
          <div id="img2_rows">
            <img src={imgWeb2} alt="" className="img2" />
            <img src={imgWeb3} alt="" className="img3" />
          </div>
          <div id="img4_rows">
            <div id="green_box"></div>
            <img src={imgWeb4} alt="" className="img4" />
            <div id="gray_box"></div>
          </div>
        </div>
      </div>
      <div id="title_box">
        <p>
          offshore <span> Energy </span>installation
        </p>
      </div>
    </div>
  );
}

export default Page2;
