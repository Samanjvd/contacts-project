import React, { useState } from "react";
import styles from "./FormAddContact.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import Buttons from "./Buttons";
import Profile from "./Profile";

export default function FormAddContact({ status, onAddModal }) {
  const [inputNameValue, setInputNameValue] = useState();
  const [inputNumValue, setInputNumValue] = useState();
  const [urlImag, setUrlImage] = useState();

  const handleChangeName = (e) => {
    const value = e.target.value;
    setInputNameValue(value);
  };

  const handleChangeNum = (e) => {
    const value = e.target.value;
    setInputNumValue(value);
  };

  const handleUrlImg = (data) => {
    setUrlImage(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (status === true) {
      onAddModal(false);
    }
    const datas = {
      name: inputNameValue,
      num: inputNumValue,
      url: urlImag,
    };

    // const contacts = {
    //   items: [datas],
    // };
    // localStorage.setItem("contacts", JSON.stringify(contacts));

    const contactsStorage = localStorage.getItem("contacts");

    if (contactsStorage) {
      const contacts = JSON.parse(contactsStorage);
      console.log(contacts);
      // contacts.items.filter((element1, element2) => {
      //   if (element1 === element2) {
      //   }
      // });
      contacts.items.push(datas);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      return;
    }
    localStorage.setItem("contacts", JSON.stringify({ items: [datas] }));

    // localStorage.setItem("URL", urlImag);
    // localStorage.setItem("NAME", [inputNameValue]);
    // localStorage.setItem("NUM", [inputNumValue]);

    // console.log(UrlImag);
    // console.log(inputNameValue, inputNumValue);
  };

  return (
    <>
      <form className={styles.formAddContact} onSubmit={handleSubmit}>
        <Profile onGetUrl={handleUrlImg} />
        <div className={styles.sectionInput}>
          <IoPersonOutline className={styles.icons} />
          <input
            type="text"
            value={inputNameValue}
            placeholder="Name"
            onChange={handleChangeName}
            className={`${styles.nameContact} ${styles.input}`}
          />
        </div>
        <div className={styles.sectionInput}>
          <span>
            <IoCallOutline className={styles.icons} />
          </span>
          <input
            type="text"
            value={inputNumValue}
            placeholder="Phone"
            onChange={handleChangeNum}
            className={`${styles.numContact} ${styles.input}`}
            maxLength={11}
          />
        </div>
        <Buttons />
      </form>
    </>
  );
}
