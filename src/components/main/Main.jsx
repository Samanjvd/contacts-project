import React from "react";
import styles from "./Main.module.css";
import ListContact from "./ListContact";

export default function Main({ searchValue, isStateDoSort }) {
  return (
    <div className={styles.main}>
      <ListContact searchValue={searchValue} isStateDoSort={isStateDoSort} />
    </div>
  );
}
