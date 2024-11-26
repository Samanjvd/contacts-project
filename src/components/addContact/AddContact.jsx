import React, { useState } from "react";
import styles from "./AddContact.module.css";
import { IoMdClose } from "react-icons/io";
import FormAddContact from "./FormAddContact";

export default function AddContact({ status, onAddModal }) {
  return (
    <div
      className={`${styles.addContact} ${
        status === true ? styles.activeModal : ""
      }`}
    >
      <div className={styles.modalPage}>
        <div className={styles.iconClose} onClick={() => onAddModal(false)}>
          <IoMdClose />
        </div>
        <FormAddContact status={status} onAddModal={onAddModal} />
      </div>
    </div>
  );
}
