import React from "react";

function Header() {
  return (
    <>
      <div className="navbar nav container ">
        <div className="col-4 text-center">
          <img className="w-25" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png" alt="" />
        </div>
        <div className="col-5 ">
          <nav className="navbar navbar-light bg-light ">
            <form className="form-inline">
              {/* &#xF002; */}
              <input className="form-control mr-sm-2 " style={{ borderRadius: "18px", width: "18rem", backgroundColor: "lightgrey", fontFamily: "revert-layer" }} type="search" placeholder=" Search" aria-label="Search" />
            </form>
          </nav>
        </div>
        <div className="col-3 d-inline-flex justify-content-around">
          <i className="fa-solid fa-house text-dark" style={{ fontSize: "1.3rem", cursor: "pointer" }}></i>
          <i className="fa-brands fa-facebook-messenger " style={{ fontSize: "1.3rem", cursor: "pointer" }}></i>
          <i className="fa-solid fa-square-plus " style={{ fontSize: "1.3rem", cursor: "pointer" }}></i>
          <i className="fa-regular fa-compass " style={{ fontSize: "1.3rem", cursor: "pointer" }}></i>
          <i className="fa-regular fa-heart " style={{ fontSize: "1.3rem", cursor: "pointer" }}></i>
          <i className="fa-solid fa-user " style={{ fontSize: "1.3rem", cursor: "pointer" }}></i>
        </div>
      </div>
    </>
  );
}

export default Header;
