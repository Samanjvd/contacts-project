import React from "react";
import styles from "./Buttons.module.css";

export default function Buttons({ url, data }) {
  const handleClick = () => {
    console.log(url, data);
  };

  return (
    <>
      <div className={styles.buttons}>
        <button
          type="submit"
          className={styles.btnContact}
          onClick={handleClick}
        >
          Save
        </button>
      </div>
    </>
  );
}
