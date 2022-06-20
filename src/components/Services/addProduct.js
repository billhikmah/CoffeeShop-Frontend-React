import axios from "axios";

export default async function addProduct(body) {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `https://starbills.herokuapp.com/products`;
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