const Contact = ({ name, number, removeHandler }) => {
  return (
    <>
      <div className="contact">
        <span>
          {name} {number}
        </span>
        <button onClick={removeHandler}>delete</button>
      </div>
    </>
  );
};

const ContactList = ({ contactList, remove, setMessage, callback }) => {
  console.log("list", contactList);

  return (
    <>
      <h2>Numbers</h2>
      {contactList.map((contact) => (
        <Contact
          key={contact.id + "-" + contact.name}
          name={contact.name}
          number={contact.number}
          removeHandler={() => {
            if (window.confirm(`Delete ${contact.name}?`)) {
              remove(contact).then(() => {
                setMessage(`${contact.name} removed.`);
                callback();
              });
            }
          }}
        />
      ))}
    </>
  );
};
export default ContactList;
