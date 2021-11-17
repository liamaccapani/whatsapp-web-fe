import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Playground from './pages/Playground';
import Main from "./components/Main";

function App() {
  return (
   <Router>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/playground" component={Playground}/>
      <Route exact path="/main" component={Main}/>
   </Router>
  );
}

export default App;
