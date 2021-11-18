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
  return (
    <>
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
              }
            ]}
          />
        }
      </div>
    </>
  );
};

export default ChatsLists;
