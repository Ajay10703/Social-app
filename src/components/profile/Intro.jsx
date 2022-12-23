import React from 'react'

const Intro = () => {
  return (
    <div className="intro p-2 my-3">
    <span  className='mt-2 card-h mx-3'>Intro</span>
    <div className="info">
      <div className="info-holder m-3 text-white-50">
      <i className="bi bi-house-door-fill mr-1"></i><span >Live in <strong>Dhanbad</strong></span>
      </div>
      <div className="info-holder m-3 text-white-50">
      <i className="bi bi-geo-alt-fill mr-1"></i>
      <span >From <strong>Purulia</strong></span>
      </div>
      <div className="info-holder m-3 text-white-50">
      <i className="bi bi-heart-fill mr-1"></i><span > Single</span>
      </div>
      <div className="info-holder m-3 text-white-50">
      <i className="bi bi-clock-fill mr-1"></i><span>joined on May 2017</span>
      </div>
    </div>
    </div>
  )
}

export default Intro