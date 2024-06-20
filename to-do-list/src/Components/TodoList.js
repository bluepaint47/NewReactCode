import '../App.css'
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';








function TodoList(props) {
    console.log("props--",props);
    const [progress, setProgress] = useState(0)


    useEffect(() =>{
        setProgress(40);
        setTimeout(()=>{
         setProgress(100);
        }, 200);
    
        
    
    
      },[])
    

    return(
        <li className="list-item">
             <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            {props.item.listname}
            <span className="icons">
            <i class="fa-solid fa-trash-can icon-delete"  onClick={()=>{  setProgress(progress + 100)
                props.deleteItem(props.item.id)}} ></i>
            </span>

        </li>
    )
    
    }
  
   export default TodoList;