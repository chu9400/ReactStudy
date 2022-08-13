import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import bg from './bg.png';
import {data} from './data.js';
import {Detail} from './routes/Detail.js';
import {Cart} from './routes/Cart.js';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data);
  let [num, setNum] = useState(2);
  let [lnum, setLnum] = useState(false);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className='navbar_bg_color'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ () => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={ () => {navigate('/detail/0')}}>Features</Nav.Link>
            <Nav.Link onClick={ () => {navigate(-1)}}>뒤로가기기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <button onClick={()=>{

        let copy = [...shoes];
        copy.sort(function(a, b) {
          return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
          
        });
        setShoes(copy);

      }}>
        가나다 순 정렬
      </button>

      {
        lnum == true ? <Loading /> : null
      } 
      
      <button onClick={()=>{
        setLnum(true);
        axios.get('https://codingapple1.github.io/shop/data' + 2 + '.json')
        .then((결과)=>{
          let copy = [...shoes, ...결과.data]; 
          setShoes(copy);
          setNum(num + 1);
          setLnum(false);
          
        })
        .catch(()=>{
          console.log('실패!');
          setLnum(false);
          
        })
      }}>
        
        가져오기
      </button>

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>

            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i) => {
                    return(
                      <Card shoes={shoes[i]} i = {i} />
                    )
                  })
                }
              </div>
            </div> 
          </>
        } />

        <Route path='*' element={<div>404 페이지</div>} />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />

        <Route path='/cart/' element={<Cart/>} />

        <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>

        <Route path="/event" element={ <Event/> } >  
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰받기</div> } />
        </Route>
        
      </Routes>

    </div>
  );
}

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%" />             
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      
    </div>
  )
}


function Modal(props){
  return (
    <div className="modal" style={{ background : 'skyblue' }}>
      <h4>{ props.글제목[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function Loading() {
  return(
    <div>로딩 중, 로딩 중, 로딩 중, 로딩 중, 로딩 중, 로딩 중, 로딩 중, 로딩 중, 로딩 중, 로딩 중, 로딩 중, 로딩 중</div>
  )
}



export default App;
