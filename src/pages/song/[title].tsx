import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { promises as fs } from "fs";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import GuessInput from "../../components/GuessInput";
import ShowGuesses from "../../components/ShowGuesses";
import { selectLyricList, setList } from "../../features/lyricListSlice";
import styles from "../../../styles/title.module.css";
import ResultsPopup from "../../components/ResultsPopup";
import { useEffect, useState } from "react";

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { title: "Never-Gonna" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const contents = await fs.readFile("./NeverGonna.txt", "utf-8");
  const arr: string[] = contents.trim().split(/\s+/);
  return {
    props: {
      arr,
    },
  };
};

function SongPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const [popupShow, setPopupShow] = useState(false);
  const dispatch = useAppDispatch();
  dispatch(setList(props.arr));

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Never Gonna Give You Up</h1>
        <ResultsPopup open={popupShow} setTrigger={setPopupShow}>
          Hello!
        </ResultsPopup>
        <GuessInput setTrigger={setPopupShow} />
        <ShowGuesses />
      </main>
    </div>
  );
}

export default SongPage;
