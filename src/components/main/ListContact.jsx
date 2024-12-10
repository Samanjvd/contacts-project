import React from "react";
import styles from "./ListContact.module.css";
import ItemContact from "./ItemContact";

export default function ListContact({
  searchValue,
  isStateDoSort,
  stateClickFilterItem,
}) {
  return (
    <>
      <ul className={styles.list}>
        <ItemContact
          searchValue={searchValue}
          isStateDoSort={isStateDoSort}
          stateClickFilterItem={stateClickFilterItem}
        />
      </ul>
    </>
  );
}
