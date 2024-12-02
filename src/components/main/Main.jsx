import React from "react";
import styles from "./Main.module.css";
import ListContact from "./ListContact";

export default function Main() {
  return (
    <div className={styles.main}>
      <ListContact />
    </div>
  );
}
