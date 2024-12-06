import React from "react";
import SearchSection from "./SearchSection";
import Buttons from "./Buttons";
import styles from "./Header.module.css";

export default function Header({
  onAddModal,
  searchValue,
  onSort,
  isStateDoSort,
}) {
  return (
    <div className={styles.header}>
      <SearchSection searchValue={searchValue} />
      <Buttons
        onAddModal={onAddModal}
        onSort={onSort}
        isStateDoSort={isStateDoSort}
      />
    </div>
  );
}
