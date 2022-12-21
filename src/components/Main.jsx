import React from 'react'
import TopFeed from './TopFeed'
import './main.css'
import CreatePost from './CreatePost'
import Post from './Post'
function Main(props) {
  return (
    <div className='offset-3 col-6 mains'>
      {(props.name==="home")?<TopFeed/>:""}
      <CreatePost/>
      <Post/>
    </div>
  )
}

export default Main