import { useState } from "react";

function MyAccordian({question ,answer}) {

    const [show,setShow] = useState(false);
    return (
      <>
    <div className="main-heading">
        
    <h3><span onClick ={() => (setShow(!show))}>{show? "−": "+"}</span> {question}</h3>
    </div>
    {  show &&   <p>{answer}</p> }
    
      </>
    );
  }
  
  export default MyAccordian;
  