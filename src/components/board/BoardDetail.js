import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import {useNavigate, useParams } from 'react-router-dom';
import './Board.css';

function BoardDetail() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [post, setPost] = useState({ });

  useEffect(() => {
    axios.get(`/api/post/${id}`)
    .then(Response =>{
      setPost(Response.data)})
            
  },[id]);

  const handleCount = () =>{
    axios.put(`/api/count/${id}`,{
    id : id,
    count : Number(post.count) })    
    .then(console.log(post.count),
      navigate('/'))    
  }

  const handlePw =() =>{
    const pwcheck = prompt("비밀번호 입력","****")
    if(pwcheck === post.password){
      alert("일치합니다")
      navigate(`/edit/${post.id}`);
    } else alert("틀립니다")
  }

  return ( 
    <div className="board_wrap">
      <div className="board_title">
        <strong>Q & A</strong>
        <p>문의글 게시판</p>
      </div>
      <div className="board_list_wrap">
        <div className="board_view">
          <div className="title">
          {post.title}
          </div>
          <div className="info">
            <dl>
              <dt>번호</dt>
              <dd>{post.id}</dd>
            </dl>
            <dl>
              <dt>글쓴이</dt>
              <dd>{post.author}</dd>
            </dl>
            <dl>
              <dt>작성시간</dt>
              <dd><Moment format='YY-MM-DD'>{post.createDate}</Moment></dd>
            </dl>
            <dl>
              <dt>조회</dt>
              <dd> {post.count++}</dd>
            </dl>
          </div>
          <div className="cont">
            {post.text}
          </div>
        </div>
        <div className="bt_wrap">
          <button className="on" onClick={handleCount}>목록</button>
          <button onClick={handlePw} >수정</button>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;
