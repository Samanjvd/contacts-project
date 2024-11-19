import React, { useState } from "react";
import styles from "./AddContact.module.css";
import { IoMdClose } from "react-icons/io";
import FormAddContact from "./FormAddContact";

export default function AddContact({ status, onAddModal }) {
  // const [FormData, setFormData] = useState({});

  // const handleFormData = (data) => {

  //   setFormData(data);

  // };

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
        {/* <Profile onGetUrl={handleUrlImg} /> */}
        <FormAddContact status={status} onAddModal={onAddModal} />
        {/* <Buttons
          data={FormData}
          url={UrlImag}
          status={status}
          onAddModal={onAddModal}
        /> */}
      </div>
    </div>
  );
}
