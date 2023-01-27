 import Home from './components/home/Home';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from "./components/profile/Profile";

function App() {
  return (<div className="App">
    <Router>    
      <Routes>
        <Route path="/" element={<Home/>}/>        
        <Route path="/profile" element={<Profile />}/>       
      <Route path="/login" element={<Login />}/>
      </Routes>
  </Router>
  </div> 
  );
}

export default App;
