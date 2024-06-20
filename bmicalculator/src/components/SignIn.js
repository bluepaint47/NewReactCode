import { useState } from "react"
 import './signup.css'
 import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"
import { useNavigate } from "react-router";


const supabase = createClient("https://wsktssoknnoqqdigffgi.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indza3Rzc29rbm5vcXFkaWdmZmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMDgwNzYsImV4cCI6MjAxOTY4NDA3Nn0.AKmrz4pgTEHntgvjgiSuj3oVYc4jxTqBOUBt6NOCe8A")

 
function SignIn(){


    const data={ email:"", password:""};
 const [inputData, setInputData] = useState(data)
 function handleData(e){
  
   setInputData({...inputData, [e.target.name]:e.target.value})
 }

 const Navigate = useNavigate();

  async function handleSubmit(){
    
    

    const {email , password} = inputData;
    if (password === ""){
      alert('password is required')
    }else if(password.length < 5){
      alert("password length greater five")
    } else if (email === ""){
      alert('plz enter your email')
    }else if (!email.includes('@')){
      alert("plz enter valid email")
    }


    const { data, error } = await supabase.auth.signInWithPassword({
      email: inputData.email,
      password: inputData.password,
    })


     if(data)
     {
       console.log(data);
       const strData = JSON.stringify(data.session);
       console.log(strData);
       localStorage.setItem('data-bmi', strData);
      
      
       
     }
    console.log(error)
   // console.log(data);

   

   Navigate('/bmiapp')
   

    

 }
    

    return (
        <div>
          <div className="sign">
            <h3>Sign In</h3>
          </div>
          <form>
            
    
            <input 
              placeholder='Email'
              name='email'
              onChange={handleData}
            />
    
            <input 
            
              placeholder='Password'
              name='password'
              type="password"
             onChange={handleData}
              
            />
    
            <button onClick={handleSubmit} type='button'>
              Submit
            </button>
    
    
          </form>
          dont have an account?<Link to='/signup'>Signup</Link>
         
        </div>
      )

   }
  export default SignIn;