import Topbar from "../Topbar";
import Sidebar from "../Sidebar";
import Mains from "../Main";
import Rightbar from "../Rightbar";
const Home = () => {
  return (<>
  <Topbar name="home" />
  <div className="row background">
    
    <Sidebar/>
    <div className="container">
    <Mains name="home" />
    </div>
    <Rightbar/>
    </div>
    </>
  )
}

export default Home;