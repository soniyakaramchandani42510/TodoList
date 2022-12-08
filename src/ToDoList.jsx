import React from 'react'

function ToDoList(props) {

    

  return (
    <>
    
      <div className="todo_style">
        {/* <i className="fa fa-times" aria-hidden="true"></i> */}
        <i className="fa-solid fa-x" 
        onClick={()=>{
            props.onSelect(props.id);
        }}
        />
      <li>{props.taskitems}</li>
      </div>
      
        
    </>
  )
}

export default ToDoList