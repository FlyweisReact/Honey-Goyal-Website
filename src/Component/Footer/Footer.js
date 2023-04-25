/** @format */

import React from "react";
import img from "../../Images/image 17.png";
import img1 from "../../Images/Apple.png";
import img2 from "../../Images/PlayStore.png";
import img3 from "../../Images/Group 7877.png";
const Footer = () => {
  return (
    <div className="footer">
      <p className="head">Lorem Ipsum</p>
      <div className="big">
        <div className="first">
          <img src={img} alt="" />
        </div>

        <div className="second">
          <p style={{ fontSize: "1.8rem", fontWeight: "400" }}>Features</p>
          <p className="dwn">
            Invoicing Client Portal Estimate Expenses Bills Banking Purchase
            Orders Online payments Sales orders GST Accounting E - Invoicing
          </p>
        </div>

        <div className="third">
          <p style={{ fontSize: "1.8rem", fontWeight: "400" }}>
            Accountant and Partners
          </p>
          <p className="nn">Accountants Find Accountants Become a partner </p>
          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Find us on :
          </p>

          <img src={img1} alt="" style={{ width: "400px" }} />
          <br />
          <img src={img2} alt="" style={{ width: "400px" }} />
        </div>
        <div>
          <img src={img3} alt="" />
          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Or
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Contact us :1234-1234567
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            1234-1234567
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            1234-1234567
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
