import './ImageGenerator.css'
import { useState,useRef,useEffect } from 'react';



import deafult from '../Assests/default_image.svg'




function ImageGenerator() {
  const [image_url,setImage_url] =useState("/");
  let inputRef = useRef(null)
  const [apiUrls, setApiUrls] = useState([]);
  const [loading,setLoading] = useState(true);
  const [apiData, setApiData] = useState();
  const [localStorageData, setLocalStorageData] = useState([]);

 
 
  useEffect(()=>{
     const data = getlocal();
     console.log("dataaa:",data);
     setApiData (data);
  },[apiData])
  
  const ImageGenerate = async() =>{
   if(inputRef.current.value===""){
       return 0;
   }
 
   const response = await fetch(
    "https://api.openai.com/v1/images/generations",
    {
      method:"POST",
      // headers:{
      //   "Content-type":"application/json",
      //   Authorization:
      //   "", //bearer token
      //   "User-Agent":"Chrome",

      // },
      body:JSON.stringify({
        prompt:`${inputRef.current.value}`,
        n:1,
        size:"512x512",
      }),

    }
   )

   let data = await response.json();
   let data_array = data.data;
   
   
   setImage_url(data_array[0].url);


   console.log("data_array:",data_array);
   setLocal(data_array[0].url);

         

 
  
  }
 
const getlocal = () =>{
  let list = sessionStorage.getItem('apiData')
  console.log(apiData);

  if (list){
    return JSON.parse(sessionStorage.getItem('apiData'));
  } else{
    return [];
  }

}

const setLocal = (dataUrl) => {
  const data = getlocal() ? getlocal(): [];
  console.log("data before:", data);
  data.push( { "id":data.length + 1, "url":dataUrl});
  console.log("data after:",data);
  sessionStorage.setItem('apiData', JSON.stringify(data));
}

const deleteListItem =  (id) =>{
  let newState = [...apiData].filter(Item => {
  return id !== Item.id;

});

}

 


 

    return (
      <>
     <div className="ai-image-generator">
         <div className="header">Ai image <span>Generator</span></div>
         <div className="img-loading">
             <div className="image"><img src={image_url==="/"?deafult:image_url} /></div>
             <div className="loading">
            
             </div>
         </div>
    <div className="search-box">
       <input type="text" ref={inputRef}   className="search-input" placeholder="describe what you want to see"/>
       <div className="generate-btn" onClick={()=> {ImageGenerate()}}>Generate</div>      
    
    </div>    
   
     </div>
   
     <div>
      <h1>API Data</h1>
      {apiData ? (
        <ul>
          {apiData.map(item => (
          <img key={item.id} src={item.url} ></img>   
             
            
          ))}
         
         <span className="icons">
            <i className="fa-solid fa-trash-can icon-delete"  onClick={()=> deleteListItem(item.id)} 
               ></i>
            </span>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      
    

 
   
    </>
     
          
    );
      };

export default ImageGenerator;
