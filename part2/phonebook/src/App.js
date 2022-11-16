import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [person, setPerson] = useState({ name: "", number: "" });
  const [contactList, setContactList] = useState([]);
  const [nameSearch, setNewSearch] = useState("");

  const getDataBase = () => {
    return axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        console.log("axios GET data response:", response.statusText);
        return response.data;
      })
      .catch((error) => {
        console.error(error.code, ":", error.message);
      });
  };

  const postDataBase = (newData) => {
    axios
      .post("http://localhost:3001/persons", newData)
      .then((response) => {
        console.log("axios POST data response:", response.statusText);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.code, ":", error.message);
      });
  };

  useEffect(() => {
    getDataBase().then((data) => setContactList(data));
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
    for (const key of contactListKeys) {
      if (contactList[key].name === person.name) {
        inputIsNew = false;
        break;
      }
    }
    if (inputIsNew) {
      const newPersonList = [...contactList];
      newPersonList.push(person);
      setContactList(newPersonList);
      postDataBase(person);
    } else {
      alert(`${person.name} is already added to phonebook.`);
    }
    setPerson({ name: "", number: "" });
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Search nameSearch={nameSearch} handeSearch={handeSearch} />
      <ContactForm
        person={person}
        handleInputChange={handleInputChange}
        handleContactList={handleContactList}
      />
      <ContactList contactList={contactList} />
    </>
  );
};

export default App;
