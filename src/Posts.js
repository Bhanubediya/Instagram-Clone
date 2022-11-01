import React from "react";
import { Link } from "react-router-dom";
function Posts() {
  return (
    <>
      <div className="row pt-2 post-container w-100">
        <div className="col-lg-6 col-sm-12">
          <div className="card post-card mb-4 pb-5 pt-3" style={{ borderRadius: "0.4rem" }}>
            
              <div className="col-12 d-inline-flex justify-content-around pb-3">
                <div className=" col-11 d-inline-flex justify-content-between">
                  <div>
                    <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3.5rem", height: "3.5rem", border: "0.2rem solid red" }} src="https://w0.peakpx.com/wallpaper/917/162/HD-wallpaper-nora-fatehi.jpg" alt="" />
                  </div>
                  <div className="pt-4">
                    <i class="fa-solid fa-ellipsis" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img className="card-img-top w-100 " src="https://th.bing.com/th/id/OIP.NF8Wn7E8D0nSsIoQKP6QhAHaLH?pid=ImgDet&w=600&h=900&rs=1" alt="Card image cap" />
              </div>

              <div className="col-lg-12 col-sm-11  d-inline-flex justify-content-between pt-3">
                <div className="col-3 d-inline-flex justify-content-around ">
                  <i className="fa-regular fa-heart  Post-icon-size" ></i>

                  <i class="fa-regular fa-comment Post-icon-size" ></i>

                  <i class="fa-solid fa-location-arrow Post-icon-size" ></i>
                </div>
                <div className="">
                  <i class="fa-regular fa-bookmark Post-icon-size" ></i>
                </div>
              </div>
              <div className="Like-counter pt-2" style={{ paddingLeft: "1rem" }}>
                <p style={{ fontWeight: "600" }}>6,81432 likes</p>
              </div>
              <div className="w-100 comment pb-2 d-inline-flex justify-content-between " style={{ paddingLeft: "0.8rem", fontFamily: "unset" }}>
                <p className="card-text ">
                  {" "}
                  <strong>bhanubediya </strong> Feel the moment..
                </p>
                <i className="fa-regular fa-heart " style={{ fontSize: "1rem", cursor: "pointer" }}></i>
              </div>
              <p className="card-text hashtag text-primary pb-3" style={{ borderBottom: "1px solid lightgray", paddingLeft: "0.8rem" }}>
                {" "}
                #nora #love #insta #clone #nora #love #insta #clone #nora #love #insta #clone
              </p>
              <div className="col-12 col-sm-9 pt-2  comment-box d-inline-flex justify-content-around">
                <div className="pt-2">
                  <i class="fa-regular fa-face-smile" style={{ fontSize: "1.5rem" }}></i>
                </div>
                <form className="col-lg-11 col-sm-9 comment-box d-inline-flex justify-content-between">
                  <div>
                    <input type="text" className="form-control comment-input" placeholder="Add a Comment..."  />
                  </div>
                  <div>
                    <p className="text-info pt-2 btn">Post</p>
                  </div>
                </form>
              </div>
            </div>

            <div className="card post-card mb-4 " style={{ borderRadius: "0.4rem" }}>
            
              <div className="col-12 d-inline-flex justify-content-around pb-3 pt-3">
                <div className=" col-11 d-inline-flex justify-content-between">
                  <div>
                    <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3.5rem", height: "3.5rem", border: "0.2rem solid red" }} src="https://th.bing.com/th/id/OIP.usyIo3PSmABci5aaOZO0egHaLG?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
                  </div>
                  <div className="pt-4">
                    <i class="fa-solid fa-ellipsis Post-icon-size" ></i>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <video className=" w-100" muted={true} autoPlay={true} loop>
                  <source src={require("./assests/vid.mp4")} type="video/mp4" />
                </video>
                {/* <img className="card-img-top w-100 " src="https://w0.peakpx.com/wallpaper/917/162/HD-wallpaper-nora-fatehi.jpg" alt="Card image cap" /> */}
              </div>

              <div className="col-12 d-inline-flex justify-content-between pt-3">
                <div className="col-3 d-inline-flex justify-content-around ">
                  <i className="fa-solid fa-heart Post-icon-size text-danger" ></i>

                  <i class="fa-regular fa-comment Post-icon-size" ></i>

                  <i class="fa-solid fa-location-arrow Post-icon-size"></i>
                </div>
                <div className="text-right">
                  <i class="fa-regular fa-bookmark Post-icon-size" ></i>
                </div>
              </div>
              <div className="Like-counter pt-2" style={{ paddingLeft: "1rem" }}>
                <p style={{ fontWeight: "600" }}>10,043,453 likes</p>
              </div>
              <div className="w-100 comment pb-2 d-inline-flex justify-content-between " style={{ paddingLeft: "0.8rem", fontFamily: "unset" }}>
                <p className="card-text ">
                  {" "}
                  <strong>bhanubediya </strong> Reel is in the air..
                </p>
                <i className="fa-regular fa-heart " style={{ fontSize: "1rem", cursor: "pointer" }}></i>
              </div>
              <p className="card-text hashtag text-primary pb-3" style={{ borderBottom: "1px solid lightgray", paddingLeft: "0.8rem" }}>
                {" "}
                #UI #love #scifi #clone #vid #instagram #insta #clone #reels #science #insta #clone
              </p>

              <div className="col-lg-12 col-sm-9 pt-2  comment-box d-inline-flex justify-content-around">
                <div className="pt-2">
                  <i class="fa-regular fa-face-smile" style={{ fontSize: "1.5rem" }}></i>
                </div>
                <form className="col-lg-11 col-sm-9 comment-box d-inline-flex justify-content-between">
                  <div>
                    <input type="text" className="form-control comment-input" placeholder="Add a Comment..."  />
                  </div>
                  <div>
                    <p className="text-info pt-2 btn">Post</p>
                  </div>
                </form>
              </div>
        </div>
          </div>
          
        <div className="col-lg-6 ">
          <div className="d-inline-flex col-lg-9 suggestions  justify-content-between">
            <p className="text-secondary">Suggestions For You</p>
            <Link className="text-decoration-none">
              <p className="text-dark">See All</p>
            </Link>
          </div>
          <div className="d-inline-flex col-lg-9 suggestions justify-content-between">
            <div className="d-inline-flex suggestions-text justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="data:image/jpeg;base64,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" alt="" />
              <div>
                <li className="pt-1" style={{ listStyle: "none" }}>
                  tejas
                </li>
                <p className="text-black-50 " style={{ fontSize: "0.7rem", fontWeight: "600", fontFamily: "revert-layer" }}>
                followed by nora and +1 more
                </p>
              </div>
            </div>
            <Link className="text-decoration-none">
              <p className="text-primary">Follow</p>
            </Link>
          </div>
          <div className="d-inline-flex col-lg-9 suggestions justify-content-between">
            <div className="d-inline-flex suggestions-text justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://th.bing.com/th/id/OIP.J0xgxZOKkIBTO3kf0OHMaQHaKV?w=203&h=284&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
              <div>
                <li className="pt-1" style={{ listStyle: "none" }}>
                  yash_
                </li>
                <p className="text-black-50 " style={{ fontSize: "0.7rem", fontWeight: "600", fontFamily: "revert-layer" }}>
                  {" "}
                  followed by nora and +9 more
                </p>
              </div>
            </div>
            <Link className="text-decoration-none">
              <p className="text-primary">Follow</p>
            </Link>
          </div>
          <div className="d-inline-flex  col-lg-9 suggestions justify-content-between">
            <div className="d-inline-flex suggestions-text justify-content-around" >
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://th.bing.com/th/id/OIP.usyIo3PSmABci5aaOZO0egHaLG?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
              <div>
                <li className="pt-1" style={{ listStyle: "none" }}>
                  ash
                </li>
                <p className="text-black-50 " style={{ fontSize: "0.7rem", fontWeight: "600", fontFamily: "revert-layer" }}>
                  followed by nora and +3 more
                </p>
              </div>
            </div>
            <Link className="text-decoration-none">
              <p className="text-primary">Follow</p>
            </Link>
          </div>
          <div className="d-inline-flex  col-lg-9 suggestions justify-content-between">
            <div className="d-inline-flex suggestions-text justify-content-around" >
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://th.bing.com/th/id/OIP.v_WjlAMUM412Jci9bNQyzgHaLH?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
              <div>
                <li className="pt-1" style={{ listStyle: "none" }}>
                  vivek
                </li>
                <p className="text-black-50 " style={{ fontSize: "0.7rem", fontWeight: "600", fontFamily: "revert-layer" }}>
                  followed by you and +2 more
                </p>
              </div>
            </div>
            <Link className="text-decoration-none">
              <p className="text-primary">Follow</p>
            </Link>
          </div>
          <div className="d-inline-flex  col-lg-9 suggestions justify-content-between">
            <div className="d-inline-flex suggestions-text justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://th.bing.com/th/id/OIP.yThw2ZvF2_hNOombEKJDYQHaLH?pid=ImgDet&rs=1" alt="" />
              <div>
                <li className="pt-1" style={{ listStyle: "none" }}>
                  brad
                </li>
                <p className="text-black-50 " style={{ fontSize: "0.7rem", fontWeight: "600", fontFamily: "revert-layer" }}>
                  followed by nora and you.
                </p>
              </div>
            </div>
            <Link className="text-decoration-none">
              <p className="text-primary">Follow</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
