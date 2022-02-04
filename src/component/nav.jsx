import React from "react";

const Nav=(props)=>{
  return(
    <>
     <nav>
      <div className="logo">
      <img src={props.Logo} alt="logo" id="logo" className="image"/>
      </div>
      <div className="searchBar">
      Search<input type="text" className="input" id="search"/>  
      </div>
      <div className="user">
      <div className="userName">
      <h3>User Name</h3>
      </div>
      <div className="userDetails">
      <img src={props.profilePic} alt="userImage" className="userPic" id="userPic"/>
      </div>
      <div className="option">
      <button>...</button>
      </div>
      </div>
      </nav>
      {/* <h2>hello</h2> */}
    </>
  )
}
export default Nav;