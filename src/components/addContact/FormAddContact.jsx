import React, { useRef, useState } from "react";
import styles from "./FormAddContact.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

export default function FormAddContact({ onGetData }) {
  let inputNameRef = useRef(null);
  let inputNumRef = useRef(null);

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

  // const handleSubmit = (e) => {
  //   const file = e.target.value;

  //   onGetData(inputNameValue);
  //   onGetData(inputNumValue);
  //   // setInputNameValue("");
  //   // setInputNumValue("");
  // };

  const handleChangeName = (e) => {
    const value = e.target.value;
    setInputNameValue(value);
    // inputNameRef = value;
  };

  const handleChangeNum = (e) => {
    const value = e.target.value;
    setInputNumValue(value);
    // inputNumRef = value;
  };

  // const { name, num } = {
  //   name: inputNameValue,
  //   num: inputNumValue,
  // };

  // onGetData(name);
  // onGetData(num);

  return (
    <>
      <form className={styles.formAddContact}>
        <div className={styles.sectionInput}>
          <IoPersonOutline className={styles.icons} />
          <input
            // value={inputNameValue}
            type="text"
            placeholder="Name"
            onChange={handleChangeName}
            // onChange={(e) => setInputNameValue(e.target.value)}
            className={`${styles.nameContact} ${styles.input}`}
          />
        </div>
        <div className={styles.sectionInput}>
          <span>
            <IoCallOutline className={styles.icons} />
          </span>
          <input
            // value={inputNumValue}
            type="text"
            placeholder="Phone"
            onChange={handleChangeNum}
            // onChange={(e) => setInputNumValue(e.target.value)}
            className={`${styles.numContact} ${styles.input}`}
          />
        </div>
      </form>
    </>
  );
}
