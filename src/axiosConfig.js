import axios from "axios";

const instance = axios.create({
  // baseURL: "http://35.154.86.59/api/admin",
  baseURL: "http://15.207.86.15:8000/admin",

});

export default instance;

