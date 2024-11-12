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
        <div className={styles.iconClose}>
          <IoMdClose />
        </div>
        <Profile />
        <FormAddContact />
        <Buttons />
      </div>
    </div>
  );
}
