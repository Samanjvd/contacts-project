import React from "react";
import styles from "./ListContact.module.css";
import ItemContact from "./ItemContact";

export default function ListContact() {
  return (
    <div>
      <ul className={styles.list}>
        <ItemContact />
      </ul>
    </div>
  );
}
