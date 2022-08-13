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
            state[번호].count++
        },
        addText(state, actions) {
            state.push(actions.payload)
            console.log(actions.payload);
        }

    }
})

export let {changeNum, addText} = stock.actions


export default configureStore({
    reducer:{
        user : user.reducer,
        stock : stock.reducer
    }
})