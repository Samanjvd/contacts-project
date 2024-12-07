import React from "react";
import stylesApp from "../../App.module.css";
import stylesButtons from "./Buttons.module.css";
import { BsSortAlphaDown } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { IoAddOutline } from "react-icons/io5";

export default function Buttons({ onAddModal, onSort, isStateDoSort }) {
  const handleClickForSort = () => {
    isStateDoSort ? onSort(false) : onSort(true);
  };

  return (
    <div className={stylesButtons.buttons}>
      <button
        onClick={() => onAddModal(true)}
        className={`${stylesApp.fullRoundedBox} ${stylesButtons.button}`}
      >
        <IoAddOutline style={{ fontSize: "2rem" }} />
      </button>
      <button
        className={`${stylesApp.fullRoundedBox} ${stylesButtons.button} ${
          isStateDoSort ? stylesButtons.activeBtn : null
        }`}
        onClick={handleClickForSort}
      >
        <BsSortAlphaDown />
      </button>
      <button className={`${stylesApp.fullRoundedBox} ${stylesButtons.button}`}>
        <BiFilterAlt className={stylesButtons.filterIcon} />
      </button>
    </div>
  );
}
