import React from "react";

function Posts() {
  return (
    <>
      <div className="container pt-5 ">
        <div className="col-7">
          <div className="card mb-4" style={{ borderRadius: "1rem" }}>
            <div className="card-body">
              <div className="col-12 d-inline-flex justify-content-between pb-3">
                <div className=" col-12 d-inline-flex justify-content-between">
                  <div>
                    <img className="shadow bg-light " style={{ borderRadius: "50%", width: "4rem", height: "4rem", border: "0.2rem solid red" }} src="https://w0.peakpx.com/wallpaper/917/162/HD-wallpaper-nora-fatehi.jpg" alt="" />
                  </div>
                  <div className="pt-4">
                    <i class="fa-solid fa-ellipsis" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img className="card-img-top w-75 " src="https://w0.peakpx.com/wallpaper/917/162/HD-wallpaper-nora-fatehi.jpg" alt="Card image cap" />
              </div>
              <div className="col-11 container-fluid">
                <div className="col-11 d-inline-flex justify-content-between pt-5">
                  <div className="col-3 d-inline-flex justify-content-around ">
                    <i className="fa-regular fa-heart " style={{ fontSize: "1.6rem", cursor: "pointer" }}></i>

                    <i class="fa-regular fa-comment" style={{ fontSize: "1.6rem", cursor: "pointer" }}></i>

                    <i class="fa-sharp fa-solid fa-paper-plane" style={{ fontSize: "1.6rem", cursor: "pointer" }}></i>
                  </div>
                  <div className="text-right">
                    <i class="fa-regular fa-bookmark" style={{ fontSize: "1.6rem", cursor: "pointer" }}></i>
                  </div>
                </div>
              </div>
              <div className="comment pt-3 text-center" style={{ fontFamily: "unset" }}>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="card-text hashtag"> #nora #love #insta #clone #nora #love #insta #clone #nora #love #insta #clone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
