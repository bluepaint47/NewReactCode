
import React,  { useEffect, useState } from 'react';
import './App.css';
import TodoInputs from './Components/TodoInputs'; 
import TodoList from './Components/TodoList';

import { createClient } from "@supabase/supabase-js";



const supabase = createClient("https://wsktssoknnoqqdigffgi.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indza3Rzc29rbm5vcXFkaWdmZmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMDgwNzYsImV4cCI6MjAxOTY4NDA3Nn0.AKmrz4pgTEHntgvjgiSuj3oVYc4jxTqBOUBt6NOCe8A")

  function App()   {
  const [listTodo,setListTodo] = useState([]);
  const [list,setList] =useState([]);
  
  

  useEffect(() => {
    getData();
   }, []);


 async function getData(){
  const { data, error } = await supabase
  .from('todolist')
  .select()

  setListTodo(data);
  }

 

  let AddList =(inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }
  //let newListTodo = [...listTodo];
 // newListTodo.splice(id,1)
 //setListTodo([...newListTodo]);
 
 

  const deleteListItem = async (id) =>{
      let newState = [...listTodo].filter(listItem => {
      return id !== listItem.id;

    });
  

    const {error} = await supabase.from("todolist").delete().eq('id', id)
    setListTodo(newState);
  
      
  }

  const AddItem = async (inputText) =>{
    
    
    const { error } = await supabase.from("todolist")
    .insert({ 
     listname:inputText
    });
    

    getData();
  }



  
  

  
 
  
  return (
    
    <div className="main-container">
      <div className="center-container">
        <TodoInputs addItem={AddItem}  />
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
        return(
            <TodoList key={listItem.id} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>

    </div>
  );
      }



export default App;
