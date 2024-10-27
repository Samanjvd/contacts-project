import React from "react";
import styles from "./ItemContact.module.css";
import { IoPersonCircleSharp } from "react-icons/io5";
import stylesApp from "../../App.module.css";
import { FaStar } from "react-icons/fa";

export default function ItemContact() {
  return (
    <div>
      <li className={styles.listItem}>
        <div className={`${stylesApp.fullRoundedBox} ${styles.profile}`}>
          <IoPersonCircleSharp />
        </div>
        <p className={styles.nameContact}>saman javidi</p>
        <p className={styles.numberContact}>099258366343</p>
        <div className={`${stylesApp.fullRoundedBox} ${styles.favoriteIcon}`}>
          <FaStar />
        </div>
      </li>
    </div>
  );
}
