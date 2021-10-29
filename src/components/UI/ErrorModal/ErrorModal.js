import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onModalCloseButtonClick}></div>
      <Card className={styles.errorModal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <p>{props.message}</p>
        <button onClick={props.onModalCloseButtonClick}>Dismiss</button>
      </Card>
    </div>
  );
};

export default ErrorModal;
