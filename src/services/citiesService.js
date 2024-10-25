import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

async function get() {
    const response = await axios.get("/cities/");

    return response.data;
}

async function create(city) {
  const response = await axios.post("/cities/");

  return response.data;
}

async function remove(city) {
  const response = await axios.delete("/cities/");

  return response.data;
}

async function update() {
  const response = await axios.put("/cities/");

  return response.data;

  const citiesService = {
    get,
    create,
    remove,
    update
  };
}