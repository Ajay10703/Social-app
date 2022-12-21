import React from 'react'
import Acount from './acount.jpg'
const CreatePost = () => {
  return (
    <div className='create-post p-2'>
    <div className="top-section">
    <img className='acount '  src={Acount} alt="user"/>
    <input type="text" placeholder="Whats on your mind!"  className="create text-white "/>
    </div>
    <hr  className='line'/>
    <div className="bottom-section">
    <div className="btn-holder text-white"><i class="bi   bi-camera-reels-fill mr-1  text-danger"></i>Stories</div>
      <div className="btn-holder text-white "><i class="bi  bi-images text-success   mr-1"></i>Photo/video</div>
      <div className="btn-holder text-white "><i class="bi   bi-emoji-smile text-warning  mr-1"></i>Felling/activity</div>
    </div>
    </div>
  )
}

export default CreatePost