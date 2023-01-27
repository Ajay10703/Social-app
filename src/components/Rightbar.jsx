import React from 'react';
import './right-bar.css'
import {Rightside} from './Data'
const Rightbar = () => {

  return (
    
    <div className='offset-9 col-3 contact-section sidebar'>
      <div className="contact text-white-50 d-flex mt-3">
        <span className=''>Contacts</span><div className="icons ml-auto">
        <i class="bi  bi-camera-video-fill mx-2 "></i>
        <i className="bi bi-search mx-2"></i>
        <i class="bi bi-three-dots mx-2"></i>
        </div>
      </div>
      {Rightside.map((rt)=>(
      <div className="btns mt-3 ml-4">
        <img className='fb-img' src={rt.url} alt="" /><span className='ml-3'>{rt.name}</span>
      </div>
      ))}
    </div>
  )
}

export default Rightbar