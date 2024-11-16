import React, { useRef, useState } from "react";
import styles from "./FormAddContact.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

export default function FormAddContact({ ongetData }) {
  // const inputNameRef = useRef(null);
  // const inputNumRef = useRef(null);

  // const dataInputName = inputNameRef.current.value;
  // getData(() => dataInputName);

  // const handleSubmit = (e) => {
  // e.preventDefault();
  // const dataInputName = inputNameRef.current.value;
  // console.log(dataInputName);
  // const dataInputNum = inputNumRef.current.value;

  // getData({ name: dataInputName, number: dataInputNum });

  //   inputNameRef.current.value = "";
  //   inputNumRef.current.value = "";
  // };

  const [inputNameValue, setInputNameValue] = useState("");
  const [inputNumValue, setInputNumValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    ongetData(inputNameValue); // Call the parent's function with the input value
    ongetData(inputNumValue); // Call the parent's function with the input value
    setInputNameValue(""); // Clear the input field
    setInputNumValue(""); // Clear the input field
  };

  return (
    <>
      <form className={styles.formAddContact} onSubmit={handleSubmit}>
        <div className={styles.sectionInput}>
          <IoPersonOutline className={styles.icons} />
          <input
            value={inputNameValue}
            type="text"
            placeholder="Name"
            onChange={(e) => setInputNameValue(e.target.value)}
            className={`${styles.nameContact} ${styles.input}`}
          />
        </div>
        <div className={styles.sectionInput}>
          <span>
            <IoCallOutline className={styles.icons} />
          </span>
          <input
            value={inputNumValue}
            type="text"
            placeholder="Phone"
            onChange={(e) => setInputNumValue(e.target.value)}
            className={`${styles.numContact} ${styles.input}`}
          />
        </div>
      </form>
    </>
  );
}
