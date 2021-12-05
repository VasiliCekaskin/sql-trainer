import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(import("../components/editor"), { ssr: false });

function onChange(newValue) {
  console.log("change", newValue);
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <div>
        <Editor onChange={onChange} name="SqlEditor" />
      </div>
    </div>
  );
};

export default Home;
