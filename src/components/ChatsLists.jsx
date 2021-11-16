import { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import chats from "../data/chats.json";
import { ChatList } from "react-chat-elements";

const ChatsLists = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
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
      <div className="--chatlist">
        {
          <ChatList
            className="chat-list"
            dataSource={[
              {
                avatar: `${chats.members[0].avatar}`,
                alt: "old man meme",
                title: `${chats.chatHistory[0].sender}`,
                subtitle: `${chats.chatHistory[0].content.text}`,
                date: `${chats.chatHistory[0].timestamp}`,
                unread: 3,
              },
              {
                avatar: `${chats.members[0].avatar}`,
                alt: "old man meme",
                title: `${chats.chatHistory[0].sender}`,
                subtitle: `${chats.chatHistory[0].content.text}`,
                date: `${chats.chatHistory[0].timestamp}`,
                unread: 3,
              },
            ]}
          />
        }
      </div>
    </>
  );
};

export default ChatsLists;
