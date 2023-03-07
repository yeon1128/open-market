import React from "react";
import { useState } from "react";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleData = (e) => {
    if (e.target.type === "text") {
      setUserId(e.target.value);
    } else if (e.target.type === "password") {
      setUserPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId, userPassword);
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>로그인</legend>
        <label htmlFor="userId">사용자 아이디</label>
        <input
          type="text"
          id="userId"
          required
          value={userId}
          onChange={handleData}
        />

        <label htmlFor="userPassword">사용자 비밀번호</label>
        <input
          type="password"
          id="userPassword"
          required
          value={userPassword}
          onChange={handleData}
        />

        <button type="submit">로그인</button>
      </fieldset>
    </form>
  );
}
