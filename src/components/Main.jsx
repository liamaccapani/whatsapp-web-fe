import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/ChatMain.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const Main = () => {
  return (
    <Container fluid className="whole-container">
      <Row>
        <Col className="left-side px-0" xs={12} sm={4}>
          <Sidebar />
        </Col>

        <Col className="right-side px-0" xs={0} sm={8}>
          <Chat />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
