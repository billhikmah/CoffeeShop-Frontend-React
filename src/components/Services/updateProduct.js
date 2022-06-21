import axios from "axios";

export default async function updateProduct(body, id) {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `https://starbills.herokuapp.com/products/${id}`;
    const result = await axios.patch(URL, body, {
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