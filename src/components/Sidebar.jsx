import React from 'react';
import './sidebar.css'
import Acount from './acount.jpg'
import { SideBtn2 } from './Data'
import { SideBtn } from './Data'
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const showmore = () => {
    {
      if (document.querySelector("#show-btn").textContent === "Show more") {
        const va = document.querySelector("#show-btn")
        va.textContent = "Show less";
        const bt = document.querySelector("#extra-btns");
        bt.style.display = "block";
      }
      else {
        const va = document.querySelector("#show-btn")
        va.textContent = "Show more";
        const bt = document.querySelector("#extra-btns");
        bt.style.display = "none";
      }
    }

  }
  return (
    <div className='col-3 sidebar '>
      <Link className='p-link' to="/profile"><div className="user btns mt-4 ml-4"><img className='acount ' src={Acount} alt="user" /><span className='ml-2'>Ajay kumar</span></div></Link>
      {SideBtn.map((btns) => (
        <div className="btns mt-3 ml-4">
          <i className={btns.icon}></i><span className='ml-3'>{btns.name}</span>

        </div>
      ))}
      <div id="extra-btns">
        {SideBtn2.map((btns2) => (
          <div className="btns mt-3 ml-4">
            <i className={btns2.icon}></i><span className='ml-3'>{btns2.name}</span>

          </div>
        ))}
      </div>
      <button type="button" onClick={showmore} className='show-more mt-4 ml-3 text-white'><i class="bi bi-arrow-bar-down "></i><span className='ml-2 ' id='show-btn'>Show more</span></button>
      <hr className='line' />
    </div>

  )
}

export default Sidebar