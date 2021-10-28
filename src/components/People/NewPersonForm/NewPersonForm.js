import styles from "./NewPersonForm.module.css";

const NewPersonForm = (props) => {
  const newPersonHandler = (event) => {
    event.preventDefault();
    const newPerson = {
      name: event.target.name.value,
      age: event.target.age.value
    }

    props.onNewPerson(newPerson);
  }

  return (
    <form className={styles.form} onSubmit={newPersonHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" step="1" name="age" />
      </div>
      <button type="submit">Add New User</button>
    </form>
  )
}

export default NewPersonForm;