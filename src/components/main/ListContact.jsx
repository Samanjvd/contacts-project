import React from "react";
import styles from "./ListContact.module.css";
import ItemContact from "./ItemContact";

export default function ListContact({
  confirm,
  isConfirm,
  confirmDelete,
  isConfirmDelete,
}) {
  return (
    <>
      <ul className={styles.list}>
        <ItemContact
          confirm={confirm}
          isConfirm={isConfirm}
          confirmDelete={confirmDelete}
          isConfirmDelete={isConfirmDelete}
        />
      </ul>
    </>
  );
}
