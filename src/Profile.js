import React from "react";
import { Link } from "react-router-dom";
import App from "./App.css";
function Profile() {
  return (
    <>
      <div className="container p-5">
        <div className="d-inline-flex col-11 justify-content-around">
          <div>
            <h4 className="pb-4">
              <strong>bhanubediya</strong>
            </h4>
            <img className="shadow bg-light  " style={{ padding: "0.1rem", borderRadius: "50%", width: "9rem", height: "9rem", border: "0.2rem solid red" }} src="https://media-exp1.licdn.com/dms/image/C4D03AQHHtyNXXtD-RQ/profile-displayphoto-shrink_200_200/0/1661835782254?e=1670457600&v=beta&t=12Pez6dpYk0KOiEu3_xU55u9CDFQARpmtuphfPz0gJo" alt="" />
            <div className="bio pt-3">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h6 className="text-dark">
                    <strong>Bhanu Bediya</strong>
                  </h6>
                </li>
                <li>
                  <h6 className="text-black-50" style={{ fontSize: "0.8rem", fontFamily: "sans-serif" }}>
                    <strong>Musician/Band</strong>
                  </h6>
                </li>
                <li style={{ fontFamily: "sans-serif" }}>Proud to be an Indian</li>
                <li style={{ fontFamily: "sans-serif" }}>Software Engineer👨‍💻</li>
                <li style={{ fontFamily: "sans-serif" }}>Fitness Freak 💪</li>
                <li style={{ fontFamily: "sans-serif" }}>Music lover🎵🎤🎧</li>
                <li style={{ fontFamily: "sans-serif" }}>Funny & mysterious person u'll ever talk to.</li>
                <li style={{ fontFamily: "sans-serif" }}>Born on 1 oct to win hearts💘✌️</li>
              </ul>
            </div>
          </div>
          <div className="d-inline-flex col-7 justify-content-around pt-5">
            <div>
              <h4>
                <strong>100</strong>
              </h4>
              <h5 style={{ fontWeight: "450" }}>Posts</h5>
            </div>
            <div>
              <h4 className="text-center">
                <strong>1M</strong>
              </h4>
              <h5 style={{ fontWeight: "450" }}>Followers</h5>
            </div>
            <div>
              <h4 className="text-center">
                <strong>0</strong>
              </h4>
              <h5 style={{ fontWeight: "450" }}>Following</h5>
            </div>
          </div>
        </div>

        <div className=" text-center pt-5 ">
          <ul style={{ listStyle: "none", backgroundColor: "lightgray", borderRadius: "1.8rem" }}>
            <li className="pt-1">
              <strong>Professional dashboard</strong>
            </li>
            <li className="pb-1 text-black-50">
              <strong style={{ fontWeight: "600" }}>3M</strong> accounts reached in the last 30 days.
            </li>
          </ul>
        </div>

        <div className="d-inline-flex text-center col-12 justify-content-around pt-3 ">
          <Link className="text-decoration-none text-dark">
            <div style={{ backgroundColor: "lightgray", width: "36rem", borderRadius: "1.5rem" }}>
              <p className="pt-2 pb-2">
                <strong style={{ fontWeight: "500" }}>Edit profile</strong>
              </p>
            </div>
          </Link>
          <Link className="text-decoration-none text-dark">
            <div style={{ backgroundColor: "lightgray", width: "36rem", borderRadius: "1.5rem" }}>
              <p className="pt-2 pb-2">
                <strong style={{ fontWeight: "500" }}>Contact</strong>
              </p>
            </div>
          </Link>
        </div>

        <div className="d-inline-flex text-center col-12 justify-content-around pt-5 pb-4">
          <div>
            <img className="shadow bg-light  " style={{ padding: "0.1rem", borderRadius: "50%", width: "6rem", height: "6rem" }} src="https://th.bing.com/th/id/OIP.l3h08_kYBtGZCbzGU5dxqAAAAA?pid=ImgDet&rs=1" alt="" />
            <p className="pt-3">Web UI Pro...</p>
          </div>

          <div>
            <img className="shadow bg-light  " style={{ padding: "0.1rem", borderRadius: "50%", width: "6rem", height: "6rem" }} src="https://i.pinimg.com/originals/3e/ee/90/3eee906eb4182477d868aa05c1673b8b.jpg" alt="" />
            <p className="pt-3">Activity</p>
          </div>

          <div>
            <img className="shadow bg-light  " style={{ padding: "0.1rem", borderRadius: "50%", width: "6rem", height: "6rem" }} src="https://i.ytimg.com/vi/vhGOGCHBVhE/maxresdefault.jpg" alt="" />
            <p className="pt-3">World</p>
          </div>

          <div>
            <img className="shadow bg-light  " style={{ padding: "0.1rem", borderRadius: "50%", width: "6rem", height: "6rem" }} src="https://i.ytimg.com/vi/RcXxpOEfIEM/maxresdefault.jpg" alt="" />
            <p className="pt-3">Love</p>
          </div>

          <div>
            <i className="fa-solid fa-plus fa-5x pt-2 shadow bg-light  " style={{ padding: "0.1rem", borderRadius: "50%", width: "6rem", height: "6rem", fontFamily: "serif", fontWeight: "100", color: "lightgray" }}></i>
            <p className="pt-3">New</p>
          </div>
        </div>

        {/* <div className="d-inline-flex text-center col-12 justify-content-around pt-3 " style={{ border: "1px solid lightgrey" }}>
          <div className="d-inline-flex col-1 justify-content-around">
            <i className="fa-solid fa-table-cells fa-2x"></i>
            <p className="pt-1"> Posts</p>
          </div>
          <div className="d-inline-flex col-1 justify-content-around">
            <img src={require("./assests/reels.png")} style={{ width: "30%" }} alt="" />
            <p className="pt-2"> Reels</p>
          </div>
          <div className="d-inline-flex col-1 justify-content-around">
            <i className="fa-solid fa-id-card-clip fa-2x"></i>
            <p className="pt-1"> Tagged</p>
          </div>
          <div className="d-inline-flex col-1 justify-content-around">
            <i className="fa-regular fa-bookmark fa-2x"></i>
            <p className="pt-1"> Saved</p>
          </div>
        </div> */}

        <table className="table  pt-5">
          <thead className="">
            <tr>
              <th scope="col" className="col-3">
                <div className="text-center ">
                  <i className="fa-solid fa-table-cells fa-2x"></i>
                </div>
              </th>

              <th scope="col" className="col-3">
                <div className="text-center">
                  <img src={require("./assests/reels.png")} style={{ width: "10%", height: "10%" }} alt="" />
                </div>
              </th>

              <th scope="col" className="col-3">
                <div className="text-center">
                  <i className="fa-regular fa-bookmark fa-2x"></i>
                </div>
              </th>

              <th scope="col" className="col-3">
                <div className="text-center">
                  <i className="fa-solid fa-id-card-clip fa-2x"></i>
                </div>
              </th>
            </tr>
          </thead>
        
        </table>

<div class="row">
  <div class="column">
    <img height={415}  src="https://th.bing.com/th/id/R.c384535cf04b0adcde5aff5db2a67f8c?rik=Xrl1IZ%2bcAv6gxA&riu=http%3a%2f%2fcdn.pinchofyum.com%2fwp-content%2fuploads%2fAloo-Tikki.jpeg&ehk=NcIxT9m8SdPlajO9E3TYNbI8KMuI%2bcTgHOPhA%2fmEFdM%3d&risl=&pid=ImgRaw&r=0"/>
    <img height={415} src="https://th.bing.com/th/id/OIP.9jCwxFzEjQfNpgXY97if4AAAAA?pid=ImgDet&w=169&h=253&rs=1"/>
    <img height={415} src="https://i.pinimg.com/originals/98/b8/97/98b897890efba5a4fa9d0d3bd8e22390.jpg"/>
    <img height={415} src="https://i.pinimg.com/originals/b1/9a/1c/b19a1c352b1cbfdd793594cba851a812.jpg"/>
    <img height={415} src="https://th.bing.com/th/id/OIP.pHcowc9yrUlNvSC9C92nIwHaJ4?pid=ImgDet&rs=1"/>
    <img height={415} src="https://th.bing.com/th/id/OIP.s-ZywlIyucefpHhsqwlaOAHaKV?pid=ImgDet&rs=1"/>
    <img height={415} src="https://chezcateylou.com/wp-content/uploads/2014/02/Squash-Toast-13-682x1024.jpg"/>
  </div>
  <div class="column">
    <img height={415} src="https://th.bing.com/th/id/R.e6e88cfb18e88df7f5e45e71fca11e64?rik=EwGocDX6LjVk%2bA&riu=http%3a%2f%2fwww.happyolks.com%2fwp-content%2fuploads%2f2011%2f11%2fHY-Leek-and-Chanterelle-toast-31-682x1024.jpg&ehk=XU6PFa6ZfPumAPFopymTNYG2lk8TyY4oOEIXkUBUbnc%3d&risl=&pid=ImgRaw&r=0"/>
    <img height={415} src="https://th.bing.com/th/id/R.c15167d64978834bad002cff81419b9d?rik=q4KeROvtaq1ycA&riu=http%3a%2f%2fwww.mylifeasamrs.com%2fwp-content%2fuploads%2f2011%2f06%2fIMG_9540-560x840.jpg&ehk=7Y%2f1dq5579VUDemKLZ11Yp162CJOjAVdzPQPmkh%2byy0%3d&risl=&pid=ImgRaw&r=0"/>
    <img height={415} src="https://i.pinimg.com/474x/52/2c/8c/522c8c93ddc1ce6e5c8b69b6a1040586.jpg"/>
    <img height={415} src="https://th.bing.com/th/id/OIP.PR1XiHMbOo1Y4kfxS19vbgHaHa?pid=ImgDet&w=652&h=652&rs=1"/>
    <img height={415} src="https://th.bing.com/th/id/OIP.4BdHxY5XSd7naMnggul4owHaHa?pid=ImgDet&rs=1"/>
    <img height={415} src="https://th.bing.com/th/id/OIP.X8Bf6G4qRvcz-5K6QOPEfgHaHa?pid=ImgDet&w=960&h=960&rs=1"/>
  </div>
  <div class="column">
    <img height={415} src="https://www.reviewjournal.com/wp-content/uploads/2018/10/11244024_web1_PB-Sundae-at-Beauty-and-Essex.jpg"/>
    <img height={415} src="https://external-preview.redd.it/5rgrDibHGuFWjeG80EleVLf_1DWn86c2IKWeOUFFcpg.jpg?auto=webp&s=afe2ccd823d8c13d5596386bbe0c5d0391668005"/>
    <img height={415} src="https://th.bing.com/th/id/R.4b0cca2ff425c84a8a8d2c76e5c4ff4b?rik=DpJVyuNObiY81w&riu=http%3a%2f%2fwww.bunsenburnerbakery.com%2fwp-content%2fuploads%2f2013%2f06%2fmint-chocolate-chip-ice-cream-9Q2B0295.jpg&ehk=GelTQP53e0QDpt9%2btVIYWUREWr%2fGNYbAhuSSfDbFju8%3d&risl=&pid=ImgRaw&r=0"/>
    <img height={415} src="https://th.bing.com/th/id/OIP.pSDpvexm9Ezxemty9HCSSQHaKA?pid=ImgDet&rs=1"/>
    <img height={415} src="https://th.bing.com/th/id/OIP.ZfewIy9uplGesM_mqdJFlQHaLH?pid=ImgDet&rs=1"/>
    <img height={415} src="https://th.bing.com/th/id/OIP.H5kARC4BZ_5_HoXwr6H-jgHaLH?pid=ImgDet&w=800&h=1200&rs=1"/>
    <img height={415} src="https://th.bing.com/th/id/OIP.NF8Wn7E8D0nSsIoQKP6QhAHaLH?pid=ImgDet&w=600&h=900&rs=1"/>
  </div>
  <div class="column">
    <img height={415} src="https://th.bing.com/th/id/OIP.4BdHxY5XSd7naMnggul4owHaHa?pid=ImgDet&rs=1"/>
    <img height={415} src="https://th.bing.com/th/id/R.8399a43e8a4191bac645c6cb24c9452b?rik=Zi%2bf65SB434%2fsQ&riu=http%3a%2f%2fsallysbakingaddiction.com%2fwp-content%2fuploads%2f2013%2f02%2f1-XXL-Death-by-Chocolate-Cookie-8.jpg&ehk=c0SLv8%2bsd5Vgsu9aMULsW9%2bdIYoFvCgjcaR%2f92A4M%2f8%3d&risl=&pid=ImgRaw&r=0"/>
    <img height={415} src="https://th.bing.com/th/id/R.4b0cca2ff425c84a8a8d2c76e5c4ff4b?rik=DpJVyuNObiY81w&riu=http%3a%2f%2fwww.bunsenburnerbakery.com%2fwp-content%2fuploads%2f2013%2f06%2fmint-chocolate-chip-ice-cream-9Q2B0295.jpg&ehk=GelTQP53e0QDpt9%2btVIYWUREWr%2fGNYbAhuSSfDbFju8%3d&risl=&pid=ImgRaw&r=0"/>
    <img height={415} src="https://amyshealthybaking.com/wp-content/uploads/2016/01/triple-chocolate-cookies-2930-683x1024.jpg"/>
    <img height={415} src="https://i0.wp.com/tiffinandteaofficial.com/wp-content/uploads/2016/07/skilet-cookie-7.jpg?resize=654%2C983"/>
    <img height={415} src="https://th.bing.com/th/id/R.1d4bb4298edc820b0944621c4fa7f89d?rik=7Lwp0E%2buKGHL8w&riu=http%3a%2f%2fwww.onesweetmess.com%2fwp-content%2fuploads%2f2013%2f05%2fVery-Berry-Chewy-Granola-Bars-www.themessybakerblog.com-7177.jpg&ehk=5TAz5dXGEoDGymFms%2bEwkSCT8%2fcHN72QIBHYPrS0GNc%3d&risl=&pid=ImgRaw&r=0"/>
    <img height={415} src="https://cdn.ordermo.ph/photos/resto/E8Y6ouKM/menu/aRPxsyux-kP5SvkTY.jpg"/>
  </div>
</div>
      </div>
    </>
  );
}

export default Profile;
