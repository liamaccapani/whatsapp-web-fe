import { useState, useEffect } from "react";
import chats from "../data/chats.json";
import { ChatList } from "react-chat-elements";

const ChatsLists = ({ chat, userId }) => {
  const [memberData, setMemberData] = useState({})

  const memberId = chat.members.filter(member => member !== userId);
  console.log(userId)
  console.log(memberId)
  const accessToken = localStorage.getItem("accessToken")
  const getMemberInfo = async () => {
    try {
      const res = await fetch("http://localhost:3001" + "/user/" + memberId, {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        }
      });
      if(res.ok){
        const data = await res.json();
        console.log("member data", data);
        setMemberData(data);
      }
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
        {
          <ChatList
            className="chat-list"
            dataSource={[
              {
                avatar: `${memberData.avatar}`,
                alt: "old man meme",
                title: `${memberData.username}`,
                // subtitle: `${chat.chatHistory[0].content.text}`,
                // date: `${chat.chatHistory[0].timestamp}`
              }
            ]}
          />
        }
      </div>
    </>
  );
};

export default ChatsLists;
