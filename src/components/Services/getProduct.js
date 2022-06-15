
import axios from "axios";

export  async function getProduct(category = "", sort = "name", order="asc", page = 1) {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `https://starbills.herokuapp.com/products/?category_id=${category}&sort=${sort}&order=${order}&limit=12&page=${page}`;
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

export  async function getFavoriteProduct() {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `https://starbills.herokuapp.com/products/?sort=favorites&order=desc&limit=12&page=1`;
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

export  async function getSearchProduct(category = "", sort = "name", order="asc", page = 1, name = "") {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `https://starbills.herokuapp.com/products/?category_id=${category}&sort=${sort}&order=${order}&limit=4&page=${page}&name=${name}`;
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


export async function getDetails(id) {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `https://starbills.herokuapp.com/products/details/${id}`;
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