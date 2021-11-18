import { Col, Container, Row } from "react-bootstrap";
import { io } from 'socket.io-client'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "../styles/Main.css";
import Sidebar from "./Sidebar";
import ChatMain from "./ChatMain";
import ProfileSidebar from "./ProfileSidebar"
import axios from "axios";



const ADDRESS = 'http://localhost:3001'
const socket = io(ADDRESS, { transports: ['websocket'] })

const Main = () => {
  const [user, setuser] = useState({
      _id:"619253f1a116e487f28419a4",
      username:"vinay",
      email:"lonelyviny76@gmail.com",
      profilePicture:"source/Assets/0.jpg",
      password:"$2b$11$bh6Z8JzYzsdjjM58A4Zbieb0mRTLBkMrZBjp4VQoxbtQ.UpnLci/O",
     })

  const [isProfile, setIsProfile] = useState(false)

  const [conversations, setConversations] = useState([])


  const showProfile = (e) => {
    setIsProfile(!isProfile)
  }

  useEffect(() => {
    
    socket.on('connect', () => {
      
      console.log(socket.id)
    })
  },[])

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:3001/chat/" + user._id);
        setConversations(res.data);
        console.log("CONVERSATIONS", conversations)
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

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
