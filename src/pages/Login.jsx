import { Form, FormText, Navbar } from "react-bootstrap";
import "../styles/login.css";
import logo from "../styles/logo.png";
import google from "../styles/google.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../tools/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const login = async () => {
    const { data } = await API.post(
      "/user/login",
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

        <button className="registerButton"
        onClick={login}>  Login  </button>
        <a  href="http://localhost:3001/user/googleLogin">
        <button className="googleButton">
          <img src={google} />
          Sign with Google
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
