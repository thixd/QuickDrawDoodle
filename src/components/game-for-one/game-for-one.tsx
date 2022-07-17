import { Fragment } from "react";
import DrawCanvas from "../common/draw-canvas";
import TopBar from "../common/top-bar";
import './game-for-one.css'

function GameForOne() {
  return (
    <Fragment>
      <TopBar keyword="hi" />
      <DrawCanvas keyword="hi" canvasWidth={window.screen.availWidth}/>
    </Fragment>
  )
}

export default GameForOne