import React from "react";
import styles from "./Main.module.css";
import ListContact from "./ListContact";

export default function Main({
  confirm,
  isConfirm,
  confirmDelete,
  isConfirmDelete,
}) {
  return (
    <div className={styles.main}>
      <ListContact
        confirm={confirm}
        isConfirm={isConfirm}
        confirmDelete={confirmDelete}
        isConfirmDelete={isConfirmDelete}
      />
    </div>
  );
}
