import React, { useState, useEffect } from "react";
import axios from "axios";

const App = ({ weather_api_key }) => {
  const [targetCountry, setTargetCountry] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [countryToDisplay, setCountryToDisplay] = useState({
    name: {
      common: "Chile",
      official: "Republic of Chile",
      nativeName: {
        spa: {
          official: "República de Chile",
          common: "Chile",
        },
      },
    },
    tld: [".cl"],
    cca2: "CL",
    ccn3: "152",
    cca3: "CHL",
    cioc: "CHI",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      CLP: {
        name: "Chilean peso",
        symbol: "$",
      },
    },
    idd: {
      root: "+5",
      suffixes: ["6"],
    },
    capital: ["Santiago"],
    altSpellings: ["CL", "Republic of Chile", "República de Chile"],
    region: "Americas",
    subregion: "South America",
    languages: {
      spa: "Spanish",
    },
    translations: {
      ara: {
        official: "جمهورية تشيلي",
        common: "تشيلي",
      },
      bre: {
        official: "Republik Chile",
        common: "Chile",
      },
      ces: {
        official: "Chilská republika",
        common: "Chile",
      },
      cym: {
        official: "Gweriniaeth Chile",
        common: "Chile",
      },
      deu: {
        official: "Republik Chile",
        common: "Chile",
      },
      est: {
        official: "Tšiili Vabariik",
        common: "Tšiili",
      },
      fin: {
        official: "Chilen tasavalta",
        common: "Chile",
      },
      fra: {
        official: "République du Chili",
        common: "Chili",
      },
      hrv: {
        official: "Republika Čile",
        common: "Čile",
      },
      hun: {
        official: "Chilei Köztársaság",
        common: "Chile",
      },
      ita: {
        official: "Repubblica del Cile",
        common: "Cile",
      },
      jpn: {
        official: "チリ共和国",
        common: "チリ",
      },
      kor: {
        official: "칠레 공화국",
        common: "칠레",
      },
      nld: {
        official: "Republiek Chili",
        common: "Chili",
      },
      per: {
        official: "جمهوری شیلی",
        common: "شیلی",
      },
      pol: {
        official: "Republika Chile",
        common: "Chile",
      },
      por: {
        official: "República do Chile",
        common: "Chile",
      },
      rus: {
        official: "Республика Чили",
        common: "Чили",
      },
      slk: {
        official: "Čílska republika",
        common: "Čile",
      },
      spa: {
        official: "República de Chile",
        common: "Chile",
      },
      swe: {
        official: "Republiken Chile",
        common: "Chile",
      },
      tur: {
        official: "Şili Cumhuriyeti",
        common: "Şili",
      },
      urd: {
        official: "جمہوریہ چلی",
        common: "چلی",
      },
      zho: {
        official: "智利共和国",
        common: "智利",
      },
    },
    latlng: [-30, -71],
    landlocked: false,
    borders: ["ARG", "BOL", "PER"],
    area: 756102,
    demonyms: {
      eng: {
        f: "Chilean",
        m: "Chilean",
      },
      fra: {
        f: "Chilienne",
        m: "Chilien",
      },
    },
    flag: "🇨🇱",
    maps: {
      googleMaps: "https://goo.gl/maps/XboxyNHh2fAjCPNn9",
      openStreetMaps: "https://www.openstreetmap.org/relation/167454",
    },
    population: 19116209,
    gini: {
      2017: 44.4,
    },
    fifa: "CHI",
    car: {
      signs: ["RCH"],
      side: "right",
    },
    timezones: ["UTC-06:00", "UTC-04:00"],
    continents: ["South America"],
    flags: {
      png: "https://flagcdn.com/w320/cl.png",
      svg: "https://flagcdn.com/cl.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/cl.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/cl.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [-33.45, -70.67],
    },
    postalCode: {
      format: "#######",
      regex: "^(d{7})$",
    },
  });
  const [weatherToDisplay, setWeatherToDisplay] = useState({
    coord: {
      lon: -70.6483,
      lat: -33.4569,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 300.68,
      feels_like: 300.2,
      temp_min: 300.68,
      temp_max: 302.75,
      pressure: 1015,
      humidity: 36,
      sea_level: 1015,
      grnd_level: 953,
    },
    visibility: 10000,
    wind: {
      speed: 2.41,
      deg: 243,
      gust: 1.85,
    },
    clouds: {
      all: 7,
    },
    dt: 1667832883,
    sys: {
      type: 2,
      id: 2076673,
      country: "CL",
      sunrise: 1667813846,
      sunset: 1667862908,
    },
    timezone: -10800,
    id: 3871336,
    name: "Santiago",
    cod: 200,
  });

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => response.data)
      .then(setCountryList)
      .catch((error) => console.error(error.message));
  }, []);

  const getWeatherData = async (capital) => {
    const newWeatherInfo = await axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          capital +
          "&appid=" +
          weather_api_key
      )
      .then((response) => response.data)
      .catch((error) => console.error(error.message));
    setWeatherToDisplay(newWeatherInfo);
    showCountryDataDisplay();
  };

  const getListOfCountries = () => [
    ...document.getElementsByClassName("country"),
  ];

  const showListOfCountries = (countryListToShow) =>
    countryListToShow.classList.remove("hide");

  const hideListOfCountries = () =>
    getListOfCountries().map((country) => country.classList.add("hide"));

  const showCountryDataDisplay = () =>
    document.getElementById("countryInfoDisplay").classList.remove("hide");

  const hideCountryDataDisplay = () =>
    document.getElementById("countryInfoDisplay").classList.add("hide");

  const setCountryDataToDisplay = (countryToCompare) => {
    const currentCountry = countryList.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .indexOf(countryToCompare.toLowerCase()) > -1
    )[0];
    // Set Country Data
    setCountryToDisplay(currentCountry);
    // Set Country Weather
    getWeatherData(currentCountry.capital[0]);
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
      if (filtredCountries.length < 1) {
        // 0 countries
        showListOfCountries(countryDomList[1]);
      } else if (filtredCountries.length - 1 <= 1) {
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
        <li key="0-nomatch" className="country hide">
          We couldn't find any match...
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
        <h2 id="name">{countryToDisplay.name.common}</h2>
        <p>capital {countryToDisplay.capital[0]}</p>
        <p id="area">area {countryToDisplay.area}</p>
        <h4>languages:</h4>
        <ul id="languages">
          {Object.keys(countryToDisplay.languages).forEach((key, index) => (
            <li key={index + "-" + countryToDisplay.languages[key]}>
              {countryToDisplay.languages[key]}
            </li>
          ))}
        </ul>
        <img src={countryToDisplay.flags.svg} width="200" />
        <h4>Weather in {countryToDisplay.capital[0]}</h4>
        <p>temperature {weatherToDisplay.main.temp} Celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherToDisplay.weather[0].icon}@2x.png`}
          width="100"
        />
        <h4>wind {weatherToDisplay.wind.speed} m/s</h4>
      </div>
    </>
  );
};
export default App;
