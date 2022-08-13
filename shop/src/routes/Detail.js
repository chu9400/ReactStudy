import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {Nav} from 'react-bootstrap'

let Box = styled.div`
  background : ${props => props.bg};
  padding : 20px;
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  width : 100%;
  height : 70px;
`;

function Detail(props) {

    let {id} = useParams();
    let 찾은 = props.shoes.find((x)=>{
        return x.id == id
    })
    
    
    let [count, setCount] = useState(0);
    let [alertt, setAlertt] = useState(true);
    let [test, setTest] = useState('');
    let [탭, 탭변경] = useState(0);
    let [hide, setHide] = useState('')

    let[f_shoes, setF_shoes] = useState(props.shoes)
    useEffect(()=>{
      setHide('end')
      return () =>{
        setHide('')
      }
  
    },[])

    useEffect(()=>{ 
        let a = setTimeout(()=>{ setAlertt(false) }, 2000)
        return ()=>{
          clearTimeout(a)
        }
      }, [])

      useEffect(()=>{
        if (isNaN(test) == true){
          alert('그러지마세요')
        }
      }, [test])
    return(
        <div className={'container start ' + hide}>
            <button onClick={()=>{
                setCount(count + 1)
            }}> 
            버튼
            </button>
            {alertt == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null }
            
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+ 찾은.id +".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                  <h4 className="pt-5">{찾은.title}</h4>
                  
                  <input onChange={(e)=>{setTest(e.target.value);}}/>

                  
                  <p>{찾은.content}</p>
                  <p>{찾은.price}원</p>
                  <button className="btn btn-danger" onClick={()=>{
                    
                  }}>
                    주문하기
                  </button> 
                </div>
            </div>


            <Nav variant="tabs"  defaultActiveKey="link0">
              <Nav.Item>
                <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
              </Nav.Item>
          </Nav>

          <TabContent 탭={탭} shoes={props.shoes}/>
        </div> 
    )
}

function TabContent({탭, shoes}) {

  let [fade, setFade] = useState('')
  useEffect(()=>{
    let ff = setTimeout(()=>{  // 아래 리턴 코드 끝나면 실행되라
      setFade('end')
    }, 10)

    return()=>{
      clearTimeout(ff)
      setFade('') //탭이라는 스테이트 바뀌면 먼저 실행해라
    }
  },[탭])

  return (
    <div className={'start ' + fade}>
      
      { [<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>
  )
}

export {Detail}