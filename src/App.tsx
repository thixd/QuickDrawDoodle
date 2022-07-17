import { Link } from 'react-router-dom';
import './App.css';
import landingImageFromGoogle from './assets/landing-page.png';

function App() {
  return (
    <div className="pageLayout">
      <img src={landingImageFromGoogle} />
      <div className="title">
        Inspired by Google Quick Draw
      </div>
      <div className="subtitle">
        You can play alone or with friend. In given time, both of you with try to draw the given keyword, whose draw get detected faster by neural network will win.
      </div>
      <Link to="/game-for-one">
        <button>
          Start game now
        </button>
      </Link>
      <div className="subtitle">
        More fun? Play with friend
      </div>
      <button>
        Invite friend with code
      </button>
      <br />
      <button>
        Enter invitation code and start
      </button>
    </div>
  )
}

export default App;
