import { useAppDispatch } from "../app/hooks";
import { addToList } from "../features/wordListSlice";
import React, { ChangeEvent, useState } from "react";

function GuessInput() {
  const dispatch = useAppDispatch();
  const [currentWord, setCurrentWord] = useState("");
  const handleSubmit = (e: React.FormEvent<EventTarget | HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addToList(currentWord));
    setCurrentWord("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> Word: </label>
      <input
        type="text"
        value={currentWord}
        onChange={(e) => {
          e.target.value.slice(-1).localeCompare(" ") === 0
            ? handleSubmit(e)
            : setCurrentWord(e.target.value);
        }}
        required
      />
      <button>Give up!</button>
    </form>
  );
}

export default GuessInput;
