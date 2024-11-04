import React from "react";
import styles from "./Buttons.module.css";

export default function Buttons() {
  return (
    <div>
      <div className={styles.buttons}>
        <button className={styles.btnContact}>Cancel</button>
        <button className={styles.btnContact}>Save</button>
      </div>
    </div>
  );
}
