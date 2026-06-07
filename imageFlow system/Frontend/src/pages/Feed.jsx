import React, { useState,useEffect } from "react";
import axios from 'axios'

const Feed = () => {
  const [post, setPost] = useState([
    {
      _id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1776182479396-bafe0cd5503c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "This is a caption for the image",
    },
  ]);

  useEffect(()=>{
    axios.get('http://localhost:3000/posts')
    .then((res)=>{
      setPost(res.data.posts);
    })
  },[])



  return (
    <div className="w-full h-screen bg-gray-200">
      <h1 className="font-bold text-3xl mt-2 flex align-center justify-center">
        feed page
      </h1>
      <div>
        {post.map((item) => {
          return (
            <div key={item._id}>
              <img
                className="w-full mt-2 p-4 rounded bg-white flex align-center justify-center"
                src={item.image}
                alt="post image"
              />
              <p className="text-3xl font-bold">{item.caption}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
