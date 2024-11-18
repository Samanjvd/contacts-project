import React, { useState, useRef } from "react";
import styles from "./profile.module.css";
import { FaCamera } from "react-icons/fa";

export default function Profile({ onGetUrl }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);
  // const imgRef = useRef("");
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
    if (file) {
      const createUrl = URL.createObjectURL(file);
      setSelectedImage(createUrl);
      onGetUrl(createUrl);
    } else {
      setSelectedImage(null);
      onGetUrl(null);
    }
    // setSelectedImage(file.name);
    // setUrlImage(file.name);
  };

  // const handleSubmit = () => {
  //   const file = imgRef.current;
  //   console.log(file);
  //   if (file) {
  //     setUrlImage(file.src);
  //   } else {
  //     setUrlImage(null);
  //   }
  //   onGetUrl(urlImage);
  // };

  return (
    <>
      <div className={styles.imgProfile} onClick={handleImageClicked}>
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
