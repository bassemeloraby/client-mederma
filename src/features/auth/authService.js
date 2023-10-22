import axios from "axios";
import { mainUrl } from "../../data";

// const API_URL = "/api/users/";
const API_URL = mainUrl + "users/";

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  logout,
  login,
};

export default authService;
