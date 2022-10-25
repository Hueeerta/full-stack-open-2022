const Contact = ({ name, number }) => {
  return (
    <p>
      {name} {number}
    </p>
  );
};

const ContactList = ({ newContactList }) => {
  return (
    <>
      <h2>Numbers</h2>
      {newContactList.map((contact, index) => (
        <Contact
          key={index + "-" + contact.name}
          index={index}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </>
  );
};
export default ContactList;
