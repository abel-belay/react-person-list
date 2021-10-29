import Person from "../Person/Person";

const PersonList = (props) => {
  const { personList } = props;

  const personComponents = personList.map((person) => <li key={person.id}><Person {...person} /></li>);
  console.log(personComponents);

  return (
    <ul>
      {personComponents}
    </ul>
  )
};

export default PersonList;
