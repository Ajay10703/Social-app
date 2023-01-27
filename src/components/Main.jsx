import React from 'react'
import TopFeed from './TopFeed'
import './main.css'
import CreatePost from './CreatePost'
import Post from './Post'
import { postData } from './Data'
function Main(props) {
  return (<div className='feed' >
    {(props.name==="home")?<div className='offset-2 col-8  mains'>
  <TopFeed/>
  <CreatePost/>
  {postData.map((p)=>(<Post key={p.id} postdt={p}/>))}
</div>:<div className='  mains'>
 
  <CreatePost/>
  {postData.map((p)=>(<Post key={p.id} postdt={p}/>))}
  </div>}
  </div> 
  )
}

export default Main