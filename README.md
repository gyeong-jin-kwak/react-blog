npm start
# 리액트 쇼핑몰 및 블로그

## Data Binding이 쉬운 매체
* 서버에서 데이터를 받아 뿌려주는 작업 
* react, angular, vue

## ES6 destructuring 문법
* var [ a, b ] = [ 10, 100 ]
  * a와 b변수 순서대로 각각 10, 100 
* let [title, setTitle] =  useState('리액트 이야기1');

### 변수보다 useState를 사용하는 이유
* 변수로 사용할 경우 변수가 바뀌변 새로고침이 됨
* useState는 새로고침 없이 렌더링 됨
* webapp 을 만드는 가장 중요한 이유

## onClick 
* onClick = { ()=>{} }
* onClick = { 함수 }  / 함수() x

## 필요한 부분만 복사본 만들어서 수정
* var newArray = title;
* newArray[0] = '수정할 부분 수정';

## Componet화의 기준
1. 반복적인 내용
2. 자주 바뀌는 UI (재렌더링이 자주 일어나는 component)
3. 페이지를 구성할 때

## React 문법
* {} 중괄호 안아서 if문 x -> 삼항연산자 사용

## 모달창 만들기
1. modal function Modal(){}로 component 화
2. 삼항연산자 사용 ? <Modal /> : null
3. boolean useState
4. onClick = {()=>{}}

## Toggle
* onClick = {()=>{setShowModal(!showModal)}}