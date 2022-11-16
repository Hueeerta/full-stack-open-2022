import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios
    .get(baseUrl)
    .then((response) => {
      console.log("axios GET data response:", response.statusText);
      return response.data;
    })
    .catch((error) => {
      console.error(error.code, ":", error.message);
    });
};

const create = (newData) => {
  axios
    .post(baseUrl, newData)
    .then((response) => {
      console.log("axios POST data response:", response.statusText);
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.code, ":", error.message);
    });
};

export default { getAll, create };
