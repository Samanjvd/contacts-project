import React from "react";
import styles from "./AddContact.module.css";
import { IoMdClose } from "react-icons/io";
import Buttons from "./Buttons";
import FormAddContact from "./FormAddContact";
import Profile from "./Profile";

export default function AddContact() {
  return (
    <div className={styles.addContact}>
      <div className={styles.modalPage}>
        <span className={styles.iconClose}>
          <IoMdClose />
        </span>
        <Buttons />
        <FormAddContact />
        <Profile />
      </div>
    </div>
  );
}
