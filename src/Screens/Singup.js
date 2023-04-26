/** @format */

import React, { useState } from "react";
import "../css/SingIn.css";
import facebook from "../Images/facebook.png";
import google from "../Images/google.png";
import apple from "../Images/apple2.png";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [email, setEmail] = useState("");

  const SignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:4000/api/v1/web/signup",
        { email }
      );
      alert(`Your Otp is ${data.details.otp}`);
      setModalShow(true);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  // Otp Verify
  function MyVerticallyCenteredModal(props) {
    const [otp, setOtp] = useState("");

    const Verifyotp = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:4000/api/v1/web/verify",
          { otp }
        );
        alert(data.message);
        props.onHide();
        navigate("/signIn");
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Verify Email Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={Verifyotp}>
            <Form.Group className="mb-3">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <Button
              type="submit"
              style={{
                backgroundColor: "#407bff",
                borderRadius: "0",
                width: "200px",
              }}
            >
              Verify
            </Button>{" "}
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="StartingDiv"></div>
      <div className="bigDiv">
        <div className="signInDiv">
          <button>LOGO</button>
          <p className="access">
            Sign Up now <br />
            to access us{" "}
          </p>
          <form onSubmit={SignUp}>
            <input
              type="text"
              placeholder="Enter your  Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="signinBtn" type="submit">
              NEXT
            </button>
          </form>

          <p
            style={{ textAlign: "center", fontSize: "1.2rem", marginTop: "2%" }}
          >
            OR
          </p>
          <div>
            <div className="sing">
              <p>Sign up with</p>
            </div>
            <img src={facebook} alt="" />
            <img src={google} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
