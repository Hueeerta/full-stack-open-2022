import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [targetCountry, setTargetCountry] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [countryToDisplay, setCountryToDisplay] = useState({});

  useEffect(() => {
    getCountries().then((data) => {
      setCountryList(data);
      console.log("Country list setted");
    });
  }, []);

  const getCountries = () => {
    return axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => response.data)
      .catch((error) => console.error(error.message));
  };

  const setCountryDataToDisplay = (countryToCompare) => {
    const currentCountry = countryList.filter(
      (country) =>
        country.name.common.toLowerCase().indexOf(countryToCompare) > -1
    )[0];
    setCountryToDisplay(currentCountry);
    console.log(currentCountry);
    document.getElementById("name").textContent = currentCountry.name.common;
    document.getElementById("capital").textContent =
      "capital " + currentCountry.capital[0];
    document.getElementById("area").textContent = "area " + currentCountry.area;
    document.getElementById("flag").src = currentCountry.flags.svg;
    document.getElementById("languages").innerHTML = "";
    const lngKeys = Object.getOwnPropertyNames(currentCountry.languages);
    const languageDomList = document.getElementById("languages");
    lngKeys.map((lng) => {
      console.log("language", currentCountry.languages[lng]);
      const newLng = document.createElement("li");
      newLng.innerHTML = currentCountry.languages[lng];
      languageDomList.appendChild(newLng);
    });
    document.getElementById("countryInfoDisplay").classList.remove("hide");
  };

  const handleCountrySearch = (event) => {
    setTargetCountry(event.target.value);
    const countryDomList = [...document.getElementsByClassName("country")];
    if (event.target.value !== "") {
      const filtredCountries = countryDomList.filter(
        (li) =>
          li.innerText.toLowerCase().indexOf(event.target.value.toLowerCase()) >
          -1
      );
      console.log(
        "countries listed",
        filtredCountries.length,
        filtredCountries
      );
      if (filtredCountries.length - 1 <= 1) {
        countryDomList.map((country) => country.classList.add("hide"));
        setCountryDataToDisplay(event.target.value.toLowerCase());
      } else if (filtredCountries.length - 1 <= 10) {
        countryDomList.map((country) => country.classList.add("hide"));
        filtredCountries.map((country) => country.classList.remove("hide"));
        countryDomList[0].classList.add("hide");
        document.getElementById("countryInfoDisplay").classList.add("hide");
        document.getElementById("languages").innerHTML = "";
      } else {
        countryDomList.map((country) => country.classList.add("hide"));
        countryDomList[0].classList.remove("hide");
        document.getElementById("countryInfoDisplay").classList.add("hide");
        document.getElementById("languages").innerHTML = "";
      }
    } else {
      countryDomList.map((country) => country.classList.add("hide"));
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
