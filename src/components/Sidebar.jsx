// import { Container, FormControl, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  Container,
  Dropdown,
  Form,
  FormControl,
  ListGroup,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import {
  BsThreeDotsVertical,
  BsFillChatFill,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import ChatsLists from "./ChatsLists";
import AvatarDefault from "../styles/default-avatar.png";
// import { fetchChatsOfUser } from "../utilities/fetches.js"

// 2) Show and Hide profile details
// 3) Filter chats with query
// 4) Fetch all chat history

const Sidebar = ({ showProfile }) => {
  const [dropdown, setDropdown] = useState(false);
  const [query, setQuery] = useState("");
  const [chats, setChats] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const fetchChatsOfUser = async (userId) => {
  //   try {
  //     const res = await fetch(
  //       "http://localhost:3001/chat/"+userId
  //     );
  //     if (res.ok) {
  //       const data = await res.json();
  //       setChats(data)
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(()=>{
  //   fetchChatsOfUser("619253f1a116e487f28419a4")
  // }, [])

  const toggleDropdown = (e) => {
    setDropdown(!dropdown);
  };

  return (
    <Container className="--chat-sidebar py-0 px-0">
      {/* TOP NAVBAR PROFILE + ICONS/MENU */}
      <Container fluid className="--profile-icons px-3 mb-4">
        <div className="profileImg-small">
          <img
            alt="avatar"
            src={AvatarDefault}
            onClick={(e) => showProfile()}
          />
        </div>
        <Container fluid className="--icons px-0">
          <span>
            <BsFillChatFill />
          </span>
          <span className="ml-3">
            <BsFillExclamationCircleFill />
          </span>
          <span className="ml-3">
            <BsThreeDotsVertical onClick={(e) => toggleDropdown()} />
            {dropdown && (
              <NavDropdown className="my-2">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            )}
          </span>
        </Container>
      </Container>
      <hr />
      {/* SEARCHBAR */}
      <Container>
        <Form className="mb-3" onSubmit={handleSubmit}>
          <FormControl
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="search user..."
          />
        </Form>
      </Container>
      <hr />
      {/* CHATLISTS */}
      {chats.map((c) => (
        <ChatsLists key={c._id} chat={c} />
      ))}
    </Container>
  );
};

export default Sidebar;
