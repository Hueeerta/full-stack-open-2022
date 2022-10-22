import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState({ name: "", number: "" });
  const [newName, setNewName] = useState([]);

  const handleInputChange = (event) => {
    const newPerson = { ...persons };
    event.target.id === "name"
      ? (newPerson.name = event.target.value)
      : (newPerson.number = event.target.value);
    setPersons(newPerson);
  };

  const handleNewNames = (event) => {
    event.preventDefault();
    const newNameKeys = Object.getOwnPropertyNames(newName);
    let inputIsNew = true;
    for (const key of newNameKeys) {
      if (newName[key].name === persons.name) {
        inputIsNew = false;
        break;
      }
    }
    if (inputIsNew) {
      const newPerson = [...newName];
      newPerson.push(persons);
      setNewName(newPerson);
    } else {
      alert(`${persons.name} is already added to phonebook`);
    }
    setPersons({ name: "", number: "" });
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <label htmlFor="name">
          name:
          <input
            id="name"
            type="text"
            value={persons.name}
            placeholder="Contact name"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label htmlFor="number">
          number:
          <input
            id="number"
            type="text"
            value={persons.number}
            placeholder="Contact number"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" onClick={handleNewNames}>
          add
        </button>
      </form>
      <h2>Numbers</h2>
      {newName.map((contact, index) => (
        <p key={index + "-" + contact.name}>
          {contact.name} {contact.number}
        </p>
      ))}
    </>
  );
};

export default App;
