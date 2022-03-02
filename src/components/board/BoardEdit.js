import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BoardEdit() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [newText, setNewText] = useState('');
  const [post, setPost] = useState({ });

  useEffect(() => {
    axios.get(`/api/post/${id}`)
    .then(Response =>{
      setPost(Response.data)})
  },[id]);

  const onSubmit = (event) =>{    
    axios.put(`/api/edit/${id}`,{
      id :id,
      text : newText   
    }).catch((e) => {
      console.log(e)
    })
    .then(
      console.log(newText),
      navigate("/")
    )    
  }  
  
  const delSubmit = () =>{
    if(window.confirm("삭제하시겠습니까?")){
      axios.delete(`/api/del/${id}`)
        .then(alert("삭제되었습니다"))
        .then(navigate("/"));
    }
  }
  return ( 
    
    <div className="board_wrap">
      <form onSubmit={onSubmit}>
      <div className="board_title">
        <strong>Q & A</strong>
        <p>문의글 게시판</p>
      </div>
      <div className="board_list_wrap">
        <div className="board_view">
          <div className="title">
          
          <dd>{post.title}</dd>
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
              <dt>작성일</dt>
              <dd>{post.createTime}</dd>
            </dl>
            <dl>
              <dt>조회</dt>
              <dd>{post.count}</dd>
            </dl>
          </div>
          <div className="cont">
          <textarea value={newText} onChange={({target : {value}}) => setNewText(value)} placeholder={post.text}></textarea>
          </div>
        </div>
        <div className="bt_wrap">
          <button type='submit' className="on">확인</button>
          <button onClick={delSubmit}>삭제</button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default BoardEdit;