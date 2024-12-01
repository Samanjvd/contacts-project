import styles from "./test-modal.module.css";

function TestModal({ onCansell, onConfirm }) {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalConfirm}>
        <h3 className={styles.titleConfirm}>
          Are you sure you want to delete?
        </h3>
        <div className={styles.buttons}>
          <button className={styles.btnCansell} onClick={onCansell}>
            cansell
          </button>
          <button className={styles.btnOk} onClick={onConfirm}>
            ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestModal;
