// import React from "react";
// import styles from "./ItemContact.module.css";
// import { IoPersonCircleSharp } from "react-icons/io5";
// import stylesApp from "../../App.module.css";
// import { FaStar } from "react-icons/fa";

// export default function ItemContact() {
//   const contactsStorage = localStorage.getItem("contacts");
//   const itemsContacts = JSON.parse(contactsStorage).items;
//   console.log(itemsContacts);

//   return (
//     <div className={styles.itemContact}>
//       {itemsContacts.map(({ name, num, url }) => {
//         <li className={styles.listItem}>
//           {console.log(name + "\n" + num + "\n" + url)}
//           <div className={styles.right}>
//             <div className={`${stylesApp.fullRoundedBox} ${styles.profile}`}>
//               {url ? (
//                 <img src={url} alt="Profile" className={styles.profileImg} />
//               ) : (
//                 <IoPersonCircleSharp className={styles.IconProfile} />
//               )}
//             </div>

//             <div className={styles.info}>
//               <p className={styles.nameContact}>{name}</p>
//               <p className={styles.numberContact}>{num}</p>
//             </div>
//           </div>
//           <div className={styles.left}>
//             <div
//               className={`${stylesApp.fullRoundedBox} ${styles.favoriteIcon}`}
//             >
//               <FaStar />
//             </div>
//           </div>
//         </li>;
//       })}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import styles from "./ItemContact.module.css";
import stylesApp from "../../App.module.css";
import { FaTrashCan } from "react-icons/fa6";

export default function ItemContact({
  confirm,
  isConfirm,
  confirmDelete,
  isConfirmDelete,
}) {
  const [itemsContacts, setItemsContacts] = useState([]);
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

  const handleDeleteContact = (index) => {
    const updatedContacts = itemsContacts.filter((_, i) => i !== index);
    setItemsContacts(updatedContacts);

    localStorage.setItem(
      "contacts",
      JSON.stringify({ items: updatedContacts })
    );
  };

  return (
    <div className={styles.itemContact}>
      {itemsContacts.map(({ name, num, url }, index) => (
        <li key={index} className={styles.listItem}>
          <div className={styles.right}>
            <div className={`${stylesApp.fullRoundedBox} ${styles.profile}`}>
              {url ? (
                <img src={url} alt="Profile" className={styles.profileImg} />
              ) : (
                <IoPersonCircleSharp className={styles.IconProfile} />
              )}
            </div>

            <div className={styles.info}>
              <p className={styles.nameContact}>{name}</p>
              <p className={styles.numberContact}>{num}</p>
            </div>
          </div>
          <div className={styles.left}>
            <div
              className={`${stylesApp.fullRoundedBox} ${styles.favoriteIcon}`}
            >
              <FaStar />
            </div>
            <div
              className={`${stylesApp.fullRoundedBox} ${styles.closeIcon}`}
              onClick={() => {
                isConfirm(true);

                if (confirmDelete) {
                  handleDeleteContact(index);
                  isConfirmDelete(false);
                }

                // window.confirm(`Are you sure you want to delete ${name}?`)
                // if (confirm) {
                //   handleDeleteContact(index);
                //   isConfirm(false);
                // }
              }}
              aria-label={`Delete ${name}`}
            >
              <FaTrashCan />
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
