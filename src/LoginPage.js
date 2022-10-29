import React, { useState } from "react";
import App from "./App.css";
import { Link, useNavigate } from "react-router-dom";
function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  function formSubmit(e) {
    e.preventDefault();
    if (username != null && password != null) {
      navigate("/Home");
    }
    console.log(username + " and " + password);
  }
  return (
    <>
      <div className="row w-100">
        <div className="col-lg-6 col-md-6 col-sm-12 phone ">
          <img className=" iphone" src={require("./assests/iphone.png")} alt="" />
          <img src={require("./assests/screenshot1-2x.png")} className="bg-img feed" alt="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <div className="container login-container shadow bg-light">
            <div className="text-center pb-5">
              <img className="" style={{ height: "5rem" }} src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png" alt="" />
            </div>

            <form onSubmit={formSubmit} className="text-center ">
              <div className="pb-3">
                <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control " placeholder="Phone number, username, or email" />
              </div>

              <div className=" pb-3">
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control " placeholder="Password" />
              </div>

              <button disabled={false} className="btn btn-info text-white w-100 mb-3" type="submit">
                Log in
              </button>

              <div className="pb-5">
                Forgot Password?
                <Link className="text-decoration-none">
                  <span className="text-primary"> Sign up</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
