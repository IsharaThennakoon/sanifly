import './App.css';
import LandingPage from './components/landingPage/landingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/loginPage/login';
import Reset from './components/resetPassword/reset';
import Edit from './components/editProfile/edit';
import Dashboard from './components/dashboard/dashboard';



function App() {
  return (
    <Router>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/reset" exact component={Reset} />
          <Route path="/edit" exact component={Edit} />
          <Route path="/dashboard" exact component={Dashboard}/>
          
    </Router>
  );
}

export default App;
