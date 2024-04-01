import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/home';
import PrivateRoute from './Auth/privateRoute';

function App() {
  const token = localStorage.getItem('auth');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/" component={token ? Home : Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;