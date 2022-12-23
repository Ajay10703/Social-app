import './Topbar.css'
import Acount from'./acount.jpg'
import { Link } from 'react-router-dom'
const Topbar = (props) => {
  return (
    <div className="top-bar-container sticky-top py-2 row">
       <div className="left-bar d-flex col-3">
       <Link to="/" ><i className="bi bi-facebook mx-2 text-primary "></i></Link>
       <div className="inputs mx-2">
       <i className="bi bi-search text-white-50 mr-1 "></i>
       <input type="text" placeholder="Search X-Shadowbook"  className="search text-white "/>
       </div>
       </div>
       <div className="center-bar col-6 d-flex">
        <div className=" mx-auto">
        <Link to="/"><span>{(props.name==="home")?<i className="bi bi-house-fill text-primary border-primary border-bottom px-5 pb-2"></i>:<i className="bi bi-house-fill text-white  px-5 pb-2"></i>}</span></Link>
        <span><i className="bi bi-play-btn text-white px-5"></i></span>
        <span><i className="bi bi-shop text-white px-5"></i></span>
        <span><i className="bi bi-people-fill text-white px-5"></i></span>
        <span><i className="bi bi-joystick text-white px-5"></i></span>
       
        </div>
       </div>
       <div className="right-bar col-3 ">
       <i className="bi bi-list text-white  mx-2"></i>
        <i className="bi bi-chat-left-dots  text-white mx-2"></i>
        <i className="bi bi-bell text-white   mx-2"></i>
        <Link to="/profile"><img className='acount mx-2'  src={Acount} alt="" /></Link>
       </div>
    </div>
  )
}

export default Topbar