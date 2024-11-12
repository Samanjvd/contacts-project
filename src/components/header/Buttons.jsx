import React from "react";
import stylesApp from "../../App.module.css";
import stylesButtons from "./Buttons.module.css";
import { BsSortAlphaDown } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";

export default function Buttons() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={stylesButtons.buttons}>
      <div className={`${stylesApp.fullRoundedBox} ${stylesButtons.button}`}>
        <BsSortAlphaDown />
      </div>
      <div className={`${stylesApp.fullRoundedBox} ${stylesButtons.button}`}>
        <BiFilterAlt className={stylesButtons.filterIcon} />
      </div>
      <div
        status={isClicked}
        onAddModal={setIsClicked}
        className={`${stylesApp.fullRoundedBox} ${stylesButtons.button}`}
      >
        <IoAddOutline style={{ fontSize: "2rem" }} />
      </div>
    </div>
  );
}
