import React from 'react'
import Topbar from "../Topbar";
import Main from '../Main'
import './Profile.css'
import TopProfile from './TopProfile'
import SideProfile from './SideProfile'
const Profile = () => {

  return (<>
   <Topbar />
    <div className="background">
      <TopProfile />
      <div className="bottom-profile d-flex container"> 
          <SideProfile/>      
          <Main />     
      </div>

    </div>
    </>
  )
}

export default Profile