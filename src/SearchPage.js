import React,{useState} from "react";

function SearchPage(){
  const [showsearch, setshowsearch] = useState(false);
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
  return(
    <>
      <form className="form-inline">
              {/* &#xF002; */}
              <input className="form-control search1  header-menu-item" onFocus={search} onBlur={search} style={{ borderRadius: "10px",  }} type="search" placeholder=" Search" aria-label="Search" />
               <div className="container search-popup shadow-lg" id="list-example" onClick={searchModal}>
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

         
                </div>
            </form>
    </>
  )
}

export default SearchPage;