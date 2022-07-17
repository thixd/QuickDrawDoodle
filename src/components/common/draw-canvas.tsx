import { Fragment, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import { Button } from 'antd';
import { ReloadOutlined, CloseOutlined } from '@ant-design/icons';
import './draw-canvas.css'

type DrawCanvasProps = {
  keyword: string,
  canvasWidth: number
}
const DrawCanvas = ({ keyword, canvasWidth }: DrawCanvasProps): JSX.Element => {
  const refCanvasDraw = useRef<any>();
  return (
    <div className="canvas">
      <div className="buttonContainer">
        <Button 
          icon={<ReloadOutlined/>} 
          className="clearButton"
          onClick={() => refCanvasDraw.current.eraseAll()}
        />
        {/* TODO: Add QUIT GAME */}
        {/* <Button 
          icon={<CloseOutlined />} 
          className="clearButton"
          onClick={() => refCanvasDraw.current.eraseAll()} 
        /> */}
      </div>
      <CanvasDraw
        ref={refCanvasDraw}
        canvasWidth={canvasWidth}
        canvasHeight={window.screen.availHeight}
        // hideGrid={true}
        brushRadius={4}
      />
    </div>

  )
}

export default DrawCanvas