import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './Auth/privateRoute';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/login" component={Login}/>
        <Route exact path='/register' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
