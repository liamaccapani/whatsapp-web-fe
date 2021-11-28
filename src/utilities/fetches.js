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
    form.append("avatar", image);
    const resp = fetch(`http://localhost:3001/user/avatar`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTkyNmY5NmM0NDQxZjNkODUyYThjYmQiLCJpYXQiOjE2MzczMzU3OTUsImV4cCI6MTYzNzQyMjE5NX0.WobUuLuUq34rrdFqS3gna_4DH7Wcey4agm3B9ag0vBo",
      },
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
