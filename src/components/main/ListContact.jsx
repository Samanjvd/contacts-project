import React from "react";
import styles from "./ListContact.module.css";
import ItemContact from "./ItemContact";

export default function ListContact() {
  return (
    <>
      <ul className={styles.list}>
        <ItemContact />
        <ItemContact />
        <ItemContact />
        <ItemContact />
        <ItemContact />
        <ItemContact />
      </ul>
    </>
  );
}
