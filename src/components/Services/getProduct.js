
import axios from "axios";

export  async function getProduct(category = "", sort = "name", order="asc", page = 1) {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const URL = `http://localhost:8080/products/?category_id=${category}&sort=${sort}&order=${order}&limit=12&page=${page}`;
    console.log(URL)
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
    const URL = `http://localhost:8080/products/?sort=favorites&order=desc&limit=12&page=1`;
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
    const URL = `http://localhost:8080/products/?category_id=${category}&sort=${sort}&order=${order}&limit=4&page=${page}&name=${name}`;
    console.log(URL)
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
    const URL = `http://localhost:8080/products/details/${id}`;
    console.log(URL)
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