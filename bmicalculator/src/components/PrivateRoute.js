import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


function PrivateRoute() {
  
  const auth = localStorage.getItem('data-bmi') ;

  //console.log("tests..",auth);
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/signin" />;
  
}
export default PrivateRoute;