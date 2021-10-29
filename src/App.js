import { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/UI/Card/Card.js";
import NewPersonForm from "./components/People/NewPersonForm/NewPersonForm";
import PersonList from "./components/People/PersonList/PersonList";

function App() {
  const personListSeed = [
    {
      id: Math.random().toString(),
      name: "Abel",
      age: "20",
    },
  ];

  const [personList, setPersonList] = useState(personListSeed);

  const newPersonHandler = (newPerson) => {
    newPerson.id = Math.random().toString();
    setPersonList((personList) => [...personList, newPerson]);
  };

  return (
    <div className={styles.App}>
      <Card>
        <NewPersonForm onNewPerson={newPersonHandler} />
      </Card>
      <Card>
        <PersonList personList={personList} />
      </Card>
    </div>
  );
}

export default App;
