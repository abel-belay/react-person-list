import Person from "../Person/Person";

const PersonList = (props) => {
  const { personList } = props;

  const personComponents = personList.map((person) => <Person {...person} key={person.id} />);

  return (
    <div>
      {personComponents}
    </div>
  )
};

export default PersonList;
