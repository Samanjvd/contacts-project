import React, { useState, useRef } from "react";
import styles from "./profile.module.css";
import { FaCamera } from "react-icons/fa";

export default function Profile({ onGetUrl }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleImageClicked = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const createUrl = URL.createObjectURL(file);
      setSelectedImage(createUrl);
      onGetUrl(createUrl);
    } else {
      setSelectedImage(null);
      onGetUrl(null);
    }
  };

  return (
    <>
      <div className={styles.imgProfile} onClick={handleImageClicked}>
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Profile"
            className={styles.profileImg}
          />
        ) : (
          <div className={styles.iconprofile}>
            <FaCamera className={styles.cameraIcon} />
          </div>
        )}
        <input
          type="file"
          className={styles.profileInput}
          onChange={handleImageChange}
          ref={inputRef}
        />
      </div>
    </>
  );
}
