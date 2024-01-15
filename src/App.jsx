import { useState } from "react";
import "./App.css";
import Mouse from "./components/Mouse";
import GameMain from "./components/GameMain";
import GameStart from "./components/GameStart";
import GameResult from "./components/GameResult";
import GameInfo from "./components/GameInfo";

function App() {
  const docuE = document.documentElement;
  let posX = 0;
  let posY = 0;

  document.body.onmousemove = function (e) {
    const newCursor = document.getElementById("Cursor");
    posX = e.clientX + 3 + "px";
    posY = e.clientY + -65 + "px";

    newCursor.style.left = posX;
    newCursor.style.top = posY;
  };

  document.body.onmousedown = function () {
    const newCursor = document.getElementById("Cursor");
    newCursor.style.transform = `rotate(-20deg)`;
    const effect1 = document.getElementById("effect1");
    const effect2 = document.getElementById("effect2");
    effect1.style.display = `block`;
    effect2.style.display = `block`;
  };

  document.body.onmouseup = function () {
    const newCursor = document.getElementById("Cursor");
    newCursor.style.transform = `rotate(0)`;

    const effect1 = document.getElementById("effect1");
    const effect2 = document.getElementById("effect2");
    effect1.style.display = "none";
    effect2.style.display = "none";
  };

  const [chk, setChk] = useState(false);
  const [startChk, setstartChk] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [gameTime, setGameTime] = useState(false);
  const [moleHit, setMoleHit] = useState(0);
  const [moleMiss, setMoleMiss] = useState(0);
  const [infoChk, setInfoChk] = useState(false);

  return (
    <>
      <div id="Cursor">
        <div id="effect1"></div>
        <div id="effect2"></div>
      </div>
      {chk == false ? <GameMain chk={chk} setChk={setChk} /> : null}
      {/* 얘가 true일때 출력 시키게 */}
      {chk == true && infoChk != true ? (
        <GameInfo infoChk={infoChk} setInfoChk={setInfoChk} />
      ) : null}
      {infoChk == true && startChk != true ? (
        <GameStart startChk={startChk} setstartChk={setstartChk} />
      ) : null}
      {startChk == true && gameTime == false ? (
        <Mouse
          gameScore={gameScore}
          setGameScore={setGameScore}
          gameTime={gameTime}
          setGameTime={setGameTime}
          moleHit={moleHit}
          setMoleHit={setMoleHit}
          moleMiss={moleMiss}
          setMoleMiss={setMoleMiss}
        />
      ) : null}
      {gameTime == true ? (
        <GameResult
          gameScore={gameScore}
          setGameScore={setGameScore}
          moleHit={moleHit}
          setMoleHit={setMoleHit}
          moleMiss={moleMiss}
          setMoleMiss={setMoleMiss}
          startChk={startChk}
          setstartChk={setstartChk}
          gameTime={gameTime}
          setGameTime={setGameTime}
        />
      ) : null}
    </>
  );
}

export default App;
