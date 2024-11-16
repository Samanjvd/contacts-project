import React, { useState, useRef } from "react";
import styles from "./profile.module.css";
import { FaCamera } from "react-icons/fa";

export default function Profile({ ongetUrl }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [urlImage, setUrlImage] = useState("");
  const inputRef = useRef(null);
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleImageClicked = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file.name);
    setUrlImage(file.name);
    // setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ongetUrl(urlImage);
  };

  return (
    <>
      <div
        className={styles.imgProfile}
        onClick={handleImageClicked}
        onSubmit={handleSubmit}
      >
        {selectedImage ? (
          <img
            // src={URL.createObjectURL(selectedImage)}
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
