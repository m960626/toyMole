import React from "react";
import MainImg from "../assets/gameMain.jpg";

export default function GameMain(props) {
  const gameSet = () => {
    props.setChk(true);
  };
  return (
    <>
      <div className="mainWrap">
        <button onClick={gameSet} className="startBtn btn btnPush">
          게임 시작
        </button>
        <img className="mainImg" src={MainImg} />
      </div>
    </>
  );
}
