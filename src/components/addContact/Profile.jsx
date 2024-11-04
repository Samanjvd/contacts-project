import React from "react";
import styles from "./profile.module.css";
import { FaCamera } from "react-icons/fa";

export default function Profile() {
  return (
    <div>
      <label className={styles.imgProfil}>
        <FaCamera />
        <input type="file" className="profileInput" />
      </label>
    </div>
  );
}
