import { useState } from "react";
import { Container, Dropdown, ListGroup } from "react-bootstrap";
import {
  BsThreeDotsVertical,
  BsFillChatFill,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import ProfileSidebar from "./ProfileSidebar"

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [profile, setProfile] = useState(false);

  const showProfile = (e) => {
    setProfile(!profile)
  };

  const toggleDropdown = (e) => {
    setDropdown(!dropdown);
  };

  return (
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
      {
        profile && <ProfileSidebar />
      }
      <Container fluid className="--icons px-0">
        <span>
          <BsFillChatFill />
        </span>
        <span className="ml-3">
          <BsFillExclamationCircleFill />
        </span>
        <span className="ml-3">
          <BsThreeDotsVertical onClick={(e) => toggleDropdown()} />
        </span>
        {dropdown && (
          <ListGroup className="my-2">
            <ListGroup.Item>Hello</ListGroup.Item>
            <ListGroup.Item>renders horizontally</ListGroup.Item>
            <ListGroup.Item>on</ListGroup.Item>
            <ListGroup.Item>and above!</ListGroup.Item>
          </ListGroup>
        )}
      </Container>
    </Container>
  );
};

export default Navbar;
