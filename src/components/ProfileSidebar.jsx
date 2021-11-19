import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { BiArrowToLeft } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import AvatarDefault from "../styles/default-avatar.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import UpdateProfileAvatar from "./updateProfileAvatar";

// FETCH users/me

const ProfileSidebar = ({ showProfile }) => {
  const user = useSelector((s) => s.userInfo);
  console.log("from Main", user);
  const [updateAvatar, setUpdateAvatar] = useState(false);

  return (
    <>
      {updateAvatar && <UpdateProfileAvatar />}
      <Container className="--profile-sidebar py-3 px-0">
        <div className="arrow-left pl-3">
          <BiArrowToLeft onClick={(e) => showProfile()} />
        </div>

        <Container className="--profileSettings-container px-0">
          <div className="profileImg-large my-5">
            {/* src logic: user.avatar ? user.avatar : AvatarDefault */}
            {/*  also -> onClick = change Img */}
            <img
              alt="avatar"
              onClick={() => setUpdateAvatar(!updateAvatar)}
              src={AvatarDefault}
            />
          </div>

          <div className="--nameStatus-container">
            <span className="name d-inline-block mb-2">Name</span>
            <div className="name">
              {/* /me => user. username */}
              {user.username}
              <BsFillPencilFill
                // onClick={}
                className="pencil"
              />
            </div>
            <span className="status d-inline-block mt-4 mb-2">Status</span>
            <div className="status">
              {/* /me => user.status */}
              Busy, call my agent.
              <BsFillPencilFill
                // onClick={edit}
                className="pencil"
              />
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ProfileSidebar;
