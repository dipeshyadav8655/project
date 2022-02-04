import React from "react";

const Profile=(props)=>{
  return(
    <>
    <div className="profileContainer">
    <div className="profileImage">
    <img src={props.profilePic} alt="CompanyProfile"/>
    </div>
    <div className="companyDetails">
    <div className="companyName">
    <h1>Dipesh Rajesh Yadav</h1>
    </div>
    <div className="introdution">
    <p>Socialboat as subject Assignment
The purpose of this assignment is to test your ability to understand your React fundamentals & ability to write clean code.
Imagine that you are a fitness influencer in addition to being a star programmer. You have a bunch of videos that you have made. Now, you want to monetize this content by launching your website. Your aim is to build a website with the following features:. Profile page
- The profile page should have a basic overview of your profile. Perhaps a picture, your name, a line about you and your social media links.
- In addition to the above details, it should also show a list of videos that you have created.

2. Header
- The header should be divided into 3 parts:
1. The logo of the website - No action required
2. Search bar
- The search bar should provide search functionality for all the videos.
- It should show search results in the drop down itself. Search should happen by calling the given API
- Search should happen on every keystroke
3. User name and profile picture. Clicking on the user’s name should show a dropdown menu with 2 options:
- Edit Profile: Clicking on edit profile should take you to a form that lets you edit your name, picture, description and your social media links. Any changes made via this form should reflect in the profile page and should also make a call to the backend.
- Log out - This can be a dummy item in the list with no functionality</p>
    </div>
    </div>
    </div>
    </>
  )
}
export default Profile;