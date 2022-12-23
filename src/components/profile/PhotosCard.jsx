import React from 'react'
import {pics} from '../Data.js'
import {friends} from '../Data.js'
const PhotosCard = (props) => {
  
  
  return (
    <div className="photos p-2 my-3">
      <span className='mt-2 card-h mx-3'>{props.heading}</span>

      <span className='mx-3 d-block'>{props.friend}</span>
      <div className=" px-2  row">
        {(props.heading==="Friends")?<>
        {friends.map((fd) => (<div className="pic-holder col-4">
          <img src={fd.url} alt="" />
          <span className='mx-2'>{fd.name}</span>
        </div>))}</>:<>{pics.map((pic) => (<div className="pic-holder col-4">
        <img src={pic.url} alt="" />
      </div>))}</>}

      </div>
    </div>
  )
}

export default PhotosCard