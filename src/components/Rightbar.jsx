import React from 'react';
import './right-bar.css'

const Rightbar = () => {
  const rightside = [
{url:require("./assets/1.png"),
  name:"Rohit kumar"
},
{url:require("./assets/2.jpg"),
  name:"Sourabh kumar"
},
{url:require("./assets/3.jpg"),
  name:"Prem kumar chandra"
},
{url:require("./assets/5.jpg"),
  name:"Deepak raj"
},
{url:require("./assets/6.jpg"),
  name:"Amar prasad"
},
{url:require("./assets/7.jpg"),
  name:"Anurag singh"
},
{url:require("./assets/8.png"),
  name:"Rahul kumar"
},
{url:require("./assets/9.jpg"),
  name:"Sonu kumar"
},
{url:require("./assets/5.jpg"),
  name:"Rohit kumar"
},
{url:require("./assets/7.jpg"),
  name:"Bunty raj"
},
{url:require("./assets/1.png"),
  name:"Rohit kumar"
},
{url:require("./assets/2.jpg"),
  name:"Sourabh kumar"
},
{url:require("./assets/3.jpg"),
  name:"Prem kumar chandra"
},
{url:require("./assets/5.jpg"),
  name:"Deepak raj"
},
{url:require("./assets/6.jpg"),
  name:"Amar prasad"
},
{url:require("./assets/7.jpg"),
  name:"Anurag singh"
},
{url:require("./assets/8.png"),
  name:"Rahul kumar"
},
{url:require("./assets/9.jpg"),
  name:"Sonu kumar"
},
{url:require("./assets/5.jpg"),
  name:"Rohit kumar"
},
{url:require("./assets/7.jpg"),
  name:"Bunty raj"
}
  ];
  return (
    
    <div className='offset-9 col-3 contact-section sidebar'>
      <div className="contact text-white-50 d-flex mt-3">
        <span className=''>Contacts</span><div className="icons ml-auto">
        <i class="bi  bi-camera-video-fill mx-2 "></i>
        <i className="bi bi-search mx-2"></i>
        <i class="bi bi-three-dots mx-2"></i>
        </div>
      </div>
      {rightside.map((rt)=>(
      <div className="btns mt-3 ml-4">
        <img className='fb-img' src={rt.url} alt="" /><span className='ml-3'>{rt.name}</span>
      </div>
      ))}
    </div>
  )
}

export default Rightbar