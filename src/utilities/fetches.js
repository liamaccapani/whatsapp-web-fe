export const fetchChatsOfUser = async (userId) => {
  try {
    const res = await fetch(
      process.env.REACT_APP_LOCAL_URL + "/chat/" + userId
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};
