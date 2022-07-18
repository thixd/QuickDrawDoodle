import './top-bar.css';

type ResultProps = {
  keywordAndImages?: Array<{string: string}> | undefined,
  result: Array<boolean>
}

const Result = ({ keywordAndImages, result }: ResultProps): JSX.Element => {
  const countCorrectImg = result.filter(res => res === true).length;
  return (
    <div>
      Yay! {countCorrectImg}/6 is detected!
      Your drawing
      {/* {keywordAndImages.map(() => 
        <div>
          Image and Keyword here!
        </div>
        )
      } */}
    </div>
  )
}

export default Result;