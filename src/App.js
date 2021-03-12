import './App.css';
import MainNav from './components/MainNav';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import LoginDoc from './components/LoginDoc';
import Result from './components/Result';



import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import Doctorprofile from './components/Doctorprofile';



function App() {
  return (
    <div className="App">
      <>
      <Router>
        <MainNav/>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/components/Login' component={Login}/>
          <Route path='/components/Signup' component={Signup}/>
          <Route path='/components/LoginDoc' component={LoginDoc}/>
          <Route path='/components/Result' commponent ={Result}/>
          <Route path='/commponents/Doctorprofile' component={Doctorprofile}/>
        </Switch>
        <Footer/>
      </Router>
      </>
    </div>
  );
}

export default App;
