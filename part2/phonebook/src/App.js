import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState();
  const [newName, setNewName] = useState(["Arto Hellas"]);

  const handleInputChange = (event) => {
    setPersons(event.target.value);
  };

  const handleNewNames = (event) => {
    event.preventDefault();
    setNewName(newName.concat(persons));
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
            value={persons}
            placeholder="Contact name"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" onClick={handleNewNames}>add</button>
      </form>
      <h2>Numbers</h2>
      {newName.map((contact) => (
        <p key={contact}>{contact}</p>
      ))}
    </>
  );
};

export default App;
