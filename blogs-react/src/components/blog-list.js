import React, { useState, useEffect } from 'react';
import '../App.css'; 
import BlogPost from './blog-post';
import axios from 'axios'

function BlogList(){

  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    getApiData();
  }, []);
  
const getApiData = async () => {
  
  // const response = await fetch(
  //   "http://localhost:3001/posts",{mode: 'cors'}
  // ).then((response) => response.json());

  // // update the state

  axios.get(`https://random-data-api.com/api/v2/banks?size=10`).then((response) => {
    console.log
    setBlogs(response.data)    
  })

};

    return(
      <>

      {blogs.map((blog) => <BlogPost blog={blog} />)}

      

      </>
    );
}


export default BlogList;