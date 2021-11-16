// import { Container, FormControl, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  Container,
  Dropdown,
  ListGroup,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import {
  BsThreeDotsVertical,
  BsFillChatFill,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import ChatsLists from "./ChatsLists"

// 2) Show and Hide profile details
// 3) Filter chats with query
// 4) Fetch all chat history

const Sidebar = ({ showProfile }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = (e) => {
    setDropdown(!dropdown);
  };

  return (
    <Container className="--chat-sidebar py-3 px-0">
      <Container fluid className="--profile-icons px-3 mb-4">
        <div>
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
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
                <NavDropdown.Item href="#action/3.4">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </span>
        </Container>
      </Container>
      <hr />
      <ChatsLists/>
    </Container>
  );
};

export default Sidebar;
