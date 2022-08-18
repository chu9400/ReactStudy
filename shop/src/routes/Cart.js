import {useEffect, useState} from 'react'
import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {changeNum} from './../store.js'
import {changeName, increase, increase01} from './../store/useSlice.js'

function Cart() {
    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch();

    return(
        <div>
            <h4>{state.user.name}의 장바구니</h4>
            <h4>{state.user.age}번 누름</h4>
            <button onClick={()=>{
                dispatch(increase01())
            }}>
                숫자 올리기
            </button>
            


            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        state.stock.map((a, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{state.stock[i].id}</td>
                                    <td>{state.stock[i].name}</td>
                                    <td>{state.stock[i].count}</td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(changeNum(state.stock[i].id))
                                        
                                        }}> + </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table> 
        </div>
    )
}

export {Cart}