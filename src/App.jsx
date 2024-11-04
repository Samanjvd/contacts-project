import styles from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AddContact from "./components/addContact/AddContact";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
      <AddContact />
    </div>
  );
}

export default App;
