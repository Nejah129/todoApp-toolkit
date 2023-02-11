import { createSlice } from "@reduxjs/toolkit";




const initialState={
    value:{
        todos:[
            {id:1,action:"hello",isDone:true},
            {id:2,action:"hello222",isDone:false},

        ]
    }
};

export const todoSliceReducer=createSlice({
name:"todosData",
initialState,
reducers:{
    deleteTask:(state,{payload})=>{

        state.value.todos=state.value.todos.filter(el=>el.id!==payload)
    },
    completeTask:(state,{payload})=>{
state.value.todos=state.value.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
    },
    addNewTask:(state,{payload})=>{
        state.value.todos=[...state.value.todos,payload]
    },
    editTask:(state,{payload})=>{
        state.value.todos=state.value.todos.map(el=>el.id===payload.id?payload:el)
    }
}
})

export const {deleteTask,completeTask,addNewTask,editTask}=todoSliceReducer.actions
export default todoSliceReducer.reducer