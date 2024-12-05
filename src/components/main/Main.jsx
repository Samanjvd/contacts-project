import React from "react";
import styles from "./Main.module.css";
import ListContact from "./ListContact";

export default function Main({ searchValue }) {
  return (
    <div className={styles.main}>
      <ListContact searchValue={searchValue} />
    </div>
  );
}
