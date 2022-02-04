import "./styles.css";
import React,{useState,useEffect} from "react";
import logo from "./logo.png";
import profile from "./profilePics.png";
import userImage from "./userProfile.png"
import Nav from "./component/nav.jsx";
import Profile from "./component/profile.jsx";
import Play from "./component/videos.jsx";
export default function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("https://mocki.io/v1/c6d55836-5e31-4f14-a4a0-d331c1d72d50").then((result)=>{
      result.json().then((resp)=>{
        // console.log(resp);
        setData(resp);
      })
    })
  },[])
  return (
    <div className="App">
     <Nav Logo={logo}
     profilePic={userImage}/>
     <Profile profilePic={profile}/>
     <Play content={data}/>
    </div>
  );
}
