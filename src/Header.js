import React, { useState } from "react";
import { Link } from "react-router-dom";
import App from "./App.css";
function Header() {
  const [show, setShow] = useState(false);
  const [showsearch, setshowsearch] = useState(false);
  const [showprofile, setProfile] = useState(false);
  const search = (event) => {
    if (showsearch == false) {
      setshowsearch(true);
    } else {
      setshowsearch(false);
    }
  };

  const searchModal = (event) => {
    
      setshowsearch(true);
    
  };

  const heart = (event) => {
    if (show == false) {
      setShow(true);

    } else {
      setShow(false);
      
    }
  };

  const myProfile = (event) => {
    if (showprofile == false) {
      setProfile(true);
    } else {
      setProfile(false);
    }
  };
  return (
    <>
      <nav className="navbar nav   sticky-top navbar-white bg-white " style={{ borderBottom: "0.01rem solid lightgrey" }}>
        <div className="col-lg-4 col-sm-2  text-center">
          <Link className="text-decoration-none" to={"/"}>
            <img className="logo" style={{  }} src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png" alt="" />
          </Link>
        </div>
        <div className="col-lg-4 col-sm-4 ">
          <nav className="navbar navbar-white bg-white ">
            <form className="form-inline">
              {/* &#xF002; */}
              <input className="form-control  search header-menu-item" onFocus={search} onBlur={search} style={{ borderRadius: "10px",  }} type="search" placeholder=" Search" aria-label="Search" />
              {showsearch && <div className="container search-popup shadow-lg" id="list-example" onClick={searchModal}>
                <div className="d-inline-flex justify-content-between col-12 pt-2 ">
                <p className="" ><strong>Recent</strong></p>
                <p className="text-info">Clear all</p>
                </div>
              

                <div className="d-inline-flex col-11 justify-content-between" >
            <div className="d-inline-flex col-6 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://th.bing.com/th/id/OIP.usyIo3PSmABci5aaOZO0egHaLG?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
              <div >
              <li className="pt-1" style={{listStyle:"none"}}>rahul_32</li>
              <p className="text-black-50 " style={{fontSize:"0.9rem", fontWeight:"600",fontFamily:"revert-layer"}}>Rahul Shrivastava</p>
              </div>
            </div>           
            <i class="fa-solid fa-x pt-2" style={{cursor:"pointer"}}></i>
          </div>

          <div className="d-inline-flex col-11 justify-content-between">
            <div className="d-inline-flex col-4 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJblmG352FTrVDWaSGC-e67GuM0_WnY5WgEQ&usqp=CAU" alt="" />
              <div >
              <li className="pt-1" style={{listStyle:"none"}}>brad</li>
              <p className="text-black-50 " style={{fontSize:"0.9rem", fontWeight:"600",fontFamily:"revert-layer"}}>brad pit</p>
              </div>
            </div>           
            <i class="fa-solid fa-x pt-2" style={{cursor:"pointer"}}></i>
          </div>

          <div className="d-inline-flex col-11 justify-content-between">
            <div className="d-inline-flex col-5 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTGznLgQHRpraNofA6QHjFHy_BUUWYaR6Iw&usqp=CAU" alt="" />
              <div >
              <li className="pt-1" style={{listStyle:"none"}}>Vikram</li>
              <p className="text-black-50 " style={{fontSize:"0.9rem", fontWeight:"600",fontFamily:"revert-layer"}}>Vikram Aditya</p>
              </div>
            </div>           
            <i class="fa-solid fa-x pt-2" style={{cursor:"pointer"}}></i>
          </div>

         
                </div>}
            </form>
          </nav>
        </div>

        <div className="col-lg-4 col-sm-4  d-inline-flex justify-content-around header-menu-container">
          <i className="fa-solid fa-house text-dark header-menu-item" style={{ }}></i>
         <Link className="text-decoration-none text-dark" to={"/Message"}>
         <i className="fa-brands fa-facebook-messenger header-menu-item" ></i>
         </Link>
          <i className="fa-solid fa-square-plus header-menu-item"></i>
          <i className="fa-regular fa-compass header-menu-item" ></i>
          <div className="notification ">
          {show === false && (
            <div className="notification " onClick={heart} heartClicked={false} style={{cursor:"pointer"}}>
              <i className="fa-regular fa-heart regular-heart header-menu-item" ></i>

              <li className="text-danger badge header-menu-item">.</li>
            </div>
          )}
            {show === true && <i className="fa-solid fa-heart header-menu-item" onClick={heart} ></i>}
            {/* <img className="noti" src="https://www.citypng.com/public/uploads/preview/instagram-notifications-followers-comments-likes-11582478767wykozvdlki.png" /> */}

            {show && (
              <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
                <div className="container heart-popup shadow-lg " id="list-example">
                  <div className="d-inline-flex col-12 justify-content-around heart-info" id="navbar-example">
                  <div>
                   <p> <strong>Notification</strong></p>
                   </div>
                    <div className="d-inline-flex col-11  flex-wrap">
                   
                      <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "2.5rem", height: "2.5rem" }} src="https://th.bing.com/th/id/OIP.usyIo3PSmABci5aaOZO0egHaLG?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
                      <p className="pt-2 ">
                        <strong>_rahul</strong> <span className="text-black-50"> commented: </span> beautiful! <span className="text-secondary">4h</span>
                      </p>
                    </div>
                    <img src="https://i.pinimg.com/736x/2b/47/f2/2b47f22e9a3489e30950b068f1da38ad.jpg" height={40} width={25} alt="" />
                  </div>
                  <div className="d-inline-flex col-12 justify-content-around heart-info" id="navbar-example">
                    <div className="d-inline-flex col-11   flex-wrap">
                      <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "2.5rem", height: "2.5rem" }} src="https://th.bing.com/th/id/OIP.v_WjlAMUM412Jci9bNQyzgHaLH?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
                      <p className="pt-2">
                        <strong>randeep</strong> <span className="text-black-50"> commented: </span> ❤️❤️ <span className="text-secondary">4h</span>
                      </p>
                    </div>
                    <img src="https://i.pinimg.com/736x/2b/47/f2/2b47f22e9a3489e30950b068f1da38ad.jpg" height={40} width={25} alt="" />
                  </div>

                  <div className="d-inline-flex col-12 justify-content-around heart-info" id="navbar-example">
                    <div className="d-inline-flex col-11  flex-wrap">
                      <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "2.5rem", height: "2.5rem" }} src="https://th.bing.com/th/id/OIP.JHhl5c9Uk3Gz2W38q0MJgwHaLV?w=202&h=309&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
                      <p className="pt-2">
                        <strong>abhishek</strong> <span className="text-black-50"> commented: </span> 😮 😍 woah!!! <span className="text-secondary">4h</span>
                      </p>
                    </div>
                    <img src="https://i.pinimg.com/736x/2b/47/f2/2b47f22e9a3489e30950b068f1da38ad.jpg" height={40} width={25} alt="" />
                  </div>

                  <div className="d-inline-flex col-12 justify-content-around heart-info" id="navbar-example">
                    <div className="d-inline-flex col-11 flex-wrap ">
                      <img
                        className="shadow bg-light "
                        style={{ padding: "0.1rem", borderRadius: "50%", width: "2.5rem", height: "2.5rem" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJblmG352FTrVDWaSGC-e67GuM0_WnY5WgEQ&usqp=CAU"
                        alt=""
                      />
                      <p className="pt-2">
                        <strong>Hercules</strong> <span className="text-black-50"> commented: </span> 🔥🔥🔥 loved it <span className="text-secondary">4h</span>
                      </p>
                    </div>
                    <img src="https://i.pinimg.com/736x/2b/47/f2/2b47f22e9a3489e30950b068f1da38ad.jpg" height={40} width={25} alt="" />
                  </div>
                </div>
              </div>
            )}
          </div>
        
         <div>
        
         <img className="shadow bg-light header-menu-item" onClick={myProfile} style={{ borderRadius: "50%", width: "1.8rem", height: "1.8rem" }} src="https://media-exp1.licdn.com/dms/image/C4D03AQHHtyNXXtD-RQ/profile-displayphoto-shrink_200_200/0/1661835782254?e=1670457600&v=beta&t=12Pez6dpYk0KOiEu3_xU55u9CDFQARpmtuphfPz0gJo" alt="" />
         {showprofile && 
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
          
          </div>}
         </div>
         <div className=" header-menu-item1 " style={{paddingRight:"1rem"}}>
         <Link className="text-decoration-none text-dark header-menu-item1" to={"/Message"}>
         <i className="fa-brands fa-facebook-messenger header-menu-item1" ></i>
         </Link>
         </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
