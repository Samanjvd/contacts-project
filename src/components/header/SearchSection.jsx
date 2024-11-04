import React from "react";
import styles from "./SearchSection.module.css";
import { CiSearch } from "react-icons/ci";

export default function SearchSection() {
  return (
    <div className={styles.searchSection}>
      <form className={styles.searchForm}>
        <button type="submit" className={styles.buttonSearch}>
          <CiSearch className={styles.icons} />
        </button>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search"
        />
      </form>
    </div>
  );
}
