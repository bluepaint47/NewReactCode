import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


 


function App() {
 return (
  <Router>
  <Switch>
    <Route path="/login" component={LoginForm} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <Redirect from="/" to="/login" />
  </Switch>
</Router>
  );
}

export default App;
