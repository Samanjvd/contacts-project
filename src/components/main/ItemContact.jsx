import React, { useEffect, useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import styles from "./ItemContact.module.css";
import stylesApp from "../../App.module.css";
import { FaTrashCan } from "react-icons/fa6";
import TestModal from "../shared/test-modal";

export default function ItemContact({ searchValue, isStateDoSort }) {
  const [itemsContacts, setItemsContacts] = useState([]);
  const [selectedDelete, setSelectedDelete] = useState(null);

  const contactsStorage = localStorage.getItem("contacts");
  useEffect(() => {
    if (contactsStorage) {
      try {
        const parsedContacts = JSON.parse(contactsStorage).items;
        setItemsContacts(parsedContacts);
      } catch (error) {
        console.error("Failed to parse contacts from localStorage", error);
      }
    }
  }, [contactsStorage]);

  const onSelectItem = (item) => {
    setSelectedDelete(item);
  };

  const onCansell = () => {
    setSelectedDelete(null);
  };

  const onConfirm = () => {
    // const updatedContacts = setItemsContacts((prev) => {
    // Prev.filter((item) => {
    //   return item.Phone !== selectedDelete.Phone;
    // });
    // });

    const updatedContacts = itemsContacts.filter(
      (item) => item.Phone !== selectedDelete.Phone
    );
    setItemsContacts(updatedContacts);
    localStorage.setItem(
      "contacts",
      JSON.stringify({ items: updatedContacts })
    );
    setSelectedDelete(null);
  };

  return (
    <>
      <div className={styles.itemContact}>
        {itemsContacts
          .filter((item) => {
            return searchValue.toLowerCase().trim() === ""
              ? item
              : item.name.toLowerCase().trim().includes(searchValue);
          })
          // .filter((item) => {
          //   return searchValue === "" ? item : item.Phone.inculdes(searchValue);
          // })
          .sort((item1, item2) =>
            isStateDoSort ? (item1.name > item2.name ? 1 : -1) : 0
          ) // fix it
          .map((item, index) => (
            <li key={index} className={styles.listItem}>
              <div className={styles.right}>
                <div
                  className={`${stylesApp.fullRoundedBox} ${styles.profile}`}
                >
                  {item.url ? (
                    <img
                      src={item.url}
                      alt="Profile"
                      className={styles.profileImg}
                    />
                  ) : (
                    <IoPersonCircleSharp className={styles.IconProfile} />
                  )}
                </div>

                <div className={styles.info}>
                  <p className={styles.nameContact}>{item.name}</p>
                  <p className={styles.PhoneContact}>{item.Phone}</p>
                </div>
              </div>
              <div className={styles.left}>
                <button
                  className={`${stylesApp.fullRoundedBox} ${styles.favoriteIcon}`}
                >
                  <FaStar />
                </button>
                <button
                  className={`${stylesApp.fullRoundedBox} ${styles.closeIcon}`}
                  onClick={() => onSelectItem(item)}
                  aria-label={`Delete ${item.name}`}
                >
                  <FaTrashCan />
                </button>
              </div>
            </li>
          ))}
      </div>
      {selectedDelete && (
        <TestModal onCansell={onCansell} onConfirm={onConfirm} />
      )}
    </>
  );
}
