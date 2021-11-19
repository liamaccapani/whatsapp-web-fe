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

export const postAvatar = async (image) => {
  try {
    const form = new FormData();
    form.append(image);
    const resp = fetch(`${process.env.REACT_APP_LOCAL_URL}/user/avatar`, {
      method: "POST",
      headers: "",
      body: form,
    });
    if (resp) {
      return resp;
    } else {
      return "wrong credentials";
    }
  } catch (error) {
    console.log(error);
  }
};
