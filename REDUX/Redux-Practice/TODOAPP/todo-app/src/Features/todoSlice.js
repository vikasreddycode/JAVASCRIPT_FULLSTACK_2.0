import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from '@reduxjs/toolkit'

const initialState = {
 todos:[{id:1122,text:"vikcy"},{id:1133,text:"gteeg"}]
}
export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addtodo:(state,action) => {
            const todo = {
                id:nanoid(), //generate unique id
                text:action.payload
            }
            state.todos.push(todo)
        },
        removetodo:(state,action) => {
            state.todos=state.todos.filter((todo) => todo.id!== action.payload)
        }
    }
})
export const {addtodo,removetodo} = todoSlice.actions;
export default todoSlice.reducer;