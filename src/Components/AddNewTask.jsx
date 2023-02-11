import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTask } from '../redux/slice'

const AddNewTask = () => {
    const [action,setAction]=useState("")
    const dispatch=useDispatch()
const handleSubmit=(e)=>{
    e.preventDefault();
    const newTask={
        id:Math.random,action,isDone:false
    }
    dispatch(addNewTask(newTask))
}
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input type="text"  value={action} onChange={e=>setAction(e.target.value)}/>
        <button type="submit" >Add</button>
      </form>
    </div>
  )
}

export default AddNewTask
