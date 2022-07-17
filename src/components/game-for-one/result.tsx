import './top-bar.css';

type ResultProps = {
  keywordImages: Array<{string: string}>,
  result: Array<boolean>
}

const Result = ({ keywordImages, result }: ResultProps): JSX.Element => {
  const countCorrectImg = result.filter(res => res === true).length;
  return (
    <div>
      Yay! {countCorrectImg}/6 is detected!
      Your drawing
      {keywordImages.map(() => 
        <div>
          Image and Keyword here!
        </div>
        )
      }
    </div>
  )
}

export default Result;