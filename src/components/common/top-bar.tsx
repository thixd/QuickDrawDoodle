import { useState, useEffect, Fragment } from 'react';
import CanvasDraw from "react-canvas-draw";

import './top-bar.css';

type TopBarProps = {
  keyword: string,
}

const TopBar = ({ keyword }: TopBarProps): JSX.Element => {
  const [timer, setTimer] = useState<number>(20);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (timer === 0) {
        return;
      }
      setTimer(timer - 1);
    }, 1000) //20s
    return () => clearInterval(timeInterval);
  })

  return (
    <div className='topnav'>
      <div className='keyword'>
        Draw: {keyword}
      </div>
      {timer >= 10
        ?
        <div className='timer'>
          00 : {timer}
        </div>
        :
        <div className='timer'>
          00 : 0{timer}
        </div>
      }
    </div>
  )
}

export default TopBar