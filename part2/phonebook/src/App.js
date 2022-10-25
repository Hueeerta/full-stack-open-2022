import { useState, useEffect } from "react";
import Search from "./components/Search";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

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
      <Search nameSearch={nameSearch} handeSearch={handeSearch} />
      <ContactForm
        persons={persons}
        handleInputChange={handleInputChange}
        handleNewContactList={handleNewContactList}
      />
      <ContactList newContactList={newContactList} />
    </>
  );
};

export default App;
