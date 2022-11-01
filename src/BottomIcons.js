import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BottomIcons() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const heart = (event) => {
      setShow(true);
      navigate("/notifyFeed")

  };
  const heart1 = (event) => {
    setShow(false);
    navigate("/notifyFeed")

};
  return (
    <>
    <div className="col-sm-12 col-md-12 fixed-bottom bg-white pt-3 pb-3  d-inline-flex justify-content-around ">
         <Link className="text-decoration-none text-dark" to={"/home"} >
         <i className="fa-solid fa-house text-dark header-menu-item1" onClick={heart1}></i>
         </Link>
         <Link className="text-decoration-none text-dark " to={"searchPage"}>
         <i class="fa-solid fa-magnifying-glass  header-menu-item1"></i>
         </Link>
          <i className="fa-solid fa-square-plus header-menu-item1"></i>
          
          <div className="notification ">
          {show === false && (
            <div className="notification " onClick={heart} heartClicked={false}  style={{cursor:"pointer"}}>
              <i className="fa-regular fa-heart regular-heart header-menu-item1" ></i>

              <li className="text-danger badge  header-menu-item1" >.</li>
            </div>
          )}
          
           {show === true && <i className="fa-solid fa-heart header-menu-item1"   ></i>}
        
            {/* <img className="noti" src="https://www.citypng.com/public/uploads/preview/instagram-notifications-followers-comments-likes-11582478767wykozvdlki.png" /> */}

            
          </div>
        
         <div>
        <Link className="text-decoration-none " to={"/Profile"}>
        <img className="shadow bg-light header-menu-item1 header-icon-profile"   src="https://media-exp1.licdn.com/dms/image/C4D03AQHHtyNXXtD-RQ/profile-displayphoto-shrink_200_200/0/1661835782254?e=1670457600&v=beta&t=12Pez6dpYk0KOiEu3_xU55u9CDFQARpmtuphfPz0gJo" alt="" /></Link>
         {/* {showprofile && 
         <div className="container profile-popup  shadow-lg" id="list-example">
          <div className="row pt-3">
           <div className="d-inline-flex col-7 justify-content-around">
           <div><i class="fa-regular fa-circle-user " style={{fontSize:"1.4rem"}}></i> </div>
          <Link className="text-decoration-none text-dark" to={"/Profile"}>
          <p>Profile</p>
          </Link>
           </div>
           <div className="d-inline-flex col-7 justify-content-around">
           <div><i class="fa-regular fa-bookmark"style={{fontSize:"1.5rem"}}></i></div>
           <p> Saved</p>
           </div>
           <div className="d-inline-flex justify-content-around" style={{width:"9.5rem"}}>
           <div><i class="fa-solid fa-gear" style={{fontSize:"1.4rem"}}></i></div>
           <p>Settings</p>
           </div>
           <div className="d-inline-flex  justify-content-around"style={{width:"13rem"}}>
           <div><i class="fa-solid fa-arrows-rotate" style={{fontSize:"1.4rem"}}></i> </div>
           <p>Switch accounts</p>
           </div>
           </div>
            <hr />
          <div className="text-left">Log Out</div>
          
          </div>} */}
         </div>
        </div>
    </>
  )
}

export default BottomIcons;