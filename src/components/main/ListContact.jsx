import React from "react";
import styles from "./ListContact.module.css";
import ItemContact from "./ItemContact";

export default function ListContact({ searchValue, isStateDoSort }) {
  return (
    <>
      <ul className={styles.list}>
        <ItemContact searchValue={searchValue} isStateDoSort={isStateDoSort} />
      </ul>
    </>
  );
}
