import { Fragment, useEffect, useState } from "react";
import KeywordPanel from "../common/key-word-panel";
import DrawCanvas from "../common/draw-canvas";
import TopBar from "../common/top-bar";
import './game-for-one.css'
import { getRandomLabel } from "utils/utils";

function GameForOne() {
  const [showKeywordPanel, setShowKeywordPanel] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>(getRandomLabel());
  const [numberOfDraw, setNumberofDraw] = useState<number>(1);
  const [isTimeout, setIsTimeOut] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowKeywordPanel(false);
    }, 2000);
  }, [])

  //move to new game after 20 seconds
  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (numberOfDraw === 6) {
        return;
      }
      setKeyword(getRandomLabel())
      setNumberofDraw(numberOfDraw + 1);
      setShowKeywordPanel(true)
    }, 20000)
    return () => clearInterval(timeInterval);
  })

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
              canvasWidth={window.screen.availWidth * 0.8}
              isTimeOut={isTimeout}
              setKeyword={setKeyword}
              numberOfDraw={numberOfDraw}
              setNumberofDraw={setNumberofDraw}
              setShowKeywordPanel={setShowKeywordPanel}
            />
          </Fragment>
      }
    </Fragment>
  )
}

export default GameForOne