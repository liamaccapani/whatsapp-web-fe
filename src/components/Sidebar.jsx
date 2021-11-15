import { Container, FormControl, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

// 1) Show Navbar
// 2) Show and Hide profile details
// 3) Filter chats with query
// 4) Fetch all chat history


const Sidebar = () => {

  return (
    <Container className="--whole-sidebar py-2">
      <Navbar />
      <hr/>
      <InputGroup className="mb-3">
        <FormControl placeholder="search user..." />
      </InputGroup>
      <hr/>
      <div>Chats Component</div>
    </Container>
  );
};

export default Sidebar;
