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
import ProfileSidebar from "./ProfileSidebar";
// import Navbar from "./Navbar";

// 1) Show Navbar
// 2) Show and Hide profile details
// 3) Filter chats with query
// 4) Fetch all chat history

const Sidebar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [profile, setProfile] = useState(false);

  const showProfile = (e) => {
    setProfile(!profile);
  };

  const toggleDropdown = (e) => {
    setDropdown(!dropdown);
  };

  return (
    <Container className="--whole-sidebar py-2">
      <Container fluid className="--profile-navbar px-0 mb-4">
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
        {profile && <ProfileSidebar />}
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
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              // <ListGroup className="my-2">
              //   <ListGroup.Item>Hello</ListGroup.Item>
              //   <ListGroup.Item>renders horizontally</ListGroup.Item>
              //   <ListGroup.Item>on</ListGroup.Item>
              //   <ListGroup.Item>and above!</ListGroup.Item>
              // </ListGroup>
            )}
          </span>
        </Container>
      </Container>
      <hr />
    </Container>
  );
};

export default Sidebar;

{
  /* <InputGroup className="mb-3">
        <FormControl placeholder="search user..." />
      </InputGroup>
      <hr/>
      <div>Chats Component</div> */
}
