import React from "react";
import stylesApp from "../../App.module.css";
import stylesButtons from "./Buttons.module.css";
import { BsSortAlphaDown } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { IoAddOutline } from "react-icons/io5";

export default function Buttons() {
  return (
    <div className={stylesButtons.buttons}>
      <div className={`${stylesApp.fullRoundedBox} ${stylesButtons.button}`}>
        <BsSortAlphaDown className={stylesButtons.icons} />
      </div>
      <div className={`${stylesApp.fullRoundedBox} ${stylesButtons.button}`}>
        <BiFilterAlt className={stylesButtons.icons} />
      </div>
      <div className={`${stylesApp.fullRoundedBox} ${stylesButtons.button}`}>
        <IoAddOutline
          className={stylesButtons.icons}
          style={{ fontSize: "2rem" }}
        />
      </div>
    </div>
  );
}
