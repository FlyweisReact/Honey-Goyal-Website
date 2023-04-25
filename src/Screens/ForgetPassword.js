import React  from "react";
import "../css/SingIn.css";

const ForgetPassword = () => {
  return (
    <>
          <div className="StartingDiv"></div>
      <div className="bigDiv">
        <div className="signInDiv">
          <button>LOGO</button>
          <p className="access">
             Reset Password 
          </p>
          <form >
            <input
              type="text"
              placeholder="Confirmation Code"
            />
            <input
              type="password"
              placeholder="Password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
            />
            <button className="signinBtn" type="submit">
              Submit
            </button>
          </form>

     
     
        </div>
      </div>
    </>
  )
}

export default ForgetPassword