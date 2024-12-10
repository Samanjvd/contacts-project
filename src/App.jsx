import styles from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AddContact from "./components/addContact/AddContact";
import ModalFilter from "./components/ModalFilters/ModalFilter";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickFilter, setIsClickFilter] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [search, setSearch] = useState("");
  const [clickedFilterItem, setClickedFilterItem] = useState(false);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header
          onAddModal={setIsClicked}
          searchValue={setSearch}
          onSort={setIsSort}
          isStateDoSort={isSort}
          stateClickFilter={setIsClickFilter}
        />
        <Main
          searchValue={search}
          isStateDoSort={isSort}
          stateClickFilterItem={clickedFilterItem}
        />
      </div>
      <AddContact statusClicked={isClicked} onAddModal={setIsClicked} />
      <ModalFilter
        statusClicked={isClickFilter}
        onAddModal={setIsClickFilter}
        stateClickFilterItem={clickedFilterItem}
        onclickFilterItem={setClickedFilterItem}
      />
    </div>
  );
}

export default App;
