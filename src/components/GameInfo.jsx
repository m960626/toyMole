import React from "react";

export default function GameInfo(props) {
  console.log(props);
  const startGame = () => {
    props.setInfoChk(true);
  };
  return (
    <>
      <div className="resultArea info">
        <div className="resultInner">
          <h1 className="score">
            <span>두더지 잡는 방법</span>
          </h1>
          <ul>
            <li>
              두더지를 잡을 경우
              <br />
              😎 score + 100 😎
            </li>
            <li>
              두더지를 놓칠 경우
              <br />
              😥 score - 50 😥
            </li>
          </ul>
          <div className="btnArea">
            <button onClick={startGame}>잡으러 가기!</button>
          </div>
        </div>
        <div className="innerBG"></div>
      </div>
    </>
  );
}
