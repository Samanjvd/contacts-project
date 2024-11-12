import React from "react";
import styles from "./profile.module.css";
import { FaCamera } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <label className={styles.imgProfile}>
        <div className={styles.iconprofile}>
          <FaCamera />
        </div>
        <input type="file" className={`${styles.profileInput}`} />
      </label>
    </>
  );
}
