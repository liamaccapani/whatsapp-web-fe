import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "../styles/Main.css";
import Sidebar from "./Sidebar";
import ChatMain from "./ChatMain";
import ProfileSidebar from "./ProfileSidebar"

const Main = () => {
  const [isProfile, setIsProfile] = useState(false)

  const showProfile = (e) => {
    setIsProfile(!isProfile)
  }
  return (
    <Container fluid className="whole-container">
      <Row>
        <Col className="left-side px-0" xs={12} sm={4}>
          {
            !isProfile && <Sidebar showProfile={showProfile}/>
          }
          {
            isProfile && <ProfileSidebar showProfile={showProfile}/>
          }
        </Col>

        <Col className="right-side px-0" xs={0} sm={8}>
          <ChatMain />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
