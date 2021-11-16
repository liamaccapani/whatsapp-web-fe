import { useState } from "react";
import {
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import chats from "../data/chats.json";

const ChatList = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) =>{
      setQuery(e.target.value)
  }
  const handleSubmit = (e) => {
      e.preventDefault()
  }
  return (
    <>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="search user..."
        />
      </Form>
      <hr />
      <ListGroup className="my-2">
        {
          <ListGroup.Item variant="secondary">
            {chats.chatHistory[0].sender}
          </ListGroup.Item>
        }
      </ListGroup>
    </>
  );
};

export default ChatList;
