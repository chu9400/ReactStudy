import logo from './logo.svg';
import './App.css';
import{useState} from 'react';

function App() {
  let posts = '교대 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [num, setNum] = useState(0);
  let [text, setText] = useState(null);

  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>

    {/* 글 리스트 */}
    {
     글제목.map( function(a, i) {
      return(
      <div className="list" key={i}>
        <h4 onClick={ 
          () => {
            setModal(!modal);
            setNum(i);
            console.log(num);
          }
        }> 
        {글제목[i]} 

          <span onClick={ 
            (e) => {
              let test = [...따봉];
              test[i] = test[i] + 1;
              따봉변경(test);
              e.stopPropagation();
            }
          }> 
          ❤ 
          </span> 
          {따봉[i]}
        </h4>

        <p>2월 17일 발행</p>
        <button onClick={ () => {
          let copy = [...글제목];
          copy.splice(i, 1);
          글제목변경(copy);
          
        }}>
          글삭제
        </button>
      </div>
      )
     }) 
    }

    <input onChange={(e) => {setText(e.target.value); console.log(text);}} />
    <button onClick={ () => {
      let copy =[...글제목];
      copy.unshift(text);
      글제목변경(copy);

      let copyy = [...따봉];
      copyy.unshift(0);
      따봉변경(copyy);

      console.log(따봉);

    }}>
      글발행
    </button>

    {
      modal == true ? <Modal num={num} 글제목 = {글제목} 글제목변경 = {글제목변경} color = "skyblue"/> : null
    }
    </div>
  // return End
  )
  // APP End
}

const a = [1,2,3,4,5];
for(let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

const b = [1,3,5,7,9];
b.map((c, i) => {
  
  console.log(i);
  
})



function Modal(props) {
  return(
    <div className='modal' style= {{background:props.color}}>
        <h4>{props.글제목[props.num]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button 
          onClick={
             () => {
              let copy = [...props.글제목];
              copy[0] = '여자 코트 추천';
              props.글제목변경(copy);
             }
          }
        >
          글제목변경버튼
        </button>
    </div>
  )
}


export default App;
