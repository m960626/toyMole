import React, { useState, useEffect, useRef } from "react";
import mole from "../assets/mole.png";
import deadMole from "../assets/deadMole.png";

export default function Mouse(props) {
  function useInterval(callback, delay) {
    const savedCallback = useRef(); //클로저 역할을 해주는 useRef. 렌더를 해도 초기화 되지 않는다.

    // callback(setCount)가 변경될 때를 useEffect가 감지해서 최신상태를 저장한다.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // 인터벌과 클리어 세팅
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id); //바로바로 클리어를 해주기 때문에 메모리를 차지하지 않는다.
      }
    }, [delay]);
  }

  // 두더지 랜덤 숫자 생성
  let [num, setNum] = useState(Math.floor(Math.random() * 8));

  // 중복 숫자 방지 boolean 배열 생성
  const [moleChk, setMoleChk] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // 두더지 div에 useRef
  const moleRef = useRef([]);

  // 점수 설정
  const [score, setScore] = useState(0);

  // 타이머 설정
  const [time, setTime] = useState(20);
  const [timeOut, setTimeOut] = useState(true);

  // 생성된 랜덤 숫자와 두더지 div의 current num이 일치할 경우 두더지 up
  useInterval(() => {
    if (time != 0) {
      setTime(time - 1);
    } else {
      setTimeOut(false);
      setTimeout(function () {
        props.setGameTime(true);
        props.setGameScore(score);
      }, 1600);
    }
  }, 1000);

  useInterval(() => {
    setNum(Math.floor(Math.random() * 8));
    const imMole = moleRef.current[num];
    if (moleChk[num] == false && timeOut) {
      imMole.children[0].className = "off";
      imMole.children[0].style.marginTop = "0px";

      // 일정 시간후 다시 내려가기
      setTimeout(function () {
        imMole.children[0].style.marginTop = "165px";
      }, 1000);
    }
  }, 600);

  const moleClick = (e) => {
    if (moleChk[e.target.alt] == false) {
      setScore(score + 100);
      props.setMoleHit(props.moleHit + 1);
    }
    let moleList = [...moleChk];
    moleList[e.target.alt] = true;
    setMoleChk(moleList);

    e.target.parentNode.className = "on";
    e.target.parentNode.style.marginTop = "165px";
    setTimeout(function () {
      moleList = [...moleChk];
      moleList[e.target.alt] = false;
      setMoleChk(moleList);
    }, 250);
  };

  const minusScore = () => {
    if (score > 0) {
      setScore(score - 50);
      props.setMoleMiss(props.moleMiss + 1);
    }
  };

  return (
    <>
      <div className="gameArea">
        <h1 className="score">점수 : {score}</h1>
        <h1 className="time">남은 시간 : {time}</h1>
        <div className="moleArea">
          <div className="mole" ref={(el) => (moleRef.current[0] = el)}>
            <div className="moleInner" onClick={moleClick}>
              <img src={deadMole} />
              <img src={mole} alt="0" />
            </div>
          </div>
          <div className="mole" ref={(el) => (moleRef.current[1] = el)}>
            <div className="moleInner" onClick={moleClick}>
              <img src={deadMole} />
              <img src={mole} alt="1" />
            </div>
          </div>
          <div className="mole" ref={(el) => (moleRef.current[2] = el)}>
            <div className="moleInner" onClick={moleClick}>
              <img src={deadMole} />
              <img src={mole} alt="2" />
            </div>
          </div>
          <div className="mole" ref={(el) => (moleRef.current[3] = el)}>
            <div className="moleInner" onClick={moleClick}>
              <img src={deadMole} />
              <img src={mole} alt="3" />
            </div>
          </div>
          <div className="mole" ref={(el) => (moleRef.current[4] = el)}>
            <div className="moleInner" onClick={moleClick}>
              <img src={deadMole} />
              <img src={mole} alt="4" />
            </div>
          </div>
          <div className="mole" ref={(el) => (moleRef.current[5] = el)}>
            <div className="moleInner" onClick={moleClick}>
              <img src={deadMole} />
              <img src={mole} alt="5" />
            </div>
          </div>
          <div className="mole" ref={(el) => (moleRef.current[6] = el)}>
            <div className="moleInner" onClick={moleClick}>
              <img src={deadMole} />
              <img src={mole} alt="6" />
            </div>
          </div>
          <div className="mole" ref={(el) => (moleRef.current[7] = el)}>
            <div className="moleInner" onClick={moleClick}>
              <img src={deadMole} />
              <img src={mole} alt="7" />
            </div>
          </div>
        </div>
        {timeOut == false ? (
          <div className="gameSet">
            <h1>TIME OVER!</h1>
          </div>
        ) : null}
        <div className="minusScore" onClick={minusScore}></div>
      </div>
    </>
  );
}
