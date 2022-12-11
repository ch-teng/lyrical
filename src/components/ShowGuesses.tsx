import { selectWordList } from "../features/wordListSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectLyricList } from "../features/lyricListSlice";
import { addToCorrectCount } from "../features/correctCountSlice";

const compareWords = (guess: String, target: string) => {
  const cleanGuess = guess.replaceAll(/[^0-9|a-z|A-Z|\s]/g, "").toLowerCase();
  const cleanTarget = target.replaceAll(/[^0-9|a-z|A-Z|\s]/g, "").toLowerCase();

  return cleanTarget.localeCompare(cleanGuess) === 0;
};

function ShowGuesses() {
  const dispatch = useAppDispatch();
  const wordList = useAppSelector(selectWordList);
  const lyricList = useAppSelector(selectLyricList);
  return (
    <div style={{ position: "absolute", top: "56%", left: "46%" }}>
      {wordList.map((guess, index) => {
        console.log("wordList length: " + wordList.length);

        if (
          compareWords(
            wordList.at(wordList.length - 1 - index)!,
            lyricList.at(wordList.length - 1 - index)!
          )
        ) {
          dispatch(addToCorrectCount());
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
