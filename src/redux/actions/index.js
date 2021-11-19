export const SET_USER_INFO = "SET_USER_INFO";
export const FETCH_DATA = "FETCH_DATA";
export const SET_CHAT_INFO = "SET_CHAT_INFO";

export const setUserInfo = (user) => {
  return {
    type: SET_USER_INFO,
    payload: user,
  };
};
export const setChats = (chat) => {
  return {
    type: SET_CHAT_INFO,
    payload: chat,
  };
};


export const fetchData = (url) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        const { data } = await resp.json();
        dispatch({
          type: "FETCH_DATA",
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};


