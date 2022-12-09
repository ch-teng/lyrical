import { FC } from "react";
import styles from "../../styles/popup.module.css";

interface resultsPopupProps {
  open: boolean;
  children: React.ReactNode;
}

function ResultsPopup(props: resultsPopupProps) {
  return props.open ? (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <button
          className={styles.closePopup}
          onClick={(e) => (props.open = false)}
        >
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ResultsPopup;
