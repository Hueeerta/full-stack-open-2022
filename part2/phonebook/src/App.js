import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Search from "./components/Search";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Notification from "./components/Notification";

const App = () => {
  const [person, setPerson] = useState({ name: "", number: "" });
  const [contactList, setContactList] = useState([]);
  const [nameSearch, setNewSearch] = useState("");
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    personsService.getAll().then((data) => setContactList(data));
  }, []);

  const handeSearch = (event) => {
    setNewSearch(event.target.value);
    const domContactElements = [...document.getElementsByClassName("contact")];
    console.log(domContactElements);
    if (event.target.value !== "") {
      domContactElements.map((contact) =>
        contact.textContent
          .toLowerCase()
          .indexOf(event.target.value.toLowerCase()) > -1
          ? contact.classList.remove("hide")
          : contact.classList.add("hide")
      );
    } else {
      domContactElements.map((contact) => contact.classList.remove("hide"));
    }
  };

  const handleInputChange = (event) => {
    const newPerson = { ...person };
    event.target.id === "name"
      ? (newPerson.name = event.target.value)
      : (newPerson.number = event.target.value);
    setPerson(newPerson);
  };

  const handleContactList = (event) => {
    event.preventDefault();
    const contactListKeys = Object.getOwnPropertyNames(contactList);
    let inputIsNew = true;
    let matchContact = {};
    for (const key of contactListKeys) {
      if (contactList[key].name === person.name) {
        inputIsNew = false;
        matchContact = { ...contactList[key], number: person.number };
        break;
      }
    }
    if (inputIsNew) {
      personsService.create(person).then(() => {
        setMessage(`Added ${person.name}`);
        personsService.getAll().then((data) => setContactList(data));
      });
      setPerson({ name: "", number: "" });
    } else {
      if (
        window.confirm(
          `${matchContact.name} is already added to phonebook, replace the old number with the new one?`
        )
      ) {
        personsService.update(matchContact).then(() => {
          setMessage(`New phone ${person.number} added to ${person.name}`);
          personsService.getAll().then((data) => setContactList(data));
        });
        setPerson({ name: "", number: "" });
      }
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Search nameSearch={nameSearch} handeSearch={handeSearch} />
      <ContactForm
        person={person}
        handleInputChange={handleInputChange}
        handleContactList={handleContactList}
      />
      <ContactList contactList={contactList} remove={personsService.remove} setMessage={setMessage} callback={() => { personsService.getAll().then((data) => setContactList(data)); }} />
    </>
  );
};

export default App;
