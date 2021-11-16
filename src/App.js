import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
   <Router>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
   </Router>
  );
}

export default App;
