import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [targetCountry, setTargetCountry] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [countryToDisplay, setCountryToDisplay] = useState({});

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => response.data)
      .then(setCountryList)
      .catch((error) => console.error(error.message));
  }, []);

  const getListOfCountries = () => [
    ...document.getElementsByClassName("country"),
  ];

  const showListOfCountries = (countryListToShow) => {
    countryListToShow.classList.remove("hide");
  };

  const hideListOfCountries = () => {
    getListOfCountries().map((country) => country.classList.add("hide"));
  };

  const showCountryDataDisplay = () =>
    document.getElementById("countryInfoDisplay").classList.remove("hide");

  const hideCountryDataDisplay = () => {
    document.getElementById("countryInfoDisplay").classList.add("hide");
    document.getElementById("languages").innerHTML = "";
  };

  const setCountryDataToDisplay = (countryToCompare) => {
    const currentCountry = countryList.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .indexOf(countryToCompare.toLowerCase()) > -1
    )[0];
    setCountryToDisplay(currentCountry);
    document.getElementById("name").textContent = currentCountry.name.common;
    document.getElementById("capital").textContent =
      "capital " + currentCountry.capital[0];
    document.getElementById("area").textContent = "area " + currentCountry.area;
    document.getElementById("flag").src = currentCountry.flags.svg;
    const lngKeys = Object.getOwnPropertyNames(currentCountry.languages);
    const languageDomList = document.getElementById("languages");
    languageDomList.innerHTML = "";
    lngKeys.map((lng) => {
      const newLng = document.createElement("li");
      newLng.innerHTML = currentCountry.languages[lng];
      languageDomList.appendChild(newLng);
    });
    showCountryDataDisplay();
  };

  const handleCountrySearch = (event) => {
    const inputValue = event.target.value;
    setTargetCountry(inputValue);
    const countryDomList = getListOfCountries();
    if (inputValue !== "") {
      const filtredCountries = countryDomList.filter(
        (li) =>
          li.innerText.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      );
      hideListOfCountries();
      hideCountryDataDisplay();
      if (filtredCountries.length - 1 <= 1) {
        // Just one Match
        setCountryDataToDisplay(inputValue);
      } else if (filtredCountries.length - 1 <= 10) {
        // Less or equal to 10 countries
        filtredCountries.map((country) => showListOfCountries(country));
        countryDomList[0].classList.add("hide");
      } else {
        // More than 10 countries
        showListOfCountries(countryDomList[0]);
      }
    } else {
      hideListOfCountries();
    }
  };

  return (
    <>
      <label htmlFor="search">
        find countries
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleCountrySearch}
          value={targetCountry}
        />
      </label>
      <ul>
        <li key="0-toomany" className="country hide">
          Too many matches, specify another filter.
        </li>
        {countryList.map((country) => (
          <li
            key={country.idd.suffixes + "-" + country.name.common}
            className="country hide"
          >
            {country.name.common}
            <button
              onClick={() => setCountryDataToDisplay(country.name.common)}
            >
              show
            </button>
          </li>
        ))}
      </ul>
      <div id="countryInfoDisplay" className="hide">
        <h2 id="name">Nombre País</h2>
        <p id="capital">capital</p>
        <p id="area">area</p>
        <h4>languages:</h4>
        <ul id="languages">
          <li>español</li>
        </ul>
        <img id="flag" width="200" />
      </div>
    </>
  );
};
export default App;
