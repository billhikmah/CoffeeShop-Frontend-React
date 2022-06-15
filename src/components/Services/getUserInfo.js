import axios from "axios";

export default async function getUser(category = "", sort = "name", order="asc", page = 1) {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `http://localhost:8080/users/myProfile`;
    const result = await axios.get(URL, {
      headers: {
          "x-access-token": `${token}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}