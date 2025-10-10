import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoding] = useState(false);

  const [user, setUser] = useState();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      setUser(userName);
    } catch (error) {}
  };
  return (
    <div>
      <form data-testid='login-form' onSubmit={handleLogin}>
        <label style={{ margin: "20px" }}>UserName</label>
        <input
          type="text"
          placeholder="UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label style={{ margin: "20px" }}>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={{
            margin: "20px",
          }}
          disabled={!userName || !password}
 
          type="submit"
        >
          Login
        </button>

        <h1>{user}</h1>
      </form>
    </div>
  );
}

export default Login;
