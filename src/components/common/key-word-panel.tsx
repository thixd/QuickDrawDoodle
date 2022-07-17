import './key-word-panel.css';

type KeywordPanelProps = {
  keyword: string,
  numberOfDraw: number
}
const KeywordPanel = ({ keyword, numberOfDraw }: KeywordPanelProps): JSX.Element => {
  return (
    <div className="background">
      <div className="numberOfDraw">
        Drawing {numberOfDraw}/6
      </div>
      <div className="description">
        Draw
        <div className="keyword">
          {keyword}
        </div>
        in under 20s
        <button className="gotItButton" onClick={() => console.log("start drawing")}>
          Got it!
        </button>     
      </div>
    </div>
    
  )
}

export default KeywordPanel;