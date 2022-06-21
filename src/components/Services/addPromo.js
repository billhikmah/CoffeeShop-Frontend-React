import axios from "axios";

export default async function addPromo(body) {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `https://starbills.herokuapp.com/promos`;
    const result = await axios.post(URL, body, {
      headers: {
          "x-access-token": `${token}`,
          "content-type": "multipart/form-data"
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}