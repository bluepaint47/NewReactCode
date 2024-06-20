import { useEffect, useState } from 'react';
import '../App.css'
import LoadingBar from 'react-top-loading-bar'

import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://wsktssoknnoqqdigffgi.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indza3Rzc29rbm5vcXFkaWdmZmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMDgwNzYsImV4cCI6MjAxOTY4NDA3Nn0.AKmrz4pgTEHntgvjgiSuj3oVYc4jxTqBOUBt6NOCe8A")

  function TodoInputs(props)   {
    const [inputText,setInputText] = useState('');
    const [progress, setProgress] = useState(0)
    

    useEffect(() =>{
      setProgress(40);
      setTimeout(()=>{
       setProgress(100);
      }, 200);

      


    },[])
 
    
    

    const handleSubmit = async () =>{
      
    props.addItem(inputText);
    
    setInputText("")

    setProgress(progress + 100)
    
    

     }


     

    return (

      
        <div className="input-container">
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

<    input type="text" className="input-box" placeholder="Enter your to do" value={inputText}  onChange={e=>{
              setInputText(e.target.value)
            }} />
            <button className="btn"onClick={handleSubmit}>+</button>
            
            
            

        </div>
      
    );
    
          }
  
  export default TodoInputs;
  