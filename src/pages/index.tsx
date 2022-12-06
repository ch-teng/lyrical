import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import React from "react";
import styles from "../../styles/Home.module.css";

export default function Home() {
  const handleSubmit = (e: React.FormEvent<EventTarget | HTMLFormElement>) => {
    //TODO: query whatever database for actual song name, create slug
    Router.push("/song/" + "Never-Gonna");
  };

  return (
    <>
      <Head>
        <title>Lyrical</title>
        <link rel="icon" href="/eighthnote.ico" />
      </Head>
      <main className={styles.main}>
        Lyrical
        <form onSubmit={handleSubmit}>
          <input type="search" name="SongLookup" />
        </form>
      </main>
      <footer className={styles.footer}>
        <a href="https://ch-teng.github.io/">
          Powered by Ya Boy
          <span className={styles.logo}>
            <Image
              src="/eighthnote.ico"
              alt="Lyrical Logo"
              width={16}
              height={16}
            />
          </span>
        </a>
      </footer>
    </>
  );
}
