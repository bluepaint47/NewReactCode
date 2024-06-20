function Validation(values){
 const error = {}

 //eslint-disable-next-line
 const email_patren = "[a-z0-9._%+-]+@[a-z0-9.-]+/\.[a-z]{2,4}$";
 //eslint-disable-next-line
 const password_patren = "(?=.*/\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

 if (values.name === ""){
     error.name = "name is required"
 }

 if (values.email === ""){
     error.email ="email is required"
 } else if(!email_patren.test(values.email)){
     error.email ="email did not matched"
 }

 if (values.password === ""){
     error.password ="password is required"
 } else if(!password_patren.test(values.password)){
     error.password ="password did not matched"
 }

 return error;

}

export default Validation;