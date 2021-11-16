import { Form, FormText, Navbar } from "react-bootstrap";
import "../styles/login.css";
import logo from "../styles/logo.png";
import google from "../styles/google.png"
import { Link } from "react-router-dom";

const Login = () => {
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
            <Link to="/"> <span>WHATSAPP WEB</span></Link>
        </Navbar.Brand>
      </Navbar>
      <div className="formContainer">
          <p className="formTitle" >Login on your WhatsApp Account</p>
        <Form.Group>
        <Form.Label>Your User Name</Form.Label>
          <Form.Control size="sm" type="text" placeholder="" />
        <Form.Label>Your email</Form.Label>
          <Form.Control size="sm" type="email" placeholder="" />
          <Form.Label>Your password</Form.Label>
          <Form.Control size="sm" type="password" placeholder="" />
        </Form.Group>

        <button className="googleButton">
            <img
            src={google}
            />
            Sign in with Google
            </button>
            <div className="registerString">Not registered yet?</div>
            <Link to="/register" className="registerLink">
            <button className="registerButton">Create a new account!</button>
            </Link>
      </div>
    </div>
  );
};

export default Login;
