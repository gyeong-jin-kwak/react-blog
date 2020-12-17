/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['리액트 이야기1', '리액트 이야기2', '리액트 이야기3']);
  let [content, setContent] = useState(['12월 12일 발행', '12월 13일 발행', '12월 14일 발행',]);
  let [addLike, setaddLike] = useState(1);
  // let posts = '리액트 이야기1';

  function changeTitle() {
    var newArray = [...title]; //deep copy, var newArray = title은 '공유'의 의미 
    newArray[0] = '리액트 공부하기1';
    setTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div>
        <button onClick={ changeTitle }>수정</button>
      </div>
      <div className="list">
        <strong>{ title[0] } <span className="like" onClick={ () => { setaddLike(addLike + 1) } }>❤️</span><em>{addLike}</em></strong>
        <p>{ content[0] }</p>
        <hr/>
      </div>
      <div className="list">
        <strong>{ title[1] }</strong>
        <p>{ content[1] }</p>
        <hr/>
      </div>
      <div className="list">
        <strong>{ title[2] }</strong>
        <p>{ content[2] }</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
