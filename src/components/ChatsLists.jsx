// import { useState } from "react";
// import {
//   Container,
//   Form,
//   FormControl,
//   InputGroup,
//   ListGroup,
//   ListGroupItem,
// } from "react-bootstrap";
import chats from "../data/chats.json";
import { ChatList } from "react-chat-elements";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setChats } from "../redux/actions";

const ChatsLists = () => {
  const state = useSelector((s)=>s.userInfo)
  const stateChat = useSelector((s)=>s.chats)
  console.log("stateChat",stateChat)

  const dispatch = useDispatch()

  console.log("state in chat list",state )
  console.log("state in chat list name",state[0].username)

  const selectConversation = (e) =>{
  dispatch(setChats(stateChat))
  console.log("stateChat",stateChat)
  }
  return (
    <>
      <div className="--chatlist">
        {
          <ChatList
            className="chat-list" 
            onClick={selectConversation}
            dataSource={[
              {
                avatar: `${state[0].avatar}`,
                alt: "old man meme",
                title: `${state[0].username}`,
                // subtitle: `${state[1].username}`,
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
