import React,{useState} from 'react';
import './sidebar.css'
import Acount from './acount.jpg'
import { SideBtn } from './Data'
import { Link } from 'react-router-dom';
import Sidebar2 from './Sidebar2'
const Sidebar = () => {

const [show,setshow]=useState("Show more")
const [showed,setshowed]=useState(true)
const [side,setside]=useState("")

  const showmore = () => {

    setshow(showed?"Show less":"Show more");
    setside(showed?<Sidebar2/>:"");
    setshowed(!showed)
  }
  return (
    <div className='col-3 sidebar '>
      <Link className='p-link' to="/profile"><div className="user btns mt-4 ml-4"><img className='acount ' src={Acount} alt="user" /><span className='ml-2'>Ajay kumar</span></div></Link>
      {SideBtn.map((btns) => (
        <div className="btns mt-3 ml-4">
          <i className={btns.icon}></i><span className='ml-3'>{btns.name}</span>

        </div>
      ))}
      {side}
      <button type="button" onClick={showmore} className='show-more mt-4 ml-3 text-white'><i class="bi bi-arrow-bar-down "></i><span className='ml-2 ' id='show-btn'>{show}</span></button>
      <hr className='line' />
    </div>

  )
}

export default Sidebar