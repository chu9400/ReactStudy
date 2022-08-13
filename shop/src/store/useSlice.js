import{createSlice} from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age:20},
    reducers: {
        changeName(state) {
            state.name = 'zzzz';
        },
        increase(state, a) {
            state.age += a.payload;
        },
        increase01(state) {
            state.age += 1
        }
    }
})
export let {changeName, increase, increase01} = user.actions

export default user