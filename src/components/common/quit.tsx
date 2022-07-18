import {
  useNavigate,
} from "react-router-dom";

import './quit.css';

const QuitAlert = (): JSX.Element => {
  let navigate = useNavigate();
  return (
    <div className="backgroundQuit">
      <div className="descriptionQuit">
        <div className='confirmQuestion'>Are you sure you want to quit?</div>
        <div className='buttonContainerQuit'>
          <button onClick={() => navigate(-1)}>Cancel</button>
          <br/>
          <button onClick={() => navigate("/")}>Quit</button>
        </div>
      </div>
      
    </div>
    
  )
}

export default QuitAlert;