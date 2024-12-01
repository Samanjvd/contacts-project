import React, { useState } from "react";
import styles from "./AddContact.module.css";
import { IoMdClose } from "react-icons/io";
import FormAddContact from "./FormAddContact";

export default function AddContact({ statusClicked, onAddModal }) {
  return (
    <div
      className={`${styles.addContact} ${
        statusClicked === true ? styles.activeModal : ""
      }`}
    >
      <div className={styles.modalPage}>
        <div className={styles.iconClose} onClick={() => onAddModal(false)}>
          <IoMdClose />
        </div>
        <FormAddContact statusClicked={statusClicked} onAddModal={onAddModal} />
      </div>
    </div>
  );
}
