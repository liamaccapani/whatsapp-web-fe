import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { BiArrowToLeft } from "react-icons/bi";
const ProfileSidebar = ({ showProfile }) => {
  return (
    <Container className="--profile-sidebar py-3">
      <div className="arrow-left">
        <BiArrowToLeft onClick={(e) => showProfile()} />
      </div>

      <Container className="--profileSettings-container px-0">
        <div>
          <img alt="" src="/logo.svg" width="30" height="30" />
        </div>
  
        <ListGroup>
          <ListGroup.Item variant="secondary">Name</ListGroup.Item>
        </ListGroup>
  
        <ListGroup>
          <ListGroup.Item variant="secondary">Status</ListGroup.Item>
        </ListGroup>
      </Container>
    </Container>
  );
};

export default ProfileSidebar;
