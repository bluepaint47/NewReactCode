import { useState } from 'react';
import Validation from './Validation';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';

import { createClient } from "@supabase/supabase-js";

 


const supabase = createClient("https://wsktssoknnoqqdigffgi.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indza3Rzc29rbm5vcXFkaWdmZmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMDgwNzYsImV4cCI6MjAxOTY4NDA3Nn0.AKmrz4pgTEHntgvjgiSuj3oVYc4jxTqBOUBt6NOCe8A")
const SUPABASE_KEY = 'SUPABASE_CLIENT_API_KEY'

 


function LoginForm() {
  const history = useHistory();

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = async () => {
      const user = supabase.auth.user();
      if (user) {
        // Redirect to the desired route after login
        history.push('/dashboard');
      }
    };

    checkAuth();
  }, [history, supabase]);

  const [values,setValues]=useState({
    name:"",
    email:"",
    password:""
  })

  const [error,setError]=useState({})

  function handleValidation(event){
    const newObj = {...values,[event.target.name]: event.target.value}
    setValues(newObj)
  }

  async function handleSubmit(event){

    
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      
    })
    console.log(error)


    event.preventDefault();
    setError(Validation(values));

    

  }

  return (
    <div className="signup_container w-100 d-flex justify-content-center">
      <div className="signup_form mt-5  w-50">
        <h4 className="title">sign up Validation</h4>

        <div className="form mt-3">
          <form className="border p-3" onSubmit={handleSubmit}>
            <label  className="mt-2"><strong>Name:</strong></label>
            <input type="text" placeholder="Enter your name" name="name" className="form-control" onChange={handleValidation} ></input>
            {error.name && <p style={{color: "red" }}>{error.name}</p>}

            <label >Email</label>
            <input type="email" placeholder="Enter your email" name="email" className="form-control" onChange={handleValidation} ></input>
            {error.email && <p style={{color: "red" }}>{error.email}</p>}

            <label >Name</label>
            <input type="password" placeholder="Enter your password" name="password" className="form-control" onChange={handleValidation} ></input>
            {error.password && <p style={{color: "red" }}>{error.password}</p>}

            <div className="mt-3 ">
              <button>sign up</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
