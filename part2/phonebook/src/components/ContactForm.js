const ContactForm = ({ person, handleInputChange, handleContactList }) => {
  return (
    <>
      <h2>add a new</h2>
      <form>
        <label htmlFor="name">
          name:
          <input
            id="name"
            type="text"
            value={person.name}
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
            value={person.number}
            placeholder="contact number"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" onClick={handleContactList}>
          add
        </button>
      </form>
    </>
  );
};
export default ContactForm;
