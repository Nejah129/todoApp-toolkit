import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/slice';
const Edit = ({task}) => {
    const [action,setAction]=useState(task.action)
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const editedTask={
            id:task.id,action,isDone:task.isDone
        }
        dispatch(editTask(editedTask))
        closeModal()
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    

    
      function closeModal() {
        setIsOpen(false);}
      
  return (
    <div>
       <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
   <form  onSubmit={handleSubmit}>
        <input type="text"  value={action} onChange={e=>setAction(e.target.value)}/>
        <button type="submit" >Add</button>
      </form>
      </Modal>
    </div>
  )
}

export default Edit
