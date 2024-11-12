import React from "react";
import styles from "./FormAddContact.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

export default function FormAddContact() {
  return (
    <>
      <form className={styles.formAddContact}>
        <div className={styles.sectionInput}>
          <IoPersonOutline className={styles.icons} />
          <input
            type="text"
            placeholder="Name"
            className={`${styles.nameContact} ${styles.input}`}
          />
        </div>
        <div className={styles.sectionInput}>
          <span>
            <IoCallOutline className={styles.icons} />
          </span>
          <input
            type="text"
            placeholder="Phone"
            className={`${styles.numContact} ${styles.input}`}
          />
        </div>
      </form>
    </>
  );
}
