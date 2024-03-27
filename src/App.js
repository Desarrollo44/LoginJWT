import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;