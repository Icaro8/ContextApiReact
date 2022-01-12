import axios from "axios";

export const Githubapi = axios.create({
  baseURL:'https://api.github.com/users'
})