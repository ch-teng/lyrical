import { selectWordList } from "../features/wordListSlice";
import { useAppSelector } from "../app/hooks";
import { selectLyricList } from "../features/lyricListSlice";

const compareWords = (guess: String, target: String) => {
  const cleanGuess = guess.replaceAll(/[^0-9|a-z|A-Z|\s]/g, "").toLowerCase();
  const cleanTarget = target.replaceAll(/[^0-9|a-z|A-Z|\s]/g, "").toLowerCase();

  return cleanTarget.localeCompare(cleanGuess) === 0;
};

function ShowGuesses() {
  const wordList = useAppSelector(selectWordList);
  const lyricList = useAppSelector(selectLyricList);
  return (
    <div style={{ position: "absolute", top: "52%", left: "48%" }}>
      {wordList.map((guess, index) => {
        if (
          compareWords(
            wordList.at(wordList.length - 1 - index)!,
            lyricList.at(wordList.length - 1 - index)!
          )
        ) {
          return <div>{lyricList[wordList.length - 1 - index]}✔️</div>;
        } else {
          return (
            <div>
              {lyricList[wordList.length - 1 - index]}❌
              {wordList[wordList.length - 1 - index]}
            </div>
          );
        }
      })}
    </div>
  );
}

export default ShowGuesses;
