import React from 'react';
import './sidebar.css'
import Acount from'./acount.jpg'
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const sideBtn = [
    {
      name: "Friends",
      icon: "bi bi-people-fill text-white"
    },
    {
      name: "Most recent",
      icon: "bi bi-list-check text-white"
    },
    {
      name: "Groups",
      icon: "bi bi-people text-white"
    },
    {
      name: "Marketplace",
      icon: "bi bi-shop text-white"
    },
    {
      name: "Watch",
      icon: "bi bi-play-btn-fill text-white"
    },
    {
      name: "Memories",
      icon: "bi bi-clock-history  text-white"
    },
    {
      name: "Saved",
      icon: "bi bi-save-fill text-white"
    },
  ];
  return (
    <div className='col-2 sidebar '>
     <Link className='p-link' to="/profile"><div className="user btns mt-4 ml-4"><img className='acount '  src={Acount} alt="user"/><span className='ml-2'>Ajay kumar</span></div></Link>
      {sideBtn.map((btns)=>(
      <div className="btns mt-3 ml-4">
        <i className={btns.icon}></i><span className='ml-3'>{btns.name}</span>
        
      </div>
      ))}
      <button type="button" className='show-more mt-4 ml-3 text-white'><i class="bi bi-arrow-bar-down "></i><span className='ml-2'>Show more</span></button>
      <hr className='line'/>
    </div>
    
  )
}

export default Sidebar