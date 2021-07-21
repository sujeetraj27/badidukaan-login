
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Login from './component/Login'
import PhoneandPassword from './component/PhoneandPassword';


const ProtectedRoute = (props) =>{
  const token = localStorage.getItem("token");

  if(token){
    return  <Route  {...props} />
  }else{
  return  <Redirect to='/login' />
  }
  
  
}

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   
   <Switch>
     <Route exact path='/login' component={Login}></Route>  
     <ProtectedRoute exact path='/' component={Home}/> 
     <ProtectedRoute exact path='/loginwithmobile' component={PhoneandPassword}/> 
     </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
