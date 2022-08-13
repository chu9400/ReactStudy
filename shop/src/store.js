import{configureStore, createSlice} from '@reduxjs/toolkit'
import user from './store/useSlice.js'


let stock = createSlice({
    name : 'stock',
    initialState : 
        [
            {id : 0, name : 'White and Black', count : 2},
            {id : 2, name : 'Grey Yordan', count : 1},
            {id : 3, name : 'Yordan', count : 0},
        ],
    reducers:{
        changeNum(state, actions){
            let 번호 = state.findIndex((a)=>{ return a.id == actions.payload})
            console.log(state);
            console.log(actions);
            console.log(번호);
            state[번호].count++
        }

    }
})

export let {changeNum} = stock.actions


export default configureStore({
    reducer:{
        user : user.reducer,
        stock : stock.reducer
    }
})