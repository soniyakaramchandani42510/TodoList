import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ToDoList from './ToDoList';
function App() {


const[taskstobedone,settaskstobedone]= useState("");
//made array
const [items,setitems]=useState([]);


function tasks(event){
console.log(event.target.value);
settaskstobedone(event.target.value)
};


function addtasks(){
  setitems((olditems)=>{
    var varible=taskstobedone;
    //to empty placeholder after button click
    settaskstobedone("");
    return [...olditems,varible];
  });
  
};



function deleteItems(id){
  console.log('deleted');   
  
  
  //selected id ko delete karna hai baki ko as it is rkhna hai
  setitems((olditems)=>{
    
    return olditems.filter((arrElement,index)=>{
       //jo id match nhi ho hi usko return krva do
      return index!==id;
    })
  });

};



  return (
   <div className='main_div'>
    <div className='centre_div'>
    <br />
    <h1>ToDo List</h1>
    <br />
    <input type="text" placeholder="add items" onChange={tasks} 
    value={taskstobedone}/>
    <button onClick={addtasks}>+</button>
    <ol>
    

   {
     items.map( (itemval,index) =>{
       
     return <ToDoList 
      key={index} 
      id={index}
       taskitems={itemval}
       onSelect={deleteItems}/>
   })
   } 
    
    </ol>
     
    </div>

   </div>
  );
}

export default App;
