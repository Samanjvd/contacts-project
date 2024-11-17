import React, { useState } from "react";
import styles from "./AddContact.module.css";
import { IoMdClose } from "react-icons/io";
import Buttons from "./Buttons";
import FormAddContact from "./FormAddContact";
import Profile from "./Profile";

export default function AddContact({ status, onAddModal }) {
  const [UrlImag, setUrlImage] = useState(null);
  const [inputData, setInputData] = useState("");

  const handleInputData = (data) => {
    return setUrlImage(data);
  };

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
        <Profile onGetUrl={handleInputData} />
        <FormAddContact onGetData={setInputData} />
        <Buttons
          data={inputData}
          url={UrlImag}
          status={status}
          onAddModal={onAddModal}
        />
      </div>
    </div>
  );
}
