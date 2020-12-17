/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['리액트 이야기1', '리액트 이야기2', '리액트 이야기3']);
  let [content, setContent] = useState(['12월 12일 발행', '12월 13일 발행', '12월 14일 발행',]);
  let [addLike, setAddLike] = useState(0);
  let [showModal, setShowModal] = useState(false);
  let [clickedNum, setClickedNum] = useState(0);
  let [input, setInput] = useState('');
  // let posts = '리액트 이야기1';

  // function changeTitle() {
  //   var newArray = [...title]; //deep copy, var newArray = title은 '공유'의 의미 
  //   newArray[0] = '리액트 공부하기1';
  //   setTitle(newArray);
  // }

  function savePost() {
    var newArray = [...title];
    newArray.unshift(input);
    setTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <div>
        <button onClick={ changeTitle }>수정</button>
      </div> */}

      {
        title.map((title_, index)=>{
          return(  
            <div className="list" key={`id`+index}>
              <strong className="title" onClick={()=>{setClickedNum(index)}}>
                { title_ }
                <span className="like" onClick={(e) => { setAddLike(addLike + 1) }}>❤️</span>
                <em>{addLike}</em>
              </strong>
              <p>{ content[0] }</p>
              <hr/>
            </div>
          )
        })
      }

      <div className="publish">
        {/* {input} */}
        <input onChange={(e)=>{ setInput(e.target.value) }} />
        <button onClick={savePost} >저장</button>
      </div>

      <button onClick = {()=>{setShowModal(!showModal)}}>
        modal button
      </button>

      {
        showModal === true ? <Modal title={title} clickedNum={clickedNum} /> : null
      }

    </div>
  );
}

function Modal(props) {
  return(
    <div className="modal">
      <strong>{props.title[props.clickedNum]}</strong>
      <div>날짜</div>
      <p>상세 내용</p>
    </div>
  )
}

export default App;