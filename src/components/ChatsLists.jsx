import { useState, useEffect } from "react";
import { ChatList } from "react-chat-elements";
import { useSelector, useDispatch } from "react-redux";
import { setChats, setConversations } from "../redux/actions";

const ChatsLists = () => {
  const userInfo = useSelector((s) => s.userInfo);
  console.log("userInfo", userInfo);
  const stateChat = useSelector((s) => s.chats);
  console.log("stateChat", stateChat);

  const dispatch = useDispatch();
  const conversations = useSelector((s) => s.conversations);
  console.log("conversation STATE", conversations)
  // console.log("conversation STATE MEMBERS", conversations.members)

 

  const getMember = async (memberId) => {
    try {
      const res = await fetch("http://localhost:3001" + "/user/" + memberId, {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("membroooooo",data)
        // dispatch(setConversations(data))
       
      }
    } catch (error) {
      console.log(error);
    }
  };

 conversations.map(conversation  => {
    const memberId = conversation.members.filter((member) => member !== userInfo._id)
    // const member = await getMember(memberId)
    // console.log("membeeeerrrrrrr",member)
     return memberId
  });
//  console.log("member iiiidddd",memberId)

  const selectConversation = (e) => {
    dispatch(setChats(stateChat));
    console.log("stateChat", stateChat);
  };


  //  const memberId = conversations.members.filter((member) => member !== userInfo._id);

  // console.log("memberId",memberId);

  const accessToken = localStorage.getItem("accessToken");
  const getMemberInfo = async () => {
    try {
      const res = await fetch("http://localhost:3001" + "/chat/" + userInfo[0]._id, {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("member data", data);
        dispatch(setConversations(data))
        console.log("members", data[0].members);
        const members = data[0].members
        return members
      }
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(
    () => {
      getMemberInfo();
      // getMember()
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
                // avatar: `${conversations.getUser.avatar}`,
                // alt: "old man meme",
                // title: `${conversations.getUser.username}`,
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
