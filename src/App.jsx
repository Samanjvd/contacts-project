import styles from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AddContact from "./components/addContact/AddContact";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header statusClicked={isClicked} onAddModal={setIsClicked} />
        <Main />
      </div>
      <AddContact statusClicked={isClicked} onAddModal={setIsClicked} />
    </div>
  );
}

export default App;
