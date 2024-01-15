import React, { useState, useEffect, useRef } from "react";

export default function GameStart(props) {
  let [cntList1, setCntList1] = useState(false);
  let [cntList2, setCntList2] = useState(false);
  let [cntList3, setCntList3] = useState(false);

  setTimeout(function () {
    setCntList1(true);
    setTimeout(function () {
      setCntList2(true);

      setTimeout(function () {
        setCntList3(true);

        setTimeout(function () {
          props.setstartChk(true);
        }, 1500);
      }, 1500);
    }, 1500);
  }, 1500);

  return (
    <>
      <div className="moleArea">
        <div className="startCnt">
          {cntList1 != true ? <h1>3</h1> : null}
          {cntList1 == true ? <h1>2</h1> : null}
          {cntList2 == true ? <h1>1</h1> : null}
          {cntList3 == true ? <h1 className="startTxt">START!</h1> : null}
        </div>
      </div>
    </>
  );
}
