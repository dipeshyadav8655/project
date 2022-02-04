import React from "react";
// import Something from "./Coffee_Girl.mp4";
const Videos=(props)=>{
  // let link="https://www.youtube.com/embed/UFdv0DDVGrs";
  let parts=props.content;
  return(
    <>
  <div className="videoContainer">
  {
    parts.map((item,index)=>{
      return(
  <>
  <div className="videoCard" key={index}>
  <iframe src={item.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen></iframe>
  <h4>{item.title}</h4>
  </div>
  </>)
    })
  }
  </div>
  </>
  )
}
export default Videos;