
 import { useEffect, useState } from "react"
 import { Link } from 'react-router-dom';
 import './signup.css'
 import { createClient } from "@supabase/supabase-js";
import { el } from "@faker-js/faker";
 


const supabase = createClient("https://wsktssoknnoqqdigffgi.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indza3Rzc29rbm5vcXFkaWdmZmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMDgwNzYsImV4cCI6MjAxOTY4NDA3Nn0.AKmrz4pgTEHntgvjgiSuj3oVYc4jxTqBOUBt6NOCe8A")

 
function SignUp(){


    const data={ email:"", password:"", name:"", ConfirmPasswrd:""};
 const [inputData, setInputData] = useState(data)
 function handleData(e){
  
   setInputData({...inputData, [e.target.name]:e.target.value})
 }

 

  async function handleSubmit(){

    const { data, error } = await supabase.auth.signUp({
      email: inputData.email,
      password: inputData.password,
      
    })
    console.log(error)

    const {email , password , name ,ConfirmPasswrd} = inputData;

    if (password === ""){
      alert('password is required')
    }else if(password.length < 5){
      alert("password length greater five")
    } else if (email === ""){
      alert('plz enter your email')
    }else if(ConfirmPasswrd !== password){
      alert('password and confirm password should be same')
    }
    else if (!email.includes('@')){
      alert("plz enter valid email")
    }
    else{
      alert("data added succesfully")
    }

 }
    

    return (
        <div>
          <div className="sign">
            <h3>Sign up</h3>
          </div>
          <form>
            
    
            <input 
              placeholder='Name'
              name='name'
              type='text'
              onChange={handleData}
            />
    
            <input 
            
              placeholder='Email'
              name='email'
             onChange={handleData}
              
            />

            <input
            placeholder='Password'
            name='password'
            type='password'
            onChange={handleData}
            />

            <input
            placeholder='ConfirmPassword'
            name='confirmPassword'
            type='password'
            onChange={handleData}
            />
    
            <button onClick={handleSubmit} type='button'>
              Submit
            </button>
    
    
          </form>
          <h2>Already have an account <Link to='/signin'>Signin</Link></h2>
         
        </div>
      )

   }
  export default SignUp;