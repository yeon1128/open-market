import React from "react";
import * as S from "./style";

export default function Home() {
  return (
    <>
      <nav>네브바</nav>
      <section>스와이프 이미지</section>
      <main>
        <ul>
          <li>
            <figure>
              <img src="" alt="" />
              <figcaption>
                <p>
                  <small>우당탕탕 라이캣의 실험실</small>
                </p>
                <p>Hack Your Life 개발자 노트북 파우치</p>
                <strong>28,000</strong>
                <span>원</span>
              </figcaption>
            </figure>
          </li>
        </ul>
      </main>
    </>
  );
}
