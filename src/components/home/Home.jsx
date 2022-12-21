
import Sidebar from "../Sidebar";
import Mains from "../Main";
import Rightbar from "../Rightbar";
const Home = () => {
  return (<div className="row background">
    
    <Sidebar/>
    <Mains name="home"/>
    <Rightbar/>
    </div>
  )
}

export default Home;