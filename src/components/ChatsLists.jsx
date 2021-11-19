import { useState, useEffect } from "react";
import { ChatList } from "react-chat-elements";
import { useSelector, useDispatch } from "react-redux";
import { setChats, setConversations } from "../redux/actions";

const ChatsLists = () => {
  const userInfo = useSelector((s) => s.userInfo);
  const stateChat = useSelector((s) => s.chats);
  console.log("stateChat", stateChat);

  const dispatch = useDispatch();
  const conversations = useSelector((s) => s.conversations);

  const selectConversation = (e) => {
    dispatch(setChats(stateChat));
    console.log("stateChat", stateChat);
  };

  // const [memberData, setMemberData] = useState({});

  
  const memberId = conversations.chatlists.members.filter((member) => member !== userInfo._id);
  // console.log(userId);
  // console.log(memberId);
  const accessToken = localStorage.getItem("accessToken");
  const getMemberInfo = async () => {
    try {
      const res = await fetch("http://localhost:3001" + "/user/" + memberId, {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("member data", data);
        dispatch(setConversations(data))
        // setMemberData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      getMemberInfo();
    },
    []
  );

  return (
    <>
      <div className="--chatlist">
        {
          <ChatList
          onClick={selectConversation}
            className="chat-list"
            dataSource={[
              {
                avatar: `${conversations.avatar}`,
                alt: "old man meme",
                title: `${conversations.username}`,
                // subtitle: `${chat.chatHistory[0].content.text}`,
                // date: `${chat.chatHistory[0].timestamp}`
              },
            ]}
          />
        }
      </div>
    </>
  );
};

export default ChatsLists;
