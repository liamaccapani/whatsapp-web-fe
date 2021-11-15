import { Form, FormText, Navbar } from "react-bootstrap";
import "../styles/login.css";
import logo from "../styles/logo.png";
import google from "../styles/google.png"

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
          <span>WHATSAPP WEB</span>
        </Navbar.Brand>
      </Navbar>
      <div className="formContainer">
          <p className="formTitle" >Login on your WhatsApp Account</p>
        <Form.Group>
        <Form.Label>Your email</Form.Label>
          <Form.Control size="sm" type="email" placeholder="" />
          <Form.Label>Your password</Form.Label>
          <Form.Control size="sm" type="email" placeholder="" />
        </Form.Group>

        <button className="googleButton">
            <img
            src={google}
            />
            Sign in with Google
            </button>
      </div>
    </div>
  );
};

export default Login;
