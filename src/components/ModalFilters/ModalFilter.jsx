import React, { useState } from "react";
import styles from "./ModalFilter.module.css";
import { IoMdClose } from "react-icons/io";

export default function ModalFilter({
  statusClicked,
  onAddModal,
  stateClickFilterItem,
  onclickFilterItem,
}) {
  return (
    <div
      className={`${styles.ModalFilter} ${
        statusClicked === true ? styles.activeModal : ""
      }`}
    >
      <div className={styles.modalPage}>
        <div className={styles.iconClose} onClick={() => onAddModal(false)}>
          <IoMdClose />
        </div>
        <div
          className={styles.filters}
          onClick={() =>
            stateClickFilterItem
              ? onclickFilterItem(false)
              : onclickFilterItem(true)
          }
        >
          <div className={`${styles.circle} `}>
            {stateClickFilterItem ? (
              <div className={`${styles.activeCircle}`}></div>
            ) : (
              ""
            )}
          </div>
          <p className={styles.textFilter}>Favorite</p>
        </div>
      </div>
    </div>
  );
}
