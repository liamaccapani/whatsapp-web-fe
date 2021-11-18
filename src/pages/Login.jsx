import { Form, FormText, Navbar } from "react-bootstrap";
import "../styles/login.css";
import logo from "../styles/logo.png";
import google from "../styles/google.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../tools/api";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions";
import {create, defaults} from "axios"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [query, setQuery] = useState("")

  const history = useHistory()
  console.log(history)
  const dispatch = useDispatch()
  const path =  history.location.pathname
  console.log(path)
  console.log("query",query)
  const data = useSelector((s) => s.data);
  console.log("current redux data",data);

  const URL = create({baseURL: "http://localhost:3001"})

  const login = async () => {
    const { data } = await URL.post(
      "/user/account",
      { username, email, password },
      { method: "POST" }
    );
    console.log("data post req", data);
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    getUserInfo()
  };

  const getUserInfo = async () => {
    const { data } = await API.get("/user/me");
    console.log("me", data);
    if(data){
      const redirect = path + "main/" + data._id
      console.log("redirect",redirect)
      setQuery(redirect)
    }
  };
  
  return (
    <div>
      <Navbar className="navBar_login">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <Link to="/">
            {" "}
            <span>WHATSAPP WEB</span>
          </Link>
        </Navbar.Brand>
      </Navbar>
      <div className="formContainer">
        <p className="formTitle">Login on your WhatsApp Account</p>
        <Form.Group>
          <Form.Label>Your User Name</Form.Label>
          <Form.Control 
          size="sm" 
          type="text" 
          placeholder="" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Label>Your email</Form.Label>
          <Form.Control
          size="sm" 
          type="email" 
          placeholder=""
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label>Your password</Form.Label>
          <Form.Control 
          size="sm" 
          type="password" 
          placeholder="" 
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </Form.Group>
        <Link to={query}>
        <button className="registerButton"
        onClick={login, getUserInfo}>  Login  </button>
        </Link>
        <a href="http://localhost:3001/user/googleLogin">
        <button className="googleButton">
          <img src={google} />
          Sign in with Google
        </button></a>
        <div className="registerString">Not registered yet?</div>
        <Link to="/register" className="registerLink">
          <button className="registerButton">Create a new account!</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
