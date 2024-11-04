import React from "react";
import styles from "./FormAddContact.module.css";

export default function FormAddContact() {
  return (
    <div>
      <form className={styles.formAddcontact}>
        <input type="text" className={styles.nameContact} />
        <input type="text" className={styles.numContact} />
      </form>
    </div>
  );
}
