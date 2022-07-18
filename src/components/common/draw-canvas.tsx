import { Fragment,  createRef, useRef, useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { Button } from 'antd';
import { ReloadOutlined, CloseOutlined, CameraOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useScreenshot } from 'use-react-screenshot'

import './draw-canvas.css'

type DrawCanvasProps = {
  keyword: string,
  canvasWidth: number,
  isTimeOut: boolean,
}

const DrawCanvas = ({ keyword, canvasWidth, isTimeOut}: DrawCanvasProps): JSX.Element => {
  const refCanvasDraw = useRef<any>();
  const navigate = useNavigate();
  const [keywordAndImages, setKeywordAndImages] = useState<Array<{string: string}>>([]);
  
  const ref = createRef<any>();
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current)

  useEffect(()=>{
    setKeywordAndImages(
      {...keywordAndImages, [keyword]: image}
    );
  },[isTimeOut]);

  return (
    <div className="canvas">
      <div className="buttonContainer">
        <Button 
          icon={<ReloadOutlined/>} 
          className="clearButton"
          onClick={() => refCanvasDraw.current.eraseAll()}
        />
        <Button 
          icon={<CloseOutlined />} 
          className="clearButton"
          onClick={() => navigate("/quit")} 
        />
        <Button
          className="clearButton"
          icon={<CameraOutlined />}
          onClick={getImage}
        />
      </div>
      {/* <img src={image} width={300} height={300}/> */}
      <div ref = {ref}>
        <CanvasDraw
          ref={refCanvasDraw}
          canvasWidth={canvasWidth}
          canvasHeight={window.screen.availHeight}
          brushRadius={4}
        />
      </div>
    </div>
  )
}

export default DrawCanvas