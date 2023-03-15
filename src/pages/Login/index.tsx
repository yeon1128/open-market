import * as React from "react";

export default function Login() {
  return (
    <form>
      <fieldset>
        <legend>로그인</legend>
        <label htmlFor="userId">사용자 아이디</label>
        <input type="text" id="userId" required />

        <label htmlFor="userPassword">사용자 비밀번호</label>
        <input type="password" id="userPassword" required />

        <button type="submit">로그인</button>
      </fieldset>
    </form>
  );
}
