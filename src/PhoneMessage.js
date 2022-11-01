import React from "react";
import App from "./App.css"
function PhoneMessage(){
  return(
    <>
    <div className="col-12 shadow-lg pt-3">
<div className="d-flex justify-content-between col-12">
<div className="d-flex justify-content-around col-6">
<img className="shadow bg-light message-profile" src="https://th.bing.com/th/id/OIP.usyIo3PSmABci5aaOZO0egHaLG?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
<li className="pt-2 text-dark"  style={{listStyle:"none",fontWeight:"600"}}>Rahul Sharma</li>
</div>

<div className="d-inline-flex col-4 pt-3 justify-content-around">
<i class="fa-solid fa-phone"></i>
<i class="fa-solid fa-video"></i>
<i class="fa-solid fa-circle-info"></i>
</div>

</div>
<hr/>
<div className="d-inline-flex col-12 pb-3 fixed message-input" >
<img className="shadow bg-light mt-3 " style={{ padding: "0.1rem", borderRadius: "50%", width: "1.5rem", height: "1.5rem",marginRight:"0.6rem" }} src="https://th.bing.com/th/id/OIP.usyIo3PSmABci5aaOZO0egHaLG?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
< div style={{border:"1.2px solid lightgray",borderRadius:"3rem",width:"26%",backgroundColor:"lightgray"}}  >
<div className="text-center ">
<p className="text-dark pt-1" style={{fontSize:"0.9rem", fontWeight:"600"}}>How r u Bro?</p>
</div>
</div>

</div>
< div style={{border:"1.2px solid lightgray",borderRadius:"3rem",width:"19%",backgroundColor:"lightgray",marginLeft:"2.3rem", marginBottom:"1rem"}}  >
<div className="text-center ">
<p className="text-dark pt-1" style={{fontSize:"1rem", fontWeight:"600"}}>Typing..</p>
</div>
</div>
<div style={{border:"1.3px solid gray",borderRadius:"3rem"}} >
<div  className="d-inline-flex col-12 justify-content-between">
<div className="d-inline-flex col-4 justify-content-around">
<i class="fa-regular fa-face-smile fa-lg pt-3"></i>
<input type="text" className="form-control w-75" placeholder="Message.." style={{border:"none"}} />
</div>
<div className="d-inline-flex col-2 justify-content-around pt-3">
<i class="fa-solid fa-image fa-lg"></i>
<i class="fa-regular fa-heart fa-lg"></i>
</div>
</div>
</div>
</div>
    </>
  )
}

export default PhoneMessage;