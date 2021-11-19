import { useState, useEffect } from "react";
import chats from "../data/chats.json";
import { ChatList } from "react-chat-elements";

const ChatsLists = ({ chat, userId }) => {
  const memberId = chat.members.find((member) => member._id !== userId);
  const getMemberInfo = async () => {
    try {
      const res = await fetch("http://localhost:3001" + "/user/" + memberId);
      const memberData = await res.json();
      console.log("member data", memberData);
      return memberData;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMemberInfo()
  }, userId, chat)

  return (
    <>
      <div className="--chatlist">
        {/* {
          <ChatList
            className="chat-list"
            dataSource={[
              {
                avatar: `${chat.members[0].avatar}`,
                alt: "old man meme",
                title: `${chat.chatHistory[0].sender}`,
                subtitle: `${chat.chatHistory[0].content.text}`,
                date: `${chat.chatHistory[0].timestamp}`
              }
            ]}
          />
        } */}
      </div>
    </>
  );
};

export default ChatsLists;
