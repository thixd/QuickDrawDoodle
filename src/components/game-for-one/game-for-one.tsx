import { Fragment, useEffect, useState } from "react";
import KeywordPanel from "../common/key-word-panel";
import DrawCanvas from "../common/draw-canvas";
import TopBar from "../common/top-bar";
import './game-for-one.css'

function GameForOne() {
  const [showKeywordPanel, setShowKeywordPanel] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("bike");
  const [numberOfDraw, setNumberofDraw] = useState<number>(1);
  const [isTimeout, setIsTimeOut] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowKeywordPanel(false);
    }, 2000);
  }, [])

  return (
    <Fragment>
      {
        showKeywordPanel
          ? <KeywordPanel 
              keyword={keyword} 
              numberOfDraw={numberOfDraw} 
              setShowKeywordPanel={setShowKeywordPanel} 
            />
          : <Fragment>
            <TopBar 
              keyword={keyword}
              setIsTimeOut={setIsTimeOut}
            />
            <DrawCanvas 
              keyword={keyword} 
              canvasWidth={window.screen.availWidth} 
              isTimeOut={isTimeout}
            />
          </Fragment>
      }
    </Fragment>
  )
}

export default GameForOne