import { FC, SetStateAction } from "react";
import styles from "../../styles/popup.module.css";
import { useAppSelector } from "../app/hooks";
import { selectPercentCorrect } from "../features/percentCorrectSlice";

interface resultsPopupProps {
  open: boolean;
  children: React.ReactNode;
  setTrigger: React.Dispatch<SetStateAction<boolean>>;
}

function ResultsPopup(props: resultsPopupProps) {
  const percentCorrect = useAppSelector(selectPercentCorrect);

  return props.open ? (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <button
          className={styles.closePopup}
          onClick={(e) => props.setTrigger(false)}
        >
          X
        </button>
        You got {percentCorrect}% correct!
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ResultsPopup;
