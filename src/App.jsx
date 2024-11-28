import styles from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AddContact from "./components/addContact/AddContact";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState("");

  console.log("confirm =" + confirm);
  console.log("confirmDelete =" + confirmDelete);

  const handleClickCansell = () => {
    confirm ? setConfirm(false) : setConfirm(true);
  };
  const handleClickOk = () => {
    setConfirmDelete(true);
    setConfirm(false);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header status={isClicked} onAddModal={setIsClicked} />
        <Main
          confirm={confirm}
          isConfirm={setConfirm}
          confirmDelete={confirmDelete}
          isConfirmDelete={setConfirmDelete}
        />
      </div>
      <div className={styles.modalWrapper}>
        {confirm ? (
          <div className={styles.modalConfirm}>
            <h3 className={styles.titleConfirm}>
              Are you sure you want to delete?
            </h3>
            <div className={styles.buttons}>
              <button
                className={styles.btnCansell}
                onClick={handleClickCansell}
              >
                cansell
              </button>
              <button className={styles.btnOk} onClick={handleClickOk}>
                ok
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <AddContact status={isClicked} onAddModal={setIsClicked} />
    </div>
  );
}

export default App;
