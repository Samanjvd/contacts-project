import React, { useState } from "react";
import styles from "./FormAddContact.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import Buttons from "./Buttons";
import Profile from "./Profile";

export default function FormAddContact({ statusClicked, onAddModal }) {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPhoneValue, setInputPhoneValue] = useState("");
  const [urlImag, setUrlImage] = useState(null);

  const handleChangeName = (e) => {
    const value = e.target.value;
    setInputNameValue(value);
  };

  const handleChangePhone = (e) => {
    const value = e.target.value;
    setInputPhoneValue(value);
  };

  const handleUrlImg = (data) => {
    setUrlImage(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (statusClicked === true) {
      onAddModal(false);
    }

    const contactItem = {
      name: inputNameValue,
      Phone: inputPhoneValue,
      url: urlImag,
    };

    const contactsStorage = localStorage.getItem("contacts");

    if (contactsStorage) {
      const contacts = JSON.parse(contactsStorage);

      // const isDuplicate = contacts.items.some(
      //   (data) =>
      //     data.name !== contactItem.name && data.Phone !== contactItem.Phone
      // );

      // if (isDuplicate) {
      contacts.items.push(contactItem);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      // } else {
      //   alert("Duplicate contact found. Not adding.");
      // }
    } else {
      localStorage.setItem(
        "contacts",
        JSON.stringify({ items: [contactItem] })
      );
    }
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
            name="name"
          />
        </div>
        <div className={styles.sectionInput}>
          <span>
            <IoCallOutline className={styles.icons} />
          </span>
          <input
            type="text"
            value={inputPhoneValue}
            placeholder="Phone"
            onChange={handleChangePhone}
            className={`${styles.PhoneContact} ${styles.input}`}
            maxLength={11}
            name="phone"
          />
        </div>
        <Buttons />
      </form>
    </>
  );
}
