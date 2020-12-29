import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import Modal from 'react-modal';
import {editTodo} from '../FolderRedux/actions'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
function ModalForm({todo}){
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  const [text,setText]=useState(todo.text)
const dispatch=useDispatch()
// function edit 
const handleSubmit=(e)=>{
  e.preventDefault();
const newTask={id:todo.id,text:text}
dispatch(editTodo(newTask))
closeModal()
}

  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <button onClick={openModal}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          
          <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

            <button type="submit">confirm</button>
    
           
          </form>
        </Modal>
      </div>
    );
}
export default ModalForm;