import React, { useState } from "react";
import styles from "./AddContact.module.css";
import { IoMdClose } from "react-icons/io";
import Buttons from "./Buttons";
import FormAddContact from "./FormAddContact";
import Profile from "./Profile";

export default function AddContact({ status, onAddModal }) {
  const [UrlImag, setUrlImage] = useState("");
  const [inputData, setinputData] = useState("");

  const handleInputData = (data) => {
    setUrlImage(data);
    console.log(data);
  };

  // console.log(inputData);
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
        <Profile ongetUrl={handleInputData} />
        <FormAddContact ongetData={setinputData} />
        <Buttons data={inputData} url={UrlImag} />
      </div>
    </div>
  );
}
