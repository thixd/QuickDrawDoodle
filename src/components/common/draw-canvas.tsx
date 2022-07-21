import { createRef, useRef, useEffect, useState, Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import { useScreenshot } from 'use-react-screenshot'
import CanvasDraw from "react-canvas-draw";
import { Button } from 'antd';
import { ReloadOutlined, CloseOutlined } from '@ant-design/icons';
import { fetchPredictResult, getRandomLabel } from "utils/utils";
import './draw-canvas.css'

type DrawCanvasProps = {
  keyword: string,
  canvasWidth: number,
  isTimeOut: boolean,
  setKeyword: (value: React.SetStateAction<string>) => void,
  numberOfDraw: number,
  setNumberofDraw: (value: React.SetStateAction<number>) => void,
  setShowKeywordPanel: (value: React.SetStateAction<boolean>) => void,
}

const DrawCanvas = ({ keyword, canvasWidth, isTimeOut, setKeyword, numberOfDraw, setNumberofDraw, setShowKeywordPanel }: DrawCanvasProps): JSX.Element => {
  const refCanvasDraw = useRef<any>();
  const navigate = useNavigate();
  const [predict, setPredict] = useState<string | null>();
  const [ttsContent, setTtsContent] = useState<string>("...");

  const ref = createRef<any>()
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current)

  useEffect(() => {
    const predictImageKeywordInterval = setInterval(() => {
      console.log("here")
      if (isTimeOut) {
        return;
      }
      getImage()
      fetchPredictResult(image)
        .then(res => res.json())
        .then((result: { predict: string }) => {
          setPredict(result.predict)
          console.log(result)
        })
    }, 5000)
    return () => clearInterval(predictImageKeywordInterval);
  })

  useEffect(() => {
    console.log(predict)
    if (predict === keyword) {
      setTtsContent(`Oh I know, it is ${keyword}`)
      //move to next game
      setKeyword(getRandomLabel())
      setNumberofDraw(numberOfDraw + 1);
      setShowKeywordPanel(true)
      setTtsContent("...")
    } else if (predict) {
      setTtsContent(`I saw ${predict}`)
    } else {
      setTtsContent(`...`)
    }
  }, [predict, keyword, numberOfDraw, setKeyword, setNumberofDraw, setShowKeywordPanel, setTtsContent])

  return (
    <Fragment>
      <div className="buttonContainer">
        <Button
          icon={<CloseOutlined />}
          className="clearButton"
          onClick={() => navigate("/quit")}
        />
        <Button
          icon={<ReloadOutlined />}
          className="clearButton"
          onClick={() => refCanvasDraw.current.eraseAll()}
        />
      </div>
      <div className="canvas">
        <img src={image} width={"100"} height={"100"} />
        <div ref={ref}>
          <CanvasDraw
            ref={refCanvasDraw}
            canvasWidth={canvasWidth}
            canvasHeight={window.screen.availHeight * 0.8}
            brushRadius={4}
          />
        </div>
        <div className="prediction">{ttsContent}</div>
      </div>
    </Fragment>
  )
}

export default DrawCanvas