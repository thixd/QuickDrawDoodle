import './key-word-panel.css';

type KeywordPanelProps = {
  keyword: string,
  numberOfDraw: number
  setShowKeywordPanel: (value: React.SetStateAction<boolean>) => void
}
const KeywordPanel = ({ keyword, numberOfDraw, setShowKeywordPanel }: KeywordPanelProps): JSX.Element => {
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
        <br/>
        <button className="gotItButton" onClick={() => setShowKeywordPanel(false)}>
          Got it!
        </button>     
      </div>
    </div>
    
  )
}

export default KeywordPanel;