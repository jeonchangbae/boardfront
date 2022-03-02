import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import '../Board.css';
import { Link } from 'react-router-dom';

function Content({postId, refresh, setRefresh}) {
  const url = "http://localhost:8080/api/post/";

  const [post, setPost] = useState({});

  useEffect(()=>{
    axios.get(url+`${postId}`)
    .then(Response=>setPost(Response.data)).then(setRefresh(!refresh))
    .catch(console.error());
  },[url,postId,refresh,setRefresh])

  return ( 
    
    <div className="board_content">
        <div className="num" >{post.id}</div>        
          <div className="title"><Link to ={`/post/${post.id}`}>{post.title}</Link></div>
          <div className="author">{post.author}</div>
          <div className="date"><Moment format='YY-MM-DD'>{post.createDate}</Moment></div>
          <div className="count">{post.count}</div>        
        
    </div>
    
      
    
  );
}

export default Content;