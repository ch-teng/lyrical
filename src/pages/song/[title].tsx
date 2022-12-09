import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { promises as fs } from "fs";
import { useAppDispatch } from "../../app/hooks";
import GuessInput from "../../components/GuessInput";
import ShowGuesses from "../../components/ShowGuesses";
import { setList } from "../../features/lyricListSlice";
import styles from "../../../styles/title.module.css";
import ResultsPopup from "../../components/ResultsPopup";
import { useState } from "react";

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { title: "Never-Gonna" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const contents = await fs.readFile("./NeverGonna.txt", "utf-8");
  const arr: String[] = contents.split(/\s+/);
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
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <title>Never Gonna Give You Up</title>
        <ResultsPopup open={true}>Hello!</ResultsPopup>
        <GuessInput />
        <ShowGuesses />
      </main>
    </div>
  );
}

export default SongPage;
