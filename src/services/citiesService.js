import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

async function get() {
  const response = await axios.get("/cities/");
  return response.data;
}

async function create(city) {
  const response = await axios.post("/cities/", city);
  return response.data;
}

async function remove(cityId) {
  const response = await axios.delete(`/cities/${cityId}`);
  return response.data;
}

async function update(cityId, updatedCityData) {
  const response = await axios.put(`/cities/${cityId}`, updatedCityData);
  return response.data;
}

// Definim obiectul citiesService în afara funcțiilor
const citiesService = {
  get,
  create,
  remove,
  update,
};

export default citiesService;
