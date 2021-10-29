import { useState } from "react";
import styles from "./NewPersonForm.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const NewPersonForm = (props) => {
  const [errorModalState, setErrorModalState] = useState({
    showErrorModal: false,
  });

  const newPersonHandler = (event) => {
    event.preventDefault();
    const newPerson = {
      name: event.target.name.value,
      age: event.target.age.value,
    };

    event.target.name.value = "";
    event.target.age.value = "";

    if (
      newPerson.name.trim().length === 0 ||
      newPerson.age.trim().length === 0
    ) {
      setErrorModalState({
        showErrorModal: true,
        title: "Invalid Input",
        message: "Please enter a valid name and age.",
      });
      return;
    } else if (+newPerson.age < 1) {
      setErrorModalState({
        showErrorModal: true,
        title: "Invalid Age",
        message: "Please enter an age greater than 0.",
      });
      return;
    }

    return props.onNewPerson(newPerson);
  };

  const modalCloseButtonClickHandler = () => {
    setErrorModalState({
      showErrorModal: false,
    });
  };

  return (
    <div>
      {errorModalState.showErrorModal && (
        <ErrorModal
          title={errorModalState.title}
          message={errorModalState.message}
          onModalCloseButtonClick={modalCloseButtonClickHandler}
        />
      )}
      <form className={styles.form} onSubmit={newPersonHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" step="1" id="age" name="age" />
        </div>
        <button type="submit">Add New User</button>
      </form>
    </div>
  );
};

export default NewPersonForm;
