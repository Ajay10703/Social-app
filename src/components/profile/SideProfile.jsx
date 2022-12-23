import React from 'react'
import Intro from './Intro'
import PhotosCard from './PhotosCard'
const SideProfile = () => {
  return (
    <div className='col-5 ' id="side-profile">
     <Intro/>
     <PhotosCard heading="Photos"/>
     <PhotosCard heading="Friends" friend="1872 friends"/>
      </div>
  )
}

export default SideProfile