import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask,completeTask } from '../redux/slice'
import Edit from './Edit'

const Card = ({task}) => {
    // console.log(task)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>{task.action}</h1>
      <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={()=>dispatch(completeTask(task.id))}>Complete</button>
      <Edit task={task}/>

    </div>
  )
}

export default Card
