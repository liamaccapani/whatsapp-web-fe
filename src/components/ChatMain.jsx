import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { MessageList, Input, Button } from "react-chat-elements";
import AvatarDefault from "../styles/default-avatar.png";
import API from "../tools/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setChats } from "../redux/actions";
import { useEffect, useState } from "react";

const ChatMain = () => {
  const chatstate = useSelector((s) => s.chats);
  console.log("chat state", chatstate);

  const userstate = useSelector((s) => s.userInfo);
  console.log("userstate", userstate);
  const dispatch = useDispatch();

  // const [chat, setChat] = useState([]);

  const getChatHistory = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/messages/" + "61967e0a1e32026c699f741e"
      );
      const res = await response.json();
      // setChat(res);
      dispatch(setChats(res))
      console.log("res", res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
   getChatHistory()
  }, [])

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
        className="message-list"
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={[
          {
            //add logic own ? left : right
            position: "right",
            type: "text",
            text: `${chatstate.text}`,
            date: new Date(),
          },
          {
            position: "left",
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            date: new Date(),
          },
        ]}
      />

      {/* BOTTOM TEXT INPUT FIELD */}
      <div className="--textInput-container">
        <Input
          placeholder="Type here..."
          multiline={true}
          rightButtons={
            <Button color="white" backgroundColor="black" text="Send" />
          }
        />
      </div>
    </>
  );
};

export default ChatMain;
