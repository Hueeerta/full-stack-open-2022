const Contact = ({ name, number }) => {
  return (
    <p className="contact">
      {name} {number}
    </p>
  );
};

const ContactList = ({ contactList }) => {
  console.log('list',contactList)
  
  return (
    <>
      <h2>Numbers</h2>
      {contactList.map((contact) => (
        <Contact
          key={contact.id+'-'+contact.name}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </>
  );
};
export default ContactList;
