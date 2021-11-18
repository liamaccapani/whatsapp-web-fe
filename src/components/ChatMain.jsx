import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { MessageList, Input, Button } from "react-chat-elements";
import AvatarDefault from "../styles/default-avatar.png"

const ChatMain = () => {

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
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
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
