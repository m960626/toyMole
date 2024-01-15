import React from "react";

export default function GameResult(props) {
  console.log(props);
  console.log(props.gameScore);

  const totalHit = props.moleHit + props.moleMiss;
  const reset = () => {
    props.setGameScore(0);
    props.setMoleHit(0);
    props.setMoleMiss(0);
    props.setstartChk(false);
    props.setGameTime(false);
  };

  return (
    <>
      <div className="resultArea">
        <div className="resultInner">
          <h1 className="score">
            <span>score : </span>
            {props.gameScore}
          </h1>
          <ul>
            <li>잡은 두더지 x {props.moleHit}</li>
            <li>놓친 두더지 x {props.moleMiss}</li>
            <li>방망이질 x {totalHit}</li>
          </ul>
          <div className="btnArea">
            <button onClick={reset}>다시하기</button>
          </div>
        </div>
        <div className="innerBG"></div>
      </div>
    </>
  );
}
