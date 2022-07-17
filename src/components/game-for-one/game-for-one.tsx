import { Fragment, useEffect, useState } from "react";
import KeywordPanel from "../common/key-word-panel";
import DrawCanvas from "../common/draw-canvas";
import TopBar from "../common/top-bar";
import './game-for-one.css'

function GameForOne() {
  const [showKeywordPanel, setShowKeywordPanel] = useState<boolean> (true);
  const [keyword, setKeyword] = useState<string> ("bike");
  const [numberOfDraw, setNumberofDraw] = useState<number> (1);

  useEffect(()=>{
    setTimeout(()=>{
      setShowKeywordPanel(false);
    }, 3000);
  },[])

  return (
      <Fragment>
      {
        showKeywordPanel 
        ? <KeywordPanel keyword={keyword} numberOfDraw={numberOfDraw} setShowKeywordPanel={setShowKeywordPanel}/>
        : <Fragment>
            <TopBar keyword={keyword}/>
            <DrawCanvas keyword={keyword} canvasWidth={window.screen.availWidth}/>
          </Fragment>
      }
      </Fragment>
  )
}

export default GameForOne