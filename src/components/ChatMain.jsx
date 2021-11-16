import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { MessageList, Input, Button } from "react-chat-elements";

const ChatMain = () => {
  return (
    <>
      {/* NAVBAR TOP */}
      <div className="--mainChat-nav-container py-3">
        <div className="--mainChat-img-container">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="--mainChat-img d-inline-block align-top ml-3"
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
            position: "right",
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            date: new Date(),
          },
          {
            position: "LEFT",
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            date: new Date(),
          },
        ]}
      />

      {/* BOTTOM TEXT INPUT FIELD */}
      <div className="--textInput-container mx-1">
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
