const Contact = ({ name, number, remove }) => {
  return (
    <>
      <div className="contact">
        <span>
          {name} {number}
        </span>
        <button onClick={remove}>delete</button>
      </div>
    </>
  );
};

const ContactList = ({ contactList, remove }) => {
  console.log("list", contactList);

  return (
    <>
      <h2>Numbers</h2>
      {contactList.map((contact) => (
        <Contact
          key={contact.id + "-" + contact.name}
          name={contact.name}
          number={contact.number}
          remove={() => remove(contact)}
        />
      ))}
    </>
  );
};
export default ContactList;
