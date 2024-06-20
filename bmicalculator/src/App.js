

import { Route, Router ,Navigate, Redirect, Routes } from 'react-router-dom';

import SignUp from "../src/components/SignUp";
import BmiApp from "../src/components/BmiApp";
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';



function App() {

  return (
    
    <div>
     
      
        <>
        <Routes>
        <Route exact path='/bmiapp' element={<PrivateRoute/>}>
            <Route exact path='/bmiapp' element={<BmiApp/>}></Route>
          </Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
       
        </Routes>
       
        
        
     
 </>
     

    </div>
    
  );
}


export default App;
