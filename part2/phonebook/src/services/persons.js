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
  return axios
    .post(baseUrl, newData)
    .then((response) => {
      console.log("axios POST data response:", response.statusText);
      return response.data;
    })
    .catch((error) => {
      console.error(error.code, ":", error.message);
    });
};

const remove = (contact) => {
  return axios
    .delete(`${baseUrl}/${contact.id}`)
    .then((response) => {
      console.log("axios DELETE data response:", response.statusText);
      return response.data;
    })
    .catch((error) => {
      console.error(error.code, ":", error.message);
      return error.code;
    });
};

const update = (contact) => {
  return axios
    .put(`${baseUrl}/${contact.id}`, contact)
    .then((response) => {
      console.log("axios UPDATE data response:", response.statusText);
      return response.data;
    })
    .catch((error) => {
      console.error(error.code, ":", error.message);
    });
};

export default { getAll, create, remove, update };
