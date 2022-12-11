import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToList, selectWordList } from "../features/wordListSlice";
import React, { SetStateAction, useEffect, useState } from "react";
import { selectLyricList } from "../features/lyricListSlice";
import { selectCorrectCount } from "../features/correctCountSlice";
import { setPercent } from "../features/percentCorrectSlice";

interface props {
  setTrigger: React.Dispatch<SetStateAction<boolean>>;
}

function GuessInput(props: props) {
  const dispatch = useAppDispatch();
  const [currentWord, setCurrentWord] = useState("");
  const wordList = useAppSelector(selectWordList);
  const lyricList = useAppSelector(selectLyricList);
  const totalCorrect = useAppSelector(selectCorrectCount);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (wordList.length == lyricList.length) {
      props.setTrigger(true);
    }
  }, [wordList]);

  const handleSubmit = (e: React.FormEvent<EventTarget | HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addToList(currentWord));
    setCurrentWord("");
    //now check if you've finished guessing
    console.log("wordList length: " + wordList.length);
    console.log("wordList[0]: " + wordList[0]);
    console.log("lyricList length: " + lyricList.length);
    console.log("-----------");
    if (wordList.length === lyricList.length - 1) {
      handleFinish();
    }
  };
  const handleFinish = () => {
    //disable input? Could just use a boolean and set it to true here
    dispatch(setPercent((totalCorrect / lyricList.length) * 100));
    setDisabled(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Word: </label>
        <input
          id="curGuess"
          type="text"
          value={currentWord}
          disabled={disabled}
          onChange={(e) => {
            e.target.value.slice(-1).localeCompare(" ") === 0
              ? handleSubmit(e)
              : setCurrentWord(e.target.value);
          }}
          required
        />
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleFinish();
        }}
      >
        Give up!
      </button>
    </>
  );
}

export default GuessInput;
