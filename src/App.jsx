import styles from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AddContact from "./components/addContact/AddContact";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState("");

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
        <Header statusClicked={isClicked} onAddModal={setIsClicked} />
        <Main
          confirm={confirm}
          isConfirm={setConfirm}
          confirmDelete={confirmDelete}
          isConfirmDelete={setConfirmDelete}
        />
      </div>
      <AddContact statusClicked={isClicked} onAddModal={setIsClicked} />
    </div>
  );
}

export default App;
