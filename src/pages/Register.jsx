import { Form, FormText, Navbar } from "react-bootstrap";
import "../styles/login.css";
import logo from "../styles/logo.png";
import google from "../styles/google.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../tools/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
  const login = async () => {
    const { data } = await API.post(
      "/user/account",
      { username, email, password },
      { method: "POST" }
    );
    console.log("data post req", data);
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  };
  const getUserInfo = async () => {
    const { data } = await API.get("/user/me");
    console.log("me", data);
  };

    return(
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
            <Link to="/"><span>WHATSAPP WEB</span></Link>
          </Navbar.Brand>
        </Navbar>
        <div className="formContainer">
            <p className="formTitle" >Create a new Account</p>
          <Form.Group>
          <Form.Label>User Name</Form.Label>
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
            <Form.Label>Password</Form.Label>
            <Form.Control 
            size="sm" 
            type="password" 
            placeholder="" 
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </Form.Group>

          <button className="registerButton"
        onClick={login}>  Login  </button>
  
          <button className="googleButton">
              <img
              src={google} />
              Sign in with Google
              </button>
            
              <Link to="/" className="registerLink">
              <button className="backToLoginButton">Go back to login!</button>
              </Link>
        </div>
      </div>
    )
}
export default Register