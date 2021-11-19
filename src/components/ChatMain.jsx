import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { MessageList, Input, Button } from "react-chat-elements";
import AvatarDefault from "../styles/default-avatar.png"
import { useEffect, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { io } from 'socket.io-client'

const ADDRESS = 'http://localhost:3001'
const socket = io(ADDRESS, { transports: ['websocket'] })
const ChatMain = () => {

const [message, setMessage] = useState("")
const [chatHistory, setChatHistory] = useState([])
const user = useSelector(s=> s.userInfo)
// useEffect(() => {
//   socket.on('connect', () => {
//     console.log('Connection established!')
//   })

const handleChange = (e) => {
setMessage(e.target.value)

}

const handleSubmit = (e) => {
e.preventDefault()

const newMessage = async () => {
  try {
    const text = await fetch("http://localhost:3001/messages", {
    method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(text)
    })
// setMessage(...message, text)
  } catch (error) {
    console.log(error)
  }
}
const message = {
  // sender: user._id,
  text: message,
  // conversationId: currentChat._id,
};
}
useEffect(() => {
  socket.emit("addUser", user._id);
  
   },[user])

  return (
    <>
      {/* NAVBAR TOP */}
      <div className="--mainChat-nav-container px-2 py-3">
        <div className="--mainChat-img-small">
          <img
            alt="avatar"
            src={AvatarDefault}
            className="d-inline-block align-top"
          />
        </div>
      </div>
      <div className="--mainChat-icons">
        <BsSearch className="mr-2" />
        <BsThreeDotsVertical />
      </div>

      {/* MAIN CHAT BALOONS */}
      <MessageList
        className="message-list my-2"
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={[
          {
            //add logic own ? left : right
            position: "right",
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            date: new Date(),
          },
          {
            position: "left",
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            date: new Date(),
          },
          {
            position: "right",
            type: "text",
            text: message,
            date: new Date(),
          },
        ]}
      />
      

      {/* BOTTOM TEXT INPUT FIELD */}
      <div className="--textInput-container mx-1">
      {/* <Form className="mb-3" onSubmit={handleSubmit}>
          <FormControl
            type="text"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="search user..."
          />
        </Form> */}
        <Input
          placeholder="Type here..."
          multiline={true}
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          rightButtons={
            <Button color="white" type="submit" backgroundColor="black" text="Send" onClick={handleSubmit} />
          }
        />
      </div>
    </>
  );
};

export default ChatMain;
