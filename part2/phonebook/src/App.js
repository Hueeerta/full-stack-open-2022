import { useState, useEffect } from "react";

const App = () => {
  const [persons, setPersons] = useState({ name: "", number: "" });
  const [newContactList, setNewContactList] = useState([]);
  const [nameSearch, setNewSearch] = useState("");

  const getDataBase = () => {
    const contactList = JSON.parse(localStorage.getItem("contactList"));
    if (contactList) {
      return contactList;
    } else {
      return [];
    }
  };

  const postDataBase = (newData) => {
    localStorage.setItem("contactList", JSON.stringify(newData));
  };

  useEffect(() => {
    localStorage.setItem(
      "contactList",
      JSON.stringify([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Dan Abramov", number: "12-43-234345" },
        { name: "Mary Poppendieck", number: "39-23-6423122" },
      ])
    );
    setNewContactList(getDataBase());
  }, []);

  const handeSearch = (event) => {
    setNewSearch(event.target.value);
    if (event.target.value !== "") {
      const newSearch = getDataBase().filter(
        (contact) =>
          contact.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >
          -1
      );
      setNewContactList(newSearch);
    } else {
      setNewContactList(getDataBase());
    }
  };

  const handleInputChange = (event) => {
    const newPerson = { ...persons };
    event.target.id === "name"
      ? (newPerson.name = event.target.value)
      : (newPerson.number = event.target.value);
    setPersons(newPerson);
  };

  const handleNewContactList = (event) => {
    event.preventDefault();
    setNewContactList(getDataBase());
    const newContactListKeys = Object.getOwnPropertyNames(newContactList);
    let inputIsNew = true;
    for (const key of newContactListKeys) {
      if (newContactList[key].name === persons.name) {
        inputIsNew = false;
        break;
      }
    }
    if (inputIsNew) {
      const newPersonList = [...newContactList];
      newPersonList.push(persons);
      postDataBase(newPersonList);
      setNewContactList(newPersonList);
    } else {
      alert(`${persons.name} is already added to phonebook.`);
    }
    setPersons({ name: "", number: "" });
  };

  return (
    <>
      <h2>Phonebook</h2>
      <label>
        filter shown with
        <input
          id="search"
          type="text"
          value={nameSearch}
          placeholder="name search"
          onChange={handeSearch}
        />
      </label>
      <h2>add a new</h2>
      <form>
        <label htmlFor="name">
          name:
          <input
            id="name"
            type="text"
            value={persons.name}
            placeholder="contact name"
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
            placeholder="contact number"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" onClick={handleNewContactList}>
          add
        </button>
      </form>
      <h2>Numbers</h2>
      {newContactList.map((contact, index) => (
        <p key={index + "-" + contact.name}>
          {contact.name} {contact.number}
        </p>
      ))}
    </>
  );
};

export default App;
