import React from "react";
import { Link } from "react-router-dom";
function Message(){
  return(
    <>
    <div className="container message-container">
    <div className="row pt-5 ">
     <div className="col-lg-4 message-row shadow " style={{marginRight:"1rem"}}>
     <div className="d-flex justify-content-between col-10">
     <p><u>PRIMARY</u></p>
     <p>GENERAL</p>
     <p className="text-info">Requests(1)</p>
   
     </div>
     <hr/>
     <div className="d-inline-flex col-10 justify-content-between" >
          <Link className="text-decoration-none" to={"/texts"}>
          <div className="d-inline-flex col-7 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://th.bing.com/th/id/OIP.usyIo3PSmABci5aaOZO0egHaLG?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
              <div >
              <li className="pt-1 text-dark" style={{listStyle:"none",fontWeight:"600"}}>Rahul Sharma</li>
              <p className="text-black-50 " style={{fontSize:"0.9rem", fontWeight:"600"}}>How r u Bro?</p>
              </div>
            </div>   
          </Link>        
            
     </div>

     <div className="d-inline-flex col-10 justify-content-between" >
            <div className="d-inline-flex col-7 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://th.bing.com/th/id/OIP.yThw2ZvF2_hNOombEKJDYQHaLH?pid=ImgDet&rs=1" alt="" />
              <div >
              <li className="pt-1 text-dark" style={{listStyle:"none",fontWeight:"600"}}>Ray D'souza</li>
              <p className="text-dark " style={{fontSize:"0.9rem", fontWeight:"600"}}>Hey! hi..hi..hi..</p>
              </div>
            </div>           
            <i class="fa-solid fa-circle fa-xs text-primary pt-3" style={{fontSize:"0.5rem"}}></i>
     </div>

     <div className="d-inline-flex col-10 justify-content-between" >
            <div className="d-inline-flex col-7 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://cdn.acidcow.com/pics/20130114/nice_girls_65.jpg" alt="" />
              <div >
              <li className="pt-1 text-dark" style={{listStyle:"none",fontWeight:"600"}}>Henna Jain</li>
              <p className="text-dark " style={{fontSize:"0.9rem", fontWeight:"600"}}>Hey! Wassup ?</p>
              </div>
            </div>           
            <i class="fa-solid fa-circle fa-xs text-primary pt-3" style={{fontSize:"0.5rem"}}></i>
     </div>

     <div className="d-inline-flex col-10 justify-content-between" >
            <div className="d-inline-flex col-7 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://izismile.com/img/img2/20090430/bonus/8/girl_09.jpg" alt="" />
              <div >
              <li className="pt-1 text-dark" style={{listStyle:"none",fontWeight:"600"}}>Krysti stuart</li>
              <p className="text-dark " style={{fontSize:"0.9rem", fontWeight:"600"}}>🤣🤣🤣</p>
              </div>
            </div>           
            <i class="fa-solid fa-circle fa-xs text-primary pt-3" style={{fontSize:"0.5rem"}}></i>
     </div>

     <div className="d-inline-flex col-10 justify-content-between" >
            <div className="d-inline-flex col-7 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://www.al.com/resizer/4HuBYYMbtwltelaUfgJ_IPho384=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/D6CCQZRJXFCQVGJ3TPDPE2QGGU.jpg" alt="" />
              <div >
              <li className="pt-1 text-dark" style={{listStyle:"none",fontWeight:"600"}}>Suzan Sharma</li>
              <p className="text-dark " style={{fontSize:"0.9rem", fontWeight:"600"}}>Sent you a video</p>
              </div>
            </div>           
            <i class="fa-solid fa-circle fa-xs text-primary pt-3" style={{fontSize:"0.5rem"}}></i>
     </div>

     <div className="d-inline-flex col-10 justify-content-between" >
            <div className="d-inline-flex col-7 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://th.bing.com/th/id/R.efbbde0ae1e75ff8841182298ef34981?rik=c0vI3UKIMiLKPw&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fboy%2fboy-06.jpg&ehk=VHa6rn2V0KP24h%2brcMApT8V9LP2zdFeA0c2F4meKl3M%3d&risl=&pid=ImgRaw&r=0" alt="" />
              <div >
              <li className="pt-1 text-dark" style={{listStyle:"none",fontWeight:"600"}}>Ritik Jha</li>
              <p className="text-dark " style={{fontSize:"0.9rem", fontWeight:"600"}}>3 messages .</p>
              </div>
            </div>           
            <i class="fa-solid fa-circle fa-xs text-primary pt-3" style={{fontSize:"0.5rem"}}></i>
     </div>

     <div className="d-inline-flex col-10 justify-content-between" >
            <div className="d-inline-flex col-7 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://th.bing.com/th/id/OIP.usyIo3PSmABci5aaOZO0egHaLG?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
              <div >
              <li className="pt-1 text-dark" style={{listStyle:"none",fontWeight:"600"}}>Rahul Sharma</li>
              <p className="text-dark " style={{fontSize:"0.9rem", fontWeight:"600"}}>Let's Go. </p>
              </div>
            </div>           
            <i class="fa-solid fa-circle fa-xs text-primary pt-3" style={{fontSize:"0.5rem"}}> </i>
     </div>

     <div className="d-inline-flex col-10 justify-content-between" >
            <div className="d-inline-flex col-7 justify-content-around">
              <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "3rem", height: "3rem" }} src="https://i.pinimg.com/originals/72/fd/8d/72fd8d725d0deb89a6c105ed159f49ee.jpg" alt="" />
              <div >
              <li className="pt-1 text-dark" style={{listStyle:"none",fontWeight:"600"}}>Pratik Survey</li>
              <p className="text-dark " style={{fontSize:"0.9rem", fontWeight:"600"}}>What's the plan.</p>
              </div>
            </div>           
            <i class="fa-solid fa-circle fa-xs text-primary pt-3" style={{fontSize:"0.5rem"}}></i>
     </div>
     </div>
     <div className="col-lg-7 shadow-lg pt-3">
     <div className="d-flex justify-content-between col-12">
     <div className="d-flex justify-content-around col-3">
     <img className="shadow bg-light " style={{ padding: "0.1rem", borderRadius: "50%", width: "2rem", height: "2rem" }} src="https://th.bing.com/th/id/OIP.usyIo3PSmABci5aaOZO0egHaLG?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
     <li className="pt-1 text-dark" style={{listStyle:"none",fontWeight:"600"}}>Rahul Sharma</li>
     </div>
    
   <div className="d-inline-flex col-lg-4 pt-3 justify-content-around">
   <i class="fa-solid fa-phone"></i>
     <i class="fa-solid fa-video"></i>
     <i class="fa-solid fa-circle-info"></i>
   </div>

     </div>
     <hr/>
    <div className="d-inline-flex col-12 pb-3" style={{paddingTop:"27rem",}}>
     <img className="shadow bg-light mt-3 " style={{ padding: "0.1rem", borderRadius: "50%", width: "1.5rem", height: "1.5rem",marginRight:"0.6rem" }} src="https://th.bing.com/th/id/OIP.usyIo3PSmABci5aaOZO0egHaLG?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
< div style={{border:"1.2px solid lightgray",borderRadius:"3rem",width:"20%",backgroundColor:"lightgray"}}  >
<div className="text-center ">
<p className="text-dark pt-1" style={{fontSize:"0.9rem", fontWeight:"600"}}>How r u Bro?</p>
    </div>
</div>

    </div>
    < div style={{border:"1.2px solid lightgray",borderRadius:"3rem",width:"13%",height:"5%",backgroundColor:"lightgray",marginLeft:"2.3rem", marginBottom:"1rem"}}  >
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
    </div>
    </div>
    </>
  )
}

export default Message;