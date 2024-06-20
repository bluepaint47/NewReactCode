import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//import '../App.css';
import './bmiapp.css'
import './info.css'
import {Link, useNavigate} from 'react-router-dom';
import Info from './info';
import Bar from "./bar"
import BmiForm from './bmiForm';
import { v4 as uuidv4 } from 'uuid';

//import { getData, storeData } from './helpers/localStorage';
import { createClient } from "@supabase/supabase-js";


const supabase = createClient("https://wsktssoknnoqqdigffgi.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indza3Rzc29rbm5vcXFkaWdmZmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMDgwNzYsImV4cCI6MjAxOTY4NDA3Nn0.AKmrz4pgTEHntgvjgiSuj3oVYc4jxTqBOUBt6NOCe8A")



function BmiApp(){
    const [state, setState] = useState([]);
    const [data, setData] = useState({});
    
    const Navigate = useNavigate();
  
   
  
    useEffect(() => {
     getDatas();
    });
  
    const  handleChange = async val => {
      
      
      
     
      let heightInM = val.height / 100;
      val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
      val.id = uuidv4();
      let newVal = [...state, val];
      let len = newVal.length;
      
      if (len > 7) newVal = newVal.slice(1, len);
      const bmiRestult = getBmiResults(val.bmi);
      if(val){

       const userData = JSON.parse(  localStorage.getItem("data-bmi"));
       
       console.log("userData", userData);
       
        const { error } = await supabase.from("bmis")
        .insert({ 
          height:val.height,
          weight: val.weight,
          bmi:val.bmi,
          date:val.date,
          result: bmiRestult,
          userId: userData.user.id
        });
      console.log(error)
       // eslint-disable-next-line no-unused-expressions
      0
      
  
      }
      setState(newVal);
      
    };
  
    
  
    const getBmiResults =bmi => {
      if(bmi < 16){
        return "you are underweight";
     }
     else if(bmi <= 25 ){
         return "you are healthy";
     }
     else {
         return "you are overweight";
     }
    }
  
    const handleDelete = async id => {
      // storeData('lastState', state);
      let newState = state.filter(i => {
        return i.id !== id;
  
      });
  
      const {error} = await supabase.from("bmis").delete().eq('id', id)
      setState(newState);
    };
  
    const handleUndo = () => {
      // setState(getData('lastState'));
    };
  
    
    // const [bmis, setBmis] = useState([]);
  
    async function getDatas() {
     
      const userData = JSON.parse(  localStorage.getItem("data-bmi"));
     
      debugger
      const {data} = await supabase.from("bmis").select().eq('userId', userData.user.id );
      console.log("data:", data);
      setState(data);
  
      const date = state?.map(obj => obj.date);
      const bmi = state?.map(obj => obj.bmi);
      let newData = { date, bmi };
      console.log("newData:", newData);
      
      setData(newData);
    }

    
      const userEmail = JSON.parse(  localStorage.getItem("data-bmi"));
     
       console.log("userEmail", userEmail);
      

      
    

    return(
<>
      
        <div className='container back-col' >
          <div className="zesha">
            <h2>{userEmail.user.email}/<Link to='/signin'><button onClick={() => {
              localStorage.removeItem('data-bmi')
            }}>signout</button></Link></h2>

          </div>
  
        <div className='row center'>
          
          <h1 className='white-text'> BMI Tracker-update </h1>
        </div>
        <div className='row'>
          <div className='col m12 s12'>
            <BmiForm change={handleChange} />
            <Bar labelData={data.date} bmiData={data.bmi} />
            <div>
              <div className='row center'>
                <h4 className='white-text'>7 Day Data</h4>
              </div>
              <div className='data-container row'>
                {state.length > 0 ? (
                  <>
                    {state.map(info => (
                      <Info
                        key={info.id}
                        id={info.id}
                        weight={info.weight}
                        height={info.height}
                        date={info.date}
                        bmi={info.bmi}
                        deleteCard={handleDelete}
                      />
                    ))}
                  </>
                ) : (
                  <div className='center white-text'>No log found</div>
                )}
              </div>
            </div>
            {true ? (
              <div className='center'>
                <button className='calculate-btn' onClick={handleUndo}>
                  Undo
                </button>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
</>
    );


}
export default BmiApp;