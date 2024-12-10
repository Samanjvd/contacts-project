import React, { useEffect, useState, useMemo } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import styles from "./ItemContact.module.css";
import stylesApp from "../../App.module.css";
import { FaTrashCan } from "react-icons/fa6";
import TestModal from "../shared/test-modal";

export default function ItemContact({
  searchValue,
  isStateDoSort,
  stateClickFilterItem,
}) {
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
    const updatedContacts = itemsContacts.filter(
      (item) => item.phone !== selectedDelete.phone
    );
    setItemsContacts(updatedContacts);
    localStorage.setItem(
      "contacts",
      JSON.stringify({ items: updatedContacts })
    );
    setSelectedDelete(null);
  };

  const toggleFavorite = (item) => {
    const updatedContacts = itemsContacts.map((contact) => {
      if (contact.phone === item.phone) {
        return { ...contact, isFavorite: !contact.isFavorite };
      }
      return contact;
    });
    setItemsContacts(updatedContacts);
    localStorage.setItem(
      "contacts",
      JSON.stringify({ items: updatedContacts })
    );
  };

  const filteredContacts = useMemo(() => {
    let filteredItems = itemsContacts.slice();

    if (searchValue.toLowerCase().trim() !== "") {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().trim().includes(searchValue)
      );
    }

    if (stateClickFilterItem) {
      filteredItems = filteredItems.filter((item) => item.isFavorite);
    }

    if (isStateDoSort) {
      filteredItems.sort((itam1, item2) => (itam1.name > item2.name ? 1 : -1));
    }

    return filteredItems;
  }, [itemsContacts, searchValue, isStateDoSort, stateClickFilterItem]);

  return (
    <>
      <div className={styles.itemContact}>
        {filteredContacts.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <div className={styles.right}>
              <div className={`${stylesApp.fullRoundedBox} ${styles.profile}`}>
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
                <p className={styles.PhoneContact}>{item.phone}</p>
              </div>
            </div>
            <div className={styles.left}>
              <button
                className={`${stylesApp.fullRoundedBox} ${styles.favoriteIcon}
                  ${item.isFavorite ? styles.clickActive : ""}
                   `}
                onClick={() => toggleFavorite(item)}
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
