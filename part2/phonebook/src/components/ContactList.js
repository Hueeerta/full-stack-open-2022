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
              remove(contact).then((response) => {
                console.log("deletion response:", response);
                if (response === "ERR_BAD_REQUEST") {
                  setMessage({
                    type: "error",
                    text: `Information of ${contact.name} has already been removed from server.`,
                  });
                } else {
                  setMessage({
                    type: "success",
                    text: `${contact.name} removed.`,
                  });
                  callback();
                }
              });
            }
          }}
        />
      ))}
    </>
  );
};
export default ContactList;
