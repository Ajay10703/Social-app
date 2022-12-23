import React, { useState } from 'react'
import './Post.css'
import Acount from './acount.jpg'

const Posts = ({postdt}) => {

 
  const[like,setLike]=useState(postdt.likeCount)
  const[isLiked,setIsLiked]=useState(false)
  const likeHandler=()=>{
    setLike(isLiked? like-1 : like+1 )
    setIsLiked(!isLiked)
  }
  return (
    
      <div className="post pb-3">
        <div className="post-head row p-2">
          <div className="left col-6"><img className='fb-img  img-fluid' src={postdt.url} alt="" />
            <span className='ml-1 post-sender'>{postdt.name}</span>
            <span className="time ml-2 text-white-50">{postdt.time} ago</span>
          </div>
          <div className="right col-6 d-flex">
            <i className="bi bi-three-dots  ml-auto"></i>
            <i className="bi bi-x ml-2"></i>
          </div>
        </div>
        <div className="discription px-2 ">{postdt.dist}</div>
        <img src={postdt.image} className="post-img  col-12 my-2 " alt="" />
        <div className="pt-bottom  px-2">

          <div className="reaction  d-flex"><i className="bi bi-hand-thumbs-up-fill bg-primary "></i>
            {(postdt.heart === "1") ? <i className="bi bi-heart-fill bg-danger"></i> : ""
            }
            <span className="like-count text-white-50 mx-1">{postdt.like} and {like} others</span>
            <span className="ml-auto comment text-white-50">{postdt.comment} comments</span>
          </div>
          <hr className="line" />
          <div className="reaction-input d-flex">
            <button type="button" onClick={likeHandler} className="btn-holder col-6 ">
              <i className="bi bi-hand-thumbs-up   "></i><span className='  mx-2'>Like</span>
            </button>
            <button type="button" className="btn-holder col-6">
              <i className="bi bi-chat-left  "></i><span className='  mx-2'>Comment</span>

            </button>
          </div>

          <hr className="line" />
          <button className="btn-holder"><span className=' px-3'>View {postdt.comment - 1} previous comments</span></button>

          <div className="comment-person d-flex pt-2 px-4">

            <img className='fb-img' src={postdt.cmtUrl} alt="" /><div className="comment-holder mx-1 p-2">

              <div >
                <span >{postdt.cmtUser}</span>
                <div className="cmt ">{postdt.cmt}</div></div>

            </div>
          </div>
          <div className="d-flex mx-5 cmt">
            <button type="button" className="btn-holder  ">
              <span className='  ml-4'>Like</span>
            </button>
            <button type="button" className="btn-holder">
              <span className='  mx-2'>Comment</span>

            </button>
            <span className="cmt text-white-50">{postdt.time}</span>
          </div>
          <div className="comment-bottom">

            <img className='acount ' src={Acount} alt="user" />
            <input type="text" placeholder="Write a comment..." className="create-comment text-white " />


          </div>
        </div>
      

    </div>
  )
}

export default Posts