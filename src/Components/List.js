import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const List = () => {
    const {todos}=useSelector(state=>state.todosData.value)
    console.log(todos)
  return (
    <div>
      {
        React.Children.toArray(todos.map(el=><Card task={el}/>))
      }
    </div>
  )
}

export default List
