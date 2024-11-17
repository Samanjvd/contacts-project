import React from "react";
import styles from "./Buttons.module.css";

export default function Buttons({ url, data, status, onAddModal }) {
  const handleClick = () => {
    console.log(url);
    localStorage.setItem("urlImage", url);
    if (status === true) {
      onAddModal(false);
    }
  };
  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.buttons}>
        <button
          type="submit"
          className={styles.btnContact}
          onSubmit={handleSubmit}
          onClick={handleClick}
        >
          Save
        </button>
      </div>
    </>
  );
}
