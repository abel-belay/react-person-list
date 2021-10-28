import styles from "./Person.module.css"

const Person = (props) => {
  const { name, age } = props;

  const personClickHandler = (event) => {
    console.log("person clicked!");
  }

  return <p className={styles.person} onClick={personClickHandler}>{name} ({age} years old)</p>;
};

export default Person;
