import React, { useState } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";
import { postAvatar } from "../utilities/fetches";

function UpdateProfileAvatar() {
  const [image, setImage] = useState("");

  const updateAvatar = () => {
    try {
      const resp = postAvatar(image);
      if (resp) {
        console.log(resp);
      } else {
        console.log("wrong request");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Change Avatar</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
          ></input>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={updateAvatar} variant="primary">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default UpdateProfileAvatar;
