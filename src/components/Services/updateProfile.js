import axios from "axios";

export default async function updateMyProfile(body) {
    try {
        const token = `Bearer ${localStorage.getItem("token")}`;
        const URL = `http://localhost:8080/users/`;
        console.log(URL)
        const result = await axios.patch(URL, body,{
        headers: {
            "x-access-token": `${token}`,
        },
        });
        return result;
    }
    catch (error) {
        console.log(error);
    }
}