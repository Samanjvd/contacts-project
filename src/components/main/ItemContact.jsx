import React from "react";
import styles from "./ItemContact.module.css";
import { IoPersonCircleSharp } from "react-icons/io5";
import stylesApp from "../../App.module.css";
import { FaStar } from "react-icons/fa";

export default function ItemContact() {
  const contactsStorage = localStorage.getItem("contact").items;

  return (
    <div className={styles.itemContact}>
      <li className={styles.listItem}>
        <div className={styles.right}>
          <div className={`${stylesApp.fullRoundedBox} ${styles.profile}`}>
            {contactsStorage ? (
              contactsStorage.map(({ name, num, url }) => {
                <img
                  src={localStorage.getItem("urlImage")}
                  alt="Profile"
                  className={styles.profileImg}
                />;
              })
            ) : (
              <IoPersonCircleSharp className={styles.IconProfile} />
            )}
          </div>

          <div className={styles.info}>
            <p className={styles.nameContact}>saman javidi</p>
            <p className={styles.numberContact}>099258366343</p>
          </div>
        </div>
        <div className={styles.left}>
          <div className={`${stylesApp.fullRoundedBox} ${styles.favoriteIcon}`}>
            <FaStar />
          </div>
        </div>
      </li>
    </div>
  );
}
