import React from 'react'
import './Post.css'
import Fb from './fb.jpg'
import Acount from './acount.jpg'
const Posts = () => {

  const post = [
    {
      name: "Rohit kumar",
      image: require("./ht.jpg"),
      time: "5m",
      dist: "Hey how can i help you in bulding a \"HTML\" website",
      like: "Ravi and 78 others",
      comment: 15,
      cmt: "can i help you",
      cmtUser: "Sourabh kumar",
      heart: "1"
    },
    {
      name: "Sourabh kumar",
      image: require("./cs.jpeg"),
      time: "30m",
      dist: "I can style any html website using \"CSS\"",
      like: "Durgesh and 95 others",
      comment: 18,
      cmt: "nice post",
      cmtUser: "Rohit kumar",
      heart: "1"
    },
    {
      name: "Prem kumar chandra",
      image: require("./js.png"),
      time: "1h",
      dist: "\"Javascript\" is a magical language for every web developer",
      like: "Sourabh and 173 others",
      comment: 37,
      cmt: "can i help you",
      cmtUser: "Ravi kumar",
      heart: "1"
    },
    {
      name: "Deepak raj",
      image: require("./re.png"),
      time: "6h",
      dist: " \"React\" is a frontend librery of javascript",
      like: "Rohit and 165 others",
      comment: 31,
      cmt: "nice post",
      cmtUser: "Ayush kumar",
      heart: "1"
    },
    {
      name: "Amar prasad",
      image: require("./nd.png"),
      like: "Yuvraj and 203 others",
      comment: 27,
      cmt: "it is js runtime environment",
      cmtUser: "Ankit kumar",
      time: "1 day"
    },
    {
      name: "Anurag singh",
      image: require("./ex.png"),
      time: "3 day",
      dist: "\"Express\" is a beckend framework of javascript",
      like: "Harsh and 124 others",
      comment: 14,
      cmt: "can i help you",
      cmtUser: "Ravi kumar",
      heart: "1"

    },
    {
      name: "Rahul kumar",
      image: require("./mo.png"),
      like: "Bikram and 96 others",
      comment: 11,
      cmt: "Ammazing",
      cmtUser: "Mithlesh kumar",
      time: "1 week"
    }


  ];
  return (
    <div className='posts  pb-2'>
      {post.map((pt) => (<div className="post pb-2">
        <div className="post-head row p-2">
          <div className="left col-6"><img className='fb-img  img-fluid' src={Fb} alt="" />
            <span className='ml-1 post-sender'>{pt.name}</span>
            <span className="time ml-2 text-white-50">{pt.time} ago</span>
          </div>
          <div className="right col-6 d-flex">
            <i className="bi bi-three-dots  ml-auto"></i>
            <i className="bi bi-x ml-2"></i>
          </div>
        </div>
        <div className="discription px-2 ">{pt.dist}</div>
        <img src={pt.image} className="post-img  col-12 my-2 " alt="" />
        <div className="pt-bottom  px-2">

          <div className="reaction  d-flex"><i className="bi bi-hand-thumbs-up-fill bg-primary "></i>
            {(pt.heart === "1") ? <i className="bi bi-heart-fill bg-danger"></i> : ""
            }
            <span className="like-count text-white-50 mx-1">{pt.like}</span>
            <span className="ml-auto comment text-white-50">{pt.comment} comments</span>
          </div>
          <hr className="line" />
          <div className="reaction-input d-flex">
            <button type="button" className="btn-holder col-6 ">
              <i className="bi bi-hand-thumbs-up   "></i><span className='  mx-2'>Like</span>
            </button>
            <button type="button" className="btn-holder col-6">
              <i className="bi bi-chat-left  "></i><span className='  mx-2'>Comment</span>

            </button>
          </div>

          <hr className="line" />
          <button className="btn-holder"><span className=' px-3'>View {pt.comment - 1} previous comments</span></button>

          <div className="comment-person d-flex pt-2 px-4">

            <img className='fb-img' src={Fb} alt="" /><div className="comment-holder mx-1 p-2">

              <div >
                <span >{pt.cmtUser}</span>
                <div className="cmt ">{pt.cmt}</div></div>

            </div>
          </div>
          <div className="d-flex mx-5 cmt">
            <button type="button" className="btn-holder  ">
              <span className='  ml-4'>Like</span>
            </button>
            <button type="button" className="btn-holder">
              <span className='  mx-2'>Comment</span>

            </button>
            <span className="cmt text-white-50">{pt.time}</span>
          </div>
          <div className="comment-bottom">

            <img className='acount ' src={Acount} alt="user" />
            <input type="text" placeholder="Write a comment..." className="create-comment text-white " />


          </div>
        </div>
      </div>))}

    </div>
  )
}

export default Posts