const Search = ({ nameSearch, handeSearch }) => {
  return (
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
  );
};
export default Search;
