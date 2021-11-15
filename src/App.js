import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
   <Router>
      <Route path="/" component={Login}/>
   </Router>
  );
}

export default App;
