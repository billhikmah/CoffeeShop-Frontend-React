import axios from "axios";

export default async function addTransaction(body, query) {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `https://starbills.herokuapp.com/transactions/?user_id=${query.user_id}`;
    const result = await axios.post(URL, body, {
      headers: {
          "x-access-token": `${token}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}