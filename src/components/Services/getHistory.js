import axios from "axios";

export default async function addTransaction(body, query) {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `https://starbills.herokuapp.com/transactions/MyTransactions?limit=15`;
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