import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Board.css';
import Content from './ui/Content';

function Board() {

  const [post, setPost] = useState([ ]);
  const [refresh, setRefresh] = useState(false);  
  
  useEffect(() => {
    axios.get("http://localhost:8080/api/getAll")
    .then(Response =>{
      setPost(Response.data)})
      .then(!setRefresh)
      .then(console.log('rendering'));
    },[refresh]);



  return ( 
    <div className="board_wrap">
      <div className="board_title">
        <strong>공지사항</strong>
        <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
      </div>
      <div className="board_list_wrap">
        <div className="board_list">
          <div className="top">
            <div className="num">번호</div>
            <div className="title">제목</div>
            <div className="author">글쓴이</div>
            <div className="date">작성일</div>
            <div className="count">조회</div>
          </div>
          {
            post.map(item=> (              
              <div key={item.id} >               
                <Content postId={item.id} refresh={refresh} />               
              </div>
            ))
          }
          </div>
          <div className="board_page">
        <p className="bt first"> 처음 </p>
        <p className="bt prev"> 앞 </p>
        <p className="num on">1</p>
        <p className="num">2</p>
        <p className="num">3</p>
        <p className="num">4</p>
        <p className="num">5</p>
        <p className="bt next"> 다음 </p>
        <p className="bt last"> 끝으로 </p>
      </div>
      <div className="bt_wrap">        
        <Link to={'/write'} ><button className='on' > 작성 </button></Link>
        <Link to ={'/'}> <button className='off'>  취소  </button></Link>
      </div>
    </div>
  </div>
  );
}

export default Board;