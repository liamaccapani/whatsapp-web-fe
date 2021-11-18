import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { io } from 'socket.io-client'
import "../styles/Main.css";
import Sidebar from "./Sidebar";
import ChatMain from "./ChatMain";
import ProfileSidebar from "./ProfileSidebar"
import { useSelector } from "react-redux";

const ADDRESS = 'http://localhost:3001'
const socket = io(ADDRESS, { transports: ['websocket'] })



const Main = () => {
  const [isProfile, setIsProfile] = useState(false)

  useEffect(() => {
    
    socket.on('connect', () => {
      
      console.log('Connection established!')
    })
  })

  const user = useSelector((s) => s.userInfo);
  console.log("from Main", user)

  // const dispatch = useDispatch()
  
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
