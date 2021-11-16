import { useState } from "react"
import API from "../tools/api"
import logo from "../styles/logo.png";

const Playground = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const login = async () => {
        const {data} = await API.post(
            "/user/account",
            {username, email, password},
            {method : "POST"}
        )
         console.log("data post req",data)
         localStorage.setItem("accessToken", data.accessToken);
         localStorage.setItem("refreshToken", data.refreshToken);
    }
    const getUserInfo = async () => {
        const { data } = await API.get("/user/me");
        console.log("me",data);
      };

    return(
        <div>
         <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
           <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />

      <button onClick={login}>LOGIN</button>

      <button onClick={() => alert(localStorage.getItem("accessToken"))}>
        Show Token
      </button>

      <button onClick={() => localStorage.removeItem("accessToken")}>
        Clear AccessToken
      </button>

      <button onClick={() => localStorage.clear()}>Clear all tokens</button>

      <button onClick={getUserInfo}>display user info</button>
        </div>
    )
}

export default Playground