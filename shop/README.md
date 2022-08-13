## JSX 문법
1. className

<div class="APP"></div> x
<div className="APP"></div> 0

2. 변수 꽃을 땐 중괄호 문법 {변수명}
let post = 'test';   
<h3 id={post}>{post}</h3>   

3. style 넣을 때
 style={{이름:'값', 이름2:'값2'}}

## useState

- let data1 = [1,2,3];   
let data2 = data1;   
console.log(data1 === data2);   
true   
--- 메모리에 할당된 주소 값의 복사 한 것이라 true   

- let data1 = [1,2,3];   
let data2 = [...data1];   
console.log(data1 === data2)   
false   
--- date2가 data1을 복사하여 메모리에 할당시 주소 값을 새로 생성하여 false   

 
- let data1 = [1,2,3];   
let data2 = data1;  //복사   
data2[0] = 1000;  //data2 내부 변경   
console.log(data2 === data1)   
true   
--- 주소 값이 같아서 true   


## 컴포넌트
컴포넌트 만드는 세 가지 스텝   
1. function 만들기   
2. return () 안에 html 담기   
3. <함수명></함수명> 쓰기   

- 의미 없는 div는   
<>   
</>   
이렇게 사용 가능   

--- 

## 외워야 하는 것 들   
1. state 만드는 법   
2. props 전송하는 법   
3. 컴포넌트 만든느 법   
4. UI 만드는 step   

--- 


## spread 연산자를 사용하기   
기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 만들어줍니다.
...users 를 통해 기존 배열을 복사해서 새 배열을 생성했습니다.
user 는 복사한 배열에 새 항목을 추가하기 위해 작성했습니다.   

setUsers([...users, user]);   

---   
# 여기부터 쇼핑몰   

## 리액트에서 부트스트랩 사용
https://react-bootstrap.github.io/
접속 -> get-start -> 터미널에  npm install react-bootstrap bootstrap 입력


## export {data}   
1. export 한 것으로 import 할 때 "변수명"은 그대로 사용하기   
2. 코드 예제 : src 경로에 파일 첨부   
    import {data} from './data.js';   


## 이미지 불러오기
<img src={process.env.PUBLIC_URL + '/img/shoes1.jpg'} width="80%" />       
public / img / 파일을 빌더시 압축되지 않게 이미지 세팅   


## 라우팅
 - 라우팅이란?   
 페이지 구분되게 보여주는거(/page1, /page2)   
 일반적으로 여러 개의 html 파일 만들어 호출하지만   
 리액트는 하나의 html에서 컴포넌트만 바꿔서 보여줄 수 있음(sap)

---   

## react-router-dom 설치
1. 터미널에서 npm install react-router-dom@6
2. index.js에서 import { BrowserRouter } from 'react-router-dom';
3. index.js하단에 <App /> 컴포넌트 감싸기   

<pre><code>

    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>

</code></pre> 
4. App.js에서 import { Routes, Route, Link } from 'react-router-dom' 해주기   

---

## 글자순 정렬

<pre><code>

    list.sort(function(a, b) { // 오름차순
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });

</code></pre> 

---

## Redux 설치하기
### 알아두어야할 사항
package.json에서   
<pre><code>
    "react": "^18.2.0",
    "react-bootstrap": "^2.4.0",
    "react-dom": "^18.2.0",
</code></pre> 

리액트랑 돔이 18.1 이상 버전에서만 구동.   

1. 터미널에서 npm install @reduxjs/toolkit react-redux   

2. src 폴더 안에 'store.js' 생성   

3. 
<pre><code>
  import { configureStore } from '@reduxjs/toolkit'

  export default configureStore({
    reducer: { }
  }) 
</code></pre> 
작성.   

4. index.js 가서 코드 수정


<pre><code>

  import { Provider } from "react-redux";
  import store from './store.js';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  ); 

</code></pre> 

## Git에 리액트 올리기

1. 터미널에서 npm run build 
2. build 폴더가 생성되는데 폴더 내 파일들을 git에 첨부하면 끄읕



## 응용문제 : [0] 번째 찾아서 변경하는게 아닌 특정id 찾아서 호출 및 변경하기   
public\img\응용문제 경로에 스샷 찍어놓음.   


## 리덕스 스테이트 가져오기

1. import{configureStore, createSlice} from '@reduxjs/toolkit'
2. 가져다 쓸 파일에서 import { useSelector, useDispatch } from 'react-redux'
3. 이후 let state = useSelector((state)=>{return state})

- 요약
- store.js에서 원하는 state변경함수 가져오면 되고 

- useDispatch 라는 것도 라이브러리에서 가져옵니다.

- 그리고 dispatch( state변경함수() ) 이렇게 감싸서 실행하면 state 진짜로 변경됩니다. 


## findIndex 함수
- findIndex 함수는 파라미터로 함수를 입력받아, 특정 조건을 확인해서 조건을 만족하면 만족하는 원소가 "몇 번째"인지 알려주는 함수이다.   

- 정리
indexOf : 특정 값이랑 일치하는 걸 찾을 때
findIndex : findIndex내부에 함수를 넣어줘서 특정 값의 조건으로 찾아서 그게 몇 번째 인지 알고싶을 때
find : find 내부에 함수를 넣어줘서 특정 값의 조건으로 찾아서 그 값 자체를 사용하고 싶을 때   

---


