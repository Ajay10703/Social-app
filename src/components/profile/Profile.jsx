import React from 'react'
import Main from '../Main'
import './Profile.css'
import Acount from '../acount.jpg'
import Fb from '../fb.jpg'
const Profile = () => {
  const Menu=[
    {Name:"Posts"},
    {Name:"About"},
    {Name:"Friends"},
    {Name:"Photos"},
    {Name:"Videos"},
    {Name:"Reels"},
    {Name:"More"}
    
    
  ]
  return (
    <div className="background">

      <div className="top-profile ">
        <div className="container">
          <div className="cover ">
          </div>
          <div className="profile-items row">
            <div className="col-8 d-flex"><div>
              <img src={Acount} className="profile-pic" alt="" />
            </div>
              <div>
                <h2 className='mt-3 '>Ajay Kumar</h2>
                <span className='text-white-50'>1.8K friends</span>
                <div className="fb-icons">
                  <img className='fb-img' src={Fb} alt="" />
                  <img className='fb-img' src={Fb} alt="" />
                  <img className='fb-img' src={Fb} alt="" />
                  <img className='fb-img' src={Fb} alt="" />
                  <img className='fb-img' src={Fb} alt="" />
                </div>
              </div>
            </div>
            <div className="col-4 ">
              <div className="p-btns"><button className="btn  btn-primary "><i className="bi bi-plus-circle-fill mr-1"></i>Add to story</button>
              <button className="btn mx-2 btn-outline-light "><i className="bi bi-plus-circle-fill mr-1"></i>Add to story</button></div></div>
          </div>
          <hr className="line" />
          <div className="profile-menu d-flex mx-3">
          {Menu.map((bt)=>(
            <button type="button" className="btn-holder menu-btn  ">{bt.Name}
            </button>
          ))}
          <i className="bi bi-three-dots  ml-auto"></i>
          </div>
        </div>
      </div>
      <div className="bottom-profile">
        <div className="side-profile"></div>
        <div className="profile-posts">
          <Main />
        </div>
      </div>

    </div>
  )
}

export default Profile