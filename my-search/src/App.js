import logo from './logo.svg';
import './style.css';
import data from './TempelateData.json'
import { useState } from 'react';
function App() {
  const [searchTerm,setSearchTerm] = useState("");

  return (
   <>
   <div className="templeteContainer">
     <div className="searchInput_Container">
       <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) =>{
         setSearchTerm(event.target.value)
       }}/>
     </div>
     <div className="template_Container">
       {
         data
         .filter((val) =>{
           if(val.title  === undefined){
             return val;
           }
           if (!searchTerm){
             return val;

             debugger;
           }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
          }

         })
         .map((val) => {
          return(
            <div className="template" key={val.id}>
                <img src={val.image} alt="" />
                <h3>{val.title}</h3>
                <p className="price">${val.price}</p>
            </div> 
          )
        })
       }

     </div>


   </div>
   </>
  );
}

export default App;
