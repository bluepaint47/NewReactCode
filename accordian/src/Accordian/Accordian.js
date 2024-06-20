import { useState } from 'react';
import {question} from './api'
import "./accordian.css";

import MyAccordian from './MyAccordian';

function Accordian() {
    const [data,setData] = useState(question)
    return (
      <>
      <section className="main-div">
          <h1>React Question Answers</h1>
      {
          data.map((curElem) =>{
              const {id} = curElem
              return <MyAccordian key={id} {...curElem} />
              
          })
      }
      </section>
      </>
    );
  }
  
  export default Accordian;